import { useQuiz } from '@/context/QuizContext'
import { questions } from '../data/questions'


const ResultScreen = () => {
  const { name, score, restart , setScreen} = useQuiz()

  const percentage = Math.round((score / questions.length) * 100)

  const getTitle = () => {
    if (percentage >= 80) return "React Specialist! 🏆"
    if (percentage >= 60) return "Good Job! 👏"
    return "Keep Practicing! "
  }

  const getMessage = () => {
    if (percentage >= 80)
      return "You've shown a strong grasp of React fundamentals. Your understanding of hooks and components is impressive."

    if (percentage >= 60)
      return "You have a decent understanding of React. Keep learning and you'll master it soon!"

    return "Don't give up! Review the concepts and try again. Practice makes perfect."
  }

  return (
    <div className="min-h-screen bg-[#F8F8FC] flex items-center justify-center p-3 sm:p-6">

      {/* Main Layout */}
      <div className="w-full max-w-6xl min-h-[90vh] bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(83,74,183,0.12)] border border-zinc-100 flex flex-col lg:flex-row">

        {/* Left Side */}
        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-5 border-b border-zinc-100">

            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#534AB7]"></div>
              <span className="text-sm sm:text-base font-semibold text-[#534AB7]">
              ReactIQ
              </span>
            </div>

            <button className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center text-[#534AB7] hover:scale-105 transition">
              ⚙
            </button>

          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-8">

            {/* Welcome */}
            <div className="text-center mb-8">

              <div className="inline-flex items-center gap-2 bg-[#EEEDFE] text-[#534AB7] px-4 py-2 rounded-full text-xs font-semibold mb-5">
                🎉 Quiz Completed
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 mb-3">
                Well Done,
                <span className="text-[#534AB7]"> {name || "Player"}</span>
              </h1>

              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {getMessage()}
              </p>

            </div>

            {/* Score Circle */}
            <div className="flex justify-center mb-10">

              <div className="relative w-52 h-52 flex items-center justify-center">

                {/* Glow */}
                <div className="absolute inset-0 bg-[#534AB7]/10 blur-3xl rounded-full"></div>

                <svg
                  className="absolute top-0 left-0 -rotate-90"
                  width="208"
                  height="208"
                  viewBox="0 0 208 208"
                >
                  {/* Background */}
                  <circle
                    cx="104"
                    cy="104"
                    r="88"
                    fill="none"
                    stroke="#EEEDFE"
                    strokeWidth="14"
                  />

                  {/* Progress */}
                  <circle
                    cx="104"
                    cy="104"
                    r="88"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                    className="transition-all duration-1000"
                  />

                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#534AB7" />
                      <stop offset="100%" stopColor="#8B84FF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center */}
                <div className="relative z-10 text-center">

                  <p className="text-5xl font-bold text-zinc-900">
                    {percentage}%
                  </p>

                  <p className="text-zinc-400 text-sm mt-1">
                    Accuracy
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 bg-[#EEEDFE] text-[#534AB7] px-3 py-1 rounded-full text-xs font-semibold">
                    ✨ {score}/{questions.length} Correct
                  </div>

                </div>

              </div>

            </div>

            {/* Result Card */}
            <div className="bg-gradient-to-br from-[#F7F6FF] to-[#EEEDFE] border border-[#E5E2FF] rounded-3xl p-5 sm:p-6 mb-8">

              <div className="flex items-start justify-between gap-4 flex-wrap">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7A73D8] mb-2">
                    Final Result
                  </p>

                  <h2 className="text-2xl font-bold text-[#3C3489] mb-2">
                    {getTitle()}
                  </h2>

                  <p className="text-sm text-[#6D66C9] leading-relaxed max-w-lg">
                    You completed the React quiz successfully. Continue
                    practicing consistently to become even better.
                  </p>
                </div>

                <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#E5E2FF]">
                  <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">
                    Your Score
                  </p>

                  <p className="text-3xl font-bold text-[#534AB7]">
                    {score}
                    <span className="text-lg text-zinc-400">
                      /{questions.length}
                    </span>
                  </p>
                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <button
                onClick={restart}
                className="flex-1 h-14 rounded-2xl bg-[#534AB7] hover:bg-[#453cb0] text-white font-semibold text-sm sm:text-base py-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#534AB7]/20"
              >
                Play Again →
              </button>
                <button
                className="flex-1 h-14 rounded-2xl bg-[#534AB7] hover:bg-[#453cb0] text-white font-semibold text-sm sm:text-base py-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#534AB7]/20"
                onClick={() => setScreen("leaderboard")}>
                  View Leaderboard 🏆
                    </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

              <div className="border border-zinc-100 rounded-2xl p-4 bg-zinc-50">
                <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">
                  Accuracy
                </p>

                <p className="text-2xl font-bold text-zinc-900">
                  {percentage}%
                </p>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4 bg-zinc-50">
                <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">
                  Correct
                </p>

                <p className="text-2xl font-bold text-zinc-900">
                  {score}
                </p>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4 bg-zinc-50">
                <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">
                  Wrong
                </p>

                <p className="text-2xl font-bold text-zinc-900">
                  {questions.length - score}
                </p>
              </div>

              <div className="border border-zinc-100 rounded-2xl p-4 bg-zinc-50">
                <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">
                  Total
                </p>

                <p className="text-2xl font-bold text-zinc-900">
                  {questions.length}
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Nav */}
          <div className="border-t border-zinc-100 px-4 py-3 bg-white mt-auto">

            <div className="max-w-sm mx-auto flex justify-around items-center">

              <button className="flex flex-col items-center gap-1">
                <span className="text-zinc-300 text-xl">⌂</span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <span className="text-[#534AB7] text-xl">▦</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#534AB7]"></div>
              </button>

              <button className="flex flex-col items-center gap-1">
                <span className="text-zinc-300 text-xl">⚙</span>
              </button>

            </div>

          </div>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#534AB7] via-[#6C63FF] to-[#938DFF] relative overflow-hidden items-center justify-center">

          {/* Glow */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"></div>

          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-36 h-36 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 border border-white/10 rounded-full"></div>

          {/* Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 w-[78%] text-white shadow-2xl">

            <div className="text-7xl mb-6">
              🏆
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
              Final Performance
            </p>

            <h2 className="text-6xl font-bold mb-4 leading-none">
              {percentage}%
            </h2>

            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Your React knowledge is improving with every challenge.
              Keep learning, building, and practicing consistently.
            </p>

            {/* Stats */}
            <div className="space-y-4">

              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">
                  Correct Answers
                </span>

                <span className="font-semibold text-lg">
                  {score}
                </span>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">
                  Total Questions
                </span>

                <span className="font-semibold text-lg">
                  {questions.length}
                </span>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">
                  Accuracy
                </span>

                <span className="font-semibold text-lg">
                  {percentage}%
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ResultScreen
