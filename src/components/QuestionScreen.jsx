import { useQuiz } from '@/context/QuizContext'
import { questions } from '../data/questions'
import { useState, useEffect } from 'react'
import BottomNav from './BottomNav'
import Navbar from './Navbar'
const letters = ["A", "B", "C", "D"]

const QuestionScreen = () => {
  const { currentQ, handleAnswer, isDark, toggleTheme } = useQuiz()
  const [timeLeft, setTimeLeft] = useState(15)

  useEffect(() => {
    setTimeLeft(15)
  }, [currentQ])

  useEffect(() => {
    if(timeLeft === 0) {
      handleAnswer(null)
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <div className={`min-h-screen flex items-center justify-center p-3 sm:p-6 ${isDark ? "bg-zinc-900" : "bg-[#F8F8FC]"}`}>

      <div className={`w-full max-w-6xl min-h-[90vh] rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(83,74,183,0.12)] border flex flex-col lg:flex-row ${isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-100"}`}>

        {/* Left Side */}
        <div className="flex-1 flex flex-col">

        <Navbar/>

            {/* Timer mobile */}
            <div className={`md:hidden flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${timeLeft <= 5 ? "bg-red-100 text-red-500" : "bg-[#EEEDFE] text-[#534AB7]"}`}>
              ⏱ {timeLeft}s
            </div>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center text-[#534AB7] hover:scale-105 transition">
              {isDark ? "☀" : "🌙"}
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col px-5 sm:px-8 py-6 sm:py-8">

            {/* Top Meta */}
            <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium mb-2">
                  Question {currentQ + 1} of {questions.length}
                </p>
                <h2 className={`text-2xl sm:text-4xl font-bold leading-tight max-w-2xl ${isDark ? "text-white" : "text-zinc-900"}`}>
                  {questions[currentQ].question}
                </h2>
              </div>
              <div className="bg-[#EEEDFE] text-[#534AB7] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full h-fit">
                ⚛ React JS
              </div>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-400">Quiz Progress</span>
                <span className="text-xs font-medium text-[#534AB7]">
                  {Math.round(((currentQ + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-[#EEEDFE] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#534AB7] to-[#7A70FF] rounded-full transition-all duration-500"
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Hint */}
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Select the most accurate answer from the options below.
            </p>

            {/* Options */}
            <div className="grid gap-4">
              {questions[currentQ].options.map((option, index) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`group relative overflow-hidden border rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-[#534AB7] hover:shadow-lg hover:shadow-[#534AB7]/10 hover:-translate-y-1 text-left ${isDark ? "bg-zinc-700 border-zinc-600" : "bg-white border-zinc-200"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EEEDFE]/0 via-[#EEEDFE]/60 to-[#EEEDFE]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEEDFE] text-[#534AB7] flex items-center justify-center font-semibold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                      {letters[index]}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm sm:text-base leading-relaxed transition-colors ${isDark ? "text-zinc-200 group-hover:text-white" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                        {option}
                      </p>
                    </div>
                    <div className="text-zinc-300 group-hover:text-[#534AB7] transition-colors text-lg">→</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-8 flex items-center justify-between gap-3 flex-wrap">
              <button className="text-sm text-zinc-400 hover:text-zinc-700 transition">← Previous</button>
              <button className="text-sm text-zinc-400 hover:text-zinc-700 transition">Skip Question</button>
            </div>

          </div>

    <BottomNav/>

        </div>

        {/* Right Side Desktop */}
        <div className="hidden lg:flex flex-1 bg-linear-to-br from-[#534AB7] via-[#6B63FF] to-[#938DFF] relative overflow-hidden items-center justify-center">
          <div className="absolute w-137.5 h-137.5 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-10 left-10 w-36 h-36 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 border border-white/10 rounded-full"></div>

          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 w-[78%] text-white shadow-2xl">
            <div className="text-7xl mb-6">🧠</div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">Current Progress</p>
            <h3 className="text-5xl font-bold mb-4 leading-tight">
              {Math.round(((currentQ + 1) / questions.length) * 100)}%
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              You're doing great. Keep answering quickly and accurately to achieve the highest score possible.
            </p>

            <div className="space-y-4">
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">⏱ Time Left</span>
                <span className={`font-semibold text-lg ${timeLeft <= 5 ? "text-red-300" : "text-white"}`}>
                  {timeLeft}s
                </span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">Questions Left</span>
                <span className="font-semibold text-lg">{questions.length - (currentQ + 1)}</span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white/70 text-sm">Total Questions</span>
                <span className="font-semibold text-lg">{questions.length}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
  
  )
}

export default QuestionScreen