import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
          min: 0,
          max: 100
        },
        format: wNumb({
          decimals: 0
        })
      });

      slider.on('change', (values, handle) => {
        console.log(`Slider value changed: ${values[handle]}`);
      });
    }
  }, []);

  return <div ref={sliderRef} />;
};

export default Slider;
