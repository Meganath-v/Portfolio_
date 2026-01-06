import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Snap2Bill - Automated Expense Tracker',
    description: 'React Native app with Python OCR pipeline for automated receipt data extraction. Features real-time expense categorization and cloud sync.',
    tags: ['React Native', 'Python', 'OCR', 'Machine Learning'],
    gradient: 'from-primary/20 to-secondary/20',
    githubUrl: 'https://github.com/meganathv/snap2bill',
    liveUrl: 'https://snap2bill.app',
  },
  {
    title: 'VR Learning Analytics Platform',
    description: 'Real-time backend system analyzing user engagement metrics for special education. Processes 10K+ data points per session.',
    tags: ['Unity', 'C#', 'Analytics', 'VR/AR'],
    gradient: 'from-secondary/20 to-primary/20',
    githubUrl: 'https://github.com/meganathv/vr-analytics',
    liveUrl: 'https://vr-learning.demo',
  },
  {
    title: 'DataFlow ETL Pipeline',
    description: 'Scalable data pipeline built with Apache Airflow for processing large datasets. Handles 1M+ records daily with automated scheduling.',
    tags: ['Python', 'Airflow', 'PostgreSQL', 'Docker'],
    gradient: 'from-primary/20 to-secondary/20',
    githubUrl: 'https://github.com/meganathv/dataflow-etl',
  },
  {
    title: 'Stock Market Sentiment Analyzer',
    description: 'NLP-powered tool analyzing social media sentiment to predict stock trends. Achieved 78% accuracy in trend prediction.',
    tags: ['Python', 'NLP', 'Pandas', 'Selenium'],
    gradient: 'from-secondary/20 to-primary/20',
    githubUrl: 'https://github.com/meganathv/sentiment-analyzer',
    liveUrl: 'https://stock-sentiment.demo',
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'Interactive analytics dashboard visualizing sales data with real-time updates. Built with modern data visualization techniques.',
    tags: ['SQL', 'Python', 'Plotly', 'FastAPI'],
    gradient: 'from-primary/20 to-secondary/20',
    githubUrl: 'https://github.com/meganathv/sales-dashboard',
    liveUrl: 'https://sales-dash.demo',
  },
  {
    title: 'Automated Web Scraper Suite',
    description: 'Robust web scraping framework for collecting and processing data from multiple sources with anti-detection features.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MongoDB'],
    gradient: 'from-secondary/20 to-primary/20',
    githubUrl: 'https://github.com/meganathv/scraper-suite',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="preserve-3d h-full"
      >
        <div className={`glass rounded-2xl p-8 relative overflow-hidden group hover:glow-primary transition-all duration-500 bg-gradient-to-br ${project.gradient} h-full flex flex-col`}>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
