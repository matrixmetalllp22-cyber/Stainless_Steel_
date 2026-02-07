import { motion } from "framer-motion";

export default function BrushedFinish() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6b2c417f"
          alt="Brushed Finish Stainless Steel"
          className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          #4 Brushed Finish
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          High-quality stainless steel with a smooth brushed texture,
          ideal for architectural, interior, and decorative applications.
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-500 space-y-1">
          <li>✔ Premium surface texture</li>
          <li>✔ Corrosion resistant</li>
          <li>✔ Long-lasting durability</li>
        </ul>

        {/* Button */}
        <button className="w-full mt-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
