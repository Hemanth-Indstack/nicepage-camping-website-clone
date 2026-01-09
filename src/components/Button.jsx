export default function Button({ children, variant = "primary", className = "" }) {
  const base =
    "inline-block px-8 py-3 rounded-full transition font-montserrat";

  const styles = {
    primary: "bg-amber-600 text-white hover:bg-amber-500",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-black",
    dark: "bg-black text-white hover:bg-gray-800",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
