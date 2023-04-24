import React from 'react'
import { useGlobalContext } from '../context'
import Loading from "./Loading";
import Complete from './Complete';
const Answers = () => {
  const {questions,index,correct,handleNextAnswer,complete,chechAnswer} = useGlobalContext()

  if (questions.length === 0) {
    return <Loading />
  }

  const { question,correct_answer,incorrect_answers } = questions[index]

  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if(tempIndex === 3) {
    answers.push(correct_answer) 
  }else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <section className='answers-container'>
        <p className="correct-answers">
            Correct Answers : {correct}/{index}
        </p>
        <article className="answers">
            <h2 className="answer-title"  dangerouslySetInnerHTML={{__html: question}} />
            <div className="answer-btns">
                {answers.map((answer,index) => {
                  return (
                    <button 
                      key={index} 
                      dangerouslySetInnerHTML={{ __html: answer}} 
                      onClick={() => chechAnswer(answer === correct_answer)} />
                    )
                })}
            </div>
            <button type='button' className="next-btn" onClick={() => handleNextAnswer()}>Next Question</button>
        </article>
        {complete && <Complete />}
    </section>
  )
}

export default Answers
