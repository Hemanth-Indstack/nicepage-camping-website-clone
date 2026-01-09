import SectionTitle from "../components/SectionTitle";
import Lightbox from "../components/Lightbox";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1470246973918-29a93221c455",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/istock-134096571.jpg",
];


export default function Tours() {
  const [active, setActive] = useState(null);

  return (
    <section id="tours" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="10 Amazing Camping Tours"
          subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            {images.map((img) => (
              <div
                key={img}
                onClick={() => setActive(img)}
                className="cursor-pointer overflow-hidden"
              >
                <img
                  src={img}
                  className="hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {active && <Lightbox image={active} onClose={() => setActive(null)} />}
    </section>
  );
}
