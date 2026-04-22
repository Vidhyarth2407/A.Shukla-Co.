import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-secondary text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 animate-pulse">
          <Zap size={300} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-9xl font-black mb-10 leading-[0.8] uppercase tracking-tighter italic text-white"
            >
              Get In <br />
              <span className="text-primary italic">Touch</span>
            </motion.h1>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Have a project in mind? Our engineering team is ready to provide technical consultation and premium electrical solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter italic border-b-8 border-primary inline-block">Regional Offices</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Corporate HQ</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">123, Industrial Estate, Sector V, Salt Lake, Kolkata, West Bengal 700091</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Executive Support</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">+91 XXXXX XXXXX / +91 YYYYY YYYYY</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Project Proposals</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">info@ashukla.com / projects@ashukla.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-[3rem] p-12 text-white relative h-min">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-[#25D366] p-4 rounded-2xl">
                    <MessageCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Direct Tech <br />Consultation</h3>
                </div>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                  Get a response within 60 minutes by messaging our primary engineering group on WhatsApp.
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="bg-[#25D366] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all inline-block shadow-xl shadow-green-500/20"
                >
                  Message Engineer
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 h-min sticky top-32"
            >
              <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">Request <span className="text-primary italic">Quote</span></h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g., Rajesh Kumar"
                      className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Project Requirement</label>
                  <textarea
                    name="requirement"
                    rows="5"
                    required
                    placeholder="Briefly describe your high-tension electrical needs..."
                    className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-primary font-black py-6 rounded-2xl uppercase tracking-widest text-lg hover:bg-black transition-all flex items-center justify-center gap-4 shadow-2xl hover:-translate-y-1"
                >
                  <Send size={24} /> Dispatch Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[600px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl text-center border border-white/50 max-w-sm">
            <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={40} />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight">Locate Us</h4>
            <p className="text-gray-500 font-medium mt-4">Kolkata Regional Center <br />Salt Lake Sector-V</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
