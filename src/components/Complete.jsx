import React from 'react'
import { useGlobalContext } from '../context'

const Complete = () => {
  const {handleAgain,correct,questions} = useGlobalContext()
  return (
    <section className='complete-section'>
      <div className='complete-container'>
        <h1 className='complete-title'>Congrats!</h1>
        <p className='correct-questions'>you answered {((correct / questions.length)*100).toFixed(0)}% of questions correctly</p>
        <button className='play-again__btn' type='button' onClick={() => handleAgain()}>Play Again</button>
      </div>
    </section>
  )
}

export default Complete
