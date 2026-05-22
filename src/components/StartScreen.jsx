import { useQuiz } from '@/context/QuizContext'

const StartScreen = () => {
  const { name, setName, setScreen } = useQuiz()

  return (
    <div className="min-h-screen bg-[#F8F8FC] flex items-center justify-center p-3 sm:p-6">

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(83,74,183,0.12)] border border-zinc-100 flex flex-col lg:flex-row min-h-[90vh]">

        {/* Left Side */}
        <div className="flex-1 flex flex-col">

          {/* Nav */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-5 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#534AB7]"></div>
              <span className="text-sm sm:text-base font-semibold text-[#534AB7] tracking-tight">
                ReactIQ
              </span>
            </div>

            <button className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center text-[#534AB7] text-sm hover:scale-105 transition">
              ⚙
            </button>
          </div>

          {/* Mobile Hero */}
          <div className="lg:hidden px-5 pt-5">
            <div className="rounded-3xl h-48 bg-linear-to-br from-[#EEEDFE] via-[#D8D5FF] to-[#B8B2FF] flex items-center justify-center shadow-inner relative overflow-hidden">
              
              <div className="absolute w-40 h-40 bg-white/20 rounded-full -top-10 -left-10"></div>
              <div className="absolute w-32 h-32 bg-white/10 rounded-full bottom-0 right-0"></div>

              <span className="text-7xl opacity-80 animate-pulse">
                ⚛
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-8 sm:py-10">

            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 bg-[#EEEDFE] text-[#534AB7] text-xs font-semibold px-4 py-2 rounded-full mb-5">
                🚀 Knowledge is Power
              </span>

              <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-4">
                React JS
                <span className="text-[#534AB7]"> Mastery Quiz</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mb-8 max-w-lg">
                Challenge yourself with interactive React questions covering hooks,
                components, state management, JSX, and the virtual DOM.
              </p>

              {/* Input */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 h-14 rounded-2xl bg-zinc-50 border border-zinc-200 px-5 text-base py-3 sm:text-base outline-none focus:border-[#534AB7] focus:bg-white transition-all"
                />

                <button
                  onClick={() => setScreen("question")}
                  className="h-14 px-8 rounded-2xl bg-[#534AB7] hover:bg-[#453cb0] text-white text-sm sm:text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#534AB7]/20"
                >
                  Start Quiz →
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-5 sm:gap-8 flex-wrap">

                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 min-w-30">
                  <p className="text-2xl font-bold text-zinc-900">10</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Questions
                  </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 min-w-30">
                  <p className="text-2xl font-bold text-zinc-900">15</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Minutes
                  </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 min-w-30">
                  <p className="text-2xl font-bold text-zinc-900">+50</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Players
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="border-t border-zinc-100 px-4 py-3 bg-white mt-auto">
            <div className="max-w-sm mx-auto flex justify-around items-center">

              <button className="flex flex-col items-center gap-1">
                <span className="text-[#534AB7] text-xl">⌂</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#534AB7]"></div>
              </button>

              <button className="flex flex-col items-center gap-1">
                <span className="text-zinc-300 text-xl">▦</span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <span className="text-zinc-300 text-xl">⚙</span>
              </button>

            </div>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex flex-1 bg-linear-to-br from-[#534AB7] via-[#6C63FF] to-[#8F88FF] items-center justify-center relative overflow-hidden">

          {/* Glow */}
          <div className="absolute w-125 h-125 bg-white/10 rounded-full blur-3xl"></div>

          {/* Floating Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full border border-white/10"></div>

          {/* Center Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 w-[75%] text-white shadow-2xl">

            <div className="text-8xl mb-6 opacity-90">
              ⚛
            </div>

            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Sharpen Your <br /> React Skills
            </h2>

            <p className="text-white/80 leading-relaxed text-sm mb-8">
              Interactive challenges designed for developers who want
              to master React in a fun and engaging way.
            </p>

            <div className="flex gap-4">

              <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 flex-1">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-xs text-white/70 uppercase mt-1">
                  Success Rate
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 flex-1">
                <p className="text-2xl font-bold">4.9★</p>
                <p className="text-xs text-white/70 uppercase mt-1">
                  User Rating
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StartScreen
