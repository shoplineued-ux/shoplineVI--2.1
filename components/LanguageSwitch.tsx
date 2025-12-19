import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  currentLang: Language;
  onToggle: () => void;
  label: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onToggle, label }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#0061ff] hover:text-[#0061ff] transition-colors text-sm font-medium text-gray-600"
      aria-label="Switch Language"
    >
      <Globe size={16} />
      {label}
    </button>
  );
};