export const letters = [
  { char: "H", img: "images/sass.png", rotate: "hero-rotate-left" },
  { char: "e", img: "images/react.png", rotate: "hero-rotate-right" },
  { char: "l", img: "images/typescript.png", rotate: "hero-rotate-left" },
  { char: "l", img: "images/vite.png", rotate: "hero-rotate-right" },
  { char: "o", img: "images/api.png", rotate: "hero-rotate-left" },
];

export const professionTexts = ["Personal", "React Scss", "Api connect"];

export const aboutText = `這是一個我以 React(typescript) 與 純 SCSS 從零開發完成的個人網站。

在開發過程中，我完全沒有使用任何現成的 CSS 框架（如 Tailwind、Bootstrap、Shadcn 等），
而是透過 手刻 SCSS 的方式自行建立整套樣式系統，
包含版面排版、色彩變數、RWD 響應式設計與動畫效果等，皆由我使用scss進行實作。
雖然這樣的做法需要更多時間與調整，但能讓我更深入理解樣式架構，
同時確保程式結構清晰、易於維護，並與元件邏輯緊密結合。

在初版完成後，我運用 Claude.ai 協助檢視與微調程式碼，
針對互動細節、排版比例及可讀性進行優化，
讓整體在視覺與結構之間取得更好的平衡。

整體而言，這個專案展現了我在前端開發中從零構建與獨立設計的能力，
也進一步強化了我對 CSS 架構與 SCSS 模組化 的掌握。

以下將分享我在其餘專案中安排的實作內容與主要學習重點。`;

export const socialIcons = [
  { icon: "bx bxl-react" },
  { icon: "bx bxl-sass" },
  { icon: "bx bxl-typescript" },
];

export const skillCards = [
  {
    icon: "bx bxs-file-css",
    title: "CSS",
    description:
      "過去專案多以 Tailwind CSS 為主，後續因貴公司前端職缺對 SCSS 的需求，開始重新精進原生 CSS 與 SCSS 的語法與結構，並以此為契機，手刻完成自我介紹網站的整體樣式設計。",
    projectCount: 4,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: "bx bx-transfer-alt",
    title: "API",
    description:
      "具備與後端 RESTful API 串接的實務經驗，主要使用 Axios 進行資料請求與回應處理。本網站亦透過 Axios 串接 Email API，使用者填寫表單後，相關資訊將自動寄送至我的信箱。",
    projectCount: 2,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: "bx bxl-react",
    title: "Front-End Dev",
    description:
      "前端是我較擅長的領域，主要使用 React 進行開發，具備單頁應用（SPA）架構與 Redux 狀態管理的實作經驗。目前的個人網站亦是以純前端 React(Typescript) 完成。",
    projectCount: 4,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: "bx bxs-devices",
    title: "RWD",
    description:
      "在自我介紹專案中，我使用 SCSS 從零手刻響應式設計，涵蓋排版、色彩與媒體查詢設定，完全不依賴框架，以更靈活掌控細節並深入理解 RWD 原理。至於其他專案，我就改用 Tailwind CSS 來處理 RWD，這樣在開發速度和一致性上都更有效率，也能快速調整設計細節。",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
  {
    icon: "bx bxl-nodejs",
    title: "Back-End Dev",
    description:
      "我學習後端的主要動機，是希望更深入了解前後端如何透過 API 進行串接。因此我嘗試使用 Express.js、Node.js 與 MongoDB 實作出後端的登入、註冊以及 CRUD 功能的 API。",
    projectCount: 1,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
  {
    icon: "bx bxl-github",
    title: "Git Version Control",
    description:
      "部署個人作品時，先將專案上傳至 GitHub 進行版本管理；每次修改後透過 Commit 與 Push 更新程式碼，再重新部署以維持最新版本。",
    projectCount: 2,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
];
