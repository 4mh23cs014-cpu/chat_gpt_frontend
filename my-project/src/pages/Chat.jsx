import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your DashVite AI assistant. How can I help you today?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (textInput) => {
        const textToSearch = typeof textInput === 'string' ? textInput : input;
        if (!textToSearch.trim()) return;

        const newUserMessage = { id: Date.now(), text: textToSearch, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setIsTyping(true);

        // Mock AI response
        setTimeout(() => {
            let aiText = "That's an interesting question. Based on your current project settings, I'd recommend optimizing your database queries and using a CDN for better asset delivery.";

            if (textToSearch.toLowerCase().includes('report')) {
                aiText = "I can certainly help you generate a report. Would you like a CSV export of your recent activity or a summary of your system health?";
            } else if (textToSearch.toLowerCase().includes('project')) {
                aiText = "You currently have 12 active projects. Most of them are in 'Phase 2'. I suggest reviewing 'Project Alpha' as its deadline is approaching.";
            }

            const aiResponse = {
                id: Date.now() + 1,
                text: aiText,
                sender: 'ai'
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const suggestions = [
        "Generate System Report",
        "Analyze Project Alpha",
        "Check Security Status",
        "Help with UI Design"
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-6 flex flex-col items-center">
            <div className="max-w-4xl w-full flex flex-col h-[80vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative">
                {/* Decorative background for header */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 -z-0"></div>

                {/* Chat Header */}
                <div className="p-8 border-b border-slate-100 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-indigo-600 rounded-[1.25rem] flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-indigo-200 transform hover:scale-105 transition-transform">
                            ✨
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">DashVite AI</h2>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Quantum Intelligence Active</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all text-slate-400 group"
                    >
                        <svg className="w-6 h-6 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-grow overflow-y-auto p-8 space-y-10 scroll-smooth relative z-10 bg-white/50 backdrop-blur-sm">
                    {messages.map((m) => (
                        <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                            <div className={`max-w-[80%] p-7 rounded-[2.5rem] text-lg font-bold shadow-sm leading-relaxed ${m.sender === 'user'
                                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200'
                                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                                }`}>
                                {m.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-slate-100 px-6 py-4 rounded-[1.5rem] flex gap-1.5">
                                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce"></div>
                                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions & Input Area */}
                <div className="p-8 bg-slate-50 border-t border-slate-100 relative z-10">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(s)}
                                className="px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-black text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-sm active:scale-95"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center gap-5 bg-white p-3 rounded-[2rem] shadow-2xl border border-slate-100 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow px-7 py-5 outline-none text-slate-700 font-bold bg-transparent text-xl"
                        />
                        <button
                            type="submit"
                            className="p-6 bg-slate-900 text-white rounded-[1.5rem] hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </form>
                </div>
            </div>
            <p className="mt-8 text-sm font-black text-slate-400 uppercase tracking-[0.2em]">DashVite Intelligence Core v1.2</p>
        </div>
    );
};

export default Chat;
