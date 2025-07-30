export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4 shadow-md bg-white dark:bg-gray-900 fixed top-0 w-full z-10">
      {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-white hover:underline"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
