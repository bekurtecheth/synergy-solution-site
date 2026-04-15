'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Target,
  Award,
  BarChart3,
  Globe,
  Zap,
  ShieldCheck,
  Lightbulb,
  ArrowUpRight,
  Play,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  Clock
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#fdfcf7]/90 backdrop-blur-xl border-b border-slate-200 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center rotate-3">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter ${
            isScrolled ? 'text-[#064e3b]' : 'text-[#064e3b]'
          }`}>
            SYNERGY<span className="text-amber-600">SOLUTION</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-[#064e3b]/70 hover:text-[#064e3b] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#064e3b] hover:bg-[#064e3b]/90 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#064e3b]/20">
            Consult Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#064e3b]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#fdfcf7] border-b border-slate-200 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-bold text-[#064e3b]"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-bold">
                Consult Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BentoCard = ({ icon: Icon, title, description, className, delay }: { icon: any, title: string, description: string, className?: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#064e3b]/10 transition-all duration-500 flex flex-col ${className}`}
  >
    <div className="w-14 h-14 bg-[#064e3b]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#064e3b] transition-all duration-500">
      <Icon className="w-7 h-7 text-[#064e3b] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-2xl font-display font-bold text-[#064e3b] mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#064e3b] group-hover:gap-4 transition-all cursor-pointer">
      Learn More <ArrowRight className="w-4 h-4" />
    </div>
  </motion.div>
);

const TrainingCard = ({ title, category, duration, image, delay }: { title: string, category: string, duration: string, image: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
  >
    <Image 
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/40 to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <div className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-2">{category}</div>
      <h4 className="text-2xl font-display font-bold text-white mb-4 leading-tight">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm font-medium">{duration}</span>
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#064e3b] transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-[#064e3b] selection:text-white">
      <Navbar />

      {/* Hero Section - Split Layout */}
      <section id="home" className="relative min-h-screen flex flex-col lg:flex-row pt-20 overflow-hidden">
        <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#064e3b]/5 border border-[#064e3b]/10 text-[#064e3b] text-xs font-black uppercase tracking-widest mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Now Accepting New Clients for 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-[#064e3b] leading-[0.9] tracking-tighter mb-10">
              EXPERTISE <br />
              <span className="text-amber-600">YOU CAN</span> <br />
              TRUST
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-xl">
              Synergy Solutions provides world-class business consulting, research, and professional training designed to optimize your operations and elevate your team&apos;s performance.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#064e3b] hover:bg-[#064e3b]/90 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center gap-3 shadow-2xl shadow-[#064e3b]/20">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="group flex items-center gap-4 text-[#064e3b] font-black uppercase tracking-widest text-sm">
                <div className="w-14 h-14 rounded-full border-2 border-[#064e3b]/20 flex items-center justify-center group-hover:bg-[#064e3b] group-hover:text-white transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
              alt="Professional Workspace"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf7] via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf7] via-transparent to-transparent lg:hidden block" />
          </motion.div>
          
          {/* Floating Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-20 right-10 lg:right-20 bg-white/80 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/50 max-w-xs hidden md:block"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-sm font-black uppercase tracking-widest text-[#064e3b]">Rapid Growth</div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our clients see an average of 50% increase in operational efficiency within the first 6 months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-6">Our Capabilities</h2>
              <h3 className="text-5xl md:text-6xl font-display font-black text-[#064e3b] leading-tight">
                Architecting Excellence <br />
                <span className="text-slate-400">Through Strategy</span>
              </h3>
            </div>
            <p className="text-lg text-slate-500 max-w-md">
              We provide a holistic ecosystem of services designed to transform every facet of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <BentoCard 
              icon={Briefcase}
              title="Business Consulting"
              description="High-level advisory for market entry, scaling, and competitive positioning tailored to your needs."
              className="md:col-span-3"
              delay={0.1}
            />
            <BentoCard 
              icon={BarChart3}
              title="Business Research"
              description="In-depth market analysis and data-driven insights to help you make informed strategic decisions."
              className="md:col-span-3"
              delay={0.2}
            />
            <BentoCard 
              icon={Target}
              title="Business Plan Development"
              description="Crafting comprehensive, professional roadmaps for startups and established enterprises."
              className="md:col-span-2"
              delay={0.3}
            />
            <BentoCard 
              icon={Globe}
              title="Feasibility Studies"
              description="Rigorous assessment of project viability, risk analysis, and potential return on investment."
              className="md:col-span-4"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Training Section - Visual Grid */}
      <section id="training" className="py-32 bg-[#fdfcf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-6">Training Portfolio</h2>
            <h3 className="text-5xl font-display font-black text-[#064e3b] mb-8">Elevate Your Workforce</h3>
            <p className="text-lg text-slate-600">
              Our training programs are not just lectures; they are immersive experiences designed to create immediate behavioral change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard 
              title="Customized Training"
              category="Professional Development"
              duration="Tailored Programs"
              image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"
              delay={0.1}
            />
            <TrainingCard 
              title="Academic Support"
              category="Education"
              duration="Ongoing Mentorship"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
              delay={0.2}
            />
            <TrainingCard 
              title="Strategic Communication"
              category="Soft Skills"
              duration="2 Weeks Workshop"
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
              delay={0.3}
            />
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-3 text-[#064e3b] font-black uppercase tracking-widest text-sm border-b-2 border-[#064e3b] pb-2 hover:gap-5 transition-all">
              View All Programs <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-6">Testimonials</h2>
            <h3 className="text-5xl font-display font-black text-[#064e3b] mb-8">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Synergy Solutions transformed our business plan into a winning strategy. Their research was impeccable.",
                author: "Sarah Jenkins",
                role: "CEO, TechFlow Systems"
              },
              {
                quote: "The training provided by Synergy for industry trainers significantly enhances the quality of cooperative training.",
                author: "Sabahudin Hussein",
                role: "Vice Dean, GWPTC"
              },
              {
                quote: "Their feasibility study was the cornerstone of our successful market expansion. Highly professional team.",
                author: "Elena Rodriguez",
                role: "Founder, GreenVenture"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative"
              >
                <div className="text-[#064e3b]/10 absolute top-6 left-6">
                  <Play className="w-12 h-12 rotate-90 fill-current" />
                </div>
                <p className="text-lg text-slate-600 italic mb-8 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-display font-bold text-[#064e3b]">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Visuals */}
            <div className="w-full lg:w-1/2 relative mb-20 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-md mx-auto lg:max-w-none w-full"
              >
                {/* Image Container with explicit height for mobile fallback */}
                <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 bg-slate-100">
                  <Image 
                    src="/images/biruk.jpg"
                    alt="Dr. Biruk Tessema"
                    fill
                    className="object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  {/* Darker gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/20 to-transparent z-10" />
                  
                  {/* Title & Role - Moved slightly higher on mobile for better balance */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-20">
                    <h4 className="text-xl md:text-4xl font-display font-black text-white mb-1 drop-shadow-md">Dr. Biruk Tessema</h4>
                    <p className="text-amber-400 text-[10px] md:text-base font-bold uppercase tracking-widest drop-shadow-sm">General Manager & Lead Consultant</p>
                  </div>
                </div>

                {/* CMC Badge - Positioned below the image on mobile, overlapping on desktop */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-[-4rem] right-0 lg:bottom-[-3rem] lg:right-[-3rem] bg-white p-4 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[180px] lg:max-w-[320px] z-30"
                >
                  <div className="flex items-center gap-2 lg:gap-4 mb-2 lg:mb-4">
                    <div className="w-8 h-8 lg:w-14 lg:h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-inner">
                      <Award className="w-4 h-4 lg:w-7 lg:h-7" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-2xl font-display font-black text-[#064e3b]">CMC</div>
                      <div className="text-[7px] lg:text-xs font-black uppercase tracking-widest text-slate-400">Certified</div>
                    </div>
                  </div>
                  <p className="text-[9px] lg:text-sm text-slate-500 leading-tight lg:leading-relaxed font-medium">
                    Certified Management Consultant with decades of experience.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Background Decoration */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-6">About Synergy Solution</h2>
                <h3 className="text-5xl md:text-6xl font-display font-black text-[#064e3b] mb-8 leading-tight">
                  Expertise You Can <br />
                  <span className="text-amber-600 italic">Trust.</span>
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Synergy Solution Consulting is a premier firm based in Addis Ababa, Ethiopia, dedicated to providing high-impact consulting, research, and training services. Under the leadership of Dr. Biruk Tessema, we bring decades of combined experience to help businesses thrive in a dynamic global economy.
                </p>

                <div className="bg-[#064e3b]/5 border-l-4 border-amber-500 p-8 rounded-r-3xl mb-12">
                  <p className="text-xl text-[#064e3b] font-medium italic leading-relaxed">
                    &quot;Our mission is to bridge the gap between complex business challenges and practical, sustainable solutions through rigorous research and expert training.&quot;
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Dr. Biruk Tessema", desc: "Researcher, Lecturer & Trainer", icon: CheckCircle2 },
                    { title: "Certified Expert", desc: "Certified Management Consultant", icon: CheckCircle2 },
                    { title: "Custom Agent", desc: "Professional Custom Solutions", icon: CheckCircle2 },
                    { title: "Strategic Partner", desc: "Business Plan & Feasibility", icon: CheckCircle2 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#064e3b]">{item.title}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#064e3b] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Side: Info */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-amber-500 font-black tracking-[0.3em] uppercase text-xs mb-6">Get in Touch</h2>
                <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
                  Let&apos;s Discuss Your <br />
                  <span className="text-amber-500">Project</span>
                </h3>
                <p className="text-lg text-white/70 mb-12 max-w-md">
                  Ready to take your business to the next level? Reach out to us for a consultation or any inquiries about our services.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Phone Numbers</div>
                      <div className="text-lg font-bold text-white space-y-1">
                        <p>+251 911 457 082</p>
                        <p>+251 711 457 082</p>
                        <p>+251 911 164 762</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Location</div>
                      <div className="text-lg font-bold text-white">Addis Ababa, Ethiopia</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Response Time</div>
                      <div className="text-lg font-bold text-white">We typically respond within 24 hours.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Form Card */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl"
              >
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-900 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all text-slate-900 placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-900 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all text-slate-900 placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-900 ml-1">Service Needed</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all text-slate-900 appearance-none">
                      <option>Customized Training</option>
                      <option>Business Consulting</option>
                      <option>Business Research</option>
                      <option>Feasibility Studies</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-900 ml-1">Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none text-slate-900 placeholder:text-slate-300"
                    ></textarea>
                  </div>
                  <button className="w-full bg-amber-500 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-all flex items-center justify-center gap-3">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400">
                    By submitting this form, you agree to our <a href="#" className="text-amber-600 underline">Privacy Policy</a>.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#064e3b] text-white/50 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-black text-white tracking-tighter">
                  SYNERGY<span className="text-amber-500">SOLUTION</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-8 max-w-xs">
                The global standard for organizational synergy. We empower the world&apos;s leading companies to achieve their most ambitious goals.
              </p>
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#064e3b] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Solutions</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HR Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Company</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Headquarters</h5>
              <p className="text-sm text-white/70 mb-4">
                Addis Ababa, Ethiopia
              </p>
              <p className="text-sm text-white/70">
                synergysolution@gmail.com
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>© 2026 Synergy Solution Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
