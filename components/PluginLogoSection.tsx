import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface PluginLogoSectionProps {
  lang: Language;
}

const PLUGIN_COLLECTION_IMAGES = [
  "https://i.postimg.cc/6p55xwmz/1.png",
  "https://i.postimg.cc/8zPPgD0H/2.png",
  "https://i.postimg.cc/0y221xB0/3.png",
  "https://i.postimg.cc/zGXXY5c7/4.png",
  "https://i.postimg.cc/QdxxZsyf/5.png",
  "https://i.postimg.cc/x1TTVY4p/6.png",
  "https://i.postimg.cc/FHssXmBn/7.png",
  "https://i.postimg.cc/7L1JD787/8.png"
];

const CONTENT = {
  en: {
    scope: {
      title: "Plugin Logo Guidelines",
      desc: "Scope: Applied to the Logo of plugins in the SHOPLINE App Store."
    },
    specs: {
      title: "Size Specifications",
      items: [
        "Image Size: 120 × 120 px",
        "Image Format: JPG, PNG"
      ],
      image: "https://i.postimg.cc/tgxZZptB/logo_规范_3_(1).png",
      usageNote: "Using this Logo as an example, it is recommended that the content block be located within 96x96px for a better presentation effect on the page.\n(Example: SmartPush Logo)"
    },
    collection: {
      title: "Plugin Logo Collection",
      updateTitle: "Logo Update Mechanism",
      updateDesc: "VI design collects new logos for plugins every Friday morning and updates them to the VI site no later than the following Monday morning.",
      caption: "App Store Icon Collection"
    }
  },
  zh: {
    scope: {
      title: "插件Logo规范",
      desc: "范围：应用于SHOPLINE App Store的插件的Logo。"
    },
    specs: {
      title: "尺寸说明",
      items: [
        "图片尺寸：120 × 120 px",
        "图片格式：JPG、PNG"
      ],
      image: "https://i.postimg.cc/tgxZZptB/logo_规范_3_(1).png",
      usageNote: "以该Logo为例子，建议内容区块位于96x96px内，在页面上可以有更好的呈现效果。\n图：SmartPush Logo"
    },
    collection: {
      title: "插件Logo集合",
      updateTitle: "Logo更新机制",
      updateDesc: "每周五上午VI设计收集插件的新logo，最晚于下周一上午更新至VI站点。",
      caption: "应用商店图标集合"
    }
  }
};

const DownloadableImage = ({ src, alt, caption, className }: { src: string, alt: string, caption?: string, className?: string }) => {
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
      {caption && (
        <div className="bg-white/90 backdrop-blur-sm p-3 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-700 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export const PluginLogoSection: React.FC<PluginLogoSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Scope */}
      <section className="prose max-w-none text-gray-600">
        <p className="text-xl text-gray-500 font-medium">{t.scope.desc}</p>
      </section>

      {/* Specifications */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.specs.title}</h2>
        <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 text-sm">
          {t.specs.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="max-w-3xl">
          <DownloadableImage src={t.specs.image} alt="Logo Specification" />
        </div>
        <div className="max-w-3xl py-4">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">{t.specs.usageNote}</p>
        </div>
      </section>

      {/* Collection */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t.collection.title}</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">{t.collection.updateTitle}</h3>
            <p className="text-gray-600 text-sm max-w-4xl">{t.collection.updateDesc}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          {PLUGIN_COLLECTION_IMAGES.map((img, index) => (
            <div key={index} className="space-y-4">
              <DownloadableImage src={img} alt={`Logo Collection ${index + 1}`} />
            </div>
          ))}
          <p className="text-gray-500 font-medium text-center mt-4 text-sm">{t.collection.caption}</p>
        </div>
      </section>
    </div>
  );
};