import { motion } from "framer-motion";

export default function Lightbox({ image, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.img
        src={image}
        className="max-h-[90vh] rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
}
