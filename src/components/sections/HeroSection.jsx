import { useRef, useState, useEffect } from 'react';
import SideRays from '../animations/SideRays';
import BlurText from '../animations/BlurText';
import SpecularButton from '../animations/SpecularButton';
import Lanyard from '../animations/lanyard/Lanyard';
import profileImg from '../../assets/profile.jpg';
import backImg from '../../assets/back.jpg';

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-gray-900 flex items-start lg:items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SideRays />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-4 pb-0 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-12 lg:gap-8">
          {/* Mobile: Lanyard first, text second — Desktop: text left, lanyard right */}
          <div className="flex-1 w-full max-h-[600px] md:h-[550px] flex items-center justify-center relative z-10 lg:order-2">
            <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} backImage={profileImg} frontImage={backImg} lanyardWidth={isMobile ? 1 : 1.5} />
          </div>

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left space-y-3 md:space-y-6 lg:order-1 pb-20 md:pb-0">
            {/* Headline */}
            <div>
              <BlurText
                text="Hi, I'm Mochamad Eka Miharja"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight m-0 justify-center lg:justify-start"
                stepDuration={0.5}
              />
              <div className="mt-5">
                <BlurText
                  text="Tech Enthusiast"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-2xl md:text-3xl font-semibold text-gray-400 m-0 justify-center lg:justify-start"
                  stepDuration={0.4}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 pt-8 md:pt-0">
              I am an informatics engineering student driven by learning programming, specializing in creating modern web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2 md:gap-4 justify-center lg:justify-start pt-10 md:pt-0">
              <SpecularButton
                size={isMobile ? 'sm' : 'lg'}
                radius={9999}
                tint="#ffffff"
                tintOpacity={1}
                blur={0}
                textColor="#000000"
                lineColor="#404040"
                baseColor="#e5e5e5"
                intensity={1.5}
                shineSize={15}
                shineFade={35}
                thickness={1.5}
                speed={0.35}
                followMouse={true}
                proximity={250}
                autoAnimate={false}
                onClick={handleScrollToProjects}
              >
                View Projects
              </SpecularButton>

              <SpecularButton
                size={isMobile ? 'sm' : 'lg'}
                radius={9999}
                tint="#ffffff"
                tintOpacity={1}
                blur={0}
                textColor="#000000"
                lineColor="#404040"
                baseColor="#e5e5e5"
                intensity={1.5}
                shineSize={15}
                shineFade={35}
                thickness={1.5}
                speed={0.35}
                followMouse={true}
                proximity={250}
                autoAnimate={false}
                onClick={handleScrollToContact}
              >
                Contact Me
              </SpecularButton>
            </div>

            
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
