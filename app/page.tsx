"use client";

import { useEffect, useState, useRef, createContext, useContext, ReactNode } from "react";
import { LogoBanner } from './components/LogoBanner';

// Context for speaker notes
interface NoteContextType {
  showNote: (title: string, note: string) => void;
  hideNote: () => void;
}

const NoteContext = createContext<NoteContextType | null>(null);

// Speaker Notes Modal Component
const SpeakerNoteModal = ({ 
  isOpen, 
  title, 
  note, 
  onClose 
}: { 
  isOpen: boolean; 
  title: string; 
  note: string; 
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative max-w-lg w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-500/10 p-6 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur-xl opacity-50" />
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-400 text-xs font-medium tracking-widest uppercase">Speaker Note</p>
                <h3 className="text-white font-bold text-lg">{title}</h3>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/80 leading-relaxed">{note}</p>
          </div>
          
          {/* Footer hint */}
          <p className="text-white/30 text-xs mt-4 text-center">Click anywhere to close</p>
        </div>
      </div>
    </div>
  );
};

// Clickable Point Component
const ClickablePoint = ({ 
  children, 
  title, 
  note,
  className = ""
}: { 
  children: ReactNode; 
  title: string; 
  note: string;
  className?: string;
}) => {
  const context = useContext(NoteContext);
  
  return (
    <div 
      onClick={() => context?.showNote(title, note)}
      className={`cursor-pointer group relative ${className}`}
    >
      {children}
      {/* Click indicator */}
      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  );
};

// Icon components for professional look
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

// AI Brain/Neural Network Background Illustration
const AIBrainIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className} fill="none">
    {/* Neural network nodes */}
    <circle cx="200" cy="200" r="30" fill="url(#brainGrad)" opacity="0.6" />
    <circle cx="120" cy="140" r="15" fill="url(#brainGrad)" opacity="0.4" />
    <circle cx="280" cy="140" r="15" fill="url(#brainGrad)" opacity="0.4" />
    <circle cx="100" cy="220" r="12" fill="url(#brainGrad)" opacity="0.3" />
    <circle cx="300" cy="220" r="12" fill="url(#brainGrad)" opacity="0.3" />
    <circle cx="140" cy="280" r="18" fill="url(#brainGrad)" opacity="0.4" />
    <circle cx="260" cy="280" r="18" fill="url(#brainGrad)" opacity="0.4" />
    <circle cx="200" cy="320" r="10" fill="url(#brainGrad)" opacity="0.3" />
    <circle cx="80" cy="160" r="8" fill="url(#brainGrad)" opacity="0.2" />
    <circle cx="320" cy="160" r="8" fill="url(#brainGrad)" opacity="0.2" />
    
    {/* Neural connections */}
    <path d="M200 200 L120 140" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.3" />
    <path d="M200 200 L280 140" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.3" />
    <path d="M200 200 L100 220" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.2" />
    <path d="M200 200 L300 220" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.2" />
    <path d="M200 200 L140 280" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.3" />
    <path d="M200 200 L260 280" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.3" />
    <path d="M120 140 L80 160" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
    <path d="M280 140 L320 160" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
    <path d="M140 280 L200 320" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
    <path d="M260 280 L200 320" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
    
    {/* Animated pulses */}
    <circle cx="200" cy="200" r="40" stroke="url(#brainGrad)" strokeWidth="1" opacity="0.2">
      <animate attributeName="r" values="30;50;30" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="200" r="60" stroke="url(#brainGrad)" strokeWidth="1" opacity="0.1">
      <animate attributeName="r" values="50;80;50" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.05;0.2" dur="4s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>
);

// Floating Robot/Chatbot Illustration
const RobotIllustration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none">
    {/* Robot head */}
    <rect x="50" y="60" width="100" height="80" rx="20" fill="url(#robotGrad)" opacity="0.8" />
    {/* Eyes */}
    <circle cx="80" cy="100" r="12" fill="#0f172a">
      <animate attributeName="r" values="12;10;12" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="100" r="12" fill="#0f172a">
      <animate attributeName="r" values="12;10;12" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="80" cy="100" r="6" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="100" r="6" fill="#60a5fa">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    {/* Antenna */}
    <line x1="100" y1="60" x2="100" y2="40" stroke="#60a5fa" strokeWidth="3" />
    <circle cx="100" cy="35" r="8" fill="#f472b6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
    </circle>
    {/* Mouth */}
    <rect x="70" y="120" width="60" height="8" rx="4" fill="#0f172a" opacity="0.5" />
    {/* Body hint */}
    <rect x="70" y="145" width="60" height="30" rx="8" fill="url(#robotGrad)" opacity="0.4" />
    
    <defs>
      <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
  </svg>
);

// Floating circuit pattern for backgrounds
const CircuitPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" preserveAspectRatio="none">
    <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
      <path d="M10 0 V10 M10 10 H20" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M0 10 H10" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </pattern>
    <rect width="100" height="100" fill="url(#circuit)" />
  </svg>
);

// Floating warning/danger symbol
const DangerSymbol = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <polygon points="50,10 90,80 10,80" stroke="url(#dangerGrad)" strokeWidth="3" fill="none" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
    </polygon>
    <text x="50" y="60" textAnchor="middle" fill="url(#dangerGrad)" fontSize="30" fontWeight="bold" opacity="0.8">!</text>
    <defs>
      <linearGradient id="dangerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
  </svg>
);

// Lock/Security illustration
const SecurityLock = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <rect x="25" y="45" width="50" height="40" rx="8" fill="url(#lockGrad)" opacity="0.7" />
    <path d="M35 45 V35 A15 15 0 0 1 65 35 V45" stroke="url(#lockGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="50" cy="62" r="6" fill="#0f172a" />
    <rect x="47" y="65" width="6" height="10" rx="2" fill="#0f172a" />
    {/* Glow effect */}
    <circle cx="50" cy="65" r="25" stroke="#22c55e" strokeWidth="2" opacity="0.3">
      <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
  </svg>
);

const slides = [
  // Slide 1: Title
  {
    id: 1,
    type: "title",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          {/* AI Brain Illustration */}
          <AIBrainIllustration className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30" />
          <RobotIllustration className="absolute -left-10 bottom-20 w-40 h-40 opacity-20 animate-float" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Shield icon */}
          <div className="w-24 h-24 mx-auto mb-8 text-amber-400 animate-float">
            <ShieldIcon />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight">
            <span className="text-gradient">Identifying & Preventing</span>
            <br />
            <span className="text-gradient-gold">AI-Enabled Attacks</span>
          </h1>

          <div className="divider-gold mx-auto my-8" />

          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-6">
            A Cyber Awareness Session for Staff
          </p>

          <p className="text-lg md:text-xl text-amber-400/80 font-medium tracking-wide">
            Credit: Philemon Hini
          </p>

          <div className="mt-16 flex items-center justify-center gap-2 text-white/30 text-sm">
            <span>Scroll to begin</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Session Objectives
  {
    id: 2,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">What You'll Learn</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Session Objectives</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🎯", title: "Understand AI Attacks", desc: "How AI is weaponized in modern cyber attacks", note: "By the end of this session, staff should clearly understand what AI-enabled threats look like in real life. We'll cover voice cloning, deepfakes, and AI-generated phishing." },
              { icon: "📊", title: "Real-World Cases", desc: "Review actual AI-enabled incidents", note: "We'll examine documented cases where AI was used to defraud banks and businesses. These aren't hypotheticals—they've already happened and cost millions." },
              { icon: "⚠️", title: "Identify Risks", desc: "Risks of using generative AI at work", note: "Many staff are already using ChatGPT and similar tools. We need to understand what data might be exposed and how AI outputs can mislead." },
              { icon: "🛡️", title: "Countermeasures", desc: "Clear, actionable defenses for staff", note: "The goal is practical actions everyone can take. Verification procedures, reporting protocols, and safe AI usage guidelines." },
            ].map((item, i) => (
              <ClickablePoint key={i} title={item.title} note={item.note}>
                <div className="card-glass p-6 hover:bg-white/5 transition-all duration-300 group hover:border-amber-400/30">
                  <div className="flex items-start gap-5">
                    <div className="icon-box bg-gradient-to-br from-amber-500/20 to-orange-500/20 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/50">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ClickablePoint>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: Why AI Changes Everything
  {
    id: 3,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-red-400 font-medium tracking-widest uppercase text-sm mb-4">The New Reality</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Why AI Changes Everything</h2>
          </div>

          <div className="space-y-4">
            {[
              { icon: "📉", title: "Lower Barrier to Entry", desc: "AI reduces attacker skill requirements dramatically", color: "from-red-500/20 to-orange-500/20", note: "Previously, convincing fraud required skilled criminals. Now, anyone can use AI tools to generate professional-looking content, clone voices, or create fake documents. The technical barrier has essentially disappeared." },
              { icon: "⚡", title: "Faster & Cheaper", desc: "Attacks are now faster, cheaper, and far more convincing", color: "from-amber-500/20 to-yellow-500/20", note: "What once took days of research and crafting now takes minutes. AI can generate thousands of personalized phishing emails instantly, each one tailored to the target. The economics of cybercrime have shifted dramatically." },
              { icon: "🚨", title: "Vanishing Red Flags", desc: "Traditional warning signs are disappearing completely", color: "from-rose-500/20 to-red-500/20", note: "We used to tell people to look for poor grammar, spelling mistakes, and awkward phrasing. AI produces flawless, natural language. Those old rules no longer protect us." },
            ].map((item, i) => (
              <ClickablePoint key={i} title={item.title} note={item.note}>
                <div className={`card-glass p-6 bg-gradient-to-r ${item.color} border-l-4 border-l-amber-400 hover:border-l-amber-300 transition-all`}>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ClickablePoint>
            ))}
          </div>

          <ClickablePoint title="Key Warning" note="In the past, scams often had poor grammar or obvious mistakes. AI removes those signs. Attacks are now polished, contextual, and scalable. This directly affects banks because we're high-value targets with complex processes attackers can exploit.">
            <div className="mt-10 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center hover:border-red-400/40 transition-all">
              <p className="text-red-300 font-medium">⚠️ Scams that once had obvious mistakes are now polished, contextual, and scalable</p>
            </div>
          </ClickablePoint>
        </div>
      </div>
    ),
  },

  // Slide 4: What Is an AI-Enabled Attack
  {
    id: 4,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent" />
          <RobotIllustration className="absolute right-10 top-20 w-32 h-32 opacity-25 animate-float" />
          <AIBrainIllustration className="absolute -left-32 bottom-10 w-72 h-72 opacity-15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Definition</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">What Is an AI-Enabled Attack?</h2>
          </div>

          <div className="card-glass p-10 glow-blue">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🤖", label: "AI-powered impersonation of people", note: "This includes deepfake audio and video, where AI creates realistic fake recordings of real people. Attackers can clone someone's voice with just a few seconds of sample audio." },
                { icon: "📄", label: "AI-generated malicious content", note: "AI can write convincing phishing emails, fake documents, fraudulent contracts, and misleading messages. The content is grammatically perfect and contextually relevant." },
                { icon: "🎭", label: "Combined with social engineering", note: "AI doesn't replace social engineering—it supercharges it. Attackers still exploit human psychology, but now with much more convincing tools and materials." },
              ].map((item, i) => (
                <ClickablePoint key={i} title={item.label} note={item.note}>
                  <div className="text-center hover:bg-white/5 rounded-2xl p-4 transition-all">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                    <p className="text-white/80 font-medium">{item.label}</p>
                  </div>
                </ClickablePoint>
              ))}
            </div>

            <ClickablePoint title="Key Insight" note="AI is not attacking systems by itself. It is enhancing human attackers by making impersonation and deception much easier. The attack still relies on tricking people—AI just makes the tricks more convincing.">
              <div className="mt-10 pt-8 border-t border-white/10 text-center hover:bg-white/5 rounded-xl p-4 transition-all">
                <p className="text-xl text-white/60 italic">
                  "AI doesn't attack systems directly — it <span className="text-amber-400 font-semibold">enhances human attackers</span> by making deception much easier."
                </p>
              </div>
            </ClickablePoint>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 5: Key Threats in Banking
  {
    id: 5,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <CircuitPattern className="absolute inset-0 w-full h-full text-cyan-400 opacity-30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Threat Landscape</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Key AI Threats in Banking</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "🎭", title: "Deepfake", subtitle: "Impersonation", color: "from-red-600 to-rose-600", note: "AI can clone voices and faces to impersonate executives, colleagues, or customers. Used to request urgent payments or access to systems. A short voice sample is often enough to create convincing audio." },
              { icon: "📧", title: "AI Phishing", subtitle: "Emails", color: "from-orange-600 to-amber-600", note: "AI-generated phishing emails are personalized, contextual, and free of the spelling/grammar mistakes we used to rely on as red flags. They can reference real projects, colleagues, and recent events." },
              { icon: "👤", title: "Synthetic", subtitle: "Identity Fraud", color: "from-purple-600 to-violet-600", note: "AI generates completely fake but realistic identities—photos, documents, and histories. Used to open fraudulent accounts and bypass KYC checks. Extremely difficult to detect without layered verification." },
              { icon: "🗣️", title: "AI Social", subtitle: "Engineering", color: "from-blue-600 to-cyan-600", note: "AI helps attackers research targets, craft personalized manipulation scripts, and maintain consistent personas across multiple interactions. The social engineering playbook is now automated." },
              { icon: "⚠️", title: "Staff AI", subtitle: "Misuse", color: "from-emerald-600 to-teal-600", note: "Staff using AI tools may inadvertently leak confidential data, rely on fabricated information, or bypass established controls. Shadow AI—unauthorized tools—adds additional risk." },
            ].map((item, i) => (
              <ClickablePoint key={i} title={item.title} note={item.note}>
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-center hover:scale-105 hover:shadow-xl transition-all duration-300`}>
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.subtitle}</p>
                </div>
              </ClickablePoint>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // Slide 6: Deepfake Attacks
  {
    id: 6,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent" />
          <DangerSymbol className="absolute right-20 bottom-32 w-28 h-28 opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-red-400 font-medium tracking-widest uppercase text-sm mb-4">High-Impact Threat</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Deepfake & Impersonation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { text: "AI can clone voices with just seconds of audio", note: "Voice cloning technology has become incredibly accessible. With just 3-10 seconds of someone's voice from a video, voicemail, or recording, AI can generate speech that sounds identical to them. This is why urgent phone requests should always be verified." },
                { text: "Faces can be swapped in real-time video calls", note: "Real-time deepfake technology allows attackers to appear as someone else during live video calls. The technology runs fast enough to replace faces frame-by-frame, making video verification unreliable." },
                { text: "Used to impersonate executives and colleagues", note: "High-value targets include CEOs, CFOs, and finance team members. Attackers research org charts and communication styles to make their impersonation believable. They often target staff who have payment authority." },
                { text: "Often requests urgent payments or system access", note: "The attack typically creates artificial urgency—a deal that must close today, an emergency payment, or immediate system access. Urgency is a manipulation tactic designed to bypass normal verification procedures." },
              ].map((item, i) => (
                <ClickablePoint key={i} title={`Point ${i + 1}`} note={item.note}>
                  <div className="flex items-start gap-4 hover:bg-white/5 rounded-xl p-2 -m-2 transition-all">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="text-white/80 text-lg">{item.text}</p>
                  </div>
                </ClickablePoint>
              ))}
            </div>

            <ClickablePoint title="Key Insight" note="Attackers no longer need insider knowledge or extensive research. A short voice sample from a conference talk, earnings call, or social media video is often enough to create a convincing clone. The barrier to deepfake attacks has essentially disappeared.">
              <div className="card-glass p-8 text-center glow-red hover:border-red-400/30 transition-all">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center">
                  <span className="text-6xl">🎭</span>
                </div>
                <p className="text-xl text-white/60">
                  A <span className="text-red-400 font-bold">short voice sample</span> or video clip is often enough to create a convincing impersonation
                </p>
              </div>
            </ClickablePoint>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 7: Case Study - Deepfake
  {
    id: 7,
    type: "case",
    render: () => (
      <div className="slide" style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)" }}>
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <DangerSymbol className="absolute left-10 top-20 w-24 h-24 opacity-15" />
          <DangerSymbol className="absolute right-20 bottom-20 w-32 h-32 opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="px-4 py-1 bg-red-500 rounded-full text-sm font-bold tracking-wide">CASE STUDY</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-12">
            Deepfake Executive Fraud
          </h2>

          <div className="card-glass p-8 border-red-500/30 glow-red">
            <div className="space-y-6">
              {[
                { num: "01", text: "AI-generated video call impersonated multiple senior executives simultaneously" },
                { num: "02", text: "Employee believed they were in a legitimate multi-person video conference" },
                { num: "03", text: "Transferred $25 million following what appeared to be authorized instructions" },
                { num: "04", text: "Fraud only discovered after the funds had already been moved offshore" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="number-badge bg-red-500 text-white flex-shrink-0">{item.num}</div>
                  <p className="text-white/80 text-lg pt-1">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <p className="text-amber-300 text-center font-semibold text-lg">
                💡 Seeing and hearing someone is <span className="underline">no longer proof</span> of identity
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 8: AI Phishing
  {
    id: 8,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <DangerSymbol className="absolute left-10 bottom-20 w-20 h-20 opacity-15" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-4">Evolved Threat</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">AI-Generated Phishing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Hyper-Personalised", desc: "Tailored to your role, projects, and recent activities", color: "from-orange-500 to-amber-500" },
              { icon: "✨", title: "Flawless Language", desc: "Perfect grammar, natural tone, no obvious red flags", color: "from-yellow-500 to-orange-500" },
              { icon: "🔍", title: "Deep Context", desc: "Uses data from social media and past breaches", color: "from-amber-500 to-red-500" },
            ].map((item, i) => (
              <div key={i} className="card-glass p-8 text-center hover:bg-white/5 transition-all group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-center">
            <p className="text-orange-300">
              🚨 AI can generate <span className="font-bold">hundreds of unique, targeted phishing emails</span> in seconds
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 9: Synthetic Identity
  {
    id: 9,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Identity Fraud</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Synthetic Identity Fraud</h2>
          </div>

          <div className="card-glass p-10 glow-blue">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <span className="text-7xl">👤</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">!</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  "AI generates completely realistic fake identities",
                  "Used to open fraudulent accounts and bypass KYC",
                  "Extremely difficult to detect without layered verification",
                  "Increasingly used for money laundering schemes",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <p className="text-white/80 text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 10: AI Chatbots Risk
  {
    id: 10,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-medium tracking-widest uppercase text-sm mb-4">Internal Risk</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">AI Chatbot Misinformation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "AI systems confidently provide wrong answers",
                  "Can fabricate policies, citations, and data",
                  "Users trust AI outputs without verification",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <p className="text-white/70">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-5xl">⚠️</span>
                </div>
                <p className="text-xl text-white/80 italic">
                  "AI does not understand <span className="text-yellow-400 font-bold">truth</span>.<br />
                  It predicts likely responses."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: Case Study - Chatbot
  {
    id: 11,
    type: "case",
    render: () => (
      <div className="slide" style={{ background: "linear-gradient(135deg, #1a1500 0%, #2d2000 50%, #1a1500 100%)" }}>
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="px-4 py-1 bg-amber-500 text-black rounded-full text-sm font-bold tracking-wide">CASE STUDY</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-12">
            Chatbot Policy Error
          </h2>

          <div className="card-glass p-8 border-amber-500/30">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "💬", text: "AI chatbot gave incorrect refund policy information" },
                { icon: "😰", text: "Customer relied on it and suffered financial loss" },
                { icon: "⚖️", text: "Organisation held legally responsible for AI's advice" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-white/5">
                  <span className="text-5xl block mb-4">{item.icon}</span>
                  <p className="text-white/70">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <p className="text-amber-300 text-center font-semibold">
                AI errors can lead to <span className="underline">legal, financial, and reputational</span> consequences
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 12: Staff AI Use
  {
    id: 12,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">Current State</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Staff Use of AI at Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "✉️", title: "Drafting", desc: "Emails, documents, and reports" },
              { icon: "📝", title: "Summarising", desc: "Meeting notes and research" },
              { icon: "💡", title: "Brainstorming", desc: "Ideas and problem-solving" },
            ].map((item, i) => (
              <div key={i} className="card-glass p-8 text-center hover:bg-white/5 transition-all">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
            <p className="text-cyan-300">Most staff are already using AI in some form — often without oversight</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 13: Risks of GenAI
  {
    id: 13,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-red-400 font-medium tracking-widest uppercase text-sm mb-4">Critical Risks</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Risks of Generative AI</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🔓", title: "Data Leakage", desc: "Confidential information exposed to third parties", color: "border-l-red-500", bg: "from-red-500/10" },
              { icon: "❌", title: "Fabricated Outputs", desc: "Incorrect or completely made-up information", color: "border-l-orange-500", bg: "from-orange-500/10" },
              { icon: "📋", title: "Compliance Risk", desc: "Regulatory violations and audit failures", color: "border-l-purple-500", bg: "from-purple-500/10" },
              { icon: "👻", title: "Shadow AI", desc: "Unapproved tools used without oversight", color: "border-l-gray-500", bg: "from-gray-500/10" },
            ].map((item, i) => (
              <div key={i} className={`card-glass p-6 border-l-4 ${item.color} bg-gradient-to-r ${item.bg} to-transparent`}>
                <div className="flex items-start gap-5">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
            <p className="text-red-300 font-medium">⚠️ Anything entered into public AI tools may leave the bank's control forever</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: Business Risk Example
  {
    id: 14,
    type: "case",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="px-4 py-1 bg-orange-500 text-black rounded-full text-sm font-bold tracking-wide">EXAMPLE</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-12">
            AI-Related Business Risk
          </h2>

          <div className="card-glass p-8">
            <div className="space-y-6">
              {[
                { icon: "📄", text: "Staff used AI to generate client reports with fabricated citations" },
                { icon: "🎯", text: "Incorrect conclusions were accepted as fact by management" },
                { icon: "📢", text: "Required public retraction causing significant reputational damage" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-xl bg-white/5">
                  <span className="text-4xl">{item.icon}</span>
                  <p className="text-white/80 text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <p className="text-center text-xl text-white font-semibold">
                Human review is <span className="text-amber-400">mandatory</span> for any important AI output
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 15: Threat Summary
  {
    id: 15,
    type: "summary",
    render: () => (
      <div className="slide" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2818 50%, #0a1628 100%)" }}>
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">Summary</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">How AI Attacks Succeed</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🤝", text: "Exploiting trust in people" },
              { icon: "⏱️", text: "Creating false urgency" },
              { icon: "🤖", text: "Overreliance on automation" },
              { icon: "❓", text: "Lack of verification" },
            ].map((item, i) => (
              <div key={i} className="card-glass p-6 flex items-center gap-5 hover:bg-white/5 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="text-xl text-white/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <p className="text-xl text-emerald-300 font-semibold">
              AI attacks succeed when <span className="text-white">human controls fail</span>, not when systems fail
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slides 16-20: Countermeasures
  ...([
    { num: 1, title: "Verify Identity", icon: "✓", color: "from-blue-600 to-cyan-600", items: ["Always verify unusual requests independently", "Use known phone numbers or official systems", "Never rely on voice, video, or email alone"], tip: "Verification must be out-of-band and based on trusted contact details" },
    { num: 2, title: "Slow Down", icon: "⏸", color: "from-orange-600 to-amber-600", items: ["Urgency is a manipulation tactic", "Pause before acting on unusual requests", "Escalate when in doubt"], tip: "Most AI-enabled fraud relies on speed. Slowing down breaks the attack." },
    { num: 3, title: "Report Early", icon: "📣", color: "from-emerald-600 to-teal-600", items: ["Report suspicious emails, calls, or AI behavior", "Reporting is encouraged, not punished", "Early reports protect others"], tip: "One report can prevent multiple victims. Silence helps attackers." },
    { num: 4, title: "Safe AI Use", icon: "🤖", color: "from-purple-600 to-violet-600", items: ["Use only approved AI tools", "Never enter customer or confidential data", "Treat AI output as a draft, not a decision"], tip: "AI should support work, not replace judgment or controls" },
    { num: 5, title: "Strong Auth", icon: "🔐", color: "from-blue-600 to-indigo-600", items: ["Use multi-factor authentication always", "Never share credentials or codes", "Protect devices and active sessions"], tip: "Even if AI helps steal passwords, MFA can stop account takeover" },
  ].map((cm, idx) => ({
    id: 16 + idx,
    type: "countermeasure",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <SecurityLock className="absolute right-16 bottom-24 w-36 h-36 opacity-15" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r ${cm.color} mb-6`}>
              <span className="text-2xl">{cm.icon}</span>
              <span className="font-bold text-white">COUNTERMEASURE #{cm.num}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">{cm.title}</h2>
          </div>

          <div className={`card-glass p-10 bg-gradient-to-br ${cm.color} bg-opacity-10`}>
            <div className="space-y-6">
              {cm.items.map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-xl bg-white/10 backdrop-blur">
                  <div className="number-badge bg-white/20 text-white">{i + 1}</div>
                  <p className="text-xl text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-lg text-white/80 italic">💡 {cm.tip}</p>
            </div>
          </div>
        </div>
      </div>
    ),
  }))),

  // Slide 21: Do's and Don'ts
  {
    id: 21,
    type: "content",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Practical Guidelines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass p-8 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-emerald-400">DO</h3>
              </div>
              <div className="space-y-4">
                {["Verify independently", "Report suspicious activity", "Follow AI usage policies"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10">
                    <span className="text-emerald-400 text-xl">✓</span>
                    <p className="text-white/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 border-2 border-red-500/30 bg-gradient-to-br from-red-900/20 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">✕</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-red-400">DON'T</h3>
              </div>
              <div className="space-y-4">
                {["Trust AI outputs blindly", "Share sensitive data with public AI", "Bypass procedures due to urgency"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10">
                    <span className="text-red-400 text-xl">✕</span>
                    <p className="text-white/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 22: Scenario
  {
    id: 22,
    type: "content",
    render: () => (
      <div className="slide" style={{ background: "linear-gradient(135deg, #1a1033 0%, #0d1a33 100%)" }}>
        <LogoBanner />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-xl">🎯</span>
              <span className="text-purple-300 font-medium">Interactive Exercise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient">Scenario</h2>
          </div>

          <div className="card-glass p-8 mb-8 border-purple-500/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📱</span>
              <p className="text-xl text-white/90 leading-relaxed">
                You receive an <span className="text-amber-400 font-semibold">urgent voice message</span> from a senior manager asking you to approve a quick payment transfer. The voice sounds exactly like them.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white/60 font-medium mb-4">Questions to discuss:</h3>
            {[
              "What is the FIRST thing you should do?",
              "Who should you contact to verify?",
              "What should you absolutely NOT do?",
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">{i + 1}</div>
                <p className="text-white/80 text-lg">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // Slide 23: Key Takeaways
  {
    id: 23,
    type: "summary",
    render: () => (
      <div className="slide slide-dark">
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <SecurityLock className="absolute right-10 top-24 w-28 h-28 opacity-15" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">Remember This</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient">Key Takeaways</h2>
          </div>

          <div className="space-y-6">
            {[
              { icon: "🎭", text: "AI makes attacks more convincing, not smarter", color: "from-red-500 to-rose-600" },
              { icon: "👥", text: "People and process controls remain critical", color: "from-blue-500 to-cyan-600" },
              { icon: "🛡️", text: "Verification and reporting are your strongest defenses", color: "from-emerald-500 to-teal-600" },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center gap-6`}>
                <span className="text-5xl">{item.icon}</span>
                <p className="text-xl md:text-2xl text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-xl text-white/70">
              Technology alone cannot stop AI-enabled attacks.<br />
              <span className="text-amber-400 font-semibold">Staff behavior is the first line of defense.</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 24: Final
  {
    id: 24,
    type: "final",
    render: () => (
      <div className="slide" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)" }}>
        <LogoBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <AIBrainIllustration className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20" />
          <SecurityLock className="absolute right-20 bottom-28 w-32 h-32 opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-10 text-amber-400">
            <ShieldIcon />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-10">
            <span className="text-white">When in doubt,</span>
            <br />
            <span className="text-amber-300">stop</span>
            <span className="text-white">, </span>
            <span className="text-emerald-300">verify</span>
            <span className="text-white">, and </span>
            <span className="text-cyan-300">report</span>
            <span className="text-white">.</span>
          </h2>

          <div className="divider-gold mx-auto mb-10" />

          <p className="text-2xl text-white/80 font-light mb-16">
            Security is everyone's responsibility.
          </p>

          <p className="text-lg text-white/50">Thank you for your attention</p>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [noteModal, setNoteModal] = useState({ isOpen: false, title: "", note: "" });
  const containerRef = useRef<HTMLDivElement>(null);

  const showNote = (title: string, note: string) => {
    setNoteModal({ isOpen: true, title, note });
  };

  const hideNote = () => {
    setNoteModal({ isOpen: false, title: "", note: "" });
  };

  const goToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideHeight = window.innerHeight;
    containerRef.current.scrollTo({
      top: index * slideHeight,
      behavior: "smooth",
    });
  };

  const goNext = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const slideHeight = window.innerHeight;
      const newSlide = Math.round(scrollTop / slideHeight);
      setCurrentSlide(Math.min(newSlide, slides.length - 1));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (noteModal.isOpen) {
        if (e.key === "Escape") hideNote();
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goPrev();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, noteModal.isOpen]);

  return (
    <NoteContext.Provider value={{ showNote, hideNote }}>
    <main className="relative">
      {/* Speaker Note Modal */}
      <SpeakerNoteModal 
        isOpen={noteModal.isOpen} 
        title={noteModal.title} 
        note={noteModal.note} 
        onClose={hideNote} 
      />
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Previous button */}
          <button
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-all flex items-center justify-center group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide dots */}
          <div className="flex items-center gap-1.5 px-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-2 bg-amber-400"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            disabled={currentSlide === slides.length - 1}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-all flex items-center justify-center group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/20" />

          {/* Slide counter */}
          <div className="px-2">
            <span className="text-white/80 font-medium text-sm">
              <span className="text-amber-400 font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-white/30">/</span>
              <span>{slides.length}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Keyboard hint - top right */}
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur border border-white/10">
          <span className="text-white/30 text-xs">Use</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-xs font-mono">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-xs font-mono">→</kbd>
          <span className="text-white/30 text-xs">keys</span>
        </div>
      </div>

      {/* Slides container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: "thin" }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="snap-start">
            {slide.render()}
          </div>
        ))}
      </div>
    </main>
    </NoteContext.Provider>
  );
}
File 2: /src/app/components/LogoBanner.tsx

export function LogoBanner() {
  return (
    <div className="absolute top-6 left-6 z-50">
      <img 
        src={dtiLogo} 
        alt="DTI Logo" 
        className="h-16 w-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
