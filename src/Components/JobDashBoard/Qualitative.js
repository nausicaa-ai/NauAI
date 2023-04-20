import { useState } from 'react'
import './Qualitative.css'

function Qualitative() {
  const [question, setQuestion] = useState("")
  const [questions, setQuestions] = useState([])
  const [editIndex, setEditIndex] = useState()

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
        {questions.length > 0 && (
          <div className="section">
            <table>
              <thead>
                <tr>
                  <th>Questions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question, index) => (
                  <tr key={index}>
                    <td>
                      {index === editIndex ? (
                        <input
                          type="text"
                          value={question}
                          onChange={(event) => {
                            const newQuestions = [...questions]
                            newQuestions[index] = event.target.value
                            setQuestions(newQuestions)
                          }}
                          onBlur={() => setEditIndex(null)}
                        />
                      ) : (
                        question
                      )}
                    </td>
                    <td>
                      {index === editIndex ? (
                        <div className="btn waves-effect waves-light btn black" onClick={addQuestion}>Save</div>
                      ) : (
                        <>
                          <div className="col s3">
                            <div className="btn waves-effect waves-light btn black" onClick={() => deleteQuestion(index)}>Delete</div>
                          </div>
                          <div className="col s3">
                            <div className="btn waves-effect waves-light btn black" onClick={() => setEditIndex(index)}>Edit</div>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Qualitative
