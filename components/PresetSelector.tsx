import React from 'react';
import { Preset } from '../types';
import { useTranslation } from 'react-i18next';

interface PresetSelectorProps {
  presets: Preset[];
  onSelect: (prompt: string, name: string) => void;
  activePreset: string | null;
  disabled: boolean;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ presets, onSelect, activePreset, disabled }) => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {presets.map((preset: Preset) => (
        <button
          key={preset.name}
          onClick={() => onSelect(preset.prompt, preset.name)}
          disabled={disabled}
          className={`group flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 text-slate-300 border aspect-square
            ${activePreset === preset.name 
              ? 'bg-violet-600 border-violet-500 ring-2 ring-violet-500' 
              : 'bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-slate-600'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          aria-pressed={activePreset === preset.name}
          title={t(preset.name)}
        >
          <preset.icon 
              className={`h-8 w-8 mb-2 transition-colors duration-200 
                  ${activePreset === preset.name ? 'text-white' : 'text-slate-400 group-hover:text-violet-300'}`
              } 
          />
          <span className="text-xs text-center leading-tight">{t(preset.name)}</span>
        </button>
      ))}
    </div>
  );
};

export default PresetSelector;