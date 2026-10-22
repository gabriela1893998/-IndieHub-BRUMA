import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, Play, HardDrive, Tag, RefreshCw, Star } from "lucide-react";
import { GAMES } from "../../data/launcherData";

const RevealLine = ({ children, delay, className }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`block ${className}`}
        >
            {children}
        </motion.span>
    </span>
);

export default function GamePage() {
    const { id } = useParams();
    const game = useMemo(() => GAMES[id] || GAMES.hero, [id]);
    const [activeShot, setActiveShot] = useState(0);
    const [installState, setInstallState] = useState("idle");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveShot(0);
        setInstallState("idle");
        setProgress(0);
    }, [id]);

    useEffect(() => {
        if (installState !== "installing") return;
        const t = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(t);
                    setInstallState("installed");
                    return 100;
                }
                return Math.min(100, p + Math.random() * 9);
            });
        }, 220);
        return () => clearInterval(t);
    }, [installState]);

    const shots = [game.image, ...game.screenshots];

    return (
        <div className="flex-1 min-w-0 pt-16 md:pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link
                        to="/"
                        data-testid="game-back-button"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-purple-300 transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        voltar para home
                    </Link>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-3xl overflow-hidden border border-purple-500/25 shadow-[0_24px_80px_-24px_rgba(109,40,217,0.45)] min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-10"
                    data-testid="game-hero"
                >
                    <img src={game.image} alt={`Arte de ${game.title}`} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="hero-vignette absolute inset-0" />
                    <div className="relative z-10">
                        <RevealLine delay={0.2} className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-purple-300/90 mb-2">
                            {game.genre}
                        </RevealLine>
                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white text-glow-lilac">
                            <RevealLine delay={0.3}>{game.title}</RevealLine>
                        </h1>
                    </div>
                </motion.section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-8">
                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl bg-[#14151f] border border-[#252238] p-6"
                        >
                            <h2 className="font-display font-bold text-xl text-slate-100 mb-3">sinopse</h2>
                            <p data-testid="game-synopsis" className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                                {game.synopsis}
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="font-display font-bold text-xl text-slate-100 mb-4">capturas de tela</h2>
                            <div className="relative rounded-2xl overflow-hidden border border-[#252238] aspect-video group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeShot}
                                        src={shots[activeShot]}
                                        alt={`Captura ${activeShot + 1} de ${game.title}`}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.45 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        data-testid="game-screenshot-main"
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="mt-3 grid grid-cols-4 gap-3">
                                {shots.map((s, i) => (
                                    <button
                                        key={i}
                                        data-testid={`game-screenshot-${i}`}
                                        onClick={() => setActiveShot(i)}
                                        className={`relative rounded-xl overflow-hidden aspect-video border transition-all duration-300 ${
                                            activeShot === i
                                                ? "border-purple-400 shadow-[0_0_16px_rgba(139,92,246,0.45)]"
                                                : "border-[#252238] opacity-60 hover:opacity-100 hover:border-purple-500/50"
                                        }`}
                                    >
                                        <img src={s} alt="" loading="lazy" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="lg:sticky lg:top-24 h-fit rounded-2xl bg-[#14151f] border border-[#252238] p-6 space-y-5"
                    >
                        <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`w-4 h-4 ${s <= game.rating ? "text-purple-400 fill-purple-400" : "text-slate-700"}`} />
                            ))}
                            <span className="ml-1.5 text-xs font-mono text-slate-500">{game.rating}.0 / 5</span>
                        </div>

                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2.5 text-slate-400">
                                <HardDrive className="w-4 h-4 text-purple-400 shrink-0" />
                                Tamanho <span className="ml-auto font-mono text-slate-300">{game.size}</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-slate-400">
                                <RefreshCw className="w-4 h-4 text-purple-400 shrink-0" />
                                Versão <span className="ml-auto font-mono text-slate-300">{game.version}</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-slate-400">
                                <Tag className="w-4 h-4 text-purple-400 shrink-0" />
                                Gênero <span className="ml-auto text-slate-300 text-right">{game.genre}</span>
                            </li>
                        </ul>

                        <div className="pt-2 border-t border-[#252238]">
                            {installState === "installed" ? (
                                <motion.button
                                    data-testid="game-install-button"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-extrabold text-purple-950 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 shadow-[0_0_24px_rgba(192,132,252,0.55)] hover:shadow-[0_0_36px_rgba(192,132,252,0.8)] transition-shadow duration-300"
                                >
                                    <Play className="w-4 h-4 fill-current" />
                                    jogar
                                </motion.button>
                            ) : (
                                <motion.button
                                    data-testid="game-install-button"
                                    onClick={() => installState === "idle" && setInstallState("installing")}
                                    whileHover={installState === "idle" ? { scale: 1.02 } : undefined}
                                    whileTap={installState === "idle" ? { scale: 0.97 } : undefined}
                                    className={`w-full relative overflow-hidden flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white border transition-all duration-300 ${
                                        installState === "installing"
                                            ? "bg-[#1c1e2c] border-purple-500/40 cursor-wait"
                                            : "bg-purple-700 hover:bg-purple-600 border-purple-500/50 shadow-[0_0_18px_rgba(109,40,217,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                                    }`}
                                >
                                    {installState === "installing" && (
                                        <motion.span
                                            className="absolute inset-y-0 left-0 bg-purple-700/60"
                                            style={{ width: `${progress}%` }}
                                            transition={{ ease: "linear" }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Download className={`w-4 h-4 ${installState === "installing" ? "animate-bounce" : ""}`} />
                                        {installState === "installing" ? `instalando... ${Math.floor(progress)}%` : "instalar"}
                                    </span>
                                </motion.button>
                            )}
                            <p className="mt-3 text-center text-[11px] font-mono text-slate-600">
                                gratuito — sem drm — saves na nuvem bruma
                            </p>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </div>
    );
}
