import { motion } from "framer-motion";

const leftItems = [
  "Eco product store",
  "Children playground",
  "Climbing tower",
  "Volleyball court",
];

const rightItems = [
  "Hire a climbing instructor",
  "Buy kayaking permits",
  "Buy fishing permits",
];

export default function CampingInfo() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-500 to-amber-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur rounded-2xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-playfair mb-6 text-gray-900">
              Available to campsite guests
            </h3>

            <ul className="space-y-4">
              {leftItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-600 text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur rounded-2xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-playfair mb-6 text-gray-900">
              In the campsite, you can
            </h3>

            <ul className="space-y-4">
              {rightItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-600 text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
