import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface ImagerySectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    composition: {
      title: "Composition requirements",
      list: [
        "Use the interface and picture cards as the visual body;",
        "The key elements/icons to be highlighted in the text are displayed in a cascading way;",
        "The typographic layout can refer to the triangular composition method so that the relationship between the elements is coordinated and balanced."
      ],
      caption: "The topmost key elements form a solid triangular relationship.",
      images: [
        "https://i.postimg.cc/9FyV6sMH/Group_3557246.png",
        "https://i.postimg.cc/28nmsg6R/Group_3557247.png"
      ]
    },
    imageSelection: {
      title: "Image Selection",
      list: [
        "Involving characters: in the scenario picture, choose the picture of the local race according to the region; if it is the product picture or the interface display picture of the characters do not do the requirements;",
        "Warm color is the main, if the color tone is not right, you can go to PS or Figma's image editor to adjust;",
        "When it comes to function screenshots: use the real page to simplify the processing, maintain the accuracy of the function, and at the same time ensure the simplicity of the picture;",
        "Involving commodity pictures: Because most of our merchants are boutique station types, we suggest using commodity pictures with a sense of quality."
      ],
      examples: [
        {
          src: "https://i.postimg.cc/MZCqrzzh/Group_7069.png",
          caption: "Sample 1: Characters used in conjunction with the interface - Scenario-based expression, easy to understand."
        },
        {
          src: "https://i.postimg.cc/7YSDFjLR/img_6.png",
          caption: "Sample 2: Pure Interface - Highlighting Functional Value"
        },
        {
          src: "https://i.postimg.cc/nVypwnnq/img_3.png",
          caption: "Sample 3: Pure Interface - Highlighting Featured Functions"
        }
      ]
    },
    icons: {
      title: "Iconography",
      desc: "In terms of icon presentation, please use faceted icons to ensure consistency in icon visual size, complexity, and style; Use blue and orange gradients for color matching, if you need to show a special icon then another color matching.",
      examples: [
        {
          src: "https://i.postimg.cc/Df9nY77R/Frame_9645.png",
          caption: "Reference Sample 1: Antiwhite Icon + Dark Background"
        },
        {
          src: "https://i.postimg.cc/44DsFXXB/Frame_9647.png",
          caption: "Reference Sample 2: Theme Color Icon + Light Background"
        },
        {
          src: "https://i.postimg.cc/bN1874vB/Frame_3557199.png",
          caption: "Reference Sample 3: Special icons — Atmosphere rendering or Brand Logo"
        }
      ]
    },
    shadows: {
      title: "Elemental projection",
      desc: "There are two projections available in the current specification, which can be chosen freely according to the element hierarchy; they can also be configured individually on a case-by-case basis.",
      items: [
        {
          src: "https://i.postimg.cc/qBP4Zppw/Frame_3557266.png",
          color: "#474F6C",
          opacity: "15%"
        },
        {
          src: "https://i.postimg.cc/Qxcs2vtx/Frame_3557267.png",
          color: "#434965",
          opacity: "20%"
        }
      ]
    },
    typography: {
      title: "Typeface",
      desc: "Fonts are standardized using Roboto fonts; If you want to use it in the C interface, you can follow the fonts in the interface, as shown in the example below.",
      image: "https://i.postimg.cc/fWGDgMMF/pic1.png"
    }
  },
  zh: {
    composition: {
      title: "构图要求",
      list: [
        "用界面、图片卡片作为视觉主体；",
        "文案中要突出的关键元素/icon用层叠方式展示；",
        "排版布局可参考三角构图法，让元素间关系协调平衡。"
      ],
      caption: "最上层的关键元素形成稳固三角关系",
      images: [
        "https://i.postimg.cc/9FyV6sMH/Group_3557246.png",
        "https://i.postimg.cc/28nmsg6R/Group_3557247.png"
      ]
    },
    imageSelection: {
      title: "图片选择",
      list: [
        "涉及人物：在场景化的图片中，根据投放地区选用当地人种的图片；如果是商品图或者界面展示图中的人物不做要求；",
        "以暖色调为主，如色调不对，可以去PS或Figma自带的图片编辑器中调节；",
        "涉及到功能截图：用真实页面做简化处理，保持功能准确性的同时也保证配图的简洁性；",
        "涉及到商品图：因为我们的商家多数是精品站类型，建议选用有品质感的商品图。"
      ],
      examples: [
        {
          src: "https://i.postimg.cc/MZCqrzzh/Group_7069.png",
          caption: "参考样例1：人物与界面搭配使用——场景化表达，易于理解"
        },
        {
          src: "https://i.postimg.cc/7YSDFjLR/img_6.png",
          caption: "参考样例2：纯界面——突出功能价值"
        },
        {
          src: "https://i.postimg.cc/nVypwnnq/img_3.png",
          caption: "参考样例3：纯界面——突出特色功能"
        }
      ]
    },
    icons: {
      title: "图标设计准则",
      desc: "在配图的icon表现手法上，请使用面性图标，保证图标视觉大小、繁简程度和风格的一致性；配色使用蓝色和橙色渐变，如需表现特殊icon再另外配色。",
      examples: [
        {
          src: "https://i.postimg.cc/Df9nY77R/Frame_9645.png",
          caption: "参考样例1：反白图标+深色背景"
        },
        {
          src: "https://i.postimg.cc/44DsFXXB/Frame_9647.png",
          caption: "参考样例2：主题色图标+浅色背景"
        },
        {
          src: "https://i.postimg.cc/bN1874vB/Frame_3557199.png",
          caption: "参考样例3：特殊图标——渲染气氛 或 品牌Logo"
        }
      ]
    },
    shadows: {
      title: "元素投影",
      desc: "目前规范中有两种投影可供选择，可以根据元素层级关系；自由选择，也可以根据具体情况单独配置。",
      items: [
        {
          src: "https://i.postimg.cc/qBP4Zppw/Frame_3557266.png",
          color: "#474F6C",
          opacity: "15%"
        },
        {
          src: "https://i.postimg.cc/Qxcs2vtx/Frame_3557267.png",
          color: "#434965",
          opacity: "20%"
        }
      ]
    },
    typography: {
      title: "字体",
      desc: "字体统一使用 Roboto 字体；如需使用到C端界面，可沿用界面中的字体，如下图示例。",
      image: "https://i.postimg.cc/fWGDgMMF/pic1.png"
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

export const ImagerySection: React.FC<ImagerySectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Composition Requirements */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.composition.title}</h2>
        <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 text-lg">
          {t.composition.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-6">
          {t.composition.images.map((img, i) => (
            <DownloadableImage key={i} src={img} alt={`Composition ${i + 1}`} />
          ))}
        </div>
        <p className="text-gray-500 font-medium">{t.composition.caption}</p>
      </section>

      {/* Image Selection */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-900">{t.imageSelection.title}</h2>
        <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 text-lg">
          {t.imageSelection.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="space-y-12">
          {t.imageSelection.examples.map((ex, i) => (
            <div key={i} className="space-y-4">
              <DownloadableImage src={ex.src} alt={`Example ${i + 1}`} />
              <p className="text-gray-600 font-medium">{ex.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Icon Design Principles */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-900">{t.icons.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl">{t.icons.desc}</p>
        <div className="space-y-12">
          {t.icons.examples.map((ex, i) => (
            <div key={i} className="space-y-4">
              <DownloadableImage src={ex.src} alt={`Icon Example ${i + 1}`} />
              <p className="text-gray-600 font-medium">{ex.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Element Shadows */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-900">{t.shadows.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl">{t.shadows.desc}</p>
        <div className="grid md:grid-cols-2 gap-12">
          {t.shadows.items.map((item, i) => (
            <div key={i} className="space-y-6">
              <DownloadableImage src={item.src} alt={`Shadow ${i + 1}`} />
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div 
                  className="w-12 h-12 rounded-lg shadow-sm border border-gray-200"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <div className="font-mono text-sm font-bold text-gray-900">Color : {item.color}</div>
                  <div className="font-mono text-sm text-gray-500">Opacity : {item.opacity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.typography.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl">{t.typography.desc}</p>
        <DownloadableImage src={t.typography.image} alt="Typography Example" />
      </section>
    </div>
  );
};
