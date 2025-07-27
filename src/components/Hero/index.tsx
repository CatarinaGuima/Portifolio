import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gradient-to-r from-white via-[#f0f2f5] to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Software Developer
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Hi! Im Catarina, a software developer and Information Systems student. Welcome to my portfolio!
        </p>
        <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">
          Download CV
        </button>
      </div>
      <Image
        src="/avatar.jpeg"
        alt="Avatar"
        width={200}
        height={200}
        priority  
        className="w-64 mt-10 md:mt-0 rounded-full shadow-lg"
      />
    </section>
  )
}
