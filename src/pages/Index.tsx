
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Scene3D from '../components/Scene3D';
import LoadingScreen from '../components/LoadingScreen';
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import { useScrollSnap } from '../hooks/useScrollSnap';

const Index = () => {
  useScrollSnap();

  return (
    <ThemeProvider defaultTheme="system">
      <div className="relative min-h-screen bg-gradient-to-br from-background via-background/95 to-background overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* 3D Background */}
        <div className="fixed inset-0 z-0 opacity-60">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        
        <Suspense fallback={<LoadingScreen />}>
          <div />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default Index;
