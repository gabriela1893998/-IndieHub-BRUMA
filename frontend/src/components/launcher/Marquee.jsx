import { MARQUEE_ITEMS } from "../../data/launcherData";

export const Marquee = () => {
    const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div className="relative overflow-hidden py-2 border-y border-purple-950/40 -mx-4 sm:-mx-6 lg:-mx-8 px-4" aria-hidden="true">
            <div className="marquee-track flex w-max items-center gap-10">
                {row.map((item, i) => (
                    <span key={i} className="flex items-center gap-10 shrink-0">
                        <span className="font-display text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-slate-600">
                            {item}
                        </span>
                        <svg width="10" height="10" viewBox="0 0 10 10" className="text-purple-600/70 shrink-0">
                            <path d="M5 0L10 5L5 10L0 5Z" fill="currentColor" />
                        </svg>
                    </span>
                ))}
            </div>
        </div>
    );
};
