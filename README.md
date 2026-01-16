# React Profile - 個人作品集網站

一個以 **React (TypeScript)** 與 **純 SCSS** 從零開發的個人網站，完全不依賴任何 CSS 框架。

## 預覽

[Live Demo](https://your-demo-url.vercel.app)

## 技術棧

- **React 19** - UI 框架
- **TypeScript** - 靜態類型檢查
- **Vite** - 構建工具
- **SCSS** - 手工編寫樣式（無 Tailwind、Bootstrap 等框架）
- **EmailJS** - 郵件 API 串接
- **Axios** - HTTP 請求
- **Lucide React** - 圖標庫
- **React Hot Toast** - 通知提示

## 功能特色

### 主題切換

- 支援深色/淺色主題
- 使用 React Context 管理狀態
- localStorage 持久化使用者偏好

### Hero 區塊

- 動態標題：字母懸停時顯示技術棧圖標
- 副標題旋轉動畫：每 5 秒自動切換文案
- 可展開的「我的故事」個人介紹

### 技能卡片 (Skill-set)

- 6 個技能卡片：CSS、API、前端開發、RWD、後端開發、Figma
- 懸停顯示熟悉度星星
- 響應式網格佈局

### 聯絡表單

- 客戶端表單驗證
- EmailJS API 整合，自動發送郵件
- Toast 通知回饋（載入中、成功、失敗）

### 響應式設計

- 完全手刻 SCSS 媒體查詢
- 支援移動端、平板、桌面三種佈局
- 自訂滾動條樣式

## 專案結構

```
src/
├── components/          # React 元件
│   ├── Hero.tsx        # 主頁區塊
│   ├── Navbar.tsx      # 導覽列
│   ├── Services.tsx    # 技能卡片展示
│   ├── Contact.tsx     # 聯絡表單
│   ├── Loader.tsx      # 載入動畫
│   └── NavigationCircles.tsx
│
├── context/
│   └── ThemeContext.tsx # 主題狀態管理
│
├── data/
│   └── index.ts        # 靜態資料定義
│
├── styles/             # SCSS 樣式
│   ├── global.scss     # 全局樣式與主題變數
│   ├── navbar.scss
│   ├── hero.scss
│   ├── services.scss
│   ├── contact.scss
│   └── ...
│
├── App.tsx
└── main.tsx
```

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 生產構建

```bash
npm run build
```

### 預覽構建結果

```bash
npm run preview
```

## 部署

專案已配置 Vercel 部署設定（`vercel.json`）。

## 開發重點

- **零框架樣式**：深入理解 CSS 架構與 SCSS 模組化
- **TypeScript 嚴格模式**：確保類型安全
- **React Context**：輕量級狀態管理
- **API 整合**：完整的郵件服務流程
- **效能優化**：Vite 快速構建與代碼分割

## 作者

李承澤
