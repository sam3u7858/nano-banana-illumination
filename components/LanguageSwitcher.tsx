import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'zh-TW', name: '繁中' },
  ];

  return (
    <div className="flex space-x-1 bg-slate-800 border border-slate-700 rounded-full p-1">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 focus:outline-none
            ${i18n.language === lang.code
              ? 'bg-violet-600 text-white'
              : 'text-slate-400 hover:bg-slate-700'
            }
          `}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;