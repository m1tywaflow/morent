import { motion } from "framer-motion";

const TickerSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-3">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 text-lg font-bold tracking-widest uppercase">
            WITH PROMO CODE{" "}
            <span className="text-yellow-400">WANNACAR</span> GET 30% OFF YOUR FIRST RENTAL •
          </span>
          
          
        ))}
      </motion.div>
    </div>
  );
};

export default TickerSlider;
