import React, { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

interface ImageDisplayProps {
  originalImage: string | null;
  editedImage: string | null;
  isLoading: boolean;
  aiTextResponse: string | null;
  onReuseImage: () => void;
  onImageUpload: (file: File) => void;
  disabled: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
);

const Placeholder: React.FC<{text: string}> = ({text}) => (
    <div className="w-full h-full flex items-center justify-center bg-slate-800 border-2 border-dashed border-slate-600 rounded-xl">
        <p className="text-slate-500 text-center p-4">{text}</p>
    </div>
);

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const UseAsInputIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" transform="rotate(90 12 12)"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

const UploadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-500 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 15l-4-4m0 0l4-4m-4 4h12" />
    </svg>
);

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, editedImage, isLoading, aiTextResponse, onReuseImage, onImageUpload, disabled }) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    if (!disabled) {
        fileInputRef.current?.click();
    }
  };
  
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    handleDrag(e);
    if (!disabled) {
        setIsDragging(true);
    }
  }, [handleDrag, disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    handleDrag(e);
    setIsDragging(false);
  }, [handleDrag]);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    handleDrag(e);
    setIsDragging(false);

    if (disabled) return;

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  }, [handleDrag, onImageUpload, disabled]);


  const handleDownload = () => {
    if (!editedImage) return;
  
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = editedImage;
  
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const ctx = canvas.getContext('2d');
  
      if (!ctx) return;
  
      // Draw the image
      ctx.drawImage(image, 0, 0);
  
      // Watermark properties
      const watermarkText = 'https://github.com/sam3u7858/nano-banana-illumination';
      const padding = image.width * 0.01; // 1% padding
      const fontSize = Math.max(12, image.width * 0.015); // Responsive font size
      
      ctx.font = `bold ${fontSize}px "Courier New", monospace`;
      
      // Measure text for background
      const textMetrics = ctx.measureText(watermarkText);
      const textWidth = textMetrics.width;
      const textHeight = fontSize;
  
      // Draw semi-transparent background for watermark
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(
          padding, 
          padding, 
          textWidth + padding, 
          textHeight + padding
      );
  
      // Draw watermark text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.textBaseline = 'top';
      ctx.fillText(watermarkText, padding * 1.5, padding * 1.5);
  
      // Create and trigger download
      const link = document.createElement('a');
      const mimeType = editedImage.split(';')[0].split(':')[1] || 'image/png';
      const extension = mimeType.split('/')[1] || 'png';
      link.download = `illuminated-image-watermarked.${extension}`;
      link.href = canvas.toDataURL(mimeType);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    image.onerror = (err) => {
        console.error("Failed to load image for watermarking, downloading original.", err);
        // Fallback to simple download if canvas method fails
        const link = document.createElement('a');
        link.href = editedImage;
        const mimeType = editedImage.split(';')[0].split(':')[1];
        const extension = mimeType.split('/')[1] || 'png';
        link.download = `illuminated-image.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={disabled}
      />
      <div className="space-y-4">
        <h2 className="text-center text-lg font-bold text-slate-300 tracking-wide">{t('imageDisplay.original')}</h2>
        <div className="aspect-square bg-slate-900 rounded-xl p-2 border border-slate-700 shadow-lg">
            {originalImage ? (
                <img src={originalImage} alt="Original" className="w-full h-full object-contain rounded-lg" />
            ) : (
                <div
                    onClick={handleClick}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`group w-full h-full flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-all duration-300
                        ${isDragging ? 'border-violet-500 bg-violet-900/50' : 'border-slate-600'}
                        ${disabled ? 'cursor-not-allowed bg-slate-800 opacity-60' : 'cursor-pointer hover:border-slate-500 hover:bg-slate-800/50'}
                    `}
                >
                    <UploadIcon />
                    <p className="mt-2 text-center text-sm font-semibold text-slate-400">{t('imageDisplay.originalPlaceholder')}</p>
                </div>
            )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-lg font-bold text-slate-300 tracking-wide">{t('imageDisplay.edited')}</h2>
        <div className="aspect-square bg-slate-900 rounded-xl p-2 border border-slate-700 shadow-lg relative">
            {isLoading ? (
                <LoadingSpinner />
            ) : editedImage ? (
                <div className="relative w-full h-full">
                    <img src={editedImage} alt="Edited" className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute top-2 left-2 bg-black/60 text-white/90 text-[10px] sm:text-xs font-mono px-2 py-1 rounded pointer-events-none">
                        https://github.com/sam3u7858/nano-banana-illumination
                    </div>
                </div>
            ) : (
                <Placeholder text={t('imageDisplay.editedPlaceholder')} />
            )}
        </div>

        {editedImage && !isLoading && (
          <div className="flex flex-col sm:flex-row gap-4">
            <button
                onClick={onReuseImage}
                className="flex-1 flex items-center justify-center bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
                title={t('reuseButton')}
              >
              <UseAsInputIcon />
              {t('reuseButton')}
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500"
              title={t('downloadButton')}
            >
              <DownloadIcon />
              {t('downloadButton')}
            </button>
          </div>
        )}

        {aiTextResponse && !isLoading && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-300 italic">
                <p><strong>{t('imageDisplay.aiNote')}</strong> {aiTextResponse}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;