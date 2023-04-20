import Bubble from '../Charts/BubbleChart'


function Candidates() {

  return (
    <>
      <Bubble />
      <div className="conatiner">
        <div class="col s2">
          <button className="btn black"><i class="material-icons right">chevron_right</i>Actions</button>
        </div>
        <div class="col s3">
          <button className="btn black">Request Self-assessment</button>
        </div>
        <div class="col s3">
          <button className="btn black">Request references</button>
        </div>
        <div class="col s4">
          <button className="btn black">Request references assessment</button>
        </div>
      </div>
    </>

  )
}

export default Candidates