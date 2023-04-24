import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [error,setError] = useState(false)
  const [complete, setComplete] = useState(false)
  const [start,setStart] = useState(false)
  const [quiz,setQuiz] = useState({
    amount:10,
    category:'sports',
    difficulty:'easy',
  })

  const fetchContent = async (url) => {
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    if(data) {
      setLoading(false)
      const result = data.results
      if(result.length > 0) {
        setQuestions(result)
        setError(false)
      }else {
        setStart(false)
        setError(true)
      }
    }else {
      setStart(false)
      setError(true)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({...quiz,[name]:value})
    // console.log(quiz)
  }
 
  const handleSubmit = () => {
    setComplete(false)
    setStart(true)
    const {amount,category,difficulty} = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchContent(url)
  }

  const chechAnswer = (value) => {
    if(value) {
      setCorrect((oldState) => oldState + 1)
    }
    handleNextAnswer()
  }

  const handleNextAnswer = () => {
    setIndex(index + 1)
    if(index >= questions.length - 1) {
      setComplete(true)
      setIndex(0)         
    }
  }

  const handleAgain = () => {
    setComplete(true)
    setStart(false)
    setQuestions([])
    setCorrect(0)
  }

  return <AppContext.Provider 
    value={{
      index,
      correct,
      loading,
      questions,
      handleNextAnswer,
      complete,
      handleSubmit,
      start,
      handleAgain,
      handleChange,
      quiz,
      error,
      chechAnswer
    }}>
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
