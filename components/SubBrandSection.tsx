import React from 'react';
import { Language } from '../types';
import { Download, File as FileIcon } from 'lucide-react';

interface SubBrandSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: {
      p1: "",
      p2: "SHOPLINE's sub-brands use a combination of the masterbrand's logo along with the wordmark of the sub-brand, emphasising their connection to the masterbrand:",
      formula: "masterbrand logo + Sub-brand wordmark"
    },
    composition: {
      title: "Sub-brand logo composition",
      desc: [
        "SHOPLINE's sub-brands emphasise their connection to the masterbrand by adopting a combination of the masterbrand's logo and the sub-brand's wordmark.",
        "This combination consists of the masterbrand's logo alongside the sub-brand's wordmark.",
        "The sub-brand wordmarks are designed using SHOPLINE's standard English font, Proxima Nova."
      ]
    },
    brands: [
      {
        title: "SHOPLINE Payments",
        desc: "Payment-related sub-brand of SHOPLINE.",
        image: "https://i.postimg.cc/JhfXxdG6/SHOPLINE_Payments.png"
      },
      {
        title: "SHOPLINE Logistics",
        desc: "Logistics-related sub-brand of SHOPLINE.",
        image: "https://i.postimg.cc/mrv9j6tk/SHOPLINE_Logistics.png"
      },
      {
        title: "SHOPLINE Partners",
        desc: "SHOPLINE's open platform.",
        image: "https://i.postimg.cc/fbGdCgJm/SHOPLINE_Open_Platform.png"
      },
      {
        title: "SHOPLINE App Store",
        desc: "SHOPLINE's app marketplace.",
        image: "https://i.postimg.cc/QM27mnHH/SHOPLINE_APPSTORE3.png"
      },
      {
        title: "SHOPLINE Dev",
        desc: "SHOPLINE's Developer Documentation Sub-brand.",
        image: "https://i.postimg.cc/k568xdXS/SHOPLINE_DEV.png"
      },
      {
        title: "SHOPLINE POS",
        desc: "SHOPLINE POS is our physical store checkout system. It connects online and offline stores, allowing customers to have a combined experience of shopping in-store and making online purchases. It also enables offline order pickups and online after-sales services while improving store management efficiency by providing unified tools for inventory management, checkout processes, membership management and data analysis.",
        image: "https://i.postimg.cc/GpWDKSHM/SHOPLINE_POS.png"
      },
      {
        title: "SHOPLINE B2B",
        desc: "SHOPLINE B2B is a sub-brand of SHOPLINE that provides a one-stop service for B2B merchants to build websites overseas.",
        image: "https://i.postimg.cc/HLswxsxw/SHOPLINE_B2B.png"
      }
    ],
    downloads: {
      title: "Sub-brand logo file download"
    }
  },
  zh: {
    intro: {
      p1: "文字标志是最通用的标志，简洁清晰地传达出子品牌名称。",
      p2: "",
      formula: ""
    },
    composition: {
      title: "文字标志规范",
      desc: [
        "SHOPLINE各子品牌为了凸显出与主品牌的关联性，采用了：",
        <span key="bold"><strong className="text-gray-900">主品牌文字标志+子品牌小写文字</strong> 的组合方式；</span>,
        "子品牌的文字Logo是基于SHOPLINE的标准英文字体Proxima Nova而设计的。",
        "注意：使用子品牌文字标志时，不能与子品牌图形标志同时排列。"
      ]
    },
    brands: [
      {
        title: "SHOPLINE Payments",
        desc: "SHOPLINE 的支付相关子品牌。",
        image: "https://i.postimg.cc/JhfXxdG6/SHOPLINE_Payments.png"
      },
      {
        title: "SHOPLINE Logistics",
        desc: "SHOPLINE 的物流相关子品牌。",
        image: "https://i.postimg.cc/mrv9j6tk/SHOPLINE_Logistics.png"
      },
      {
        title: "SHOPLINE Partners",
        desc: "SHOPLINE 的开放平台。",
        image: "https://i.postimg.cc/fbGdCgJm/SHOPLINE_Open_Platform.png"
      },
      {
        title: "SHOPLINE App Store",
        desc: "SHOPLINE 的应用市场。",
        image: "https://i.postimg.cc/QM27mnHH/SHOPLINE_APPSTORE3.png"
      },
      {
        title: "SHOPLINE Dev",
        desc: "SHOPLINE 的开发者文档子品牌。",
        image: "https://i.postimg.cc/k568xdXS/SHOPLINE_DEV.png"
      },
      {
        title: "SHOPLINE POS",
        desc: "SHOPLINE POS 是我们的实体店收银系统。它连接线上和线下商店，允许客户拥有在店内购物和进行在线购买的综合体验。它还支持线下订单提货和在线售后服务，同时通过提供库存管理、结账流程、会员管理和数据分析的统一工具，提高商店管理效率。",
        image: "https://i.postimg.cc/GpWDKSHM/SHOPLINE_POS.png"
      },
      {
        title: "SHOPLINE B2B",
        desc: "SHOPLINE B2B 是 SHOPLINE 的子品牌，为 B2B 商家提供一站式海外建站服务。",
        image: "https://i.postimg.cc/HLswxsxw/SHOPLINE_B2B.png"
      }
    ],
    downloads: {
      title: "子品牌标志文件下载"
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

export const SubBrandSection: React.FC<SubBrandSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      
      {/* Introduction */}
      <section className="prose max-w-none text-gray-600">
        {t.intro.p1 && <p className="text-xl text-gray-500 mb-6">{t.intro.p1}</p>}
        {t.intro.p2 && <p className="text-lg whitespace-pre-line">{t.intro.p2}</p>}
        {t.intro.formula && (
            <div className="mt-4 text-lg font-bold text-black whitespace-pre-line">
               {t.intro.formula}
            </div>
        )}
      </section>

      {/* Composition Rules */}
      <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.composition.title}</h2>
          <div className="space-y-8">
             <DownloadableImage src="https://i.postimg.cc/Dz9G6Y86/SHOPLINE_Payments_logo规范2.png" alt="Composition Rule" />
             <div className="space-y-4 max-w-4xl text-lg text-gray-600">
                {t.composition.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
             </div>
          </div>
      </section>

      {/* Sub Brands List */}
      <section className="space-y-20">
          {t.brands.map((brand, index) => (
              <div key={index} className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-4xl">{brand.desc}</p>
                  <DownloadableImage src={brand.image} alt={brand.title} />
              </div>
          ))}
      </section>

      {/* Downloads */}
      <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
         <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.downloads.title}</h4>
         <div className="grid md:grid-cols-2 gap-6">
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/ttjG/Sub-brand_text_logo_%281%29.zip" 
                label="Sub-brand text logo" 
                format="ZIP" 
             />
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251219/hvDa/ProximaNova.zip" 
                label="Proxima Nova" 
                format="ZIP" 
             />
         </div>
      </section>

    </div>
  );
};