import React from 'react';
import { Language } from '../types';
import { Download } from 'lucide-react';

interface PhotographySectionProps {
  lang: Language;
}

const CONTENT = {
  en: {
    intro: "SHOPLINE uses images in a way that makes us stand out in the world of UI screenshots and illustrations. These images are designed to evoke empathy by using metaphors, making it easier for users to understand our product features.",
    portraits: {
      title: "Portraits",
      desc1: "When cropping and using portrait images, remember to leave space in the direction the person is facing and capture their natural breathing and vitality. Avoid cropping out the head, hands, feet, or other body parts that convey emotions.",
      desc2: "Choose medium and close-up shots for the scene, which display the character's movements, expressions and clothing details while considering the surrounding environment. Medium or close-up shots effectively convey emotions and values."
    },
    context: {
      title: "Contextualised images",
      desc: "Authenticity is crucial when selecting images to represent our user profiles. Observing a user's life is a way to conduct user profile research holistically. Hence, contextualised images can help us understand users’ lifestyle and values while capturing moments that represent their lives."
    },
    combination: {
      title: "Multiple image combination",
      desc: "When using a combination of images, make sure each photo has a consistent tone. This enhances the user's perception that the images belong together and have a shared aesthetic. Group pictures by matching people, objects and scenery to convey the intended message and concept."
    }
  },
  zh: {
    intro: "SHOPLINE 使用情景化图片的方式让我们在复杂的 UI 截图和矢量插图世界中脱颖而出。\n图片使用拟人化手法，让我们更容易产生共鸣。通过图片中的隐喻，我们将复杂的产品功能转化为易于阅读的内容，生动形象、清晰明了地传达给用户。",
    portraits: {
      title: "人像",
      desc1: "在人像图片裁切和使用中，需要给人物面向的方向留出一些空间，注重人物形象在图片中的呼吸感。\n避免裁切人像的头部、手和脚等能非常能传达人物情绪的身体部位。",
      desc2: "图片的景别，一般选用中景和近景。这种取景范围下，人物的形体动作、面部表情、衣着细节都能得到很好的展现，又同时能兼顾到周围的环境。所以中景或近景镜头下的模特或产品最能传达出我们的情绪与价值。"
    },
    context: {
      title: "情境化图片",
      desc: "通过图片去模拟我们的用户画像时，真实性至关重要。\n观察用户的生活是用户画像调研的一种方式。还原他们的生活场景是最真实、最能让人产生共鸣的一种方式。\n所以情景化图片是在深刻理解用户的生活方式与价值理念的同时，并尝试捕捉代表他们生活方式的时刻的图片。"
    },
    combination: {
      title: "多图组合",
      desc: "在图片组合使用的场景中，一定要让每张照片色调一致。这样能提升用户对这是一组图片的认知，和美观度。\n通常一组图片中，我们会搭配人、物、景三者共同传达出我们想表达的意向和理念。"
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

export const PhotographySection: React.FC<PhotographySectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <div className="space-y-24 animate-fadeIn pb-24">
      {/* Intro */}
      <section className="prose max-w-none">
        <p className="text-xl text-gray-500 max-w-4xl whitespace-pre-line">{t.intro}</p>
      </section>

      {/* Portraits */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.portraits.title}</h2>
        <div className="text-lg text-gray-600 max-w-4xl space-y-6">
            <p className="whitespace-pre-line">{t.portraits.desc1}</p>
            <p className="whitespace-pre-line">{t.portraits.desc2}</p>
        </div>
        <DownloadableImage src="https://i.postimg.cc/vH5PpBkB/Photographing_people.png" alt="Photographing People" />
      </section>

      {/* Contextualised Images */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t.context.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl leading-relaxed whitespace-pre-line">{t.context.desc}</p>
        <DownloadableImage src="https://i.postimg.cc/25y788cw/Genuine_and_inclusive_portraits.png" alt="Contextualised Portraits" />
      </section>

      {/* Multiple Image Combination */}
      <section className="space-y-12">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">{t.combination.title}</h2>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed whitespace-pre-line">{t.combination.desc}</p>
            <DownloadableImage src="https://i.postimg.cc/yxsJxL6s/Artful_scenes.png" alt="Artful Scenes" />
        </div>
        <div>
            <DownloadableImage src="https://i.postimg.cc/sXtk4LG3/Combine_Photography.png" alt="Combined Photography" />
        </div>
      </section>
    </div>
  );
};