export type Language = 'en' | 'zh';

export type NavItemId = 
  | 'basics-logo' 
  | 'basics-color' 
  | 'basics-typography'
  | 'wordmark-logo' 
  | 'wordmark-symbol'
  | 'visual-graphic' 
  | 'visual-photography' 
  | 'visual-illustration'
  // Application IDs
  | 'app-business-card'
  | 'app-employee-card'
  | 'app-imagery'
  | 'app-plugin-logo'
  | 'app-deck-template'
  // Legacy/Other placeholders (kept to prevent breaking if referenced elsewhere briefly)
  | 'web-banner'
  | 'web-image'
  | 'app-logo'
  | 'app-usage'
  | 'app-image'
  | 'admin-icon'
  | 'other-ppt'
  | 'other-video';

export interface NavCategory {
  title: string;
  items: {
    id: NavItemId;
    label: string;
  }[];
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  description: string;
  items?: ContentItem[];
}

export interface ContentItem {
  type: 'text' | 'image' | 'grid' | 'color-palette' | 'typography-scale';
  content?: string;
  src?: string;
  caption?: string;
  colors?: ColorSwatch[];
  gridItems?: GridItem[];
}

export interface ColorSwatch {
  name: string;
  hex: string;
  pantone?: string;
  cmyk?: string;
  rgb?: string;
  textDark?: boolean; // if true, text on top should be dark
}

export interface GridItem {
  title: string;
  description?: string;
  image?: string;
  bgColor?: string; // for logo backgrounds
  isDark?: boolean;
}

export interface TranslationData {
  navCategories: NavCategory[];
  sections: Record<NavItemId, ContentSection>;
  common: {
    download: string;
    copyHex: string;
    copied: string;
    menu: string;
    switchLang: string;
  };
}