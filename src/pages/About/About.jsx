import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import workersImg from '../../assets/workers.png';

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
      <section className="bg-secondary text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-[0.8] italic text-white">
              Electrical <br />
              <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
              Decades of combined engineering experience fueling India's most critical industrial hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Who <span className="text-primary">We Are</span></h2>
              <div className="h-1.5 w-24 bg-primary mb-10"></div>
              <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                A. Shukla & Co. is a specialized electrical contracting firm focused on delivering high-tension electrical solutions for industrial and institutional clients. With decades of combined experience, we have built a reputation for reliability, precision, and safety.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-primary italic">
                <p className="text-2xl font-bold text-secondary leading-relaxed">
                  "Our commitment goes beyond wires and transformers; we power the infrastructure that drives the nation's industry."
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
      <section className="bg-secondary py-32 md:py-48 text-white relative overflow-hidden">
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
                To deliver safe, efficient, and future-ready electrical solutions that empower industrial growth while maintaining the highest standards of engineering excellence.
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
                To become the most trusted leader in high-tension electrical contracting across India, known for technical innovation, safety, and unwavering reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Our Core <span className="text-primary italic text-stroke-2 text-stroke-secondary text-transparent">Expertise</span></h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Zap />, title: "HT Systems" },
            { icon: <ShieldCheck />, title: "Compliance" },
            { icon: <Target />, title: "Infrastructure" },
            { icon: <ShieldCheck />, title: "Safety Audits" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-10 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all transform group-hover:rotate-[360deg] duration-1000">
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <h4 className="font-black text-2xl uppercase tracking-tight">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
