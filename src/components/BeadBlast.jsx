import { motion } from "framer-motion";

export default function BeadBlast() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1567789884554-0b844b597180"
        className="w-full h-56 object-cover"
        alt="Bead Blast"
      />

      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Bead Blast Finish</h3>

        <p className="text-gray-300 text-sm mb-4">
          Matte textured surface created by bead blasting process.
        </p>

        <button className="px-5 py-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}
