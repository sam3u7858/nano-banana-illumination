import React, { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  disabled: boolean;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-500 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 15l-4-4m0 0l4-4m-4 4h12" />
    </svg>
);


const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, disabled }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { t } = useTranslation();

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

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={disabled}
      />
      <div
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`group w-full flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition-all duration-300
            ${isDragging ? 'border-violet-500 bg-violet-900/50' : 'border-slate-700'}
            ${disabled ? 'cursor-not-allowed bg-slate-800 opacity-60' : 'cursor-pointer hover:border-slate-500 hover:bg-slate-700/50'}
        `}
      >
        <UploadIcon />
        <p className="mt-2 text-center text-sm font-semibold text-slate-300">{t('uploader.button')}</p>
        <p className="text-xs text-slate-400">{t('uploader.subtext')}</p>
      </div>
    </div>
  );
};

export default ImageUploader;