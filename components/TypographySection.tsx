import React from 'react';
import { Language } from '../types';
import { Download, File as FileIcon } from 'lucide-react';

interface TypographySectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: {
      p1: "Effective typography ensures a clear and organised hierarchy of information.\nBy following our printing standards and specifications, you too can produce visually appealing typography.",
      p2: ""
    },
    fonts: {
      title: "Typography",
      descEn: "Proxima Nova is a widely used typeface on websites, suitable for various scenarios and highly recognisable even at small sizes. Roboto is a well-known typeface designed for legibility and ease of use.",
      descCn: "Conversely, SHOPLINE’s Chinese design materials use a sans-serif typeface: Noto Sans SC. Noto Sans SC has a geometric style and is easy to match.",
      captionEn: "English standard fonts & Official website fonts",
      captionCn: "Chinese standard font"
    },
    hierarchy: {
      title: "Typographic Hierarchy",
      desc: "The scale we use follows the 8px system, where type sizes are mainly divisible by eight. This mathematical approach to typography creates a clear hierarchy between headings, subheadings, and body text. When working on smaller designs, there is some flexibility in applying this system to ensure accurate and clear communication of information."
    },
    scale: {
      title: "Typographic Scale",
      desc: "Maintaining a standardised typographic hierarchy and scale for these combined typesets is crucial. Such a typographic layout guarantees clarity and consistency across SHOPLINE's internal and external applications."
    },
    downloads: {
      title: "Font Packs Download"
    }
  },
  zh: {
    intro: {
      p1: "好的排版可以使信息条理清晰。",
      p2: "遵循我们的印刷标准和规范，您也可以做出精美的排版设计。"
    },
    fonts: {
      title: "字体",
      descEn: "SHOPLINE品牌相关的英文设计材料采用了两种无衬线字体：Proxima Nova 和 Roboto。Proxima Nova 是一种在网站中广泛运用的字体，能够适应热点场景，小尺寸下也具有很好的识别度。Roboto是一种经过长时间考验的字体，专为易读性和易用性而设计。",
      descCn: "SHOPLINE品牌相关的中文设计素材采用了无衬线字体：思源体。思源体非常几何化，很容易搭配。",
      captionEn: "英文标准字体 & 官网字体",
      captionCn: "中文标准字体"
    },
    hierarchy: {
      title: "字重规模",
      desc: "该比例基于 8px 系统，其中类型在很大程度上可以被 8 整除。这种排版的数学方法保证了标题、子标题和正文之间清晰的层级关系。 当涉及到较小尺寸的设计时，可以在保证信息正确清晰地传达的基础上，稍微放宽这个系统的要求。"
    },
    scale: {
      title: "组合排版板式",
      desc: "保持这些组合排版的版式规范很重要。 这样的排版版式确保了所有信息的清晰性、一致性和强大的信息层级结构。"
    },
    downloads: {
      title: "字体包下载"
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

const FileDownload = ({ href, label, format }: { href: string, label: string, format: string }) => (
  <a 
    href={href} 
    download 
    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#0061ff] hover:shadow-md group transition-all bg-white"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 text-gray-500 group-hover:text-[#0061ff] transition-colors">
        <FileIcon size={24} />
      </div>
      <div>
        <div className="font-semibold text-gray-900 group-hover:text-[#0061ff] transition-colors">{label}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">{format}</div>
      </div>
    </div>
    <div className="p-2 text-gray-300 group-hover:text-[#0061ff] transition-colors">
        <Download size={20} />
    </div>
  </a>
);

export const TypographySection: React.FC<TypographySectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      
      {/* Introduction */}
      <section className="prose max-w-none">
        <p className="text-xl text-gray-500 whitespace-pre-line">{t.intro.p1}</p>
        <p className="text-lg text-gray-500">{t.intro.p2}</p>
      </section>

      {/* Font Families */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.fonts.title}</h2>
        
        <div className="space-y-12">
            <div className="space-y-6">
                <p className="text-lg text-gray-600 max-w-4xl">{t.fonts.descEn}</p>
                <div className="flex flex-col gap-2">
                    <DownloadableImage 
                        src="https://i.postimg.cc/MTPtDkgV/En.png" 
                        alt="English Fonts" 
                    />
                    <p className="text-sm text-gray-500 font-medium">{t.fonts.captionEn}</p>
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-lg text-gray-600 max-w-4xl">{t.fonts.descCn}</p>
                <div className="flex flex-col gap-2">
                    <DownloadableImage 
                        src="https://i.postimg.cc/rmngJ675/Cn.png" 
                        alt="Chinese Fonts" 
                    />
                    <p className="text-sm text-gray-500 font-medium">{t.fonts.captionCn}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Typographic Hierarchy */}
      <section>
         <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.hierarchy.title}</h2>
         <p className="text-lg text-gray-600 mb-12 max-w-4xl">{t.hierarchy.desc}</p>
         
         <div className="space-y-12">
             <DownloadableImage src="https://i.postimg.cc/0NJJ4TM1/Re1.png" alt="Hierarchy Example 1" />
             <DownloadableImage src="https://i.postimg.cc/W4JJyBDx/Re2.png" alt="Hierarchy Example 2" />
             <DownloadableImage src="https://i.postimg.cc/LsZZWcqc/Re3.png" alt="Hierarchy Example 3" />
         </div>
      </section>

      {/* Typographic Scale */}
      <section>
         <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.scale.title}</h2>
         <p className="text-lg text-gray-600 mb-12 max-w-4xl">{t.scale.desc}</p>

         <div className="space-y-12">
             <DownloadableImage src="https://i.postimg.cc/HLGPFCZ8/ty1.png" alt="Scale Example 1" />
             <DownloadableImage src="https://i.postimg.cc/9f3Nsj8F/ty2.png" alt="Scale Example 2" />
             <DownloadableImage src="https://i.postimg.cc/hGF3NqyJ/ty3.png" alt="Scale Example 3" />
             <DownloadableImage src="https://i.postimg.cc/TP8HBX7d/ty4.png" alt="Scale Example 4" />
         </div>
      </section>

      {/* Downloads */}
      <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
         <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.downloads.title}</h4>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251219/hvDa/ProximaNova.zip" 
                label="Proxima Nova" 
                format="ZIP" 
             />
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/b9bI/Roboto_%281%29.zip" 
                label="Roboto" 
                format="ZIP" 
             />
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/UkMv/Open_Sans_%E6%80%9D%E6%BA%90%E4%BD%93_%281%29.zip" 
                label="Noto Sans SC / Open Sans" 
                format="ZIP" 
             />
         </div>
      </section>

    </div>
  );
};