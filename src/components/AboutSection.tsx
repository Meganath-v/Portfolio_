import { motion } from 'framer-motion';
import { Code, Database, Zap } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    { icon: Code, label: 'Clean Code', value: 'Python & SQL' },
    { icon: Database, label: 'Data Engineering', value: 'ETL & Analytics' },
    { icon: Zap, label: 'Fast Learner', value: 'Always Growing' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate aspiring Data Engineer with a strong foundation in Python and SQL.
              I love building data pipelines, automating workflows, and turning raw data into actionable insights.
              My experience spans from mobile app development to VR analytics platforms, always with a focus on
              creating efficient, scalable solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-semibold mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
