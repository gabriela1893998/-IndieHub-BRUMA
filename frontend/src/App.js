import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { TopBar } from "@/components/launcher/TopBar";
import { Sidebar } from "@/components/launcher/Sidebar";
import { Hero } from "@/components/launcher/Hero";
import { Marquee } from "@/components/launcher/Marquee";
import { IndieGames } from "@/components/launcher/IndieGames";
import { RightPanel } from "@/components/launcher/RightPanel";
import { TAGS } from "@/data/launcherData";

function App() {
    const [activeTag, setActiveTag] = useState("magic");

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App relative">
            <div className="grain-overlay" />
            <div className="ambient-glow w-[520px] h-[520px] bg-purple-800/20 -top-40 -left-40" />
            <div className="ambient-glow w-[420px] h-[420px] bg-indigo-800/15 top-1/2 -right-52" />

            <TopBar />

            <div className="relative z-10 flex pt-16 md:pt-20">
                <Sidebar />

                <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap gap-2 sm:gap-3"
                        role="tablist"
                        aria-label="Categorias em destaque"
                    >
                        {TAGS.map((tag) => {
                            const active = activeTag === tag.id;
                            return (
                                <motion.button
                                    key={tag.id}
                                    data-testid={tag.testid}
                                    onClick={() => setActiveTag(tag.id)}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 border ${
                                        active
                                            ? "bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                                            : "bg-[#151724]/80 border-[#252238] text-slate-400 hover:text-purple-200 hover:border-purple-500/50"
                                    }`}
                                >
                                    {tag.label}
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    <Hero />
                    <Marquee />
                    <IndieGames />

                    <footer className="pt-4 pb-8 text-center">
                        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-slate-600">
                            bruma client — v0.9.4 — forjado em eldoria
                        </p>
                    </footer>
                </main>

                <RightPanel />
            </div>
        </div>
    );
}

export default App;
