import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const itemRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const activities = [
  "Climbing tower",
  "Table tennis",
  "Volleyball",
  "Bowling",
  "Gym room",
];

export default function SportsActivities() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={container}>
          <motion.h2 variants={itemUp} className="text-3xl font-playfair mb-6">
            Sport activities
          </motion.h2>

          <motion.ul className="space-y-3 mb-6">
            {activities.map((item) => (
              <motion.li
                key={item}
                variants={itemLeft}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-amber-600 mt-1">✓</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          
        </motion.div>

        {/* RIGHT IMAGE PANEL */}
        <motion.div
          variants={itemRight}
          className="relative h-[460px] border"
          style={{
            backgroundImage:
              "url('https://www.bontravelindia.com/wp-content/uploads/2021/12/Best-Adventure-Sports-Activities-in-India-1000x565.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            variants={itemUp}
            className="absolute bottom-0 left-0 bg-transparent p-4 max-w-xs"
          >
            <p className="font-semibold mb-3">
              Amet luctus venenatis lectus magna fringilla urna porttitor.
            </p>

            <p className="text-amber-600 mb-2">
              Nec feugiat nisl pretium fusce id.
            </p>

            <button className="bg-amber-600 text-white px-6 py-3 rounded-full">
              learn more
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
