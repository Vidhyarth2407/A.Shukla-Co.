import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let result;
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch (e) {
        throw new Error('Server returned an invalid response.');
      }

      if (response.ok && result.status === 'success') {
        setStatus({ type: 'success', message: result.message || 'Thank you! Your inquiry has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', requirement: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Could not connect to the server. Please check if the Node.js backend is running.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Have a project in mind? Our team is ready to give you expert help and high-quality electrical systems.
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
                <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter italic border-b-8 border-primary inline-block">Our Office</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Bengaluru Office</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">A-207, KSSIDC Complex, Phase 1, Electronics City, Bengaluru, Karnataka – 560100</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Kolkata Office</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">Ground Floor, #5, Victoria Terrace, Gorkey Sadan, Kolkata, West Bengal – 700020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-8 group">
                    <div className="bg-gray-50 p-6 rounded-3xl text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Project Proposals</h4>
                      <p className="text-gray-500 text-lg leading-relaxed"><a href="mailto:info@ashuklaco.in" className="hover:text-primary transition-colors">info@ashuklaco.in</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 h-min sticky top-32"
            >
              <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">Contact <span className="text-primary italic">Us</span></h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
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
                      value={formData.phone}
                      placeholder="+91 00000 00000"
                      className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 font-outfit">Your Requirement</label>
                  <textarea
                    name="requirement"
                    rows="5"
                    required
                    value={formData.requirement}
                    placeholder="Tell us about your electrical needs..."
                    className="w-full bg-gray-50 border-none px-6 py-5 rounded-2xl focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-secondary resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm font-bold ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-lg transition-all duration-500 overflow-hidden group ${
                    isSubmitting 
                    ? 'bg-secondary/80 cursor-wait' 
                    : 'bg-secondary hover:bg-black text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-[0.98]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-4">
                    {isSubmitting ? (
                      <>
                        <div className="h-6 w-6 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        <span className="text-white">Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Request</span>
                      </>
                    )}
                  </div>
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[500px] md:h-[800px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          title="A. Shukla & Co. - Bengaluru Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.972352873111!2d77.6749003!3d12.8447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c90538a8e1b%3A0x6e9a7e089679c13e!2sElectronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka 560100!5e0!3m2!1sen!2sin!4v1714378000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
