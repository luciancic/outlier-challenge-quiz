import questions from '../questions.json'

export const initialState = {
  currentQuestion: questions[0],
  currentRound: 1,
  playerAnswered: false,
  isAnswerCorrect: null,
  correctAnswers: 0,
  score: 100,
  minScore: 0,
  maxScore: 100,
  maxQuestions: questions.length
}

export function reducer (state, action) {
  switch (action) {
    case 'next_question':
      return {
        ...state,
        currentQuestion: questions[state.currentRound],
        playerAnswered: false,
        currentRound: state.currentRound + 1,
        isAnswerCorrect: null
      }
    case 'answer_correct':
      return {
        ...state,
        playerAnswered: true,
        isAnswerCorrect: true,
        correctAnswers: state.correctAnswers + 1,
        score: getPercentage(state.correctAnswers + 1, state.currentRound),
        minScore: getPercentage(state.correctAnswers + 1, questions.length)
      }
    case 'answer_incorrect':
      return {
        ...state,
        playerAnswered: true,
        isAnswerCorrect: false,
        score: getPercentage(state.correctAnswers, state.currentRound),
        maxScore: getPercentage(questions.length - state.currentRound + state.correctAnswers, questions.length)
      }
    default:
      return state
  }
}

function getPercentage (val, on) {
  return Math.floor(val / on * 100)
}
