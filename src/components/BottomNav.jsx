import React from 'react'
import { useQuiz } from '@/context/QuizContext'

const BottomNav = () => {

  const { isDark ,  } = useQuiz()

  return (
    <div
      className={`border-t px-4 py-3 mt-auto transition-all duration-500 ${
        isDark
          ? "bg-[#18122B] border-t-[#2A1F4A]"
          : "bg-white border-t-zinc-100"
      }`}
    >

      <div className="max-w-sm mx-auto flex justify-around items-center">

        <button className="flex flex-col items-center md:text-2xl gap-1">
          <span className={`${isDark ? "text-zinc-500" : "text-zinc-300"} text-xl`}>⌂</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#534AB7]"></div>
        </button>

        <button className="flex flex-col items-center gap-1">
          <span className={`${isDark ? "text-zinc-500" : "text-zinc-300"} text-xl`}>
            ▦
          </span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <span className={`${isDark ? "text-zinc-500" : "text-zinc-300"} text-xl`}>
            ⚙
          </span>
        </button>
      
      </div>
    </div>
  )
}


export default BottomNav
