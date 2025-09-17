import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CustomPromptProps {
  onSubmit: (prompt: string) => void;
  disabled: boolean;
  onFocus: () => void;
}

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2.586l1.707-1.707a1 1 0 111.414 1.414L12.414 8H15a1 1 0 110 2h-2.586l1.707 1.707a1 1 0 11-1.414 1.414L11 11.414V14a1 1 0 11-2 0v-2.586l-1.707 1.707a1 1 0 11-1.414-1.414L7.586 10H5a1 1 0 110-2h2.586L5.793 6.293a1 1 0 011.414-1.414L9 6.586V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);


const CustomPrompt: React.FC<CustomPromptProps> = ({ onSubmit, disabled, onFocus }) => {
  const [prompt, setPrompt] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={onFocus}
            placeholder={t('customPrompt.placeholder')}
            disabled={disabled}
            rows={3}
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 disabled:opacity-50"
        />
        <button
            type="submit"
            disabled={disabled || !prompt.trim()}
            className="w-full flex items-center justify-center gap-2 bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-700 disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
        >
            <SparkleIcon />
            {t('customPrompt.button')}
        </button>
    </form>
  );
};

export default CustomPrompt;