'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const chatResponses: Record<string, string> = {
  "What happens if I don't complete everything within 24 hours?": "You'll still have full access to all Moil Business Insights features, but at our regular $375 pricing instead of the $50 Pfest rate. The 24-hour window is designed to help you see immediate value – our most successful users are those who jump in quickly! 🚀",
  "Is the free access only for Pfest attendees?": "Yes! This exclusive offer is only available to registered Pflugerville Venture Pfest attendees. The first 50 attendees receive completely free access, while all other Pfest attendees get the special $50 price (87% off regular pricing). It's our way of investing in the local entrepreneurship community! 🎉",
  "Can I access Moil Business Insights before the event?": "Absolutely! Access begins immediately upon registration confirmation. You don't need to wait for the event to start using the platform and can begin exploring your market insights right away. Perfect for getting ahead of the game! 💪",
  "Tell me more about Moil and what it does": "Moil is an AI-powered platform that transforms how small businesses and job seekers connect, grow, and thrive! We provide bilingual, voice- and text-accessible tools including instant ATS-compatible resumes, automatic candidate matching, rapid job postings, and AI-driven business insights. Founded by Colombian immigrant Andres F. Urrego, we're all about making AI work for people first! 🤖✨",
  "How do I sign up and claim my spot?": "Super easy! Just visit business.moilapp.com and you can sign up instantly with Google, email, or phone number - no long forms to fill out! Once you're in, confirm you're a Pfest attendee and you're all set! Ready to get started? <a href='https://business.moilapp.com' target='_blank' class='text-white font-bold underline hover:opacity-80'>🚀 Sign Up Now</a>",
  "What's the difference between free and $50 pricing?": "Great question! Both tiers get the exact same features: market research dashboards, one-click business plan, and 3 months of free hiring tools. The only difference is the price - first 50 Pfest attendees get it completely FREE, everyone else pays just $50 (regularly $375). Same amazing value, just depends on when you sign up! ⚡"
};

const initialMessage: Message = {
  id: 1,
  text: "🚀 Welcome to the Moil AI Assistant! I'm here to answer your questions about the Pfest offer. How can I help?",
  isUser: false,
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleQuestion = (question: string) => {
    const userMessage: Message = { id: Date.now(), text: question, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const responseText = chatResponses[question] || "I'm still learning! For detailed questions, please contact us at hello@moilapp.com.";
      const botMessage: Message = { id: Date.now() + 1, text: responseText, isUser: false };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-[calc(100vw-2.5rem)] max-w-md h-[70vh] max-h-[600px] flex flex-col rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-primary-gradient p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <h3 className="font-bold">Moil AI Assistant</h3>
                  <p className="text-xs opacity-80">Pfest Offer Expert</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Close chat">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 overflow-y-auto flex-grow bg-primary-50/50">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  {!msg.isUser && <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-lg shrink-0">🤖</div>}
                  <div
                    className={`p-3 rounded-2xl max-w-xs md:max-w-sm text-sm ${msg.isUser ? 'bg-accent text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none fill-white shadow-sm'}`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                  {msg.isUser && <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0"><User className="w-5 h-5" /></div>}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="p-3 bg-white/80 border-t border-white/60 shrink-0">
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(chatResponses).map(q => (
                  <button 
                    key={q} 
                    onClick={() => handleQuestion(q)} 
                    className="text-left text-xs p-2 rounded-lg bg-gray-100 hover:bg-primary-100 hover:text-primary-800 transition-colors text-gray-600 font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary-gradient shadow-lg flex items-center justify-center text-white text-2xl shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
        aria-label="Toggle chat widget"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'message'}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
