import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('FAILED...', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/meganath-v-1684762a6/', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-foreground' },
    { name: 'Email', icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=meganathv.23msc@kongu.edu', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border-transparent focus:border-primary focus:ring-1 focus:ring-primary bg-muted/50 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border-transparent focus:border-primary focus:ring-1 focus:ring-primary bg-muted/50 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border-transparent focus:border-primary focus:ring-1 focus:ring-primary bg-muted/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isSending}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:glow-primary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : isSending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-6">Or reach out directly</h3>
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const isMail = link.href.startsWith('mailto:');
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-xl glass flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:glow-primary`}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-12 glass rounded-xl p-6 w-full">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
