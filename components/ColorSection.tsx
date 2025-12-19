import React, { useState } from 'react';
import { ColorSwatch, Language } from '../types';
import { Check, Copy, Download, File as FileIcon, X } from 'lucide-react';

interface ColorSectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    downloadTitle: "Color Assets",
    intro: "Our color palette has always revolved around our core brand Midnight Blue. Additional new colors like Blue Ribbon and Flamenco provide a punch of brightness and energy.",
    titles: {
      palette: "Color Palette",
      primary: "Primary Colors",
      primaryDesc: "Midnight Blue for logo only.",
      secondary: "Secondary Colors",
      secondaryDesc: "Our secondary colour palette was designed to complement our primary color. Applying our brand color palette will build brand awareness by creating a strong connection cross all of our brand touchpoints.",
      neutral: "Neutral Colors",
      neutralDesc: "Mainly used for grayscale or background text colors.",
      sea: "Cross-border & SEA Markets",
      seaDesc: "Common colors for Cross-border and Southeast Asia markets.",
      illustration: "Illustration Colors",
      illustrationDesc: "Common colors for illustrations.",
      hktw: "Commonly used colours in Hong Kong and Taiwan markets",
      hktwDesc: "Our secondary palette contains a variety of colours to keep the palette fresh and interesting.",
      special: "Special Colors",
      specialDesc: "Only for illustrations that need to be colour-coordinated and for designs that require colour and opacity changes.",
      proportions: "Colour ratio",
      proportionsDesc: "The colour scale chart serves as a guide to establish a hierarchy of shades. \n\nThe size of the colour indicates its importance and frequency of use. The visual hierarchy represents three levels of colour: primary, secondary and special.",
      filling: "Colour usage",
      application: "Colour in imagery"
    },
    examples: {
      correct: "Correct",
      incorrect: "Incorrect",
      c1: "Graphics: Used branded expanded colour for background and large fill colour.\nText: Used only white text on a dark background.",
      c2: "Graphics: Large fill colour using important brand expansion colours, small fill colour using secondary colours\nText: Dark blue brand colour text on a light background.",
      i1: "Graphics: The background colour is not in sync with the graphic colour. We recommend using contrasting shades or the same colour scheme.\nText: Don’t use font colours similar to the background colour.",
      i2: "Graphic: Avoid using bright colours to fill large backgrounds. Don't choose harsh or contrasting colours for the background colour.\nText: Don't match your colours."
    },
    captions: {
      photo: "Photography",
      illu: "Illustration",
      art3d: "3D art"
    }
  },
  zh: {
    downloadTitle: "颜色资源下载",
    intro: "我们的配色方案一直以核心品牌色午夜蓝为中心. 新增的蓝丝带色和弗拉明戈色则为整体增添了一抹明亮和活力。",
    titles: {
      palette: "色彩体系",
      primary: "原色",
      primaryDesc: "仅限标志使用午夜蓝。",
      secondary: "辅助颜色",
      secondaryDesc: "你可以在任何设计中，使用以下辅助色。",
      neutral: "中性色",
      neutralDesc: "主要用于灰度，或底层文字颜色。",
      sea: "边境、东南亚市场常用颜色",
      seaDesc: "",
      illustration: "插画常用颜色",
      illustrationDesc: "",
      hktw: "港台市场常用颜色",
      hktwDesc: "我们的辅助调色板包含各种颜色，以保持色彩搭配的新鲜和有趣。",
      special: "特殊颜色",
      specialDesc: "仅用于需要同色调搭配的插图和需要改变色调和不透明度的设计。",
      proportions: "色彩使用比例",
      proportionsDesc: "这个色彩比例图提供了使用颜色时要遵循的层次结构. 颜色越大，越重要，使用频率梯度. 层次结构在视觉上反映了颜色的三个层次：主要、次要和特殊。",
      filling: "颜色灌装规范",
      application: "颜色实际应用"
    },
    examples: {
      correct: "正确使用示例",
      incorrect: "错误使用示例",
      c1: "图形颜色：背景和大面积填充颜色使用扩展品牌颜色. 文字颜色：背景调查仅使用白色文字。",
      c2: "图形颜色：大面积填充颜色使用重要品牌拓展颜色，小面积填充颜色使用次要颜色 文字颜色：浅色背景上使用深蓝色品牌颜色文字。",
      i1: "图形颜色：背景色与图形颜色搭配不协调，建议采用深浅对比，或同色系搭配. 文字颜色：不要使用与背景颜色相近的字体颜色。",
      i2: "图形颜色：避免使用鲜艳的颜色填充大背景. 不要选择刺眼或对比色作为背景颜色. 文字颜色：不要搭配自创颜色。"
    },
    captions: {
      photo: "评估摄影",
      illu: "评估插画",
      art3d: "评价3D艺术"
    }
  }
};

const PALETTES = {
  primary: [
    { name: 'Midnight', nameZh: '午夜', hex: '#00142d', rgb: '0, 20, 45', cmyk: '100, 55, 0, 80', pantone: '282U / 282C', textDark: false }
  ],
  secondary: [
    { name: 'Green Vogue', nameZh: '绿色时尚', hex: '#052855', rgb: '5, 40, 85', cmyk: '95, 55, 0, 65', pantone: '295U / 295C', textDark: false },
    { name: 'Athens Gray', nameZh: '雅典灰', hex: '#f7f8f9', rgb: '247, 248, 249', cmyk: '1, 0, 0, 2', pantone: 'Pending', textDark: true },
    { name: 'Blue Ribbon', nameZh: '蓝丝带', hex: '#0061ff', rgb: '0, 97, 255', cmyk: '80, 55, 0, 0', pantone: '2175U / 2387C', textDark: false },
    { name: 'Flamingo', nameZh: '弗拉明戈', hex: '#fe7200', rgb: '254, 114, 0', cmyk: '0, 55, 100, 0', pantone: '151U / 1505C', textDark: false },
  ],
  neutrals: [
    { name: 'Midnight', nameZh: '午夜', hex: '#00142d', rgb: '0, 20, 45', cmyk: '100, 55, 0, 80', textDark: false },
    { name: 'Big Stone', nameZh: '大石头', hex: '#1f3147', rgb: '31, 49, 71', cmyk: '56, 31, 0, 72', textDark: false },
    { name: 'Fjord', nameZh: '峡湾', hex: '#3e4d60', rgb: '62, 77, 96', cmyk: '35, 20, 0, 62', textDark: false },
    { name: 'Shuttle Gray', nameZh: '航天飞机灰', hex: '#5d6a7a', rgb: '93, 106, 122', cmyk: '24, 13, 0, 52', textDark: false },
    { name: 'Storm Gray', nameZh: '风暴灰', hex: '#7c808b', rgb: '124, 128, 139', cmyk: '11, 8, 0, 45', textDark: false },
    { name: 'Gray Chateau', nameZh: '格雷城堡', hex: '#929ba4', rgb: '146, 155, 164', cmyk: '11, 5, 0, 36', textDark: true },
    { name: 'Gray Chateau', nameZh: '格雷城堡', hex: '#b1b7be', rgb: '177, 183, 190', cmyk: '7, 4, 0, 25', textDark: true },
    { name: 'Athens Gray', nameZh: '雅典灰', hex: '#d0d3d8', rgb: '208, 211, 216', cmyk: '4, 2, 0, 15', textDark: true },
    { name: 'Athens Gray', nameZh: '雅典灰', hex: '#eff0f1', rgb: '239, 240, 241', cmyk: '1, 0, 0, 5', textDark: true },
    { name: 'White', nameZh: '白色的', hex: '#ffffff', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', textDark: true, border: true },
  ],
  sea: [
    { name: 'Denim', nameZh: '牛仔布', hex: '#1657d9', rgb: '22, 87, 217', cmyk: '90, 60, 0, 15', textDark: false },
    { name: 'Blue Ribbon', nameZh: '蓝丝带', hex: '#356dff', rgb: '53, 109, 255', cmyk: '79, 57, 0, 0', textDark: false },
    { name: 'Blue Ribbon', nameZh: '蓝丝带', hex: '#3a7dff', rgb: '58, 125, 255', cmyk: '77, 51, 0, 0', textDark: false },
    { name: 'Outrageous Orange', nameZh: '惊世骇俗的橙色', hex: '#f86140', rgb: '248, 97, 64', cmyk: '0, 61, 74, 3', textDark: false },
    { name: 'California', nameZh: '加利福尼亚州', hex: '#fe9e0f', rgb: '254, 158, 15', cmyk: '0, 38, 94, 0', textDark: true },
    { name: 'Shamrock', nameZh: '三叶草', hex: '#35c08e', rgb: '53, 192, 142', cmyk: '72, 0, 26, 25', textDark: true },
    { name: 'Granny Apple', nameZh: '苹果奶奶', hex: '#d6fae7', rgb: '214, 250, 231', cmyk: '14, 0, 8, 2', textDark: true },
    { name: 'Forget Me Not', nameZh: '勿忘我', hex: '#ffebe7', rgb: '255, 235, 231', cmyk: '0, 8, 9, 0', textDark: true },
    { name: 'Beach', nameZh: '沙滩', hex: '#ffedc9', rgb: '255, 237, 201', cmyk: '0, 7, 21, 0', textDark: true },
    { name: 'Beach 1', nameZh: '沙滩 1', hex: '#e2f0ff', rgb: '226, 240, 255', cmyk: '0, 7, 21, 0', textDark: true },
  ],
  illustration: [
    { name: 'Dodge Blue', nameZh: '道奇蓝', hex: '#2c98ff', rgb: '44, 152, 255', textDark: false },
    { name: 'Malibu', nameZh: '马里布', hex: '#70baff', rgb: '112, 186, 255', textDark: true },
    { name: 'Zumthor', nameZh: '祖姆托', hex: '#c2e1ff', rgb: '194, 225, 255', textDark: true },
    { name: 'Periwinkle', nameZh: '长春花', hex: '#97a9ff', rgb: '151, 169, 255', textDark: true },
    { name: 'Periwinkle 1', nameZh: '长春花 1', hex: '#c2ccff', rgb: '194, 204, 255', textDark: true },
    { name: 'Periwinkle', nameZh: '长春花', hex: '#ebeeff', rgb: '235, 238, 255', textDark: true },
    { name: 'Picton Blue', nameZh: '皮克顿蓝', hex: '#32cce6', rgb: '50, 204, 230', textDark: true },
    { name: 'Charlotte', nameZh: '夏洛特', hex: '#a4e8f4', rgb: '164, 232, 244', textDark: true },
    { name: 'Charlotte', nameZh: '夏洛特', hex: '#dbf6fb', rgb: '219, 246, 251', textDark: true },
    { name: 'Shamrock', nameZh: '三叶草', hex: '#52dca5', rgb: '82, 220, 165', textDark: true },
    { name: 'Magic Mint', nameZh: '魔法薄荷', hex: '#88e7c1', rgb: '136, 231, 193', textDark: true },
    { name: 'White Ice', nameZh: '白冰', hex: '#ccf5e4', rgb: '204, 245, 228', textDark: true },
    { name: 'Dandelion', nameZh: '蒲公英', hex: '#ffd75c', rgb: '255, 215, 92', textDark: true },
    { name: 'Crème Brulee', nameZh: '焦糖布丁', hex: '#ffe699', rgb: '255, 230, 153', textDark: true },
    { name: 'White Barley', nameZh: '白大麦', hex: '#fff5d6', rgb: '255, 245, 214', textDark: true },
    { name: 'Texas Rose', nameZh: '德州玫瑰', hex: '#ffa457', rgb: '255, 164, 87', textDark: true },
    { name: 'Peach Orange', nameZh: '桃橙', hex: '#ffc999', rgb: '255, 201, 153', textDark: true },
    { name: 'Karry', nameZh: '卡里', hex: '#ffe9d6', rgb: '255, 233, 214', textDark: true },
    { name: 'Bittersweet', nameZh: '苦乐参半', hex: '#f9806e', rgb: '249, 128, 110', textDark: false },
    { name: 'Rose Bud', nameZh: '玫瑰花蕾', hex: '#fcbbb1', rgb: '252, 187, 177', textDark: true },
    { name: 'Cinderella', nameZh: '灰姑娘', hex: '#fdddd8', rgb: '253, 221, 216', textDark: true },
  ],
  hktw: [
    { name: 'Spindle', nameZh: '主轴', hex: '#afcde6', rgb: '175, 205, 230', cmyk: '24, 11, 0, 10', textDark: true },
    { name: 'Toney Pink', nameZh: '托尼·平克', hex: '#eaa795', rgb: '234, 167, 149', cmyk: '0, 29, 36, 8', textDark: true },
    { name: 'Chalky', nameZh: '粉笔', hex: '#efd593', rgb: '239, 213, 147', cmyk: '0, 11, 38, 6', textDark: true },
    { name: 'Fringy Flower', nameZh: '流苏花', hex: '#a1d9ac', rgb: '161, 217, 172', cmyk: '26, 0, 21, 15', textDark: true },
    { name: 'Portage', nameZh: '波蒂奇', hex: '#92a2f1', rgb: '146, 162, 241', cmyk: '39, 33, 0, 5', textDark: true },
  ],
  special: [
    { name: 'Cornflower Blue', nameZh: '矢车菊蓝', hex: '#538be5', rgb: '83, 139, 229', cmyk: '64, 39, 0, 10', textDark: false },
    { name: 'Hawkes Blue', nameZh: '霍克斯蓝', hex: '#bed5fa', rgb: '190, 213, 250', cmyk: '24, 15, 0, 2', textDark: true },
    { name: 'Link Water', nameZh: '链接水', hex: '#e6edfa', rgb: '230, 237, 250', cmyk: '8, 5, 0, 2', textDark: true },
    { name: 'Porsche', nameZh: '保时捷', hex: '#e59453', rgb: '229, 148, 83', cmyk: '0, 35, 64, 10', textDark: true },
    { name: 'Apricot Peach', nameZh: '杏桃', hex: '#fad9be', rgb: '250, 217, 190', cmyk: '0, 13, 24, 2', textDark: true },
    { name: 'Linen', nameZh: '亚麻布', hex: '#faefe6', rgb: '250, 239, 230', cmyk: '0, 4, 8, 2', textDark: true },
    { name: 'New York Pink', nameZh: '纽约粉红', hex: '#dc8888', rgb: '220, 136, 136', cmyk: '0, 38, 38, 14', textDark: true },
    { name: 'Zinnwaldite', nameZh: '锌瓦尔迪特', hex: '#efc7bc', rgb: '239, 199, 188', cmyk: '0, 17, 21, 6', textDark: true },
    { name: 'Zinnwaldite 1', nameZh: '锌瓦尔迪石 1', hex: '#f4e6e3', rgb: '244, 230, 227', cmyk: '0, 17, 21, 6', textDark: true },
    { name: 'Indian Khaki', nameZh: '印度卡其布', hex: '#c1a88a', rgb: '193, 168, 138', cmyk: '0, 13, 28, 24', textDark: true },
    { name: 'Sidecar', nameZh: '边车', hex: '#f2e2bb', rgb: '242, 226, 187', cmyk: '0, 7, 23, 5', textDark: true },
    { name: 'Merino', nameZh: '美利奴羊毛', hex: '#f5efe2', rgb: '245, 239, 226', cmyk: '0, 2, 8, 4', textDark: true },
    { name: 'Silver Tree', nameZh: '银树', hex: '#8ac0a0', rgb: '138, 192, 160', cmyk: '28, 0, 17, 25', textDark: true },
    { name: 'Padua', nameZh: '帕多瓦', hex: '#c1ecd3', rgb: '193, 236, 211', cmyk: '18, 0, 11, 7', textDark: true },
    { name: 'Panache', nameZh: '风度', hex: '#e4f3ea', rgb: '228, 243, 234', cmyk: '6, 0, 4, 5', textDark: true },
    { name: 'Horizon', nameZh: '地平线', hex: '#618ca9', rgb: '97, 140, 169', cmyk: '43, 17, 0, 34', textDark: true },
    { name: 'Spindle', nameZh: '主轴', hex: '#cfe1f0', rgb: '207, 225, 240', cmyk: '14, 6, 0, 6', textDark: true },
    { name: 'Link Water', nameZh: '链接水', hex: '#eff5fa', rgb: '230, 237, 250', cmyk: '4, 2, 0, 2', textDark: true },
    { name: 'Blue Yonder', nameZh: '蔚蓝的远方', hex: '#737fba', rgb: '115, 127, 186', cmyk: '38, 32, 0, 27', textDark: true },
    { name: 'Perano', nameZh: '佩拉诺', hex: '#bac4f3', rgb: '186, 196, 243', cmyk: '23, 19, 0, 5', textDark: true },
    { name: 'Periwinkle Gray', nameZh: '长春花灰', hex: '#e2e5f5', rgb: '226, 229, 245', cmyk: '8, 7, 0, 4', textDark: true },
  ]
};

// --- Reusable Components ---

const SwatchCard: React.FC<{ swatch: any; lang: Language }> = ({ swatch, lang }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(swatch.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayName = lang === 'en' ? swatch.name : swatch.nameZh;

  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md hover:translate-y-[-2px]">
      <div 
        className="h-28 w-full flex items-end p-4 relative"
        style={{ 
          backgroundColor: swatch.hex,
          color: swatch.textDark ? '#000' : '#fff',
          borderBottom: swatch.border ? '1px solid #eee' : 'none'
        }}
      >
        <button 
          onClick={handleCopy}
          className={`
            absolute top-3 right-3 p-2 rounded-full transition-all
            ${swatch.textDark ? 'bg-black/10 hover:bg-black/20 text-black' : 'bg-white/20 hover:bg-white/30 text-white'}
            opacity-0 group-hover:opacity-100
          `}
          title="Copy HEX"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="bg-white p-4 flex flex-col gap-1">
        <div className="flex justify-between items-baseline">
          <h4 className="font-semibold text-gray-900 text-sm">{displayName}</h4>
          <span className="font-mono text-xs text-gray-400">{swatch.hex}</span>
        </div>
        <div className="space-y-0.5 mt-2">
           {swatch.rgb && <p className="text-[10px] text-gray-400 font-mono">RGB: {swatch.rgb}</p>}
           {swatch.cmyk && <p className="text-[10px] text-gray-400 font-mono">CMYK: {swatch.cmyk}</p>}
           {swatch.pantone && <p className="text-[10px] text-gray-400 font-mono">PMS: {swatch.pantone}</p>}
        </div>
      </div>
    </div>
  );
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

export const ColorSection: React.FC<ColorSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-16 animate-fadeIn pb-24">
      {/* Intro */}
      <section className="prose max-w-none">
        <p className="text-xl text-gray-500 mb-8 max-w-3xl">{t.intro}</p>
      </section>

      {/* Primary & Secondary */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.titles.palette}</h2>
        
        <div className="mb-6">
           <h3 className="text-xl font-bold text-gray-900">{t.titles.primary}</h3>
           <p className="text-lg text-gray-500 mt-1">{t.titles.primaryDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {PALETTES.primary.map(s => <SwatchCard key={s.hex} swatch={s} lang={lang} />)}
        </div>

        <div className="mb-6">
           <h3 className="text-xl font-bold text-gray-900">{t.titles.secondary}</h3>
           <p className="text-lg text-gray-500 mt-1 max-w-3xl">{t.titles.secondaryDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {PALETTES.secondary.map(s => <SwatchCard key={s.hex} swatch={s} lang={lang} />)}
        </div>
      </section>

      {/* Neutrals */}
      <section>
        <div className="mb-6">
           <h3 className="text-xl font-bold text-gray-900">{t.titles.neutral}</h3>
           <p className="text-lg text-gray-500 mt-1">{t.titles.neutralDesc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
           {PALETTES.neutrals.map(s => <SwatchCard key={s.hex} swatch={s} lang={lang} />)}
        </div>
      </section>

      {/* Market Specific */}
      <section>
         <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.titles.sea}</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
           {PALETTES.sea.map(s => <SwatchCard key={s.hex} swatch={s} lang={lang} />)}
        </div>
      </section>

      {/* Illustration */}
      <section>
         <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.titles.illustration}</h3>
         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
           {PALETTES.illustration.map(s => <SwatchCard key={s.hex + s.name} swatch={s} lang={lang} />)}
        </div>
      </section>

      {/* HK/TW & Special - Stacked vertically now */}
      <div className="space-y-12">
         <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.titles.hktw}</h3>
            <p className="text-lg text-gray-500 mb-6">{t.titles.hktwDesc}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PALETTES.hktw.map(s => <SwatchCard key={s.hex} swatch={s} lang={lang} />)}
            </div>
         </section>
         <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.titles.special}</h3>
            <p className="text-lg text-gray-500 mb-6">{t.titles.specialDesc}</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {PALETTES.special.map(s => <SwatchCard key={s.hex + s.name} swatch={s} lang={lang} />)}
            </div>
         </section>

         {/* Download Box - Moved Here */}
         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 not-prose">
             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t.downloadTitle}</h4>
             <FileDownload 
                href="https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/YLc8/guidelines-colors-20251211.zip" 
                label="SHOPLINE Color Palettes" 
                format="ZIP" 
             />
        </div>
      </div>

      {/* Usage Proportions */}
      <section className="pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.titles.proportions}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl whitespace-pre-line">{t.titles.proportionsDesc}</p>
          <DownloadableImage 
             src="https://i.postimg.cc/KzY9Vc4L/Usage_proportions2.png" 
             alt="Usage Proportions" 
             className="bg-white"
          />
      </section>

      {/* Filling Specs */}
      <section className="pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.titles.filling}</h3>
          <div className="space-y-12">
             
             {/* Examples Grid */}
             <div className="grid md:grid-cols-2 gap-12">
                
                {/* Correct 1 */}
                <div className="space-y-4">
                    <DownloadableImage src="https://i.postimg.cc/W349Kptz/Frame.png" alt="Correct Example 1" />
                    <div className="flex items-center gap-2 text-green-600 font-bold"><Check size={20} /> {t.examples.correct}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{t.examples.c1}</p>
                </div>

                {/* Correct 2 */}
                <div className="space-y-4">
                    <DownloadableImage src="https://i.postimg.cc/pTd07Vyh/Frame3.png" alt="Correct Example 2" />
                    <div className="flex items-center gap-2 text-green-600 font-bold"><Check size={20} /> {t.examples.correct}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{t.examples.c2}</p>
                </div>

                {/* Incorrect 1 */}
                <div className="space-y-4">
                    <DownloadableImage src="https://i.postimg.cc/3RwL6rWx/Frame65.png" alt="Incorrect Example 1" />
                    <div className="flex items-center gap-2 text-red-500 font-bold"><X size={20} /> {t.examples.incorrect}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{t.examples.i1}</p>
                </div>

                {/* Incorrect 2 */}
                <div className="space-y-4">
                    <DownloadableImage src="https://i.postimg.cc/QtM6PNV7/Frame5.png" alt="Incorrect Example 2" />
                    <div className="flex items-center gap-2 text-red-500 font-bold"><X size={20} /> {t.examples.incorrect}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{t.examples.i2}</p>
                </div>
             </div>
             
             <div className="pt-8">
                 <DownloadableImage src="https://i.postimg.cc/9F9gL2Vh/Coverage.png" alt="Color Coverage" />
             </div>
          </div>
      </section>

      {/* Actual Applications */}
      <section className="pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.titles.application}</h3>
          <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                  <DownloadableImage src="https://i.postimg.cc/QtM6PNVV/相册_(1).png" alt="Photography Application" />
                  <p className="text-sm font-medium text-gray-500">{t.captions.photo}</p>
              </div>
              <div className="space-y-2">
                  <DownloadableImage src="https://i.postimg.cc/MTGs4ZX6/插画.png" alt="Illustration Application" />
                  <p className="text-sm font-medium text-gray-500">{t.captions.illu}</p>
              </div>
              <div className="space-y-2">
                  <DownloadableImage src="https://i.postimg.cc/zBfdMD3B/3D.png" alt="3D Application" />
                  <p className="text-sm font-medium text-gray-500">{t.captions.art3d}</p>
              </div>
          </div>
      </section>

    </div>
  );
};