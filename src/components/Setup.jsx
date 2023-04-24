import React from 'react'
import { useGlobalContext } from '../context'
import Error from './Error'
const Setup = () => {

  const {handleSubmit,handleChange,quiz,error} = useGlobalContext()


  return (
    <section className='setup--container'>
          <h2 className='setup-title'>Setup Quiz</h2>
        <form>
            <div className="form-control">
                <label htmlFor="amount" className='form-label'>Number of Questions</label>
                <input 
                  type="number" 
                  min={1} 
                  max={50}
                  className='form-input'
                  value={quiz.amount}
                  name='amount'
                  id='amount'
                  onChange={handleChange}
                  />
            </div>
            <div className="form-control">
                <label htmlFor="categories" className='form-label'>Category</label>
                <select name='category' id="categories" className='form-input' value={quiz.category} onChange={handleChange}>
                  <option value="sports">sports</option>
                  <option value="history">history</option>
                  <option value="politics">politics</option>
              </select>
            </div>
            <div className="form-control">
                <label htmlFor="difficulty" className='form-label'>Select Difficulty</label>
                <select name='difficulty' id="difficulty" className='form-input' value={quiz.difficulty} onChange={handleChange}>
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
              </select>
            </div>
            {error && <Error />}
            <button type='button' className="start-quiz__btn" onClick={(e) => handleSubmit(e)}>
                Start
            </button>
        </form>
    </section>
  )
}

export default Setup
