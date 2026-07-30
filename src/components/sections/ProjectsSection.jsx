import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import BlurText from '../animations/BlurText';
import CardSwap, { Card } from '../animations/CardSwap';
import DotField from '../animations/DotField';
import { projects } from '../../data/projects';

const projectImages = import.meta.glob('/src/assets/imageproject/*', { eager: true });
const resolveImage = (id) => {
  const key = `/src/assets/imageproject/project${id}.webp`;
  return projectImages[key]?.default || null;
};

const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const image = resolveImage(project.id);
  return (
  <div className="w-full h-full flex flex-col overflow-hidden">
    {/* Image */}
    <div className="relative h-64 overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : null}
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 gap-3">
      <div>
        <h3 className="font-bold text-gray-500 text-sm md:text-base leading-snug mb-1">{project.title}</h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 4).map(tag => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full font-medium border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-400 transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors"
          >
            <GithubIcon size={13} />
            Source Code
          </a>
        )}
      </div>
    </div>
  </div>
);
};

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const skew = isMobile ? 0 : 5;
  const mid = Math.ceil(projects.length / 2);
  const firstProjects = projects.slice(0, mid);
  const secondProjects = projects.slice(mid);

  return (
    <section id="projects" className="relative pb-32 pt-16 md:pt-24 bg-gray-900 overflow-hidden">
      {/* DotField Background */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={40}
          cursorRadius={600}
          bulgeStrength={60}
          glowRadius={200}
          gradientFrom="rgb(21, 89, 157)"
          gradientTo="rgb(255, 244, 183)"
          glowColor="#1b263d3b"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
          <div className="text-center mb-4 md:mb-16">
            <BlurText
              text="Selected Projects"
              delay={60}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-white tracking-tight m-0 justify-center"
              stepDuration={0.4}
            />
          <p className="text-gray-400 mt-2 md:mt-6 max-w-xl mx-auto">
            A collection of projects I&apos;ve built, each crafted with attention to detail and
            a focus on user experience.
          </p>
        </div>

        {/* CardSwap */}
        <div className="flex flex-col gap-16 md:gap-8">
          <div className="flex justify-center lg:justify-start lg:mt-40">
            <div className="max-[480px]:h-[300px] h-[480px] w-full max-w-[460px]">
              <CardSwap
                cardDistance={isMobile ? 0 : 30}
                verticalDistance={isMobile ? 10 : 60}
                delay={4000}
                skewAmount={skew}
                pauseOnHover={false}
                easing="elastic"
                dropDistance={150}
              >
                {firstProjects.map(project => (
                  <Card key={project.id} className="bg-gray-900 border border-gray-800/60">
                    <ProjectCard project={project} />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:mt-2 lg:mr-20 mb-12 md:mb-0">
            <div className="max-[480px]:h-[300px] h-[480px] w-full max-w-[460px]">
              <CardSwap
                cardDistance={isMobile ? 0 : 30}
                verticalDistance={isMobile ? 10 : 60}
                delay={4500}
                skewAmount={skew}
                pauseOnHover={false}
                easing="elastic"
                dropDistance={150}
              >
                {secondProjects.map(project => (
                  <Card key={project.id} className="bg-gray-900 border border-gray-800/60">
                    <ProjectCard project={project} />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
