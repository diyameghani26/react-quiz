import StartScreen from './components/StartScreen'
import { QuizProvider, useQuiz } from './context/QuizContext'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import Leaderboard from './components/Leaderboard'

const Screens = () => {
  const { screen } = useQuiz()

  if(screen === "start") return <StartScreen/>
  if(screen === "question") return <QuestionScreen/>
  if(screen === "result") return <ResultScreen/>
  if(screen === "leaderboard") return <Leaderboard/>
}

const App = () => {
  return (
    
    <QuizProvider>
      <Screens/>
    </QuizProvider>
  )
}

export default App

