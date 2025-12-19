import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface BusinessCardSectionProps {
  lang: Language;
}

const CONTENT: Record<Language, any> = {
  en: {
    intro: {
      p1: "As a way to represent the company's image, business cards should showcase SHOPLINE's professional, simple and open way of doing things.",
      p2: "Currently, SHOPLINE offers four versions of business cards: Overseas, China Cross-border, Taiwan and Executive.",
    },
    specs: {
      title: "Specifications",
      list: [
        "Paper Grammage: The business cards are printed on 300g Holland White paper.",
        "Printing Style: The design follows a plain print approach to ensure clarity and simplicity.",
        "Supplier: Bright Shadow is the trusted supplier for these business cards."
      ]
    },
    sections: [
      {
        title: "Overseas Market",
        images: [
          "https://i.postimg.cc/DZdrGY0J/海外_可编辑版本汇总_230915_正.png",
          "https://i.postimg.cc/NFs1k72G/海外_可编辑版本汇总_230915_反.png"
        ]
      },
      {
        title: "China Cross-border Market",
        images: [
          "https://i.postimg.cc/DZdrGY0J/海外_可编辑版本汇总_230915_正.png",
          "https://i.postimg.cc/hvD91bQP/简体名片_可编辑版本_230915_反.png"
        ]
      },
      {
        title: "Taiwan Market",
        images: [
          "https://i.postimg.cc/C5hjsHnq/TW_可编辑版本汇总_231031_反.png",
          "https://i.postimg.cc/SRSWf7Y9/TW_Business_Card_2024_Sample_1.jpg"
        ]
      },
      {
        title: "Japan Market",
        images: [
          "https://i.postimg.cc/sxjp49GZ/JP_可编辑版本汇总_230915_正.jpg",
          "https://i.postimg.cc/tJqhNtnZ/JP_Business_Card_2024_Sample_1.jpg"
        ]
      },
      {
        title: "Logistics",
        images: [
          "https://i.postimg.cc/MH6ymbfv/Oneship_海外_可编辑版本汇总_230915_正.jpg",
          "https://i.postimg.cc/KjGnDr3j/Oneship_海外_可编辑版本汇总_230915_反.jpg"
        ]
      }
    ]
  },
  zh: {
    intro: {
      p1: "名片作为员工对外传递公司形象的创意，需要展示SHOPLINE的沉稳专业、简单开放的整体形象感。",
      p2: "目前有海外、中国跨境、香港台湾、高管四个版本；",
    },
    // Specifications section removed as per user request
    sections: [
      {
        title: "海外市场",
        images: [
          "https://i.postimg.cc/DZdrGY0J/海外_可编辑版本汇总_230915_正.png",
          "https://i.postimg.cc/NFs1k72G/海外_可编辑版本汇总_230915_反.png"
        ]
      },
      {
        title: "中国的跨境市场",
        images: [
          "https://i.postimg.cc/DZdrGY0J/海外_可编辑版本汇总_230915_正.png",
          "https://i.postimg.cc/hvD91bQP/简体名片_可编辑版本_230915_反.png"
        ]
      },
      {
        title: "台湾市场",
        images: [
          "https://i.postimg.cc/C5hjsHnq/TW_可编辑版本汇总_231031_反.png",
          "https://i.postimg.cc/SRSWf7Y9/TW_Business_Card_2024_Sample_1.jpg"
        ]
      },
      {
        title: "日本市场",
        images: [
          "https://i.postimg.cc/sxjp49GZ/JP_可编辑版本汇总_230915_正.jpg",
          "https://i.postimg.cc/tJqhNtnZ/JP_Business_Card_2024_Sample_1.jpg"
        ]
      },
      {
        title: "后勤",
        images: [
          "https://i.postimg.cc/MH6ymbfv/Oneship_海外_可编辑版本汇总_230915_正.jpg",
          "https://i.postimg.cc/KjGnDr3j/Oneship_海外_可编辑版本汇总_230915_反.jpg"
        ]
      }
    ]
  }
};

const DownloadableImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const filename = src.split('/').pop()?.split('?')[0] || `SHOPLINE_${alt.replace(/\s+/g, '_')}.png`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open(src, '_blank');
    }
  };

  return (
    <div className={`relative group rounded-xl overflow-hidden border border-gray-100 bg-gray-50 ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
      <button
        onClick={handleDownload}
        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-gray-700 z-10 hover:scale-105"
        title="Download Image"
      >
        <Download size={18} />
      </button>
    </div>
  );
};


export const BusinessCardSection: React.FC<BusinessCardSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Intro */}
      <section className="prose max-w-none text-gray-600">
        <p className="text-xl text-gray-500 mb-6">{t.intro.p1}</p>
        <p className="text-lg">{t.intro.p2}</p>
      </section>

      {/* Specs (Conditional Rendering) */}
      {t.specs && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.specs.title}</h2>
          <ul className="list-disc list-outside ml-5 text-gray-600 mb-8 space-y-2 text-lg">
            {t.specs.list.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Markets */}
      <section className="space-y-20">
          {t.sections.map((market: any, index: number) => (
              <div key={index}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{market.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                      {market.images.map((img: string, i: number) => (
                          <DownloadableImage key={i} src={img} alt={`${market.title} ${i + 1}`} />
                      ))}
                  </div>
              </div>
          ))}
      </section>
    </div>
  );
};