export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-playfair mb-6">Contact Us</h2>
          <p className="text-white/80">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <form className="grid gap-6">
          <input className="p-3 text-black" placeholder="Email" />
          <input className="p-3 text-black" placeholder="Name" />
          <textarea className="p-3 text-black" placeholder="Message" />
          <button className="bg-white text-black px-6 py-3 rounded-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
