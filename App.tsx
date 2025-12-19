import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { DICTIONARY, SHOPLINE_LOGO_URL } from './constants';
import { Language, NavItemId } from './types';
import { Sidebar } from './components/Sidebar';
import { LanguageSwitch } from './components/LanguageSwitch';
import { LogoSection } from './components/LogoSection';
import { ColorSection } from './components/ColorSection';
import { TypographySection } from './components/TypographySection';
import { SubBrandSection } from './components/SubBrandSection';
import { SubBrandSymbolSection } from './components/SubBrandSymbolSection';
import { GraphicSection } from './components/GraphicSection';
import { PhotographySection } from './components/PhotographySection';
import { IllustrationSection } from './components/IllustrationSection';
import { BusinessCardSection } from './components/BusinessCardSection';
import { EmployeeCardSection } from './components/EmployeeCardSection';
import { ImagerySection } from './components/ImagerySection';
import { PluginLogoSection } from './components/PluginLogoSection';
import { DeckTemplateSection } from './components/DeckTemplateSection';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  // Set default to the first item of the new structure
  const [activeTab, setActiveTab] = useState<NavItemId>('basics-logo');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = DICTIONARY[lang];
  // Safe access to activeContent in case of switching langs where an ID might be missing temporarily (though constants handles this)
  const activeContent = t.sections[activeTab] || { title: "Content", description: "" };

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleLangToggle = () => {
    // If we are on a page that only exists in ZH and switch to EN, reset to home
    // Although currently we added placeholders in EN constants to prevent crash
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'basics-logo':
        return <LogoSection lang={lang} />;
      case 'basics-color':
        return <ColorSection lang={lang} />;
      case 'basics-typography':
        return <TypographySection lang={lang} />;
      case 'wordmark-logo':
        return <SubBrandSection lang={lang} />;
      case 'wordmark-symbol':
        return <SubBrandSymbolSection lang={lang} />;
      case 'visual-graphic':
        return <GraphicSection lang={lang} />;
      case 'visual-photography':
        return <PhotographySection lang={lang} />;
      case 'visual-illustration':
        return <IllustrationSection lang={lang} />;
      case 'app-business-card':
        return <BusinessCardSection lang={lang} />;
      case 'app-employee-card':
        return <EmployeeCardSection lang={lang} />;
      case 'app-imagery':
        return <ImagerySection lang={lang} />;
      case 'app-plugin-logo':
        return <PluginLogoSection lang={lang} />;
      case 'app-deck-template':
        return <DeckTemplateSection lang={lang} />;
      default:
        // Default content for new placeholders (Wordmark symbol, other visual elements)
        return (
            <div className="prose max-w-none text-gray-600 animate-fadeIn">
               <div className="bg-gray-50 rounded-2xl p-12 mb-8 border border-gray-100 flex items-center justify-center">
                   <span className="text-gray-400 italic">Visual asset placeholder for {activeContent.title}</span>
               </div>
               <p className="text-lg">{activeContent.description}</p>
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t.common.menu}
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img 
              src={SHOPLINE_LOGO_URL} 
              alt="SHOPLINE" 
              className="h-9 w-auto" 
            />
            <span className="hidden sm:block text-sm font-medium text-gray-400 tracking-wide uppercase pt-0.5">Brand Guidelines</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitch 
            currentLang={lang} 
            onToggle={handleLangToggle} 
            label={t.common.switchLang} 
          />
        </div>
      </header>

      {/* Main Container */}
      <div className="pt-[72px] flex w-full">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          data={t}
          isOpenMobile={mobileMenuOpen}
          closeMobile={() => setMobileMenuOpen(false)}
        />

        <main className="flex-1 min-w-0 px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 animate-fadeIn">
              {/* h1 size reduced from text-4xl/5xl to text-3xl/4xl as requested */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{activeContent.title}</h1>
              {activeContent.subtitle && (
                <p className="text-xl md:text-2xl text-gray-500 font-light">{activeContent.subtitle}</p>
              )}
              <div className="w-16 h-1 bg-[#0061ff] mt-8 rounded-full"></div>
              {activeContent.description && (
                <p className="mt-8 text-lg text-gray-600 max-w-3xl leading-relaxed">
                  {activeContent.description}
                </p>
              )}
            </div>

            {renderContent()}
            
            <footer className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
               <p>SHOPLINE-UED</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};