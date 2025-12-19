import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface GraphicSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    label: {
      title: "Label",
      desc: "SHOPLINE uses a simple label in our logo design. The label can also be seen as an arch, representing the brand's diversity and the success of the stores."
    },
    usage: {
      title: "Graphic device usage",
      desc: "Label shapes are often used as backgrounds or clipping masks in various scenarios, as shown below:",
      caption: "Label shapes can also be used as backgrounds"
    },
  },
  zh: {
    label: {
      title: "标签",
      desc: "SHOPLINE 在标志设计中使用了一个简单的标签元素. 这个标签也可以被视为一个拱门，象征着品牌的多样性和商店的成功。"
    },
    usage: {
      title: "图形应用",
      desc: "标签形状常被用作背景或剪切蒙版，适用于多种场景，如下所示：",
      caption: "标签形状也可用作背景"
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
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 border-t border-gray-100">
          <p className="text-sm text-gray-700 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export const GraphicSection: React.FC<GraphicSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Label Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.label.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">{t.label.desc}</p>
        <DownloadableImage src="https://i.postimg.cc/vmfDvrk0/Label_Tags.png" alt="Label Tags" />
      </section>

      {/* Usage Section */}
      <section className="space-y-16">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">{t.usage.title}</h2>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">{t.usage.desc}</p>
            <DownloadableImage src="https://i.postimg.cc/Bn1vq5SG/Tag_Shape_placement.png" alt="Tag Shape Placement" />
        </div>
        
        <div className="space-y-6">
             <DownloadableImage src="https://i.postimg.cc/QN4N1YVN/Tag_Shape_placement3.png" alt="Tag Shape Placement Background" />
             <p className="text-gray-500 text-sm">{t.usage.caption}</p>
        </div>
      </section>
    </div>
  );
};