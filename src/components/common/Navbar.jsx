import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeHref, setActiveHref] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const navItemsRef = useRef(null);
  const navbarRef = useRef(null);

  const ease = 'power3.easeOut';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => ({
        href: item.href,
        el: document.querySelector(item.href),
      })).filter(s => s.el);

      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = '#home';
      for (const section of sections) {
        if (section.el.offsetTop <= scrollY) {
          current = section.href;
        }
      }
      setActiveHref(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    if (activeHref === NAV_ITEMS[i].href) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveHref(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseColor = scrolled ? '#f5f5f5' : '#ffffff';
  const pillColor = '#e5e5e5';
  const pillTextColor = '#171717';
  const hoveredPillTextColor = '#171717';

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': pillTextColor,
    '--nav-h': isMobile ? '26px' : '34px',
    '--pill-pad-x': isMobile ? '5px' : '10px',
    '--pill-gap': isMobile ? '1px' : '2px',
  };

  return (
    <div
      ref={navbarRef}
      className="fixed top-3 md:top-4 z-[1000] w-full flex justify-center px-2 md:px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center gap-1 md:gap-2 px-1.5 md:px-2 py-1 rounded-full transition-all duration-300 overflow-x-auto ${
          scrolled
            ? 'shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md bg-white/80 border border-gray-200/60'
            : 'shadow-[0_2px_12px_rgba(0,0,0,0.04)] bg-white/70 border border-gray-200/60 backdrop-blur-sm'
        }`}
        aria-label="Primary navigation"
        style={cssVars}
      >
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full flex"
          style={{ height: 'var(--nav-h)', background: 'var(--base)' }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full max-w-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle = {
                background: isActive ? 'var(--pill-bg)' : 'transparent',
                color: isActive ? 'var(--pill-text)' : '#737373',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
              };

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    onClick={e => handleNavClick(e, item.href)}
                    className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full font-medium text-[11px] md:text-sm whitespace-nowrap cursor-pointer transition-colors duration-200"
                    style={pillStyle}
                    aria-label={item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{ background: '#d4d4d4', willChange: 'transform' }}
                      aria-hidden="true"
                      ref={el => { circleRefs.current[i] = el; }}
                    />
                    <span className="label-stack relative inline-block leading-[1] z-[2]">
                      <span
                        className="pill-label relative z-[2] inline-block leading-[1]"
                        style={{ willChange: 'transform' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 z-[3] inline-block text-neutral-900"
                        style={{ willChange: 'transform, opacity' }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;