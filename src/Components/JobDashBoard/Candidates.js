import Bubble from '../Charts/BubbleChart'


function Candidates() {

  return (
    <>
      <Bubble />
      <div className="conatiner">
        <div className="col s2">
          <button className="btn black"><i className="material-icons right">chevron_right</i>Actions</button>
        </div>
        <div className="col s3">
          <button className="btn black">Request Self-assessment</button>
        </div>
        <div className="col s3">
          <button className="btn black">Request references</button>
        </div>
        <div className="col s4">
          <button className="btn black">Request references assessment</button>
        </div>
      </div>
    </>

  )
}

export default Candidates
