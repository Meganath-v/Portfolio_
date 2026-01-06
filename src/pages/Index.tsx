import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackMarquee from '@/components/TechStackMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackMarquee />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
