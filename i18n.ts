import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "header.starOnGithub": "Star on GitHub",
      "header.title.part1": "@Bmonlive's",
      "header.title.part2": " Illumination Tool",
      "uploader.button": "Drag & Drop or Click to Upload",
      "uploader.subtext": "PNG, JPG, WEBP supported",
      "fixes.title": "Exposure Fixes",
      "presets.title": "Lighting Presets",
      "customPrompt.placeholder": "e.g., 'Add dramatic studio lighting...'",
      "customPrompt.button": "Illuminate",
      "downloadButton": "Download Image",
      "reuseButton": "Use as Input",
      "imageDisplay.original": "Original Image",
      "imageDisplay.edited": "Illuminated Image",
      "imageDisplay.originalPlaceholder": "Drag & drop an image here to start",
      "imageDisplay.editedPlaceholder": "Your AI-edited image will appear here",
      "imageDisplay.aiNote": "AI Note:",
      "error.prefix": "Error:",
      "error.uploadFirst": "Please upload an image first.",
      "error.readFile": "Failed to read image file.",
      "error.unknown": "An unknown error occurred.",
      "footer.text": "Powered by Google Gemini. App designed by a world-class senior frontend React engineer.",

      "presets.fixOverexposure.name": "Fix Overexposure",
      "presets.fixUnderexposure.name": "Fix Underexposure",
      "presets.balancedDR.name": "Balance Dynamic Range",
      "presets.naturalHDR.name": "Natural HDR",

      "presets.removeAllLight.name": "Remove All Light",
      "presets.frontalKeylight.name": "Frontal Keylight + Rim Light",
      "presets.threePoint.name": "Three-Point Lighting",
      "presets.rembrandt.name": "Rembrandt Lighting",
      "presets.split.name": "Split Lighting",
      "presets.butterfly.name": "Butterfly Lighting",
      "presets.loop.name": "Loop Lighting",
      "presets.clamshell.name": "Clamshell Lighting",
      "presets.lowAngle.name": "Low Angle Uplight",
      "presets.sideRim.name": "Side Rim Glow",
      "presets.spotlight.name": "High-Contrast Spotlight",
      "presets.softAmbient.name": "Soft Ambient Wash",
      "presets.dualTone.name": "Colored Dual-Tone",
    },
  },
  'zh-TW': {
    translation: {
      "header.starOnGithub": "給我一顆星",
      "header.title.part1": "B夢實況ㄉ",
      "header.title.part2": " 打光神器",
      "uploader.button": "點這邊上傳圖片",
      "uploader.subtext": "支援不同圖片格式。",
      "fixes.title": "修正曝光",
      "presets.title": "預設光影",
      "customPrompt.placeholder": "例如：'添加戲劇性的攝影棚燈光...'",
      "customPrompt.button": "照亮",
      "downloadButton": "下載圖片",
      "reuseButton": "再次編輯",
      "imageDisplay.original": "原始圖片",
      "imageDisplay.edited": "光影加強後的圖片",
      "imageDisplay.originalPlaceholder": "拖曳圖片到這邊",
      "imageDisplay.editedPlaceholder": "您經 AI 編輯的圖片將會顯示在此",
      "imageDisplay.aiNote": "AI 筆記：",
      "error.prefix": "錯誤：",
      "error.uploadFirst": "請先上傳一張圖片。",
      "error.readFile": "讀取圖片檔案失敗。",
      "error.unknown": "發生未知錯誤。",
      "footer.text": "由 Google Gemini 技術提供。應用程式由世界級資深前端 React 工程師設計。我愛鐵托和蛋糕。",

      "presets.fixOverexposure.name": "修復過曝",
      "presets.fixUnderexposure.name": "修復曝光不足",
      "presets.balancedDR.name": "平衡動態範圍",
      "presets.naturalHDR.name": "自然HDR效果",

      "presets.removeAllLight.name": "移除所有光線",
      "presets.frontalKeylight.name": "正面主光 + 自然輪廓光",
      "presets.threePoint.name": "經典三點光",
      "presets.rembrandt.name": "林布蘭光",
      "presets.split.name": "分割光",
      "presets.butterfly.name": "蝴蝶光",
      "presets.loop.name": "環形光",
      "presets.clamshell.name": "蚌殼光",
      "presets.lowAngle.name": "低角度上照光",
      "presets.sideRim.name": "側面輪廓光",
      "presets.spotlight.name": "高對比聚光燈",
      "presets.softAmbient.name": "柔和環境光",
      "presets.dualTone.name": "雙色調光",
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;