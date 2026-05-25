import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useQuiz } from '@/context/QuizContext'
import Navbar from './Navbar'

const medals = ["🥇", "🥈", "🥉"]

const Leaderboard = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  const { setScreen, isDark } = useQuiz()

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "leaderboard"), orderBy("score", "desc"))
      const snapshot = await getDocs(q)

      const data = snapshot.docs.map(doc => doc.data())

      setPlayers(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${
        isDark ? "bg-[#0F0B1F]" : "bg-white"
      }`}
    >

      <Navbar />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-center">

        <span className="inline-block bg-[#EEEDFE] text-[#534AB7] text-xs md:text-2xl font-medium px-3 py-1 rounded-full mb-3">
          🏆 Hall of Fame
        </span>

        <h1
          className={`text-4xl md:text-4xl font-semibold ${
            isDark ? "text-white" : "text-zinc-800"
          }`}
        >
          Leaderboard
        </h1>

        <p
          className={`text-xs md:text-xl mt-1 ${
            isDark ? "text-zinc-400" : "text-zinc-400"
          }`}
        >
          Top players ranked by score
        </p>

      </div>

      {/* Top 3 */}
      {!loading && players.length >= 3 && (
        <div className="flex items-end justify-center gap-3 px-5 mb-6">

          {/* 2nd */}
          <div className="flex flex-col items-center flex-1">

            <div className="text-2xl md:text-5xl mb-1">
              🥈
            </div>

            <div
              className={`w-full rounded-t-2xl pt-4 pb-3 px-2 text-center ${
                isDark ? "bg-[#18122B]" : "bg-[#EEEDFE]"
              }`}
            >
              <p className={`text-lg md:text-2xl font-semibold truncate ${
                isDark ? "text-white" : "text-zinc-700"
              }`}>
                {players[1]?.name}
              </p>

              <p className="text-lg font-bold text-[#534AB7]">
                {players[1]?.score}
              </p>

              <p className="text-xs text-zinc-400">
                pts
              </p>

            </div>
          </div>

          {/* 1st */}
          <div className="flex md:mt-5 flex-col items-center flex-1">

            <div className="text-3xl md:text-6xl mb-1">
              🥇
            </div>

            <div className="w-full bg-[#534AB7] rounded-t-2xl pt-5 pb-3 px-2 text-center">

              <p className="text-xl md:text-2xl font-semibold text-white truncate">
                {players[0]?.name}
              </p>

              <p className="text-xl font-bold text-white">
                {players[0]?.score}
              </p>

              <p className="text-xs text-white/60">
                pts
              </p>

            </div>
          </div>

          {/* 3rd */}
          <div className="flex flex-col items-center flex-1">

            <div className="text-2xl md:text-5xl mb-1">
              🥉
            </div>

            <div
              className={`w-full rounded-t-2xl pt-3 pb-3 px-2 text-center ${
                isDark ? "bg-[#18122B]" : "bg-[#EEEDFE]"
              }`}
            >
              <p className={`text-lg md:text-2xl font-semibold truncate ${
                isDark ? "text-white" : "text-zinc-700"
              }`}>
                {players[2]?.name}
              </p>

              <p className="text-lg font-bold text-[#534AB7]">
                {players[2]?.score}
              </p>

              <p className="text-xs text-zinc-400">
                pts
              </p>

            </div>
          </div>

        </div>
      )}

      {/* Full List */}
      <div className="flex-1 px-5 pb-6">

        <div className="flex flex-col gap-3">

          {loading ? (

            <p className="text-center text-zinc-400 text-sm py-10">
              Loading...
            </p>

          ) : (

            players.map((player, index) => (

              <div
                key={index}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border transition-all ${
                  index === 0
                    ? "border-[#534AB7] bg-[#d0cef5]"
                    : isDark
                    ? "border-zinc-700 bg-[#18122B]"
                    : "border-zinc-100 bg-zinc-200"
                }`}
              >

                <span className={`text-lg w-7 text-center
                
                ${
                      isDark ? "text-white" : "text-black"
                    }
                `}>
                  {index < 3 ? medals[index] : `${index + 1}`}
                </span>

                <div className="flex-1">

                  <p
                    className={`text-lg font-medium ${
                      isDark ? "text-white" : "text-zinc-800"
                    }`}
                  >
                    {player.name}
                  </p>

                </div>

                <span
                  className={`text-sm font-semibold ${
                    index === 0
                      ? "text-[#534AB7]"
                      : isDark
                      ? "text-zinc-300"
                      : "text-zinc-600"
                  }`}
                >
                  {player.score}/10
                </span>

              </div>
            ))
          )}
        </div>
      </div>

      {/* Play Again */}
      <div className="px-5 pb-6">

        <button
          onClick={() => setScreen("start")}
          className="w-full h-11 bg-[#534AB7] hover:bg-[#3C3489] text-white rounded-xl text-sm font-medium transition-colors"
        >
          Play Again
        </button>

      </div>

    </div>
  )
}

export default Leaderboard