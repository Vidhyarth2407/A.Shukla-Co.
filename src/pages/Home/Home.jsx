import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Settings, Users, Phone, FileText } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import transformerImg from '../../assets/transformer.png';
import panelImg from '../../assets/panel.png';
import workersImg from '../../assets/workers.png';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    {
      title: 'High-Tension Electrical Systems',
      desc: 'Design, installation, and commissioning of HT electrical infrastructure ensuring efficient and reliable power distribution.',
      icon: <Zap size={32} />
    },
    {
      title: 'Transformer Installation & Maintenance',
      desc: 'Complete transformer setup, testing, and maintenance for long-term operational efficiency.',
      icon: <Settings size={32} />
    },
    {
      title: 'Industrial Electrical Wiring',
      desc: 'Heavy-duty wiring solutions engineered for industrial safety, durability, and performance.',
      icon: <Shield size={32} />
    },
    {
      title: 'Electrical Panels & Control Systems',
      desc: 'Installation and commissioning of electrical panels for smooth and controlled operations.',
      icon: <FileText size={32} />
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroImg}
            alt="Substation"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent h-1/4 bottom-0"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 text-primary shadow-2xl"
            >
              <Zap size={14} fill="currentColor" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-outfit">Tier-1 Industrial contractor</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter"
            >
              Powering <span className="text-transparent stroke-1 stroke-white/50 text-stroke-white">Industrial</span> <br />
              <span className="text-primary italic">Precision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light"
            >
              End-to-end high-tension electrical solutions for financial institutions, large-scale factories, and critical national infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <button className="btn-primary group">
                Download Profile <FileText size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary group">
                Site Inspection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-primary py-10 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-scroll items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-secondary font-black uppercase tracking-tighter text-2xl md:text-4xl opacity-80">
              <span>Trusted by Dainik Jagran</span>
              <Zap size={24} fill="currentColor" />
              <span>Union Bank of India</span>
              <Zap size={24} fill="currentColor" />
              <span>Prabhatam Group</span>
              <Zap size={24} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none uppercase tracking-tighter">
                Built on <span className="text-primary italic">Legacy.</span> <br />
                Driven by <span className="text-primary italic">Tech.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Celebrating 100+ combined years of engineering excellence, A. Shukla & Co. provides precision-engineered power systems designed to handle India's most demanding electrical loads.
              </p>
              <div className="grid gap-6">
                {[
                  "Specialists in High-Tension (HT) Distribution",
                  "Execution Capability Across 20+ States",
                  "150+ Mega-Projects Successfully Commissioned",
                  "100% Compliance with National Safety Standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl transform rotate-3"></div>
              <img src={workersImg} alt="Engineering Team" className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-10 rounded-2xl shadow-2xl z-20 hidden md:block border-l-8 border-primary">
                <p className="text-5xl font-black text-primary">150+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Projects Successfully <br />Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-40 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-24">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Infrastructure <br /><span className="text-primary italic">Expertise</span></h2>
            <div className="h-2 w-40 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We deliver high-end technical solutions designed for high-availability industrial and institutional environments.
            </p>
          </motion.div>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-2xl group border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-8 h-20 w-20 flex items-center justify-center bg-gray-50 rounded-2xl text-secondary group-hover:bg-primary transition-all">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-none h-14">{s.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                {s.desc}
              </p>
              <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-32 md:py-48 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl font-black mb-12 leading-none uppercase tracking-tighter">
              Why Industry <br />
              Leaders <span className="text-primary italic">Choose Us.</span>
            </motion.h2>
            <div className="space-y-12">
              {[
                { t: "Deep Specialization", d: "Pure focus on high-tension industrial systems for maximum reliability." },
                { t: "Execution at Scale", d: "Ability to mobilize resources for complex, time-sensitive projects nationally." },
                { t: "Safety Culture", d: "Zero-compromise approach to engineering safety and operational protocols." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-5xl font-black text-primary opacity-30 mt-2">0{i + 1}</div>
                  <div>
                    <h4 className="text-2xl font-black mb-2 uppercase tracking-tight text-white">{item.t}</h4>
                    <p className="text-gray-400 text-lg">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={panelImg}
              alt="Control Panel"
              className="rounded-3xl shadow-2xl mt-12 md:mt-24 grayscale group-hover:grayscale-0 transition-all border border-white/5"
            />
            <motion.img
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={transformerImg}
              alt="Transformer"
              className="rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-32 md:py-48">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="mb-16">
              <h2 className="text-6xl md:text-[10rem] font-black text-secondary leading-[0.8] uppercase tracking-tighter">
                Engineering <br />
                <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 mt-4">
                  <span className="text-3xl md:text-5xl font-black tracking-tighter opacity-80 md:-mt-10 mr-[-10px] md:mr-[-20px]">THE</span>
                  <span className="ghost-text italic font-black" data-text="FUTURE">FUTURE</span>
                  <span>POWER.</span>
                </div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-secondary/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Let's discuss your high-tension electrical requirements and build a solution that powers your growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-secondary text-white px-10 py-5 md:px-14 md:py-7 rounded-sm font-black uppercase tracking-widest text-sm md:text-lg hover:bg-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                Start Site Consultation
              </button>
              <button className="border-4 border-secondary text-secondary px-10 py-5 md:px-14 md:py-7 rounded-sm font-black uppercase tracking-widest text-sm md:text-lg hover:bg-secondary hover:text-white transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                Connect on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;
