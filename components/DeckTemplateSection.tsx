import React from 'react';
import { Language } from '../types';
import { ExternalLink, Presentation } from 'lucide-react';

interface DeckTemplateSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    previewLabel: "View Presentation",
    buttonLabel: "Open Google Slides",
    link: "https://docs.google.com/presentation/d/13qakzCUx9DX7RgX6TtX1tiVmOEPGq9qiDSpsTOFZGFQ/edit?slide=id.g326ce658596_3_0#slide=id.g326ce658596_3_0"
  },
  zh: {
    previewLabel: "查看演示文稿",
    buttonLabel: "在 Google Slides 中打开",
    link: "https://docs.google.com/presentation/d/13qakzCUx9DX7RgX6TtX1tiVmOEPGq9qiDSpsTOFZGFQ/edit?slide=id.g326ce658596_3_0#slide=id.g326ce658596_3_0"
  }
};

export const DeckTemplateSection: React.FC<DeckTemplateSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-16 animate-fadeIn pb-24">
      {/* Link Card */}
      <section className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
        <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 pointer-events-none">
          <Presentation size={300} strokeWidth={1} />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
            <Presentation size={16} />
            {t.previewLabel}
          </div>
          
          <div className="space-y-4">
             <h2 className="text-3xl font-bold">{t.buttonLabel}</h2>
          </div>

          <a 
            href={t.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.buttonLabel}
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};