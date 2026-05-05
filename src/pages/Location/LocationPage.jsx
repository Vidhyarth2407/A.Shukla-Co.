import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import heroImg from '../../assets/location_hero.png';

const LocationPage = () => {
  const { city } = useParams();
  
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const industries = [
    "Manufacturing Plants",
    "Infrastructure Projects",
    "Banking Institutions",
    "Government Organizations",
    "Industrial Warehouses"
  ];

  return (
    <div className="bg-white overflow-hidden uppercase tracking-tight">
      {/* City Hero */}
      <section className="bg-secondary text-white py-32 md:py-56 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110">
          <img src={heroImg} alt={cityName} className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 mb-10 bg-primary px-6 py-2 rounded-sm text-secondary font-black text-sm uppercase tracking-[0.3em] font-outfit shadow-2xl">
              <MapPin size={18} /> Regional Hub: {cityName}
            </div>
            <h1 className="text-5xl md:text-9xl font-black mb-10 italic leading-[0.8] tracking-tighter text-white">
              High-Tension <br />
              <span className="text-primary italic">Contractor in {cityName}</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed normal-case">
              A. Shukla & Co. provides precision-engineered HT electrical contracting services in {cityName} for the most demanding industrial and institutional projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Localized Content */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none uppercase tracking-tighter">Powering <br />{cityName}'s <span className="text-primary italic">Growth</span></h2>
              <div className="h-2 w-32 bg-primary mb-12"></div>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light normal-case">
                As a leading high-tension electrical specialist in {cityName}, we understand the local grid requirements and safety regulations essential for large-scale operations. Our team is fully equipped to handle complex electrical infrastructure from design to commissioning.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Quick mobilization of resources in " + cityName,
                  "Compliance with state electricity board standards",
                  "24/7 technical support for regional industrial zones",
                  "Complete HT substation & distribution solutions"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <CheckCircle size={24} />
                    </div>
                    <span className="text-xl font-bold text-secondary uppercase tracking-tighter transition-all">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary group">
                 Connect with {cityName} Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-1 gap-12"
            >
              <div className="bg-gray-50 p-12 rounded-[3rem] border-l-[12px] border-primary shadow-xl">
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Industries Served</h3>
                <div className="flex flex-wrap gap-4">
                  {industries.map((ind, i) => (
                    <span key={i} className="bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-black text-secondary/60 hover:text-primary hover:border-primary transition-all cursor-default">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-secondary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Zap size={140} />
                </div>
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter text-primary">Strategic Advantage</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-6">
                    <div className="h-10 w-10 bg-primary text-secondary rounded-xl flex items-center justify-center shrink-0 font-black text-lg">1</div>
                    <p className="text-lg text-gray-400 font-light normal-case">Deep technical expertise in High-Tension (HT) systems specific to {cityName}'s major industrial belts and special economic zones.</p>
                  </li>
                  <li className="flex gap-6">
                    <div className="h-10 w-10 bg-primary text-secondary rounded-xl flex items-center justify-center shrink-0 font-black text-lg">2</div>
                    <p className="text-lg text-gray-400 font-light normal-case">Established track record with major banking headquarters and manufacturing facilities across {cityName}.</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localized CTA */}
      <section className="bg-primary py-32 md:py-48 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-5xl md:text-9xl font-black text-secondary mb-12 uppercase tracking-tighter italic leading-none">
             Partner with the Best <br />in <span className="text-secondary italic">{cityName}.</span>
           </h2>
           <div className="flex flex-wrap justify-center gap-8">
              <button className="bg-secondary text-white px-16 py-8 rounded-sm font-black uppercase tracking-widest text-xl hover:bg-black transition-all shadow-2xl hover:-translate-y-1">
                Contact Us
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
