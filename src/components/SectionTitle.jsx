export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-14`}>
      <h2 className="text-3xl md:text-4xl font-playfair mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
