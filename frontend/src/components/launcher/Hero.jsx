import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, Info } from "lucide-react";
import { HERO } from "../../data/launcherData";

const RevealLine = ({ children, delay, className }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`block ${className}`}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });
    const imgX = useTransform(sx, [0, 1], ["-2.5%", "2.5%"]);
    const imgY = useTransform(sy, [0, 1], ["-2%", "2%"]);
    const glowX = useTransform(sx, [0, 1], ["20%", "80%"]);

    const onMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
    };

    return (
        <motion.section
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => {
                mx.set(0.5);
                my.set(0.5);
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-purple-500/25 shadow-[0_24px_80px_-24px_rgba(109,40,217,0.45)] min-h-[380px] md:min-h-[440px] flex flex-col justify-end p-6 md:p-10 group"
            data-testid="hero-banner"
        >
            <motion.img
                src={HERO.image}
                alt="Arte do jogo Magia da Floresta"
                style={{ x: imgX, y: imgY }}
                className="absolute inset-0 w-full h-full object-cover scale-[1.08] transition-[filter] duration-700 group-hover:brightness-110"
            />
            <div className="hero-vignette absolute inset-0" />
            <motion.div
                style={{ left: glowX }}
                className="absolute -top-24 w-96 h-96 rounded-full bg-purple-600/25 blur-[120px] pointer-events-none"
            />

            <div className="relative z-10">
                <RevealLine delay={0.55} className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-purple-300/90 mb-2">
                    {HERO.subtitle} — destaque da semana
                </RevealLine>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white text-glow-lilac">
                    <RevealLine delay={0.65}>{HERO.title1}</RevealLine>
                    <RevealLine delay={0.78} className="bg-gradient-to-r from-purple-300 via-purple-100 to-indigo-300 bg-clip-text text-transparent">
                        {HERO.title2}
                    </RevealLine>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-3 max-w-xl text-sm md:text-base text-slate-300/90"
                >
                    {HERO.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.15, duration: 0.6 }}
                    className="mt-6 flex items-center justify-between gap-3 flex-wrap"
                >
                    <motion.button
                        data-testid="hero-description-button"
                        onClick={() => navigate("/jogo/hero")}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-purple-200 bg-purple-950/80 border border-purple-600/50 backdrop-blur-md hover:bg-purple-900 hover:border-purple-400/70 transition-colors duration-200"
                    >
                        <Info className="w-4 h-4" />
                        descrição
                    </motion.button>
                    <motion.button
                        data-testid="hero-play-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-extrabold text-purple-950 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 shadow-[0_0_24px_rgba(192,132,252,0.55)] hover:shadow-[0_0_40px_rgba(192,132,252,0.85)] transition-shadow duration-300"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        jogar
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};
