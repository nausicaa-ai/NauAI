import React, { useEffect, useState, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const MySlider = ({ onScoreChange }) => {
  const sliderRef = useRef(null);
  const [selectedScore, setSelectedScore] = useState(null);
  const dummy = "bisexual";

  useEffect(() => {
    const arbitraryValuesSlider = sliderRef.current;
    const arbitraryValuesForSlider = [
      `${dummy}`,
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Half bisexual",
    ];

    const format = {
      to: function (value) {
        return arbitraryValuesForSlider[Math.round(value)];
      },
      from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
      },
    };

    const slider = noUiSlider.create(arbitraryValuesSlider, {
      start: ["3"],
      range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
      step: 1,
      tooltips: true,
      format: format,
      pips: { mode: "steps", format: format, values: [1, 10], density: 50 },
    });

    slider.on("set", (values) => {
      const score = values[0];
      setSelectedScore(score);
      onScoreChange(score);
    });

    // Clean up
    return () => {
      arbitraryValuesSlider.noUiSlider.destroy();
    };
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div ref={sliderRef}></div>
    </div>
  );
};

export default MySlider;
