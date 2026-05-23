import { useQuiz } from '@/context/QuizContext'
import { questions } from '../data/questions'
import BottomNav from './BottomNav'
import Navbar from './Navbar'

const ResultScreen = () => {

  const {
    name,
    score,
    restart,
    setScreen,
    isDark
  } = useQuiz()

  const percentage = Math.round((score / questions.length) * 100)

  const getTitle = () => {
    if (percentage >= 80) return "React Specialist! 🏆"
    if (percentage >= 60) return "Good Job! 👏"
    return "Keep Practicing!"
  }

  const getMessage = () => {
    if (percentage >= 80)
      return "You've shown a strong grasp of React fundamentals."

    if (percentage >= 60)
      return "You have a decent understanding of React."

    return "Don't give up! Practice makes perfect."
  }

  return (

    <div
      className={`min-h-screen flex items-center justify-center p-3 sm:p-6 transition-all duration-500 ${
        isDark ? "bg-[#0F0B1F]" : "bg-[#F8F8FC]"
      }`}
    >

      {/* Main Layout */}
      <div
        className={`w-full max-w-6xl min-h-[90vh] rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(83,74,183,0.12)] border flex flex-col lg:flex-row transition-all duration-500 ${
          isDark
            ? "bg-[#18122B] border-[#2A1F4A]"
            : "bg-white border-zinc-100"
        }`}
      >

        {/* Left Side */}
        <div className="flex-1 flex flex-col">

          <Navbar />

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-8">

            {/* Welcome */}
            <div className="text-center mb-8">

              <div className="inline-flex items-center gap-2 bg-[#EEEDFE] text-[#534AB7] px-4 py-2 rounded-full text-xs font-semibold mb-5">
                🎉 Quiz Completed
              </div>

              <h1
                className={`text-3xl sm:text-5xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                Well Done,
                <span className="text-[#534AB7]">
                  {" "}
                  {name || "Player"}
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {getMessage()}
              </p>

            </div>

            {/* Score Circle */}
            <div className="flex justify-center mb-10">

              <div className="relative w-52 h-52 flex items-center justify-center">

                <div className="absolute inset-0 bg-[#534AB7]/10 blur-3xl rounded-full"></div>

                <svg
                  className="absolute top-0 left-0 -rotate-90"
                  width="208"
                  height="208"
                  viewBox="0 0 208 208"
                >

                  <circle
                    cx="104"
                    cy="104"
                    r="88"
                    fill="none"
                    stroke="#EEEDFE"
                    strokeWidth="14"
                  />

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

                <div className="relative z-10 text-center">

                  <p
                    className={`text-5xl font-bold ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
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
            <div
              className={`rounded-3xl p-5 sm:p-6 mb-8 border transition-all duration-500 ${
                isDark
                  ? "bg-[#221A36] border-[#31224F]"
                  : "bg-linear-to-br from-[#F7F6FF] to-[#EEEDFE] border-[#E5E2FF]"
              }`}
            >

              <div className="flex items-start justify-between gap-4 flex-wrap">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#7A73D8] mb-2">
                    Final Result
                  </p>

                  <h2
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-[#3C3489]"
                    }`}
                  >
                    {getTitle()}
                  </h2>

                  <p
                    className={`text-sm leading-relaxed max-w-lg ${
                      isDark ? "text-zinc-400" : "text-[#6D66C9]"
                    }`}
                  >
                    You completed the React quiz successfully.
                  </p>

                </div>

                <div
                  className={`rounded-2xl px-5 py-4 shadow-sm border ${
                    isDark
                      ? "bg-[#18122B] border-[#31224F]"
                      : "bg-white border-[#E5E2FF]"
                  }`}
                >

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
                className="flex-1 h-14 rounded-2xl bg-[#534AB7] hover:bg-[#453cb0] text-white font-semibold text-sm sm:text-base py-2 transition-all hover:scale-[1.02]"
              >
                Play Again →
              </button>

              <button
                className="flex-1 h-14 rounded-2xl bg-[#534AB7] hover:bg-[#453cb0] text-white font-semibold text-sm sm:text-base py-2 transition-all hover:scale-[1.02]"
                onClick={() => setScreen("leaderboard")}
              >
                View Leaderboard 🏆
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

              {[ 
                { label: "Accuracy", value: `${percentage}%` },
                { label: "Correct", value: score },
                { label: "Wrong", value: questions.length - score },
                { label: "Total", value: questions.length },
              ].map((item, index) => (

                <div
                  key={index}
                  className={`rounded-2xl p-4 border transition-all duration-500 ${
                    isDark
                      ? "bg-[#221A36] border-[#31224F]"
                      : "bg-zinc-50 border-zinc-100"
                  }`}
                >

                  <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">
                    {item.label}
                  </p>

                  <p
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {item.value}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <BottomNav />

        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex flex-1 bg-linear-to-br from-[#534AB7] via-[#6C63FF] to-[#938DFF] relative overflow-hidden items-center justify-center">

          <div className="absolute w-150 h-150 rounded-full bg-white/10 blur-3xl"></div>

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

          </div>

        </div>

      </div>

    </div>
  )
}

export default ResultScreen
