import React from 'react';
import { Language } from '../types';
import { Download, File as FileIcon, Check, X } from 'lucide-react';

interface LogoSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    downloadTitle: "Logo Assets",
    intro: {
      title: "Identity",
      p1: "The brand logo is an important embodiment of brand identity, reflecting the brand's vision and beliefs.",
      p2: "The SHOPLINE logo consists of English letters and graphics. The word 'SHOP' emphasizes the industry the brand belongs to and is the focal point of the full word 'SHOPLINE', with the letter 'O' displayed in bold.",
      p3: "The letter 'O' incorporates the imagery of a 'tag', emphasizing the brand's connection to stores, merchandise, and transactions.",
      p4: "To create contrast and rhythm, the word 'LINE' uses a slender font, symbolizing the transition from heavy to light, leaving a lasting impression. The SHOPLINE logo is unique, striking, and easy to recognize.",
      captions: [
        "Full Color Logo",
        "Reverse White Logo",
        "Neutral Color Logo",
        "Symbol (Mobile/Web Icon)"
      ]
    },
    symbolism: {
      title: "Symbolism",
      desc: "To better demonstrate the professionalism and strength of the SHOPLINE brand, the angle of each line in the logo has been meticulously crafted by designers through precise aesthetic calculations. The 'Logo' is tilted upwards at a 45-degree angle, symbolizing SHOPLINE's spirit of standing together with the business community, riding the wind and waves, forging ahead, and striding forward to meet a bright future."
    },
    usage: {
      title: "Symbol Usage",
      desc: "On mobile devices, the SHOPLINE launch icon needs to occupy 75% of the icon display area to be displayed more clearly."
    },
    clearspace: {
      title: "Clear Space",
      desc: "To ensure the integrity and legibility of the SHOPLINE logo, it must be kept separate from other logos or competitive graphic elements such as body text that might conflict with, crowd, or diminish the overall effect of the logo.",
      point1: "Allow sufficient clear space around the logo equal to the height of the SHOPLINE symbol.",
      point2: "There should be sufficient clearance around the symbol, and the clearance height should be twice the height of the tag hole cover."
    },
    minSize: {
      title: "Minimum Size",
      desc: "To maintain maximum legibility at all times, the logo width should not be less than 100 pixels or 3.8 cm, while the symbol width should be at least 16 pixels or 0.6 cm."
    },
    colors: {
      title: "Logo Colors",
      desc: "The SHOPLINE logo is available in three color schemes: Dark Blue, Neutral, and White. The Dark Blue version is used on white or light backgrounds, while the White version is used on dark backgrounds. The Neutral version is used less frequently, but if used, ensure there is sufficient contrast between the logo color and the background color for the SHOPLINE logo to be clearly displayed. The most commonly used color code for the Dark Blue SHOPLINE logo is #00142D."
    },
    priority: {
      title: "Logo Usage",
      desc: "We recommend prioritizing the Dark Blue logo design style on light backgrounds. This style should be used whenever possible to maintain consistency in the company's visual image across different occasions. The priority of logo color usage is: Dark Blue > White > Neutral.",
      basic: "Basic: It is most commonly used to represent our brand because it contains the most information, with both an expressive symbol and an informative wordmark.",
      secondary: "Secondary: Used least frequently, typically for mobile applications."
    },
    backgrounds: {
      title: "Background Control",
      desc: "To ensure the SHOPLINE brand identity is clear and striking against different backgrounds, the contrast between the logo and the background is crucial. It is recommended to use the white logo on dark backgrounds, the dark blue logo on light backgrounds, and the logo on solid backgrounds. Enhance the contrast between the logo and the background to ensure it is easy to recognize.",
      correct: "Correct",
      incorrect: "Incorrect",
      c1: "Background contrasts sharply with logo",
      c2: "Background image has low saturation, contrasting with logo",
      c3: "Background content is cleaner and clearer",
      i1: "Background is too complex",
      i2: "Blurred background image",
      i3: "Background color is too similar to logo color"
    },
    placement: {
      title: "Logo Placement",
      desc: "Depending on the format and content of the application, placing the logo in a corner or in the center is acceptable. The preferred position is always the top corner. If this is not possible or would affect the design layout, the center or bottom corners can be used."
    },
    symbolPlacement: {
      title: "Symbol Placement",
      desc: "The position of the symbol depends on the specific usage scenario when it is used alone. The chart below outlines the size and position of the symbols in both horizontal and vertical layouts:"
    },
    watermark: {
      title: "Security Watermark",
      desc: "The security watermark is a symbol using the color #F7F8F9, placed in the center of the document."
    },
    lockups: {
      title: "Logo Lockups",
      desc: ""
    },
    slogans: {
      title: "Slogans used in various regions",
      list: [
        "1. Be part of the solution, no matter the problem.",
        "2. Make it work first, then make it better.",
        "3. Teamwork / Pursuit of Excellence / Active Communication",
        "4. With a great team and culture, we can conquer the world.",
        "5. The team and employees always come first.",
        "6. Our success is built on the success of our merchants.",
        "7. Empower merchants to succeed anywhere.",
        "8. Merchant success is our success."
      ]
    },
    cobranding: {
      title: "Co-branding for partnerships"
    },
    social: {
      title: "Social Media Icons",
      desc: "Application icons are individually designed to meet the requirements of each platform. The following two display styles are commonly used:",
      items: [
        "When the display range is circular, the logo is used without any margins.",
        "When the display range is square or rounded square, the logo should have appropriate margins on all sides, taking up 75% of the total space."
      ],
      construction: "To ensure optimal visual communication of the logo, consider aligning the logo's centre both vertically and horizontally within the icon shape. Then, use the tab hole size to fill the left and right edges of the icon shape."
    }
  },
  zh: {
    downloadTitle: "标志文件下载",
    intro: {
      title: "标识",
      p1: "品牌标志是品牌身份的重要体现，它体现了品牌的愿景和信念。",
      p2: "SHOPLINE 的标志由英文字母和图形组成。“SHOP”一词强调了品牌所属行业，并且是“SHOPLINE”完整单词中的焦点，其中字母“O”以粗体显示。",
      p3: "字母“O”融入了“标签”的意象，强调了品牌与商店、商品和交易之间的联系。",
      p4: "为了营造对比效果和节奏感，“LINE”一词采用纤细的字体，象征着从厚重到轻盈的过渡，给人留下深刻的印象。SHOPLINE的标志独特、醒目且易于识别。",
      captions: [
        "全彩标志",
        "反白色标志",
        "中性色标志",
        "符号（主要用于手机、网页标签）"
      ]
    },
    symbolism: {
      title: "象征",
      desc: "为了更好地展现SHOPLINE品牌的专业性和实力，标志中每条线条的角度都由设计师经过精准的美学计算精心雕琢。“标志”以45度角向上倾斜，象征着SHOPLINE与商界同舟共济、乘风破浪、勇往直前、昂首阔步迎接美好未来的精神。",
    },
    usage: {
      title: "符号使用",
      desc: "在移动设备上，SHOPLINE 启动图标需要占据图标显示区域的 75% 才能更清晰地显示。"
    },
    clearspace: {
      title: "空旷空间",
      desc: "为确保 SHOPLINE 标志的完整性和清晰度，必须将其与可能与标志冲突、拥挤或削弱标志整体效果的其他标志或正文等竞争性图形元素分开。",
      point1: "在标志周围留出足够的空白空间，该空间与 SHOPLINE 符号的高度相同。",
      point2: "符号周围应留出足够的净空，净空高度应为标签孔盖高度的两倍。"
    },
    minSize: {
      title: "最小尺寸",
      desc: "为始终保持最大清晰度，徽标的宽度不应小于 100 像素或 3.8 厘米，而符号的宽度应至少为 16 像素或 0.6 厘米。"
    },
    colors: {
      title: "标志颜色",
      desc: "SHOPLINE 标志有三种配色方案：深蓝色、中性色和白色。深蓝色版本用于白色或浅色背景，白色版本用于深色背景. 中性色版本使用较少，但如果使用，务必确保标志颜色与背景颜色之间有足够的对比度，以便清晰显示 SHOPLINE 标志. 深蓝色 SHOPLINE 标志最常用的颜色代码是 #00142D。"
    },
    priority: {
      title: "标志使用",
      desc: "我们建议优先采用浅色背景上的深蓝色标志设计风格. 应尽可能使用此风格，以保持公司在不同场合视觉形象的一致性. 标志颜色使用的优先顺序如下：深蓝色 > 白色 > 中性色。",
      basic: "基本的：它最常用于代表我们的品牌，因为它包含了最多的信息，既有富有表现力的符号，也有信息丰富的文字商标。",
      secondary: "次要：使用频率最低，通常用于移动应用"
    },
    backgrounds: {
      title: "背景控制",
      desc: "为了确保SHOPLINE品牌标识在不同背景下都能清晰醒目，标识与背景的对比度至关重要. 建议在深色背景上使用白色标识，在浅色背景上使用深蓝色标识，以及在纯色背景上使用标识. 增强标识与背景的对比度，确保其易于识别。",
      correct: "正确",
      incorrect: "错误",
      c1: "背景与标志形成鲜明对比",
      c2: "背景图像饱和度低，与标志形成对比",
      c3: "背景内容更简洁明了",
      i1: "背景过于复杂",
      i2: "模糊的背景图像",
      i3: "背景颜色与标志颜色过于相似"
    },
    placement: {
      title: "标志位置",
      desc: "根据应用程序的格式 and 内容，logo 放置在角落或中心位置都是可以接受的. 首选位置始终是顶部角落. 如果无法做到这一点或会影响设计布局，则可以使用中心或底部角落。"
    },
    symbolPlacement: {
      title: "符号放置",
      desc: "符号的位置取决于单独使用时的具体使用场景. 下图概述了符号在水平和垂直布局中的大小和位置："
    },
    watermark: {
      title: "安全水印",
      desc: "安全水印是一个使用 #F7F8F9 颜色的符号，放置在文档的中间。"
    },
    lockups: {
      title: "标志和标语",
      desc: ""
    },
    slogans: {
      title: "各地区使用的口号",
      list: [
        "1.无论遇到什么问题，都要成为解决方案的一部分。",
        "2.先让它运转起来，然后再让它变得更好。",
        "3.团队合作/追求卓越/积极沟通",
        "4.凭借优秀的团队和企业文化，我们就能征服世界。",
        "5.团队和员工永远是第一位的。",
        "6.我们的成功建立在商家的成功之上。",
        "7.助力商家在任何地方取得成功",
        "8.商户的成功就是我们的成功"
      ]
    },
    cobranding: {
      title: "合作伙伴联合品牌"
    },
    social: {
      title: "社交媒体图标",
      desc: "应用图标是根据每个平台的要求单独设计的. 以下两种显示样式通常被使用：",
      items: [
        "当显示范围为圆形时，标志不留边距使用。",
        "当显示范围为正方形或圆角正方形时，标志四周应留有适当的边距，占据总空间的 75%。"
      ],
      construction: "为了确保标志的最佳视觉传达效果，请考虑将标志中心在图标形状内垂直和水平对齐. 然后，利用标签孔的大小来填充图标形状的左右边缘。"
    }
  }
};

const DownloadableImage = ({ src, alt, className, dark }: { src: string, alt: string, className?: string, dark?: boolean }) => {
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
      console.error("Download failed", err);
      window.open(src, '_blank');
    }
  };

  return (
    <div className={`relative group rounded-xl overflow-hidden border border-gray-100 ${className} ${dark ? 'bg-[#00142D]' : 'bg-white'}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
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

export const LogoSection: React.FC<LogoSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Intro & Downloads */}
      <section className="space-y-8">
         <div className="space-y-6">
             <p className="text-xl text-gray-500">{t.intro.p1}</p>
             <p className="text-xl text-gray-500">{t.intro.p2}</p>
             <p className="text-xl text-gray-500">{t.intro.p3}</p>
             <p className="text-xl text-gray-500">{t.intro.p4}</p>
         </div>

         {/* Basic Logo Images - Changed from grid to vertical stack */}
         <div className="space-y-12">
             <div className="flex flex-col gap-2">
                 <DownloadableImage src="https://i.postimg.cc/j5H9nKFF/1_1_LOGO白底.png" alt="Full Color Logo" />
                 <p className="text-sm text-gray-500 font-medium">{t.intro.captions[0]}</p>
             </div>
             <div className="flex flex-col gap-2">
                 <DownloadableImage src="https://i.postimg.cc/763cJDWj/1_2_LOGO深蓝底.png" alt="Reverse White Logo" />
                 <p className="text-sm text-gray-500 font-medium">{t.intro.captions[1]}</p>
             </div>
             <div className="flex flex-col gap-2">
                 <DownloadableImage src="https://i.postimg.cc/ZR8gvZMG/Frame_14.png" alt="Neutral Color Logo" />
                 <p className="text-sm text-gray-500 font-medium">{t.intro.captions[2]}</p>
             </div>
             <div className="flex flex-col gap-2">
                 <DownloadableImage src="https://i.postimg.cc/B6TyPsVz/Frame_21.png" alt="Symbol" />
                 <p className="text-sm text-gray-500 font-medium">{t.intro.captions[3]}</p>
             </div>
         </div>

         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">{t.downloadTitle}</h4>
             <div className="grid md:grid-cols-2 gap-4">
                 <FileDownload 
                   href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/4xPC/SHOPLINE_Logo_%286%29.zip" 
                   label="SHOPLINE Logo Pack" 
                   format="ZIP" 
                 />
                 <FileDownload 
                   href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/O0pg/SHOPLINE_LOGO_2.eps" 
                   label="SHOPLINE Logo Vector" 
                   format="EPS" 
                 />
             </div>
         </div>
      </section>

      {/* Symbolism */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.symbolism.title}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t.symbolism.desc}</p>
          <DownloadableImage src="https://i.postimg.cc/Hxw2F9dC/logo制作规范展示.png" alt="Logo Construction" className="bg-white" />
      </section>

      {/* Usage */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.usage.title}</h3>
          <p className="text-lg text-gray-600 mb-8">{t.usage.desc}</p>
          {/* Changed from grid to vertical stack */}
          <div className="space-y-12">
             <DownloadableImage src="https://i.postimg.cc/Ss6rHfkk/SHOPLINE_logo规范8.png" alt="Mobile Icon Construction" />
             <DownloadableImage src="https://i.postimg.cc/FRyZwVNH/SHOPLINE_logo规90范.png" alt="App Icon Variants" />
          </div>
      </section>

      {/* Clear Space & Min Size - Changed to Vertical Layout */}
      <div className="space-y-24">
         <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.clearspace.title}</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.clearspace.desc}</p>
            <ul className="list-disc list-outside ml-5 text-gray-600 mb-8 space-y-2 text-lg max-w-3xl">
                <li>{t.clearspace.point1}</li>
                <li>{t.clearspace.point2}</li>
            </ul>
            <DownloadableImage src="https://i.postimg.cc/26Qwg7r6/尺寸规范.png" alt="Clear Space" />
         </section>
         <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.minSize.title}</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t.minSize.desc}</p>
            <DownloadableImage src="https://i.postimg.cc/VLgYmxDQ/Scale.png" alt="Minimum Size" />
         </section>
      </div>

      {/* Colors */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.colors.title}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t.colors.desc}</p>
          <DownloadableImage src="https://i.postimg.cc/xCvRB3Yg/Color.png" alt="Logo Colors" />
      </section>

      {/* Priority */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.priority.title}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t.priority.desc}</p>
          <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                 <DownloadableImage src="https://i.postimg.cc/sXYcb4y0/Frame_7858.png" alt="Basic Usage" />
                 <p className="text-sm text-gray-500 font-medium">{t.priority.basic}</p>
              </div>
              <div className="space-y-4">
                 <DownloadableImage src="https://i.postimg.cc/k4QcLv9j/Frame_7859.png" alt="Secondary Usage" />
                 <p className="text-sm text-gray-500 font-medium">{t.priority.secondary}</p>
              </div>
          </div>
      </section>

      {/* Backgrounds */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.backgrounds.title}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t.backgrounds.desc}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/Vs2G30RL/Frame_7843.png" alt="Correct Background 1" />
                 <div className="flex items-center gap-2 text-green-600 font-semibold text-sm"><Check size={14} /> {t.backgrounds.correct}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.c1}</p>
             </div>
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/MH8sd0kt/Frame_7845.png" alt="Correct Background 2" />
                 <div className="flex items-center gap-2 text-green-600 font-semibold text-sm"><Check size={14} /> {t.backgrounds.correct}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.c2}</p>
             </div>
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/qBWb96Lh/Frame_7844.png" alt="Correct Background 3" />
                 <div className="flex items-center gap-2 text-green-600 font-semibold text-sm"><Check size={14} /> {t.backgrounds.correct}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.c3}</p>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/2jgcPLwv/Frame_7846.png" alt="Incorrect Background 1" />
                 <div className="flex items-center gap-2 text-red-500 font-semibold text-sm"><X size={14} /> {t.backgrounds.incorrect}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.i1}</p>
             </div>
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/4yT8BvCL/Frame_7847.png" alt="Incorrect Background 2" />
                 <div className="flex items-center gap-2 text-red-500 font-semibold text-sm"><X size={14} /> {t.backgrounds.incorrect}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.i2}</p>
             </div>
             <div className="space-y-2">
                 <DownloadableImage src="https://i.postimg.cc/SQHTwYrm/Frame_78481.png" alt="Incorrect Background 3" />
                 <div className="flex items-center gap-2 text-red-500 font-semibold text-sm"><X size={14} /> {t.backgrounds.incorrect}</div>
                 <p className="text-xs text-gray-400">{t.backgrounds.i3}</p>
             </div>
          </div>
      </section>

      {/* Placement & Symbol Placement - Changed to Vertical Layout */}
      <div className="space-y-24">
          <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.placement.title}</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.placement.desc}</p>
              <DownloadableImage src="https://i.postimg.cc/L8rR08bx/Placement.png" alt="Placement" />
          </section>
          <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.symbolPlacement.title}</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.symbolPlacement.desc}</p>
              <DownloadableImage src="https://i.postimg.cc/L4yQWGk5/Symbol_Placement.png" alt="Symbol Placement" />
          </section>
      </div>

      {/* Watermark & Lockups - Changed to Vertical Layout */}
      <div className="space-y-24">
          <section>
             <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.watermark.title}</h3>
             <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.watermark.desc}</p>
             <DownloadableImage src="https://i.postimg.cc/Y2XDPTNH/Security_watermark.png" alt="Security Watermark" />
          </section>
          <section>
             <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.lockups.title}</h3>
             {t.lockups.desc && <p className="text-lg text-gray-600 mb-6 max-w-3xl">{t.lockups.desc}</p>}
             <DownloadableImage src="https://i.postimg.cc/brF622YS/Lockups.png" alt="Lockups" />
          </section>
      </div>

      {/* Slogans */}
      <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold mb-6 text-[#0061ff]">{t.slogans.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
              {t.slogans.list.map((slogan, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-gray-700 text-sm border border-blue-50/50">
                      {slogan}
                  </div>
              ))}
          </div>
      </section>

      {/* Co-branding */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.cobranding.title}</h3>
          <DownloadableImage src="https://i.postimg.cc/T2kNsBV7/文字类logo.png" alt={t.cobranding.title} />
      </section>

      {/* Social Media */}
      <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.social.title}</h3>
          <p className="text-lg text-gray-600 mb-6">{t.social.desc}</p>
          <ul className="list-disc list-outside ml-5 text-gray-600 mb-8 space-y-2 text-lg">
             {t.social.items.map((item, i) => (
                 <li key={i}>{item}</li>
             ))}
          </ul>
          
          <div className="space-y-12">
              <DownloadableImage src="https://i.postimg.cc/NGNCnZ8t/Social_Icon1.png" alt="Social Icons" />
              
              <div>
                  <p className="text-lg text-gray-600 mb-6">{t.social.construction}</p>
                  <DownloadableImage src="https://i.postimg.cc/NGNCnZ8G/Social_icon_construction.png" alt="Icon Construction" />
              </div>

              <div>
                   <DownloadableImage src="https://i.postimg.cc/v8P2KCr2/Logo_in_social_media_platforms.png" alt="Platform Examples" />
              </div>
          </div>
      </section>
    </div>
  );
};