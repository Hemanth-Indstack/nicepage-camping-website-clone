import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Slider({ images }) {
  const fallbackImages = [
    "https://images.unsplash.com/photo-1470246973918-29a93221c455",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84b7a1f",
  ];

  const slides = images && images.length ? images : fallbackImages;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="overflow-hidden">
      <motion.img
        key={index}
        src={slides[index]}
        className="w-full h-[500px] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
