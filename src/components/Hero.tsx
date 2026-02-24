import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-onyx z-10" />
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070" 
          alt="Flagship Vehicle" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="animate-blur-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-block text-gold font-mono text-[10px] tracking-[0.4em] uppercase mb-8 opacity-60">
              Establishing Excellence Since 1984
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[120px] font-serif italic leading-[0.9] mb-10 tracking-tighter animate-blur-up"
            style={{ animationDelay: "0.4s" }}
          >
            The Art of <br />
            <span className="text-glow">Performance</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-50 max-w-lg mx-auto mb-12 animate-blur-up font-light tracking-tight"
            style={{ animationDelay: "0.5s" }}
          >
            Discover, search, and save the world's most prestigious automotive masterpieces.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 animate-blur-up"
            style={{ animationDelay: "0.6s" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-black rounded-full font-medium tracking-widest uppercase text-xs overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Explore Collection
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-10 py-5 glass rounded-full font-medium tracking-widest uppercase text-xs hover:bg-white/10 transition-all"
            >
              <span>The Experience</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats - Glassmorphic */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 z-30 flex flex-wrap justify-between items-end gap-8"
      >
        <div className="flex gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Top Speed</p>
            <p className="text-2xl font-serif">325 <span className="text-xs opacity-60">KM/H</span></p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">0-100 KM/H</p>
            <p className="text-2xl font-serif">2.8 <span className="text-xs opacity-60">SEC</span></p>
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Engine</p>
            <p className="text-2xl font-serif">V12 <span className="text-xs opacity-60">TWIN TURBO</span></p>
          </div>
        </div>

        <div className="glass-dark p-4 rounded-2xl max-w-xs hidden lg:block">
          <p className="text-xs leading-relaxed opacity-70 italic">
            "Aura Motors represents the pinnacle of automotive curation. Every vehicle in our collection is a testament to engineering mastery and aesthetic perfection."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
