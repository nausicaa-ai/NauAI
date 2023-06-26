import Slider from "../Sliders/SingleSlider";
import "nouislider/dist/nouislider.css";
import {useState} from "react"

const ScoreCard = () => {
  const [score1, setScore1] = useState("")
  const [score2, setScore2] = useState("")
  const [score3, setScore3] = useState("")
  const [score4, setScore4] = useState("")
  const [score5, setScore5] = useState("")



  return (
    <div>
      <Slider onScoreChange={(value) => {setScore1(value)}}/>

      <Slider onScoreChange={(value) => {setScore2(value)}}/>

      <Slider onScoreChange={(value) => {setScore3(value)}}/>
      <Slider onScoreChange={(value) => {setScore4(value)}} />
      <Slider onScoreChange={(value) => {setScore5(value)}}/>
      <p>Selected Score1: {score1}</p>
      <p>Selected Score2: {score2}</p>
      <p>Selected Score3: {score3}</p>
      <p>Selected Score4: {score4}</p>
      <p>Selected Score5: {score5}</p>
    </div>
  );
};

export default ScoreCard;
