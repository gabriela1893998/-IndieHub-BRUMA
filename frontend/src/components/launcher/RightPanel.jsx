import { motion } from "framer-motion";
import { MessageCircle, Clock3 } from "lucide-react";
import { FRIENDS, RECENTLY_PLAYED } from "../../data/launcherData";

export const RightPanel = () => {
    return (
        <motion.aside
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-y-auto border-l border-purple-950/40 bg-[#0c0d15]/80 backdrop-blur-md p-5 space-y-8"
        >
            <section>
                <h2 className="font-display font-bold text-base text-slate-100 tracking-tight flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-online" />
                    Friends online
                    <span className="ml-auto text-xs font-mono text-slate-500">{FRIENDS.length}</span>
                </h2>
                <ul data-testid="friends-online-list" className="space-y-1.5">
                    {FRIENDS.map((f, i) => (
                        <motion.li
                            key={f.id}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.07, duration: 0.45 }}
                            className="group flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-white/[0.04] transition-colors duration-200 cursor-pointer"
                        >
                            <span className="relative shrink-0">
                                <img
                                    src={f.avatar}
                                    alt={f.name}
                                    loading="lazy"
                                    className="w-9 h-9 rounded-full object-cover ring-1 ring-purple-500/30 group-hover:ring-purple-400/70 transition-all duration-200"
                                />
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0c0d15]" />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold text-slate-200 truncate">{f.name}</span>
                                <span className="block text-xs text-purple-400/80 truncate">{f.game}</span>
                            </span>
                            <MessageCircle className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-purple-300 transition-all duration-200 shrink-0" />
                        </motion.li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="font-display font-bold text-base text-slate-100 tracking-tight flex items-center gap-2 mb-4">
                    <Clock3 className="w-4 h-4 text-purple-400" />
                    Recentemente jogado
                </h2>
                <ul data-testid="recently-played-list" className="space-y-4">
                    {RECENTLY_PLAYED.map((g, i) => (
                        <motion.li
                            key={g.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="group flex items-center gap-3 cursor-pointer"
                        >
                            <img
                                src={g.image}
                                alt={g.title}
                                loading="lazy"
                                className="w-11 h-11 rounded-xl object-cover ring-1 ring-[#252238] group-hover:ring-purple-500/60 transition-all duration-200 shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="text-sm font-semibold text-slate-200 truncate group-hover:text-purple-300 transition-colors duration-200">
                                        {g.title}
                                    </span>
                                    <span className="text-[11px] font-mono text-slate-500 shrink-0">{g.hours}</span>
                                </div>
                                <div className="mt-1.5 h-1.5 rounded-full bg-[#1c1e2c] overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${g.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                                        className="h-full rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                                    />
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </motion.aside>
    );
};
