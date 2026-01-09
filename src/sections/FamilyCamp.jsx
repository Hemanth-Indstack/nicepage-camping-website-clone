export default function FamilyCamp() {
  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429')",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2">
        <div className="bg-white p-10">
          <h2 className="text-3xl font-playfair mb-4">Family Camp</h2>
          <p className="text-gray-700 mb-6">
            Trekking, rafting, canyoning, gliding across valleys and peaks.
          </p>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
