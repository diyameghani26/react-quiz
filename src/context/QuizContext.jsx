import {createContext , useState , useContext} from 'react'
import {questions} from '../data/questions'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

const [name, setName] = useState("")
const [screen, setScreen] = useState("start")
const [currentQ, setCurrentQ] = useState(0)
const [score, setScore] = useState(0)
const [isDark, setIsDark] = useState(false)
const toggleTheme = () => setIsDark(!isDark)


const handleAnswer = async (selected) => {
    const isCorrect = selected === questions[currentQ].answer
    const newScore = isCorrect ? score + 1 : score

    setScore(newScore)

    if(currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1)
    } else {
        console.log("name check:", name, "score:", newScore)
        await addDoc(collection(db, "leaderboard"), {
            name: name,      // seedha yahan likho
            score: newScore, // newScore use karo
            date: new Date()
        })
        setScreen("result")
    }
}

const restart = () => {
    setScreen("start")
    setCurrentQ(0)
    setScore(0)
    setName("")
}

return (
    <QuizContext.Provider
    value={{name, setName, screen, setScreen, currentQ, score, handleAnswer, restart ,isDark, toggleTheme}}
    > 
        {children}
    </QuizContext.Provider>
)
}

export const useQuiz = () => useContext(QuizContext)