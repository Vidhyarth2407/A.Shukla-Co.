import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Settings, Users, FileText, MapPin, Mail } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import transformerImg from '../../assets/transformer.png';
import panelImg from '../../assets/panel.png';
import workersImg from '../../assets/home_legacy.png';
import bhaskarLogo from '../../assets/Dainik bhaskar.png';
import ubiLogo from '../../assets/UBI.png';
import prabhatamLogo from '../../assets/Prabhatam.png';

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
      desc: 'We design, install, and set up high-power electrical systems to ensure your factory gets reliable power.',
      icon: <Zap size={32} />
    },

    {
      title: 'Industrial Electrical Wiring',
      desc: 'Strong and safe wiring solutions built to handle heavy industrial work and keep everyone safe.',
      icon: <Shield size={32} />
    },
    {
      title: 'Electrical Panels & Controls',
      desc: 'Installing and setting up electrical control panels to manage your power and machines easily.',
      icon: <FileText size={32} />
    },
    {
      title: 'Electrical Safety Checks',
      desc: 'We check for risks and make sure your building follows all safety rules to protect your team.',
      icon: <Shield size={32} />
    }
  ];

  const clients = [
    { name: 'Dainik Bhaskar', logo: bhaskarLogo },
    { name: 'Union Bank of India', logo: ubiLogo },
    { name: 'Prabhatam Group', logo: prabhatamLogo },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2 }}
            src={heroImg}
            alt="Substation"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradients - Less 'Boxy' */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-secondary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/50"></div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-pill mb-10"
            >
              <Zap size={14} fill="currentColor" className="animate-pulse" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] font-outfit">Tier-1 Industrial contractor</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[0.85] mb-10 uppercase tracking-tighter"
            >
              Powering <br />
              <span className="text-primary italic">Industrial</span> <br />
              Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-14 max-w-2xl leading-relaxed font-light"
            >
              Complete electrical solutions for banks, large factories, and major government projects across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >

              <Link to="/contact" className="btn-outline border-white/30 text-white hover:bg-white hover:text-secondary hover:border-white group">
                Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-primary py-8 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap gap-20 animate-scroll items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              {clients.map((client, idx) => (
                <div key={idx} className="flex items-center gap-10 group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-secondary/10 text-5xl font-thin">|</span>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Infrastructure <br /><span className="text-primary italic">Expertise</span></h2>
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="bg-secondary py-32 md:py-48 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl font-black mb-12 leading-none uppercase tracking-tighter text-white">
              Why <span className="text-primary italic">choose Us.</span>
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

      {/* Locate Us Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
              Leading with <br />
              <span className="text-primary italic">Expertise</span>
            </h2>
            <div className="h-2 w-32 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Visit our office or reach out — we're always ready to discuss your next project.
            </p>
          </motion.div>
          <div className="flex flex-col gap-12">
            {/* Info Cards Row */}
            <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-8">
              {/* Address Card */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all group">
                <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MapPin size={28} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Bengaluru, India</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  A-207, KSSIDC Complex, Phase 1,<br />
                  Electronics City, Bengaluru,<br />
                  Karnataka – 560100
                </p>
              </div>

              {/* Kolkata Address Card */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all group">
                <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Kolkata, India</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Ground Floor, #5, Victoria Terrace,<br />
                  Gorkey Sadan, Kolkata,<br />
                  West Bengal – 700020
                </p>
              </div>


              {/* Email Card */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all group">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Email Us</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  <a href="mailto:info@ashuklaco.in" className="hover:text-primary transition-colors">info@ashuklaco.in</a>
                </p>
              </div>
            </motion.div>

            {/* Google Map - Full Width & Larger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-shadow duration-700 h-[400px] md:h-[600px]"
            >
              <iframe
                title="A. Shukla & Co. - Bengaluru Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.972352873111!2d77.6749003!3d12.8447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c90538a8e1b%3A0x6e9a7e089679c13e!2sElectronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1714378000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.8] uppercase tracking-tighter">
                Engineering <br />
                <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-12 mt-4">
                  <span className="text-xl sm:text-3xl md:text-5xl font-black tracking-tighter opacity-80 md:-mt-10 mr-[-5px] md:mr-[-20px]">THE</span>
                  <span className="italic font-black text-secondary">FUTURE</span>
                  <span>POWER.</span>
                </div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-secondary/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Let's discuss your high-tension electrical requirements and build a solution that powers your growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 md:px-14 md:py-7 rounded-sm font-black uppercase tracking-widest text-sm md:text-lg hover:bg-black transition-all shadow-2xl hover:-translate-y-1 active:scale-95 text-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
