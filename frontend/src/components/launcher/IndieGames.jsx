import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { INDIE_GAMES } from "../../data/launcherData";

export const IndieGames = () => {
    const navigate = useNavigate();
    return (
        <section>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="font-display font-bold text-xl sm:text-2xl text-slate-100 tracking-tight flex items-center gap-2.5 mb-5"
            >
                <span className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                </span>
                jogos indies
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {INDIE_GAMES.map((game, i) => (
                    <motion.article
                        key={game.id}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -6 }}
                        className="group relative rounded-2xl overflow-hidden bg-[#14151f] border border-[#252238] hover:border-purple-500/50 hover:shadow-[0_20px_50px_-16px_rgba(139,92,246,0.4)] transition-[border-color,box-shadow] duration-300"
                        data-testid={`indie-card-${i + 1}`}
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={game.image}
                                alt={`Arte de ${game.title}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#14151f] via-transparent to-transparent" />
                            <span className="absolute top-3 left-3 rounded-full bg-[#0b0c13]/80 backdrop-blur-md border border-purple-500/30 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-purple-300">
                                {game.genre}
                            </span>
                        </div>
                        <div className="p-5 pt-3">
                            <h3 className="font-display font-semibold text-lg text-slate-100 group-hover:text-purple-300 transition-colors duration-200">
                                {game.title}
                            </h3>
                            <p className="mt-1.5 text-sm text-slate-400 leading-relaxed line-clamp-2">{game.summary}</p>
                            <motion.button
                                data-testid={game.testid}
                                onClick={() => navigate(`/jogo/${game.id}`)}
                                whileTap={{ scale: 0.96 }}
                                className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white bg-purple-700 hover:bg-purple-600 shadow-[0_0_16px_rgba(109,40,217,0.35)] hover:shadow-[0_0_26px_rgba(139,92,246,0.55)] transition-all duration-300"
                            >
                                descrição
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </motion.button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};
