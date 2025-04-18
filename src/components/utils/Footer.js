import { FaFlagCheckered } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white relative overflow-hidden">
      {/* Winning stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-white">
        <div className="w-1/4 h-full bg-white inline-block"></div>
        <div className="w-1/4 h-full bg-white inline-block"></div>
        <div className="w-1/4 h-full bg-white inline-block"></div>
        <div className="w-1/4 h-full bg-white inline-block"></div>
      </div>

      <div className="container mx-auto py-8 px-4 mt-5 flex flex-col items-center gap-4">
        {/* Department Name with Logo */}
        <div className="flex items-center gap-3 text-2xl font-bold">
          <FaFlagCheckered className="text-white text-3xl" />
          <span>Formula V</span>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium mt-2">
          <span className="hover:text-gray-300 transition">Aditya</span>
          <span>o</span>
          <span className="hover:text-gray-300 transition">Kartikay</span>
          <span>o</span>
          <span className="hover:text-gray-300 transition">Ketul</span>
          <span>o</span>
          <span className="hover:text-gray-300 transition">Sunny</span>
          <span>o</span>
          <span className="hover:text-gray-300 transition">Tanmay</span>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-300 mt-4">
          © {new Date().getFullYear()} Formula V Racing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
