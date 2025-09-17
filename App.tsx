import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ImageUploader from './components/ImageUploader';
import PresetSelector from './components/PresetSelector';
import ImageDisplay from './components/ImageDisplay';
import LanguageSwitcher from './components/LanguageSwitcher';
import { editImageWithPrompt } from './services/geminiService';
import { PRESETS, FIX_PRESETS } from './constants';
import CollapsibleSection from './components/CollapsibleSection';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-900 sticky top-0 z-20 shadow-lg">
      <div className="flex items-center gap-3">
        <a href="https://bmon.tw/a" target="_blank" rel="noopener noreferrer" className="group" title="BMon.tw">
          {/* Assuming logo.png is in the public folder */}
          <img src="https://bmon.tw/static/assets/logo.png" alt="Bmon Logo" className="h-10 w-40 object-contain group-hover:opacity-80 transition-opacity" />
        </a>
        <h1 className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
            <a href="https://www.youtube.com/@bmonlive" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                {t('header.title.part1')}
            </a>
            <span className="text-slate-400">{t('header.title.part2')}</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/sam3u7858/nano-banana-illumination" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold p-2 rounded-md hover:bg-slate-800">
          <StarIcon className="h-5 w-5" />
          <span className="hidden md:inline">{t('header.starOnGithub')}</span>
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

const App: React.FC = () => {
  const { t } = useTranslation();
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalMimeType, setOriginalMimeType] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [aiTextResponse, setAiTextResponse] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<string[]>(['fixes', 'presets']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // remove the `data:*/*;base64,` part
        resolve(result.split(',')[1]);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (file: File) => {
    try {
      if (originalImage && originalImage.startsWith('blob:')) {
        URL.revokeObjectURL(originalImage);
      }
      setError(null);
      setEditedImage(null);
      setActivePreset(null);
      setAiTextResponse(null);
      const dataUrl = URL.createObjectURL(file);
      setOriginalImage(dataUrl);
      setOriginalMimeType(file.type);
    } catch (err) {
      setError(t('error.readFile'));
      console.error(err);
    }
  };

  const handleEditRequest = useCallback(async (prompt: string, presetName?: string) => {
    if (!originalImage || !originalMimeType) {
      setError(t('error.uploadFirst'));
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);
    setAiTextResponse(null);
    
    if (presetName) {
      setActivePreset(presetName);
    } else {
      setActivePreset(null);
    }

    try {
      // Fetch the original image blob to convert to base64
      const response = await fetch(originalImage);
      const blob = await response.blob();
      const base64Image = await fileToBase64(new File([blob], "source_image", {type: originalMimeType}));
      
      const result = await editImageWithPrompt(base64Image, originalMimeType, prompt);
      
      if (result.imageBase64) {
        setEditedImage(`data:${originalMimeType};base64,${result.imageBase64}`);
      }
      if (result.text) {
        setAiTextResponse(result.text);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t('error.unknown'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, originalMimeType, t]);
  
  const handleReuseImage = useCallback(() => {
    if (!editedImage) return;

    if (originalImage && originalImage.startsWith('blob:')) {
      URL.revokeObjectURL(originalImage);
    }
    
    setOriginalImage(editedImage);
    setEditedImage(null);
    setAiTextResponse(null);
    setActivePreset(null);
    setError(null);
  }, [editedImage, originalImage]);


  const isDisabled = isLoading || !originalImage;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6 text-center">
            <strong>{t('error.prefix')}</strong> {error}
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/3 xl:w-1/4 space-y-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl shadow-2xl h-fit">
            <ImageUploader onImageUpload={handleImageUpload} disabled={isLoading} />
            <div className={`transition-opacity duration-500 ${!originalImage ? 'opacity-30' : 'opacity-100'}`}>
              <CollapsibleSection
                title={t('fixes.title')}
                isOpen={openSections.includes('fixes')}
                onToggle={() => toggleSection('fixes')}
              >
                <PresetSelector
                  presets={FIX_PRESETS}
                  onSelect={handleEditRequest}
                  activePreset={activePreset}
                  disabled={isDisabled}
                />
              </CollapsibleSection>

              <div className="my-4 border-t border-slate-700"></div>

              <CollapsibleSection
                title={t('presets.title')}
                isOpen={openSections.includes('presets')}
                onToggle={() => toggleSection('presets')}
              >
                <PresetSelector
                  presets={PRESETS}
                  onSelect={handleEditRequest}
                  activePreset={activePreset}
                  disabled={isDisabled}
                />
              </CollapsibleSection>
            </div>
          </aside>
          <section className="flex-1">
            <ImageDisplay
              originalImage={originalImage}
              editedImage={editedImage}
              isLoading={isLoading}
              aiTextResponse={aiTextResponse}
              onReuseImage={handleReuseImage}
              onImageUpload={handleImageUpload}
              disabled={isLoading}
            />
          </section>
        </div>
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm mt-8">
        <p>{t('footer.text')}</p>
      </footer>
    </div>
  );
};

export default App;