import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface EmployeeCardSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: {
      p1: "The employee card is a symbol of SHOPLINE identity that every employee wears and uses daily.",
      p2: "The card utilizes SHOPLINE BLUE to enhance employee identification with the corporate brand.",
      lanyard: "The front of the lanyard features SHOPLINE BLUE + the reverse white SHOPLINE Logo. The back uses a secondary bright blue + linear auxiliary graphics extended from the SHOPLINE wordmark. This design creates a fresh, energetic water ripple aesthetic, inspiring employees to be full of motivation and assist customers with a positive mindset every day."
    },
    card: {
      title: "Card",
      desc: "The colors shown below are for printing on plastic materials.",
      specsTitle: "Printing colors:",
      specs: [
        "1. Manufacturer printing color: C94 M53 Y0 K55",
        "2. Internal printer color (Guangzhou): C75 M60 Y43 K15"
      ],
      images: [
        { src: "https://i.postimg.cc/SKFKcSHP/33_(1).png", alt: "Employee Card Design 1" },
        { src: "https://i.postimg.cc/cJyJfxPb/Frame_24.png", alt: "Employee Card Design 2" }
      ]
    },
    lanyard: {
      title: "Lanyard",
      desc: "The image below shows: colors printed on fabric",
      specs: [
        "Dark Blue (Front): C94 M53 Y0 K67, Pantone 648C",
        "Light Blue (Back): C100 M62 Y0 K0, Pantone 2728C"
      ],
      images: [
        { src: "https://i.postimg.cc/MG2G16h2/Frame_25.png", alt: "Lanyard Design" }
      ]
    }
  },
  zh: {
    intro: {
      p1: "员工卡是每个员工每天都要佩戴并使用的SHOPLINE员工身份的象征。",
      p2: "卡片采用SHOPLINE BLUE，提升员工对企业品牌认同感。",
      lanyard: "挂绳正面采用 SHOPLINE BLUE + SHOPLINE反白Logo ；背面采用 辅助亮蓝色 + SHOPLINE文字Logo 延伸出的线性辅助图形，给人带来一种清新活力水波纹的观感，促使员工每天动力满满，以积极阳光的心态更好的帮助客户。"
    },
    card: {
      title: "卡片",
      desc: "下图展示颜色为：在塑料材质上打印颜色；",
      specsTitle: "打印颜色分为：",
      specs: [
        "1.在厂商打印颜色：C94 M53 Y0 K55",
        "2.公司内部打印机颜色（广州）：C75 M60 Y43 K15"
      ],
      images: [
        { src: "https://i.postimg.cc/SKFKcSHP/33_(1).png", alt: "员工卡设计 1" },
        { src: "https://i.postimg.cc/cJyJfxPb/Frame_24.png", alt: "员工卡设计 2" }
      ]
    },
    lanyard: {
      title: "挂绳",
      desc: "下图展示为：在布料上打印的颜色",
      specs: [
        "深蓝色（正面）：C94 M53 Y0 K67，Pantone 648C",
        "浅蓝色（背面）：C100 M62 Y0 K0，Pantone 2728C"
      ],
      images: [
        { src: "https://i.postimg.cc/MG2G16h2/Frame_25.png", alt: "挂绳设计" }
      ]
    }
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

export const EmployeeCardSection: React.FC<EmployeeCardSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Introduction */}
      <section className="prose max-w-none text-gray-600">
        <p className="text-xl text-gray-500 mb-6">{t.intro.p1}</p>
        <p className="text-lg mb-6">{t.intro.p2}</p>
        <p className="text-lg">{t.intro.lanyard}</p>
      </section>

      {/* Card Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.card.title}</h2>
        <div className="text-lg text-gray-600">
          <p className="mb-4">{t.card.desc}</p>
          {t.card.specsTitle && <p className="mb-2 font-medium">{t.card.specsTitle}</p>}
          <ul className="list-disc list-outside ml-5 space-y-2">
             {t.card.specs.map((item, i) => (
                 <li key={i}>{item}</li>
             ))}
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            {t.card.images.map((img, i) => (
                <DownloadableImage key={i} src={img.src} alt={img.alt} />
            ))}
        </div>
      </section>

      {/* Lanyard Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.lanyard.title}</h2>
        <div className="text-lg text-gray-600">
          <p className="mb-4">{t.lanyard.desc}</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
             {t.lanyard.specs.map((item, i) => (
                 <li key={i}>{item}</li>
             ))}
          </ul>
        </div>
        <div className="max-w-4xl">
            {t.lanyard.images.map((img, i) => (
                <DownloadableImage key={i} src={img.src} alt={img.alt} />
            ))}
        </div>
      </section>
    </div>
  );
};