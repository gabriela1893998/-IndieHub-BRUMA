import { motion } from "framer-motion";
import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react";

const LogoMark = () => (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 2L29 16L16 30L3 16L16 2Z" fill="url(#g1)" opacity="0.9" />
        <path d="M16 9L22.5 16L16 23L9.5 16L16 9Z" fill="#090a0f" />
        <circle cx="16" cy="16" r="2.4" fill="#c084fc" />
        <defs>
            <linearGradient id="g1" x1="3" y1="2" x2="29" y2="30">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
        </defs>
    </svg>
);

export const TopBar = () => {
    return (
        <motion.header
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 border-b border-purple-950/40 bg-[#0b0c13]/85 backdrop-blur-xl"
        >
            <div className="h-full flex items-center gap-4 px-4 sm:px-6 lg:px-8">
                <a href="#" data-testid="logo-bruma" className="flex items-center gap-2.5 shrink-0 group">
                    <span className="transition-transform duration-500 group-hover:rotate-90">
                        <LogoMark />
                    </span>
                    <span className="font-display font-black tracking-[0.28em] text-xl uppercase bg-gradient-to-r from-purple-400 via-purple-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(139,92,246,0.45)]">
                        BRUMA
                    </span>
                </a>

                <div className="flex-1 flex justify-center px-2">
                    <div className="relative w-full max-w-md group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                        <input
                            data-testid="search-input"
                            type="text"
                            placeholder="Buscar jogos, amigos, mundos..."
                            className="w-full h-10 md:h-11 rounded-full bg-[#151724] border border-[#252238] pl-11 pr-16 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-purple-500/60 focus:shadow-[0_0_24px_rgba(139,92,246,0.18)] transition-all duration-300"
                        />
                        <kbd className="hidden md:flex absolute right-3.5 top-1/2 -translate-y-1/2 items-center gap-1 rounded-md border border-[#2e244d] bg-[#0d0e15] px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                            Ctrl K
                        </kbd>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <button
                        data-testid="messages-button"
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors duration-200"
                        aria-label="Mensagens"
                    >
                        <MessageSquare className="w-[18px] h-[18px]" />
                        <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-purple-500 text-[9px] font-bold text-white flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.7)]">
                            3
                        </span>
                    </button>
                    <button
                        data-testid="notifications-button"
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors duration-200"
                        aria-label="Notificações"
                    >
                        <Bell className="w-[18px] h-[18px]" />
                        <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
                    </button>
                    <button
                        data-testid="user-profile-button"
                        className="flex items-center gap-2.5 ml-1 rounded-full border border-purple-500/30 bg-[#151724] pl-1 pr-2 sm:pr-3 py-1 hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] transition-all duration-300"
                    >
                        <span className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                                alt="Perfil"
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-500/60"
                            />
                            <span className="status-dot-online absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0b0c13]" />
                        </span>
                        <span className="hidden sm:block text-sm font-semibold text-slate-200">testando 1</span>
                        <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-slate-500" />
                    </button>
                </div>
            </div>
        </motion.header>
    );
};
