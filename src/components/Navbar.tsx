import { motion } from "motion/react";
import { Search, Menu, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
    >
      <div className="flex items-center gap-8">
        <a href="/" className="text-2xl font-serif tracking-widest uppercase group">
          Aura<span className="text-gold group-hover:text-white transition-colors duration-500">Motors</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-widest uppercase opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Inventory</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Bespoke</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Heritage</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white/20 transition-all">
          <User size={14} />
          <span>Concierge</span>
        </button>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
  );
}
