import { useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import ProjectMap from './components/ProjectMap';
import Nahomi from './components/Nahomi';
import Contact from './components/Contact';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useKonamiCode } from './hooks/useKonamiCode';

function App() {
  const godMode = useKonamiCode();

  useEffect(() => {
    console.log(
      '%c Hey there, fellow dev! 🚀',
      'font-size: 20px; font-weight: bold; color: #00f3ff; background: #121212; padding: 10px; border-radius: 5px;'
    );
    console.log(
      '%c Looking for the source code? Or maybe an easter egg? Try the Konami Code...',
      'font-size: 14px; color: #a0a0a0;'
    );
  }, []);

  useEffect(() => {
    if (godMode) {
      alert('GOD MODE ACTIVATED! 🎮 (Just kidding, but you found the easter egg!)');
      document.documentElement.style.setProperty('--accent-cyan', '#ff0000');
      document.documentElement.style.setProperty('--accent-purple', '#ffcc00');
    }
  }, [godMode]);

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <Hero />
      <Timeline />
      <TechStack />
      <ProjectMap />
      <Nahomi />
      <Contact />

      {/* Background Noise/Overlay if needed */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
    </div>
  )
}

export default App
