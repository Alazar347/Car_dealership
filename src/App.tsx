import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import { motion } from "motion/react";

const FEATURED_CARS = [
  {
    name: "Vanquish S",
    model: "GT SERIES",
    price: "$320,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Nebula GT",
    model: "ELECTRIC PERFORMANCE",
    price: "$185,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Phantom Ghost",
    model: "LUXURY SEDAN",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1631214524020-5e18397629c3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Stellar Spider",
    model: "CONVERTIBLE",
    price: "$275,000",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function App() {
  return (
    <main className="min-h-screen bg-onyx selection:bg-gold/30">
      <Navbar />
      <Hero />
      
      {/* Featured Section */}
      <section className="py-32 px-6 md:px-12 bg-onyx">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                Curated Selection
              </span>
              <h2 className="text-4xl md:text-6xl font-serif">Featured Collection</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md text-sm opacity-50 leading-relaxed"
            >
              Explore our hand-picked selection of the most exclusive vehicles currently available in our global inventory. Each model represents the absolute zenith of its category.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CARS.map((car, index) => (
              <CarCard 
                key={car.name} 
                name={car.name}
                model={car.model}
                price={car.price}
                image={car.image}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1566274360936-692e03002f23?auto=format&fit=crop&q=80&w=2000" 
            alt="Heritage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/80 to-transparent z-10" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">A Legacy of <br /><span className="italic">Uncompromising</span> Standards</h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed">
              For four decades, Aura Motors has been the silent partner to the world's most discerning collectors. Our expertise extends beyond sales; we provide a gateway to automotive history and future classics.
            </p>
            <button className="px-8 py-4 glass rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white/20 transition-all">
              Our Heritage
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="text-2xl font-serif tracking-widest uppercase mb-6 block">
                Aura<span className="text-gold">Motors</span>
              </a>
              <p className="max-w-xs opacity-40 text-sm leading-relaxed">
                The world's premier destination for ultra-luxury and performance automotive acquisition.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-6 text-gold">Showrooms</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li><a href="#" className="hover:text-white transition-colors">London Mayfair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dubai Marina</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beverly Hills</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monaco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-6 text-gold">Contact</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li><a href="#" className="hover:text-white transition-colors">Concierge Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Viewing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Relations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] opacity-30">
            <p>© 2026 Aura Motors Global. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
              <a href="#" className="hover:opacity-100">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
