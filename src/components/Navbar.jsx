// Navbar.jsx

import { useQuiz } from "@/context/QuizContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useQuiz();

  return (
    <div className="flex items-center justify-between px-5 sm:px-7 py-5 border-b border-zinc-100">
      
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#534AB7]"></div>

        <span className="text-sm sm:text-base font-semibold text-[#534AB7] tracking-tight">
          ReactIQ
        </span>
      </div>

      <button
        onClick={toggleTheme}
        className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition ${
          isDark
            ? "bg-[#18122B] border border-[#2A1F4A]"
            : "bg-white"
        }`}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Navbar;