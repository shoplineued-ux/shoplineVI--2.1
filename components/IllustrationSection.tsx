import React from 'react';
import { Language } from '../types';
import { Download, ExternalLink, PenTool } from 'lucide-react';

interface IllustrationSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: "SHOPLINE designers use a clear and engaging illustration style to help merchants quickly understand how different features work and how to use them effectively.",
    principles: {
      title: "Key principles",
      items: [
        {
          title: "Precision",
          desc: "Illustrations accurately represent and enhance a message's vividness. They offer usage scenarios, clarity and guidance for the next steps, enabling merchants to develop a deeper understanding."
        },
        {
          title: "Consistent style",
          desc: "All illustrations should follow the same visual language and form a cohesive series. Inconsistencies can be distracting and confusing."
        },
        {
          title: "Focus",
          desc: "Each illustration should convey one concept only. This makes the story easier to understand and allows merchants to intuitively grasp the necessary actions."
        }
      ]
    },
    shopping: {
      title: "Shopping",
      desc: "Colourful illustrations are predominantly used in scenarios that promote and guide businesses."
    },
    working: {
      title: "Working",
      desc: "Black and white illustrations with monochrome accents are primarily used to showcase SHOPLINE's corporate culture. They emphasise a simple, open and efficient style of operation."
    },
    system: {
      title: "Illustration",
      desc: "SHOPLINE designers have developed a system of character illustration elements. For more details, find out more here:",
      figmaLabel: "Illustration Kit (Figma)"
    },
    character: {
      expression: "Character expression",
      body: "Character body movement"
    }
  },
  zh: {
    intro: "SHOPLINE设计师使用精确、生动的插画风格来帮助商家快速、清晰地了解各种功能的运作方式和使用情景。",
    principles: {
      title: "原则",
      items: [
        {
          title: "表意精准",
          desc: "插画增加了信息的生动性。它提供使用情景、增加清晰度或引导下一步。让商家更深入地了解他们正在做什么。"
        },
        {
          title: "风格一致",
          desc: "插画都应该遵循同一种视觉语言，形成系列性。不一致会使体验感下降，并可能分散商家的注意力，或让他们也摸不清楚状况。"
        },
        {
          title: "保持专注",
          desc: "每幅插画只表述一件事。这样会使故事更容易理解，让商家凭直觉就能轻松了解如何完成这个场景下的操作。"
        }
      ]
    },
    shopping: {
      title: "购物场景",
      desc: "丰富多彩的插图主要用于推广和指导业务的场景。"
    },
    working: {
      title: "工作场景",
      desc: "带有单色点缀的黑白插图主要用于展示 SHOPLINE 的企业文化。它们强调简单、开放和高效的运营风格。"
    },
    system: {
      title: "插图系统",
      desc: "SHOPLINE 设计师开发了一套人物插图元素系统。欲了解更多详情，请点击此处：",
      figmaLabel: "插图组件库 (Figma)"
    },
    character: {
      expression: "人物表情",
      body: "人物肢体动作"
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
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
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

export const IllustrationSection: React.FC<IllustrationSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-20 animate-fadeIn pb-24">
      {/* Intro */}
      <section className="prose max-w-none">
        <p className="text-xl text-gray-500 max-w-4xl">{t.intro}</p>
      </section>

      {/* Principles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.principles.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.principles.items.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.shopping.title}</h2>
           <p className="text-lg text-gray-600 leading-relaxed">{t.shopping.desc}</p>
        </div>
        <div className="order-1 md:order-2">
           <DownloadableImage src="https://i.postimg.cc/D0Cnd6hj/Construction8.png" alt="Shopping Illustration" />
        </div>
      </section>

      {/* Working */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.working.title}</h2>
           <p className="text-lg text-gray-600 leading-relaxed">{t.working.desc}</p>
        </div>
        <div className="order-1 md:order-2">
           <DownloadableImage src="https://i.postimg.cc/Hn8BBs1G/Frame_35574828.png" alt="Working Illustration" />
        </div>
      </section>

      {/* System & Kit */}
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.system.title}</h2>
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 mb-8">
             <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.system.desc}</p>
             <a 
               href="https://www.figma.com/file/1esk0I8zst4htkdsJ0AonL/Illustration-Kit?node-id=585%3A4" 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-2 px-5 py-3 bg-[#0061ff] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
             >
               <PenTool size={18} />
               {t.system.figmaLabel}
               <ExternalLink size={14} className="ml-1 opacity-70" />
             </a>
          </div>
        </div>

        <div>
           <h3 className="text-xl font-bold text-gray-900 mb-6">{t.character.expression}</h3>
           <DownloadableImage src="https://i.postimg.cc/59QhPfms/头.png" alt="Character System" />
        </div>
        
        <div>
           <h3 className="text-xl font-bold text-gray-900 mb-6">{t.character.body}</h3>
           <DownloadableImage src="https://i.postimg.cc/kgJhdCxR/Frame_35574856.png" alt="Character Expression" />
        </div>
      </section>

    </div>
  );
};