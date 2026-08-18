import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SUGGESTION_CHIPS = [{
  id: 'chip-stack',
  label: "What's your tech stack?"
}, {
  id: 'chip-project',
  label: 'Tell me about your best project'
}, {
  id: 'chip-work',
  label: 'Are you open to work?'
}, {
  id: 'chip-learning',
  label: 'What are you learning right now?'
}];

// ─── Hardcoded reply logic ────────────────────────────────────────────────────

function getReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('stack') || q.includes('tech')) {
    return 'Python and JavaScript are my daily drivers — React on the front, Node.js on the back, PostgreSQL for data. I\'ve also been getting into Docker and Linux tooling lately.';
  }
  if (q.includes('project')) {
    return "FlowerShop — a Flutter e-commerce app I built during my internship at La Poste Tunisienne. Browse, search, and buy flowers across Android, iOS, Web, and Windows, with Firebase Auth, Firestore, and Storage.";
  }
  if (q.includes('work') || q.includes('hire') || q.includes('open')) {
    return "Yes! I'm actively looking for internships and collaborations. Reach me at nourbenjemaa94@gmail.com.";
  }
  if (q.includes('learn') || q.includes('studying')) {
    return "Right now I'm deep in distributed systems and dabbling in Rust. Slowly but surely!";
  }
  if (q.includes('github')) {
    return 'Find my projects at github.com/nourbenjemaa94-cmd.';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
    return 'Email: nourbenjemaa94@gmail.com or LinkedIn: linkedin.com/in/nour-ben-jemaa.';
  }
  return "Great question! Feel free to browse the portfolio — there's a lot to explore.";
}

/*
 * ─── LLM API SCAFFOLD (replace getReply() with this when ready) ───────────────
 *
 * const SYSTEM_PROMPT = `
 *   You are mini-Nour, a friendly AI assistant embedded in Nour Ben Jemaa's portfolio.
 *   Nour is a Computer Science student based in Tunis, Tunisia, Year 3.
 *   She is a Full-Stack developer skilled in Python, JavaScript, React, Node.js, PostgreSQL, Docker, Linux.
 *   Her featured project is FlowerShop — a Flutter e-commerce app built during her internship at La Poste Tunisienne.
 *   She is actively seeking internships and collaborations.
 *   Contact: nourbenjemaa94@gmail.com | GitHub: github.com/nourbenjemaa94-cmd | LinkedIn: linkedin.com/in/nour-ben-jemaa
 *   Keep answers short, warm, and first-person casual.
 * `;
 *
 * async function getLLMReply(messages: { role: string; content: string }[]): Promise<string> {
 *   // OpenAI example:
 *   // const res = await fetch('https://api.openai.com/v1/chat/completions', {
 *   //   method: 'POST',
 *   //   headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
 *   //   body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages] }),
 *   // });
 *   // const data = await res.json();
 *   // return data.choices[0].message.content;
 *
 *   // Groq example:
 *   // const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
 *   //   method: 'POST',
 *   //   headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${GROQ_API_KEY}` },
 *   //   body: JSON.stringify({ model: 'llama3-8b-8192', messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages] }),
 *   // });
 *   // const data = await res.json();
 *   // return data.choices[0].message.content;
 *   return '';
 * }
 */

// ─── Avatar circle ────────────────────────────────────────────────────────────

const AvatarCircle = ({
  size = 52
}: {
  size?: number;
}) => <div style={{
  width: size,
  height: size,
  borderRadius: '50%',
  background: '#F4F5FA',
  border: '2px solid #7A2A50',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: size > 36 ? '0 4px 20px rgba(122,42,80,0.35)' : 'none',
  overflow: 'hidden',
  position: 'relative' as const
}}>
  <img src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/420171969561006080/420201423544946688/0600fc785aa8a7d0261aa1b6049876ddecd03b8bbe0f39a7a8365b3153a33c5a.png" alt="Nour chibi avatar" style={{
    width: '130%',
    height: '130%',
    objectFit: 'cover',
    objectPosition: 'center top',
    mixBlendMode: 'multiply',
    display: 'block',
    flexShrink: 0
  }} />
  
</div>;

// ─── Typing indicator ─────────────────────────────────────────────────────────

const TypingIndicator = () => <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px'
}}>
    <div style={{
    background: '#fff',
    borderLeft: '2px solid #7A2A50',
    borderRadius: '0 8px 8px 0',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 6
  }}>
    
      <span className="dot-bounce-1" style={{
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#7A2A50',
      display: 'inline-block'
    }} />
      <span className="dot-bounce-2" style={{
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#7A2A50',
      display: 'inline-block'
    }} />
      <span className="dot-bounce-3" style={{
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#7A2A50',
      display: 'inline-block'
    }} />
      <span style={{
      fontFamily: "'Inter', sans-serif",
      fontStyle: 'italic',
      fontSize: 11,
      color: '#6B7080',
      marginLeft: 4
    }}>
      
        thinking...
      </span>
    </div>
  </div>;

// ─── Main widget ──────────────────────────────────────────────────────────────

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [bubbleVisible, setBubbleVisible] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [chipsHidden, setChipsHidden] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Speech bubble timer
  React.useEffect(() => {
    const showTimer = setTimeout(() => setBubbleVisible(true), 1800);
    const hideTimer = setTimeout(() => setBubbleVisible(false), 1800 + 4000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Auto-scroll
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  // Focus input when panel opens
  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);
  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: text.trim()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setChipsHidden(true);
    setIsTyping(true);

    // Simulate typing delay then respond
    const delay = 900 + Math.random() * 600;
    setTimeout(() => {
      const reply = getReply(text);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        text: reply
      };
      setIsTyping(false);
      setMessages(prev => [...prev, assistantMsg]);
    }, delay);
  };
  const handleChipClick = (label: string) => {
    sendMessage(label);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };
  const handleAvatarClick = () => {
    setBubbleVisible(false);
    setIsOpen(prev => !prev);
  };
  return <div style={{
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 12
  }}>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && <motion.div key="chat-panel" initial={{
        opacity: 0,
        scale: 0.85,
        y: 20,
        transformOrigin: 'bottom right'
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.85,
        y: 20
      }} transition={{
        duration: 0.28,
        ease: 'easeOut'
      }} style={{
        width: 320,
        maxHeight: 460,
        background: '#F4F5FA',
        border: '1px solid #7A2A50',
        borderRadius: 16,
        boxShadow: '0 8px 40px rgba(0,0,0,0.16)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
          
            {/* Header */}
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 14px',
          borderBottom: '1px solid rgba(122,42,80,0.15)',
          background: '#fff',
          flexShrink: 0
        }}>
            
              <AvatarCircle size={32} />
              <span style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            color: '#7A2A50',
            fontSize: 15,
            fontWeight: 500,
            flex: 1
          }}>
              
                mini-Nour
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#6B7080',
            display: 'flex',
            alignItems: 'center',
            padding: 4,
            borderRadius: 4
          }}>
              
                <X size={16} />
              </button>
            </div>

            {/* Messages area */}
            <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 0',
          minHeight: 0
        }}>
            
              {/* Empty state + suggestion chips */}
              {messages.length === 0 && !chipsHidden && <div style={{
            padding: '8px 14px 4px'
          }}>
                  <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: '#6B7080',
              marginBottom: 10,
              fontStyle: 'italic'
            }}>
                
                    Ask me anything about Nour ✨
                  </p>
                  <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6
            }}>
                    {SUGGESTION_CHIPS.map(chip => <button key={chip.id} onClick={() => handleChipClick(chip.label)} style={{
                background: '#F1E2EC',
                border: '1px solid #7A2A50',
                borderRadius: 999,
                padding: '5px 11px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: '#7A2A50',
                cursor: 'pointer',
                transition: 'background 0.15s',
                lineHeight: 1.4
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#e8ccd8';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#F1E2EC';
              }}>
                  
                        {chip.label}
                      </button>)}
                  </div>
                </div>}

              {/* Message list */}
              {messages.map(msg => <div key={msg.id} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            padding: '4px 12px'
          }}>
              
                  <div style={{
              maxWidth: '82%',
              padding: '8px 12px',
              borderRadius: msg.role === 'user' ? 12 : '0 12px 12px 0',
              background: msg.role === 'user' ? '#E0E8F7' : '#fff',
              borderLeft: msg.role === 'assistant' ? '2px solid #7A2A50' : 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontStyle: msg.role === 'assistant' ? 'italic' : 'normal',
              color: msg.role === 'user' ? '#1B2A4A' : '#181A26',
              lineHeight: 1.55
            }}>
                
                    {msg.text}
                  </div>
                </div>)}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input row */}
            <form onSubmit={handleSubmit} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px 12px',
          borderTop: '1px solid rgba(122,42,80,0.12)',
          background: '#fff',
          flexShrink: 0
        }}>
            
              <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="ask me something..." disabled={isTyping} style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid #D7DAE6',
            outline: 'none',
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: '#181A26',
            padding: '4px 0',
            transition: 'border-color 0.2s'
          }} onFocus={e => {
            e.target.style.borderBottomColor = '#7A2A50';
          }} onBlur={e => {
            e.target.style.borderBottomColor = '#D7DAE6';
          }} />
            
              <button type="submit" disabled={!inputValue.trim() || isTyping} aria-label="Send message" style={{
            background: inputValue.trim() && !isTyping ? '#7A2A50' : '#D7DAE6',
            border: 'none',
            borderRadius: 999,
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: inputValue.trim() && !isTyping ? 'pointer' : 'default',
            transition: 'background 0.2s',
            flexShrink: 0
          }}>
              
                <ArrowRight size={15} color="#fff" />
              </button>
            </form>
          </motion.div>}
      </AnimatePresence>

      {/* Speech bubble */}
      <AnimatePresence>
        {bubbleVisible && !isOpen && <motion.div key="speech-bubble" initial={{
        opacity: 0,
        scale: 0.7,
        transformOrigin: 'bottom right'
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.7
      }} transition={{
        duration: 0.22,
        ease: 'easeOut'
      }} style={{
        background: '#F4F5FA',
        border: '1px solid #7A2A50',
        borderRadius: 12,
        padding: '8px 14px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        position: 'relative',
        maxWidth: 220
      }}>
          
            <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: '#181A26',
          margin: 0,
          lineHeight: 1.45,
          whiteSpace: 'nowrap'
        }}>
            
              psst — ask me anything about Nour!
            </p>
            {/* Triangle pointer toward avatar (bottom-right) */}
            <div style={{
          position: 'absolute',
          bottom: -7,
          right: 18,
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '7px solid #7A2A50'
        }} />
          
            <div style={{
          position: 'absolute',
          bottom: -5.5,
          right: 19,
          width: 0,
          height: 0,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '6px solid #F4F5FA'
        }} />
          
          </motion.div>}
      </AnimatePresence>

      {/* Floating avatar button */}
      <motion.button onClick={handleAvatarClick} aria-label={isOpen ? 'Close chat' : 'Open chat with mini-Nour'} animate={{
      y: [0, -5, 0]
    }} transition={{
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop'
    }} style={{
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'block'
    }} whileHover={{
      scale: 1.08
    }} whileTap={{
      scale: 0.94
    }}>
        
        <AvatarCircle size={52} />
      </motion.button>
    </div>;
};