import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledMaterialClock, Clock, Number } from './styles';

const MaterialClock = (props) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      hourRef.current.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      minuteRef.current.style.transform = `rotateZ(${mm}deg)`;
      secondRef.current.style.transform = `rotateZ(${ss}deg)`;
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledMaterialClock {...props}>
      <Clock>
        {[...Array(4)].map((e, i) => {
          const rotate = i === 0 ? 12 : i * 3;
          return (
            <Number key={i} i={i}>
              <b>{rotate}</b>
            </Number>
          );
        })}
        <div class="circle hr" ref={hourRef}>
          <i></i>
        </div>
        <div class="circle mn" ref={minuteRef}>
          <i></i>
        </div>
        <div class="circle sc" ref={secondRef}>
          <i></i>
        </div>
      </Clock>
    </StyledMaterialClock>
  );
};

MaterialClock.propTypes = {
  /** support styled-components extend */
  className: PropTypes.string,
};

export default MaterialClock;
