import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CarCardProps {
  name: string;
  model: string;
  price: string;
  image: string;
  index: number;
  key?: string;
}

export default function CarCard({ name, model, price, image, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gold font-mono text-[10px] uppercase tracking-widest mb-2">{model}</p>
            <h3 className="text-2xl font-serif mb-1">{name}</h3>
            <p className="text-sm opacity-60">From {price}</p>
          </div>
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
