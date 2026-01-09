import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const services = [
  {
    title: "Sport Activities",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    desc: "Enjoy climbing, volleyball, bowling and more outdoor activities.",
  },
  {
    title: "Internet Access",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    desc: "Stay connected with high-speed internet across the campsite.",
  },
  {
    title: "Climbing Instructor",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    desc: "Professional instructors available for beginners and pros.",
  },
  {
    title: "Mountain Bikes",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Explore scenic trails with our premium mountain bikes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Our Services" />

        <div className="grid md:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="font-montserrat text-lg mb-2 group-hover:text-amber-600 transition">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
