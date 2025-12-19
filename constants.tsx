import { TranslationData } from './types';

export const SHOPLINE_BLUE = '#0061ff';
export const SHOPLINE_LOGO_URL = 'https://i.postimg.cc/9XSTwTGX/SHOPLINE_LOGO.png';

export const DICTIONARY: Record<'en' | 'zh', TranslationData> = {
  en: {
    common: {
      download: "Download Asset",
      copyHex: "Copy HEX",
      copied: "Copied!",
      menu: "Menu",
      switchLang: "CN"
    },
    navCategories: [
      {
        title: "Basics",
        items: [
          { id: 'basics-logo', label: "Logo" },
          { id: 'basics-color', label: "Color" },
          { id: 'basics-typography', label: "Typography" }
        ]
      },
      {
        title: "Sub-brand",
        items: [
          { id: 'wordmark-logo', label: "Sub-brand Logo" },
          { id: 'wordmark-symbol', label: "Sub-brand Symbol" }
        ]
      },
      {
        title: "Visual Language",
        items: [
          { id: 'visual-graphic', label: "Graphic Devices" },
          { id: 'visual-photography', label: "Photography" },
          { id: 'visual-illustration', label: "Illustration" }
        ]
      },
      {
        title: "Application",
        items: [
          { id: 'app-business-card', label: "Business card" },
          { id: 'app-imagery', label: "Imagery" },
          { id: 'app-deck-template', label: "Deck template" }
        ]
      }
    ],
    sections: {
      'basics-logo': {
        title: "Our Logo",
        description: ""
      },
      'basics-color': {
        title: "Color",
        description: ""
      },
      'basics-typography': {
        title: "Typography",
        description: ""
      },
      'wordmark-logo': {
        title: "Sub-brand Logo",
        description: ""
      },
      'wordmark-symbol': {
        title: "Sub-brand Symbol",
        description: ""
      },
      'visual-graphic': {
        title: "Graphic Devices",
        description: ""
      },
      'visual-photography': {
        title: "Photography",
        description: ""
      },
      'visual-illustration': {
        title: "Illustration",
        description: ""
      },
      'app-business-card': {
        title: "Business Card",
        description: ""
      },
      'app-employee-card': {
        title: "Employee Card",
        description: ""
      },
      'app-imagery': {
        title: "Imagery",
        description: ""
      },
      'app-plugin-logo': {
        title: "Plugin Logo",
        description: ""
      },
      'app-deck-template': {
        title: "Deck Template",
        description: "This part of the Deck template is an exclusive visual tool for Shopline official website-related scenarios, primarily used for brand external display, business introduction, and cooperative communication. The template includes core modules such as brand identity, core business, product advantages, cooperation cases, and contact information. The style continues the brand's simple and premium visual tone, using a unified color system, font specifications, and layout logic to reinforce the core brand concept of 'Professional, Efficient, and Empowering Merchants'. Currently, the template is under optimization and updating. It will synchronously adapt to brand development and business upgrades, providing standardized and high-quality visual presentation support for various scenarios."
      },
      // Placeholders
      'web-banner': { title: "Website Banner", description: "" },
      'web-image': { title: "Image Guidelines", description: "" },
      'app-logo': { title: "Plugin Logo", description: "" },
      'app-usage': { title: "Plugin Logo Usage", description: "" },
      'app-image': { title: "Plugin Images", description: "" },
      'admin-icon': { title: "Admin Icons", description: "" },
      'other-ppt': { title: "PPT Template", description: "" },
      'other-video': { title: "Video Cover", description: "" }
    }
  },
  zh: {
    common: {
      download: "下载资源",
      copyHex: "复制 HEX",
      copied: "已复制!",
      menu: "菜单",
      switchLang: "EN"
    },
    navCategories: [
      {
        title: "基础知识",
        items: [
          { id: 'basics-logo', label: "标识" },
          { id: 'basics-color', label: "颜色" },
          { id: 'basics-typography', label: "字体与版式" }
        ]
      },
      {
        title: "子品牌",
        items: [
          { id: 'wordmark-logo', label: "文字标志" },
          { id: 'wordmark-symbol', label: "图形标志" }
        ]
      },
      {
        title: "视觉语言",
        items: [
          { id: 'visual-graphic', label: "图形符号" },
          { id: 'visual-photography', label: "图片" },
          { id: 'visual-illustration', label: "插图" }
        ]
      },
      {
        title: "应用",
        items: [
          { id: 'app-business-card', label: "名片" },
          { id: 'app-employee-card', label: "员工卡" },
          { id: 'app-imagery', label: "配图规范" },
          { id: 'app-plugin-logo', label: "插件Logo规范" },
          { id: 'app-deck-template', label: "Deck 模版" }
        ]
      }
    ],
    sections: {
      'basics-logo': {
        title: "标识",
        description: ""
      },
      'basics-color': {
        title: "色彩体系",
        description: ""
      },
      'basics-typography': {
        title: "字体与版式",
        description: "好的排版可以使信息条理清晰。遵循我们的印刷标准 and 规范，您也可以做出精美的排版设计。"
      },
      'wordmark-logo': {
        title: "文字标志",
        description: ""
      },
      'wordmark-symbol': {
        title: "图形标志",
        description: ""
      },
      'visual-graphic': {
        title: "图形符号",
        description: ""
      },
      'visual-photography': {
        title: "图片",
        description: ""
      },
      'visual-illustration': {
        title: "插图",
        description: ""
      },
      'app-business-card': {
        title: "名片",
        description: ""
      },
      'app-employee-card': {
        title: "员工卡",
        description: ""
      },
      'app-imagery': {
        title: "配图规范",
        description: ""
      },
      'app-plugin-logo': {
        title: "插件Logo规范",
        description: ""
      },
      'app-deck-template': {
        title: "Deck 模版",
        description: "本部分Deck模板为Shopline官网相关场景专属视觉工具，核心用于品牌对外展示、业务介绍及合作沟通等场景。模板包含品牌标识、核心业务、产品优势、合作案例、联系方式等核心模块，风格延续品牌简约高级的视觉调性，以统一的色彩体系、字体规范与版式逻辑，强化“专业、高效、赋能商家”的品牌核心概念。目前模板处于优化更新中，将同步适配品牌发展与业务升级，为各类场景提供标准化、高品质的视觉呈现支持。"
      },
      'web-banner': { title: "官网Banner设计规范", description: "" },
      'web-image': { title: "配图规范", description: "" },
      'app-logo': { title: "插件Logo规范", description: "" },
      'app-usage': { title: "插件Logo的使用场景", description: "" },
      'app-image': { title: "插件图片规范", description: "" },
      'admin-icon': { title: "图标", description: "" },
      'other-ppt': { title: "PPT模版", description: "" },
      'other-video': { title: "视频封面规范", description: "" }
    }
  }
};

export const COLOR_PALETTE = {
  primary: [
    { name: 'SHOPLINE Blue', hex: '#0061FF', pantone: 'PMS 2728 C', cmyk: '90 60 0 0', textDark: false },
  ],
  neutrals: [
    { name: 'Black', hex: '#111111', textDark: false },
    { name: 'Dark Grey', hex: '#333333', textDark: false },
    { name: 'Grey', hex: '#888888', textDark: false },
    { name: 'Light Grey', hex: '#F5F5F5', textDark: true },
    { name: 'White', hex: '#FFFFFF', textDark: true, border: true },
  ],
  secondary: [
    { name: 'Success Green', hex: '#00C853', textDark: false },
    { name: 'Warning Yellow', hex: '#FFAB00', textDark: true },
    { name: 'Error Red', hex: '#FF3D00', textDark: false },
  ]
};