import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import aboutImg from '../../assets/about_modern.png';
import workersImg from '../../assets/about_workers.png';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Banner */}
      <section className="relative bg-secondary text-white py-32 md:py-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutImg} 
            alt="Modern Industrial Power" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-secondary"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.8] italic text-white">
              Electrical <br />
              <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Years of experience building power systems for India's biggest industrial hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">Who <span className="text-primary">We Are</span></h2>
              <div className="h-1.5 w-20 bg-primary mb-8"></div>
              <p className="text-base md:text-lg text-gray-500 mb-6 leading-relaxed">
                A. Shukla & Co. is an electrical company that builds high-power systems for factories and large organizations. We are known for doing safe, precise, and reliable work.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-8 border-primary italic">
                <p className="text-xl font-bold text-secondary leading-relaxed">
                  "We do more than just wiring; we build the systems that keep our country's industry running."
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative group">
              <div className="absolute -inset-4 border-4 border-primary/20 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
              <img src={workersImg} alt="About Us" className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-24 md:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <Target size={120} />
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tight text-white italic">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                To build safe, efficient, and modern electrical systems that help factories grow while always doing the best quality work.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-primary p-12 rounded-3xl group border border-primary overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <Eye size={120} />
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tight text-secondary italic">Our Vision</h3>
              <p className="text-secondary/80 text-lg font-bold leading-relaxed relative z-10">
                To be the most trusted electrical company in India, known for new technology, safety, and being very reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Our Core <span className="text-primary italic">Expertise</span></h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { icon: <Zap />, title: "Power Systems" },
            { icon: <ShieldCheck />, title: "Safety Rules" },
            { icon: <Target />, title: "Power Stations" },
            { icon: <ShieldCheck />, title: "Safety Checks" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-8 md:p-10 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all transform group-hover:rotate-[360deg] duration-1000">
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <h4 className="font-black text-xl md:text-2xl uppercase tracking-tight">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
