import { useState } from 'react'
import './Qualitative.css'

function Qualitative() {
  const [question, setQuestion] = useState("")
  const [questions, setQuestions] = useState([])

   const addQuestion = () => {
    if (question.trim() !== "") {
      setQuestions([...questions, question])
      setQuestion("")
    }
  }

  const deleteQuestion = (index) => {
    const newQuestions = [...questions]
    newQuestions.splice(index, 1)
    setQuestions(newQuestions)
  }

  return (
    <>
      <div className="section table-container">
        <h5>Questions to Ask Each Candidate's References</h5>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" onChange={(event) => setQuestion(event.target.value)} value={question}></textarea>
              </div>
            </div>
          </form>
          <div className="create-btn waves-effect waves-light btn black" onClick={addQuestion}>
            Add
          </div>
        </div>
        <div className="section"></div>
        <div className="section">
          <table>
            <thead>
              <tr>
                <th>Questions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr key={index}>
                  <td>{question}</td>
                  <td>
                    <div className="btn waves-effect waves-light btn black" onClick={() => deleteQuestion(index)}>Delete</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Qualitative
