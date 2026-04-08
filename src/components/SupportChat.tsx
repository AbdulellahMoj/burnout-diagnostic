import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2, Flame } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi there. I'm here if you want to talk about how you're feeling, or if you have questions about burnout. This is a safe space."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const userEntry: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMsg
    };

    const nextMessages = [...messages, userEntry];

    setInput('');
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: nextMessages,
          userMessage: userMsg
        })
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || "I'm here for you. Could you tell me a bit more?";
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: "I'm having a little trouble connecting right now, but please know that your feelings are valid and you're not alone in this." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-clay-lemon-500 text-clay-cream rounded-full shadow-clay-hover flex items-center justify-center z-50 hover:bg-clay-lemon-400 transition-colors focus-dashed hover-brutalist"
        aria-label="Open support chat"
        aria-expanded={isOpen}
        aria-controls="support-chat-panel"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="support-chat-panel"
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-ui-bg border border-ui-border rounded-3xl shadow-clay-hover flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-ui-border bg-ui-warm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-clay-lemon-500/20 flex items-center justify-center text-clay-lemon-500">
                  <Flame size={18} />
                </div>
                <div>
                  <h3 className="font-bold tracking-tight text-ui-text text-sm">Support Guide</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-clay-silver">AI Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-clay-silver hover:text-ui-text transition-colors p-1 rounded-full hover:bg-ui-border"
                aria-label="Close support chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ui-bg">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 text-[15px] leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-clay-lemon-500 text-clay-cream rounded-2xl rounded-tr-sm shadow-clay-card' 
                        : 'bg-ui-warm text-ui-text border border-ui-border rounded-2xl rounded-tl-sm shadow-clay-card'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-ui-warm border border-ui-border rounded-2xl rounded-tl-sm p-3 shadow-clay-card">
                    <Loader2 size={16} className="animate-spin text-clay-silver" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-ui-border bg-ui-warm">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className="flex-1 bg-ui-bg border border-ui-border rounded-full px-4 py-2 text-[15px] text-ui-text focus:outline-none focus:border-clay-silver transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-clay-lemon-500 text-clay-cream flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-clay-lemon-400 transition-colors flex-shrink-0 focus-dashed shadow-clay-card"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
