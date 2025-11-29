# 🚀 Founder Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*A modern, interactive portfolio showcasing full-stack development journey*

[🌐 Live Demo](#) • [📱 Features](#features) • [🛠️ Tech Stack](#tech-stack) • [🚀 Quick Start](#quick-start)

</div>

---

## ✨ Features

### 🎨 **Interactive UI/UX**
- **Responsive Design** - Pixel-perfect on all devices
- **Smooth Animations** - Buttery smooth transitions and micro-interactions
- **Dark Theme** - Modern cyberpunk-inspired design system
- **Dynamic Components** - Living, breathing interface elements

### 🌍 **Internationalization**
- **Multi-language Support** - English & Spanish
- **Smart Language Detection** - Automatic browser language detection
- **Seamless Switching** - Instant language toggle without reload

### 🎮 **Easter Eggs & Interactions**
- **Konami Code** - Hidden god mode activation 🎯
- **Console Messages** - Developer-friendly browser console
- **Hover Effects** - Delightful micro-interactions
- **Background Noise** - Subtle texture overlay for depth

### 📊 **Professional Showcase**
- **Timeline Experience** - Interactive career journey
- **Tech Stack Visualization** - Skills with experience levels
- **Project Portfolio** - Real-world project highlights
- **Contact Integration** - Direct communication channels

---

## 🛠️ Tech Stack

### **Frontend Architecture**
```typescript
React 19.2.0      // Latest React with Concurrent Features
TypeScript 5.9.3  // Type-safe development
Vite 7.2.4        // Lightning-fast build tool
TailwindCSS 4.1.17 // Utility-first CSS framework
```

### **Development Tools**
```json
{
  "i18n": "react-i18next",
  "linting": "ESLint 9 + TypeScript-ESLint",
  "bundler": "Vite with React plugin",
  "styling": "TailwindCSS + PostCSS",
  "types": "@types/react + @types/node"
}
```

### **Key Dependencies**
- **🌐 i18next** - Internationalization framework
- **🔍 Language Detector** - Browser language detection
- **⚡ Vite React Plugin** - Optimized React development
- **🎨 Tailwind PostCSS** - Advanced styling pipeline

---

## 🚀 Quick Start

### **Prerequisites**
```bash
Node.js >= 18.0.0
npm >= 8.0.0 or yarn >= 1.22.0
```

### **Installation**
```bash
# Clone the repository
git clone <your-repo-url>
cd founder

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev      # 🔥 Start development server
npm run build    # 📦 Build for production
npm run preview  # 👀 Preview production build
npm run lint     # 🔍 Run ESLint
```

---

## 🏗️ Project Structure

```
founder/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 assets/            # Images and media
│   ├── 📁 components/        # React components
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── Timeline.tsx      # Experience timeline
│   │   ├── TechStack.tsx     # Skills visualization
│   │   ├── ProjectMap.tsx    # Projects showcase
│   │   ├── Contact.tsx       # Contact form
│   │   └── ...               # Other components
│   ├── 📁 data/              # JSON data sources
│   │   ├── experiences.json  # Career history
│   │   ├── projects.json     # Portfolio projects
│   │   ├── skills.json       # Technical skills
│   │   └── profile.ts        # Type definitions
│   ├── 📁 hooks/             # Custom React hooks
│   │   └── useKonamiCode.ts  # Easter egg hook
│   ├── 📁 locales/           # i18n translations
│   │   ├── en.json          # English translations
│   │   └── es.json          # Spanish translations
│   ├── i18n.ts              # i18n configuration
│   └── App.tsx              # Main application
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tsconfig.json          # TypeScript config
├── 📄 tailwind.config.js     # TailwindCSS config
└── 📄 package.json           # Dependencies
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Cyberpunk Inspired */
--accent-cyan: #00f3ff      /* Primary accent */
--accent-purple: #8b5cf6    /* Secondary accent */
--dark-bg: #121212          /* Background */
--text-light: #f8f8f8       /* Primary text */
--text-muted: #a0a0a0       /* Secondary text */
```

### **Typography**
```css
/* Clean, modern font stack */
font-family: 'Inter', system-ui, -apple-system, sans-serif
```

### **Responsive Breakpoints**
```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large screens */
```

---

## 🎯 Features Deep Dive

### **Konami Code Easter Egg**
```typescript
// Try: ↑ ↑ ↓ ↓ ← → ← → B A
const useKonamiCode = () => {
  // Secret god mode activation!
  // Changes color scheme and shows alert
}
```

### **Multi-language Support**
```typescript
// Automatic language detection
const { t, i18n } = useTranslation();

// JSON-based translations
{
  "hero.title": "Full Stack Developer",
  "hero.subtitle": "Building digital experiences"
}
```

### **Type-Safe Data Management**
```typescript
interface Experience {
  role: string;
  roleEs?: string;
  company: string;
  technologies: string[];
  // ... fully typed
}
```

---

## 🔧 Configuration

### **Vite Configuration**
- **React Plugin** - Hot reload and fast refresh
- **TypeScript Support** - Built-in TS compilation
- **Path Aliases** - Clean import paths
- **Build Optimization** - Tree shaking and minification

### **ESLint Setup**
- **React Hooks Rules** - Best practices enforcement
- **TypeScript Integration** - Type-aware linting
- **React Refresh** - Development optimization

### **TailwindCSS**
- **PostCSS Integration** - Advanced processing
- **Custom Design System** - Consistent theming
- **Responsive Design** - Mobile-first approach

---

## 🚀 Deployment

### **Build & Deploy**
```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

### **Deployment Options**
- **Vercel** - Zero-config deployment
- **Netlify** - JAMstack hosting
- **GitHub Pages** - Free static hosting
- **AWS S3** - Scalable cloud hosting

---

## 📈 Performance

- **⚡ Vite HMR** - Instant hot reload
- **🔄 Code Splitting** - Lazy loading optimization
- **📦 Tree Shaking** - Minimal bundle size
- **🎨 CSS Optimization** - PurgeCSS integration
- **🖼️ Asset Optimization** - Image compression

---

## 🤝 Contributing

```bash
# Fork the project
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m 'Add some AmazingFeature'

# Push to the branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🎉 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing fast build tool
- **Tailwind Team** - For the incredible CSS framework
- **i18next** - For internationalization made easy

---

<div align="center">

**[⭐ Star this repo](https://github.com/your-username/founder) if you found it helpful!**

*Made with 💙 and lots of ☕*

</div>