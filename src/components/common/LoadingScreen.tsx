import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-blue-lg">
          <Laptop className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <p className="font-display font-bold text-xl text-navy-600">Cloud Tech</p>
          <p className="text-xs text-dark-400 tracking-widest uppercase mt-0.5">Laptop Rental Service</p>
        </div>
        <div className="flex gap-1.5 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
