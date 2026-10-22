import { motion } from "framer-motion";
import { Home, LayoutGrid, Library, Users, UserRound, Heart, Download, Settings, HelpCircle, ArrowRight } from "lucide-react";

const NAV = [
    { name: "Home", icon: Home, testid: "nav-home", active: true },
    { name: "Category", icon: LayoutGrid, testid: "nav-category" },
    { name: "Library", icon: Library, testid: "nav-library" },
    { name: "Community", icon: Users, testid: "nav-community" },
    { name: "Friends", icon: UserRound, testid: "nav-friends", badge: "2" },
    { name: "Wishlist", icon: Heart, testid: "nav-wishlist" },
    { name: "Downloads", icon: Download, testid: "nav-downloads" },
];

export const Sidebar = () => {
    return (
        <motion.aside
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex flex-col w-60 xl:w-64 shrink-0 sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] border-r border-purple-950/40 bg-[#0c0d15]/80 backdrop-blur-md px-4 py-6"
        >
            <nav className="flex-1 space-y-1">
                {NAV.map((item, i) => (
                    <motion.a
                        key={item.name}
                        href="#"
                        data-testid={item.testid}
                        initial={{ x: -24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.25 + i * 0.06, duration: 0.45, ease: "easeOut" }}
                        className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                            item.active
                                ? "text-purple-300 bg-purple-500/10"
                                : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                        }`}
                    >
                        {item.active && (
                            <motion.span
                                layoutId="nav-active"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                            />
                        )}
                        <item.icon
                            className={`w-[18px] h-[18px] transition-colors duration-200 ${
                                item.active ? "text-purple-400" : "text-slate-500 group-hover:text-purple-300"
                            }`}
                        />
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                            <span
                                data-testid="nav-friends-badge"
                                className="min-w-[20px] h-5 px-1.5 rounded-full bg-purple-600 text-[11px] font-bold text-white flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                            >
                                {item.badge}
                            </span>
                        )}
                    </motion.a>
                ))}
            </nav>

            <div className="space-y-1 pt-4 border-t border-purple-950/40">
                {[
                    { name: "Settings", icon: Settings, testid: "nav-settings" },
                    { name: "Help", icon: HelpCircle, testid: "nav-help" },
                ].map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        data-testid={item.testid}
                        className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-100 hover:bg-white/[0.04] transition-colors duration-200"
                    >
                        <item.icon className="w-[18px] h-[18px] text-slate-600 group-hover:text-purple-300 transition-colors duration-200" />
                        {item.name}
                    </a>
                ))}

                <motion.button
                    data-testid="btn-go-to-library"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 w-full group flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold text-purple-200 border border-purple-500/50 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 hover:from-purple-800 hover:to-indigo-800 shadow-[0_0_18px_rgba(139,92,246,0.25)] hover:shadow-[0_0_28px_rgba(139,92,246,0.45)] transition-shadow duration-300"
                >
                    Go to library
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
            </div>
        </motion.aside>
    );
};
