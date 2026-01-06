import { motion } from 'framer-motion';
import { Trophy, Award, Lightbulb } from 'lucide-react';

interface TimelineItem {
  title: string;
  year: string;
  icon: React.ElementType;
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    title: 'Winner, POC Competition 2025',
    year: '2025',
    icon: Trophy,
    description: 'First place in Proof of Concept competition',
  },
  {
    title: 'Finalist, SIH 2024',
    year: '2024',
    icon: Award,
    description: 'Smart India Hackathon national finalist',
  },
  {
    title: 'Winner, Ideathon 2024',
    year: '2024',
    icon: Lightbulb,
    description: 'Innovation challenge winner',
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Competitions and milestones along my journey
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 timeline-line" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-xl p-6 hover:glow-primary transition-all duration-300 group">
                    <span className="text-primary text-sm font-semibold">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Center dot with icon */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-primary">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Icon on opposite side (desktop only) */}
                <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:justify-end'}`}>
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
