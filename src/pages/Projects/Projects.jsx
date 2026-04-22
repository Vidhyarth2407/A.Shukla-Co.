import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Zap } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import panelImg from '../../assets/panel.png';
import transformerImg from '../../assets/transformer.png';

const Projects = () => {
  const projectList = [
    {
      client: "Dainik Jagran",
      scope: "Complete HT Substation & Distribution",
      challenges: "Tight integration with existing printing machinery requiring zero downtime during switchover.",
      solution: "Implemented a parallel power distribution system with precision-timed cutover.",
      outcome: "100% reliable operations with seamless power scaling.",
      img: heroImg,
      color: "border-primary"
    },
    {
      client: "Union Bank of India",
      scope: "Infrastructure Upgrade",
      challenges: "Stringent safety requirements and night-only work schedules in high-security city zones.",
      solution: "Modular electrical panel installation designed for maximum safety compliance.",
      outcome: "Zero safety incidents and fully certified regulation-compliant systems.",
      img: panelImg,
      color: "border-blue-500"
    },
    {
      client: "Prabhatam Group",
      scope: "Industrial Manufacturing Plant Wiring",
      challenges: "High-temperature environment requiring specialized heavy-duty wiring solutions.",
      solution: "Custom-engineered heat-resistant cabling with advanced monitoring panels.",
      outcome: "25% improvement in power efficiency and reduced maintenance costs.",
      img: transformerImg,
      color: "border-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-secondary text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 animate-pulse">
           <Zap size={300} />
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.8] uppercase tracking-tighter italic text-white">
              Portfolio <br />
              <span className="text-primary italic">of Precision</span>
            </h1>
            <p className="text-white/80 max-w-3xl text-xl md:text-2xl font-light leading-relaxed">
              Showcasing our most challenging and successful projects across industrial, financial, and institutional sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {projectList.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                    <img src={project.img} alt={project.client} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-12 left-12">
                       <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-3 font-outfit">Project Case Study</p>
                       <h2 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter">{project.client}</h2>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 space-y-10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-xs uppercase font-black tracking-[0.3em] text-primary mb-4 font-outfit">Scope of Work</h3>
                    <p className="text-3xl md:text-4xl font-black text-secondary leading-tight uppercase tracking-tight">{project.scope}</p>
                  </div>

                  <div className="grid gap-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-secondary shadow-sm group hover:border-primary transition-all">
                      <h4 className="text-xs uppercase font-black text-gray-400 mb-3 tracking-widest">The Challenge</h4>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">{project.challenges}</p>
                    </div>
                    <div className="bg-primary p-8 rounded-3xl border-l-8 border-secondary shadow-sm text-secondary">
                      <h4 className="text-xs uppercase font-black text-secondary/50 mb-3 tracking-widest">Our Solution</h4>
                      <p className="text-lg font-bold leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-gray-100">
                    <div className="flex items-start gap-5">
                      <div className="bg-green-500/10 p-3 rounded-full text-green-600">
                        <CheckCircle size={32} />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-black text-gray-400 mb-1 tracking-widest">Client Outcome</h4>
                        <span className="text-2xl font-black text-secondary uppercase tracking-tight italic">{project.outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary text-white py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
             <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none italic">
               Ready to Power Your <br /><span className="text-primary italic text-stroke-2 text-stroke-white text-transparent">Infrastructure?</span>
             </h2>
             <button className="btn-primary py-6 px-16 text-xl shadow-none hover:shadow-primary/50">
               Connect with our Experts <ExternalLink size={24} className="ml-2" />
             </button>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
