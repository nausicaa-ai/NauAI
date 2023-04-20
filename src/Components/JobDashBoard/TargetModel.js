import Radar from '../Charts/RadarChart'
import Line from '../Charts/LineChart'

function TargetModel() {

  return (
    <div>
      <div className="col l6 s12">
        <div className="card hoverable">
          <div className="card-content">
            <h5 className='center'>Target Skill Attributes</h5>
          </div>
          <div className="card-content">
            <Radar />
          </div>
        </div>
      </div>
      <div className="col l6 s12">
        <div className="card hoverable">
          <div className="card-content">
            <h5 className='center'>Target Cultural Traits</h5>
          </div>
          <div className="card-content">
            <Line />
          </div>
        </div>
      </div>
      <div className="col l1 s12">
        <div className="container">
          <button className="btn black">Submit</button>
        </div>
      </div>
      <div className="col l3 s12">
        <div className="container">
          <button className="btn black">Invite to ScoreCard</button>
        </div>
      </div>
    </div>
  )
}

export default TargetModel