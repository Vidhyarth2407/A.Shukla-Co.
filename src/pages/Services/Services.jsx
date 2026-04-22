import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Shield, PanelTop, CheckCircle, ArrowRight } from 'lucide-react';
import transformerImg from '../../assets/transformer.png';
import panelImg from '../../assets/panel.png';
import heroImg from '../../assets/hero.png';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const serviceList = [
    {
      title: "High-Tension Electrical Works",
      desc: "We design and execute HT systems ensuring efficient and safe power distribution for heavy industrial loads.",
      features: ["Substation Design", "HT Cable Laying", "Switchgear Installation", "Testing & Commissioning"],
      icon: <Zap size={48} />,
      img: heroImg
    },
    {
      title: "Transformer Installation",
      desc: "End-to-end transformer installation, testing, and maintenance services for factories and infrastructure.",
      features: ["Power Transformers", "Distribution Transformers", "Oil Testing", "Filtration Services"],
      icon: <Settings size={48} />,
      img: transformerImg
    },
    {
      title: "Industrial Wiring",
      desc: "Durable and safe wiring systems tailored for complex industrial operations and hazardous environments.",
      features: ["Flame Retardant Wiring", "Armoured Cable Installation", "Tray Laying", "Internal Distribution"],
      icon: <Shield size={48} />,
      img: transformerImg
    },
    {
      title: "Electrical Panels (PCC & MCC)",
      desc: "Installation and commissioning of panels for controlled and harmonized electrical operations.",
      features: ["PCC Panels", "MCC Panels", "VFD Integration", "Automation Panels"],
      icon: <PanelTop size={48} />,
      img: panelImg
    },
    {
      title: "Electrical Safety Audits",
      desc: "Identify risks and ensure compliance with safety regulations to protect your people and assets.",
      features: ["Risk Assessment", "Compliance Reports", "Thermography", "Earthing Audits"],
      icon: <Shield size={48} />,
      img: panelImg
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <section className="bg-secondary text-white py-32 md:py-48 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-none italic text-white">
              Expert <span className="text-primary italic">Solutions</span>
            </h1>
            <p className="text-white/80 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
              Delivering technically advanced and safety-compliant electrical infrastructure for India’s most demanding industrial sectors.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </section>

      {serviceList.map((service, i) => (
        <section key={i} className={`py-24 md:py-40 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}>
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
                 <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">{service.title}</h2>
                 <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">{service.desc}</p>
                 <div className="grid sm:grid-cols-2 gap-6 mb-12">
                   {service.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-primary/50 transition-colors">
                       <CheckCircle size={20} className="text-primary" />
                       <span className="text-secondary font-bold text-sm uppercase tracking-tight">{feature}</span>
                     </div>
                   ))}
                 </div>
                 <button className="btn-primary group">
                    Enquire for Service <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
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

      <section className="bg-primary py-32 md:py-48 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse opacity-10">
           <Zap size={400} className="absolute -top-20 -left-20 text-secondary" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-secondary leading-none">Need a Custom <br /><span className="italic text-transparent text-stroke-2 text-stroke-secondary">Electrical Audit?</span></h2>
          <button className="bg-secondary text-white px-20 py-8 rounded-full font-black uppercase tracking-widest text-2xl hover:bg-black transition-all shadow-2xl transform hover:-translate-y-2">
            Book Site Audit Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
