import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageSquare className="group-hover:rotate-12 transition-transform" size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-black opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl border border-gray-100 uppercase tracking-widest">
        Need Expert Consultation?
      </span>
    </a>
  );
};

export default WhatsAppButton;
