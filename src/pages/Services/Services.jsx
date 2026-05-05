import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Settings, Shield, PanelTop, CheckCircle, ArrowRight } from 'lucide-react';


import panelImg1 from '../../assets/services_panel_1.png';
import panelImg2 from '../../assets/services_panel_2.png';
import industrialWiringImg from '../../assets/industrial_wiring.png';
import heroImg from '../../assets/services_hero.png';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const serviceList = [
    {
      title: "High-Power Electrical Works",
      desc: "We design and install high-power electrical systems to ensure your factory gets safe and reliable power.",
      features: ["Power Station Design", "Cable Laying", "Switchgear Setup", "Final Testing"],
      icon: <Zap size={48} />,
      img: heroImg
    },

    {
      title: "Industrial Wiring",
      desc: "Strong and safe wiring built for heavy factory work and dangerous environments.",
      features: ["Fire-Safe Wiring", "Strong Armoured Cables", "Cable Tray Setup", "Internal Power Lines"],
      icon: <Shield size={48} />,
      img: industrialWiringImg
    },
    {
      title: "Power & Control Panels",
      desc: "Installing and setting up control panels to manage your power and machines easily.",
      features: ["Power Panels", "Motor Control Panels", "Machine Speed Controls", "Automatic Panels"],
      icon: <PanelTop size={48} />,
      img: panelImg1
    },
    {
      title: "Electrical Safety Checks",
      desc: "We check for risks and make sure your building follows all safety rules to protect your team.",
      features: ["Risk Checks", "Safety Reports", "Heat Imaging", "Earthing Checks"],
      icon: <Shield size={48} />,
      img: panelImg2
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 pt-12 uppercase tracking-tighter leading-[0.8] italic text-white">
              Power <br />
              <span className="text-primary italic">Solutions</span>
            </h1>
            <p className="text-white/80 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
              We provide high-quality and safe electrical systems for India’s biggest factories and industrial areas.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </section>

      {serviceList.map((service, i) => (
        <section key={i} className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}>
          <div className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                {...fadeInUp}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-20 w-20 flex items-center justify-center bg-primary text-secondary rounded-2xl shadow-xl shadow-primary/20">
                    {service.icon}
                  </div>
                  <div className="h-px w-20 bg-primary/30 hidden md:block"></div>
                </div>
                <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">{service.title}</h2>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-primary/50 transition-colors">
                      <CheckCircle size={20} className="text-primary" />
                      <span className="text-secondary font-bold text-sm uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary group inline-flex">
                  Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="absolute -inset-6 border-8 border-primary/10 rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-0"></div>
                <img src={service.img} alt={service.title} className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse opacity-10">
          <Zap size={400} className="absolute -top-20 -left-20 text-secondary" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl sm:text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-secondary leading-none">Need a Custom <br /><span className="text-secondary italic">Safety Check?</span></h2>
          <Link to="/contact" className="bg-secondary text-white px-20 py-8 rounded-full font-black uppercase tracking-widest text-2xl hover:bg-black transition-all shadow-2xl transform hover:-translate-y-2 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
