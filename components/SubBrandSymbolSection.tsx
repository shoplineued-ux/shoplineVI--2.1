import React from 'react';
import { Language } from '../types';
import { Download, File as FileIcon } from 'lucide-react';

interface SubBrandSymbolSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: {
      p1: "Our brand and product logos are clear, impactful and easily recognisable.",
      p2: "Graphic icons primarily serve as launch icons for mobile apps, conveying the functionality of the respective brands while emphasising their connection to the masterbrand."
    },
    norms: {
      title: "Basic norms",
      desc: "Currently, sub-brands have adopted the following styles:",
      list: [
        "Showcasing strong alignment with the masterbrand of SHOPLINE, exhibiting a form that closely aligns with the masterbrand's logo.",
        "Highlighting the functions and characteristics of the sub-brand, with a corner mark indicating its association with the masterbrand."
      ],
      caption: "The POS symbol is a sub-brand graphic identity based on an extension of the masterbrand.",
      image: "https://i.postimg.cc/t4qCQ01Z/SHOPLINE_POS_logo规范.png"
    },
    usage: {
      title: "Symbol usage",
      scenario: "The first usage scenario, the symbol presentation method needs to follow these guidelines:",
      list: [
        "Positioned at the lower right oblique angle of about 45 degrees.",
        "The content expression needs to be a simple and flat silhouette representation.",
        "The colour is based on the main brand colour extension."
      ],
      caption1: "POS symbol (Full colour & reverse white)",
      caption2: "POS social media avatar & launch icon",
      mobileDesc: "On mobile devices, the SHOPLINE launch icon needs to occupy 75% of the Icon's display area."
    },
    minSize: {
      title: "Minimum size",
      desc: "To ensure readability, maintain the minimum size requirements for both printed and web-based displays when using the logo.",
      detail: "The logo shouldn’t be smaller than 100 pixels or 3.8 cm wide for print materials. Similarly, the circular logo should have a minimum size of 16 pixels or 0.6 cm wide for web-based displays."
    },
    download: {
      title: "Graphic logo file download"
    }
  },
  zh: {
    intro: {
      p1: "我们的品牌和产品标志清晰、有影响力且易于识别。",
      p2: "图形标志主要用于移动App的启动图标，传达各自品牌功能的基础上，凸显与主品牌的联系；"
    },
    norms: {
      title: "基本准则",
      desc: "目前子品牌已出现的样式有以下几种：",
      list: [
        "突出与SHOPLINE主品牌的关联性，展现形态与主品牌的标志高度一致；",
        "突出子品牌的功能与特色，角标展示与主品牌的关联性；"
      ],
      caption: "POS的logo就是基于主品牌延伸出来的子品牌图形标志，而Tacker就是更注重子品牌特色的范例",
      image: "https://i.postimg.cc/prBbFkQy/zipinpai.png"
    },
    usage: {
      title: "图形标志规范",
      scenario: "第一种使用场景下，logo的表现手法需遵循：",
      list: [
        "右下方斜角45度左右的角度，",
        "内容表意需要简洁的薄薄的展现手法；",
        "颜色以主品牌颜色延展；"
      ],
      caption1: "POS Logo常态稿 & 反白稿",
      caption2: "POS 社媒头像及启动图标",
      mobileDesc: "图形标志使用规范\n在移动设备上，SHOPLINE启动图标，需要关注图标显示面积的75%。"
    },
    minSize: {
      title: "最小化使用规范",
      desc: "为保证易读性，标识的尺寸不得小于最低印刷尺寸和基于网络显示的最低语音标准。",
      detail: "标志的最小尺寸为100像素宽/3.8厘米宽，而圆形标志的最小尺寸为16像素宽/0.6厘米宽。"
    },
    download: {
      title: "图形标志文件下载"
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

export const SubBrandSymbolSection: React.FC<SubBrandSymbolSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      
      {/* Introduction */}
      <section className="prose max-w-none text-gray-600">
        <p className="text-xl text-gray-500 mb-6">{t.intro.p1}</p>
        <p className="text-xl text-gray-500">{t.intro.p2}</p>
      </section>

      {/* Basic Norms */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.norms.title}</h2>
        <p className="text-lg text-gray-600 mb-4 font-medium">{t.norms.desc}</p>
        <ul className="list-disc list-outside ml-5 text-lg text-gray-600 mb-8 space-y-2">
            {t.norms.list.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
        <div className="flex flex-col gap-4">
            <DownloadableImage 
                src={t.norms.image} 
                alt="Symbol Norms" 
            />
            <p className="text-sm text-gray-500 font-medium">{t.norms.caption}</p>
        </div>
      </section>

      {/* Symbol Usage */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.usage.title}</h2>
        
        {/* Scenario 1 */}
        <div className="mb-12">
            <p className="text-lg text-gray-600 mb-4 font-medium">{t.usage.scenario}</p>
            <ul className="list-disc list-outside ml-5 text-lg text-gray-600 mb-8 space-y-2">
                {t.usage.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <div className="space-y-12">
                <div className="flex flex-col gap-2">
                    <DownloadableImage 
                        src="https://i.postimg.cc/GpbD5SRh/POS_symbol.png" 
                        alt="POS Symbol Usage" 
                    />
                    <p className="text-sm text-gray-500 font-medium">{t.usage.caption1}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <DownloadableImage 
                        src="https://i.postimg.cc/PxgY2f5J/Social_Icon2.png" 
                        alt="Social Media Icons" 
                    />
                    <p className="text-sm text-gray-500 font-medium">{t.usage.caption2}</p>
                </div>
            </div>
        </div>

        {/* Mobile Icons */}
        <div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl whitespace-pre-line font-medium">{t.usage.mobileDesc}</p>
            <DownloadableImage 
                src="https://i.postimg.cc/jSTVByFc/APP_icons.png" 
                alt="Mobile Application Icons" 
            />
        </div>
      </section>

      {/* Minimum Size */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.minSize.title}</h2>
        <p className="text-lg text-gray-600 mb-4 font-medium">{t.minSize.desc}</p>
        <p className="text-lg text-gray-600 mb-8">{t.minSize.detail}</p>
        <DownloadableImage 
            src="https://i.postimg.cc/wM1NPVZf/zi-pin-pai-da-xiao-gui-fan.png" 
            alt="Minimum Size Requirements" 
        />
      </section>

      {/* Download */}
      <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
         <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.download.title}</h4>
         <div className="grid md:grid-cols-2 gap-6">
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/6EHT/Sub-brand_image_logo_%281%29.zip" 
                label="Sub-brand image logo" 
                format="ZIP" 
             />
         </div>
      </section>

    </div>
  );
};