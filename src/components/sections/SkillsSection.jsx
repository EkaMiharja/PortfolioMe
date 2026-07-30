import { useState, useEffect } from 'react';
import InfiniteMenu from '../animations/InfiniteMenu';
import BlurText from '../animations/BlurText';
import LightRays from '../animations/LightRays';
import { skills } from '../../data/skills';

const skillImages = import.meta.glob('/src/assets/imageskills/*', { eager: true });
const resolveSkillImage = (id) => {
  const key = `/src/assets/imageskills/skill${id}.jpg`;
  return skillImages[key]?.default || null;
};

const menuItems = skills.map(s => ({
  image: resolveSkillImage(s.id) || s.image,
  link: s.link,
  title: s.label,
  description: s.description,
}));

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="skills" className="relative pt-24 pb-32 md:pb-24 bg-gray-900 overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e9dd85c8"
          raysSpeed={1}
          lightSpread={isMobile ? 3.5 : 1.5}
          rayLength={isMobile ? 3.5 : 2.8}
          fadeDistance={isMobile ? 6 : 0.5}
          followMouse={false}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <BlurText
            text="Technical Expertise"
            delay={60}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl font-bold text-white tracking-tight m-0 justify-center"
            stepDuration={0.4}
          />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="w-full h-[580px]">
          <InfiniteMenu items={menuItems} scale={isMobile ? 1.2 : 1.2} showOverlay={true} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;