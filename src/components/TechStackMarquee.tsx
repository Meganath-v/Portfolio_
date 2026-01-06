import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'Selenium', icon: '🌐' },
  { name: 'Docker', icon: '🐳' },
  { name: 'React Native', icon: '⚛️' },
  { name: 'Unity', icon: '🎮' },
  { name: 'C#', icon: '💜' },
  { name: 'Pandas', icon: '🐼' },
];

// Duplicate for seamless loop
const duplicatedStack = [...techStack, ...techStack];

export function TechStackMarquee() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex tech-marquee">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="glass px-8 py-6 rounded-xl flex flex-col items-center gap-3 min-w-[140px] hover:border-primary/50 transition-all duration-300 group">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackMarquee;
