import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-campfire-sunset-with-camping-chairs-and-tent-image_16174943.jpg')",
      }}
      className="min-h-screen bg-cover bg-center relative"
    >
      {/* Dark overlay (Nicepage style) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center pt-40 px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="text-white text-5xl md:text-6xl font-playfair leading-tight"
        >
          Best Camping in the National Park
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/90 mt-6 text-lg max-w-2xl mx-auto"
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </motion.p>
      </motion.div>
    </section>
  );
}
