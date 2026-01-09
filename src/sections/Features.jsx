import { motion } from "framer-motion";

const features = [
  {
    title: "Trekking",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Camping",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Beach Tents",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455",
  },
  {
    title: "News & Events",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.fAmYEiyNZU_o-uYstyHKWgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
          What You Can Do
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="font-montserrat text-lg tracking-wide">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
