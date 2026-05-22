export const questions = [
  {
    id: 1,
    question: "What is JSX in React?",
    options: [
      "A JavaScript framework",
      "A syntax extension for JavaScript",
      "A CSS library",
      "A database query language"
    ],
    answer: "A syntax extension for JavaScript"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    answer: "useState"
  },
  {
    id: 3,
    question: "What does the dependency array [] in useEffect mean?",
    options: [
      "Run on every render",
      "Run only once on mount",
      "Run only on unmount",
      "Never run"
    ],
    answer: "Run only once on mount"
  },
  {
    id: 4,
    question: "What is prop drilling?",
    options: [
      "Passing props through many nested components",
      "Drilling holes in components",
      "A React performance tool",
      "A way to style components"
    ],
    answer: "Passing props through many nested components"
  },
  {
    id: 5,
    question: "Which hook solves the problem of prop drilling?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useContext"
  },

  {
    id: 6,
    question: "What is the virtual DOM in React?",
    options: [
      "A direct copy of the real DOM",
      "A lightweight copy of the real DOM",
      "A database for React",
      "A CSS framework"
    ],
    answer: "A lightweight copy of the real DOM"
  },
  {
    id: 7,
    question: "Why is 'key' prop important in lists?",
    options: [
      "For styling list items",
      "To help React identify which items changed",
      "To add click events",
      "To sort the list"
    ],
    answer: "To help React identify which items changed"
  },
  {
    id: 8,
    question: "What is the correct way to update state in React?",
    options: [
      "state = newValue",
      "this.state = newValue",
      "setState(newValue)",
      "updateState(newValue)"
    ],
    answer: "setState(newValue)"
  },
  {
    id: 9,
    question: "What does useEffect return to clean up?",
    options: [
      "A promise",
      "A function",
      "A boolean",
      "Nothing"
    ],
    answer: "A function"
  },
  {
    id: 10,
    question: "What is a controlled component in React?",
    options: [
      "A component with no props",
      "A component whose state is controlled by React",
      "A component with only one child",
      "A component without hooks"
    ],
    answer: "A component whose state is controlled by React"
  }
]