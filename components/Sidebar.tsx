import React from 'react';
import { NavItemId, TranslationData } from '../types';

interface SidebarProps {
  activeTab: NavItemId;
  onTabChange: (tab: NavItemId) => void;
  data: TranslationData;
  isOpenMobile: boolean;
  closeMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, data, isOpenMobile, closeMobile }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-screen w-72 bg-gray-50 border-r border-gray-200 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:top-[72px] md:h-[calc(100vh-72px)]
          overflow-y-auto
        `}
      >
        <div className="p-6 md:pt-8 flex flex-col gap-10">
          {data.navCategories.map((category, index) => (
            <div key={index} className="flex flex-col">
              {/* Category Title with increased bottom margin to differentiate from item spacing */}
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">
                {category.title}
              </div>
              
              {/* Items Container with tight spacing */}
              <div className="flex flex-col gap-[2px]">
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      closeMobile();
                    }}
                    className={`
                      relative px-3 py-1.5 text-left text-[14px] rounded-md transition-all duration-200
                      group flex items-center justify-between
                      ${activeTab === item.id 
                        ? 'text-[#0061ff] bg-blue-100/80 font-bold shadow-sm' 
                        : 'text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-200/50'}
                    `}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom utility */}
        <div className="mt-auto px-6 pb-8">
           <div className="p-4 bg-white rounded-md border border-gray-100 shadow-sm mt-8">
              <p className="text-xs text-gray-400">Version 2.0</p>
              <p className="text-xs text-gray-300 mt-1">Last modified on Dec 18, 2025</p>
           </div>
        </div>
      </aside>
    </>
  );
};