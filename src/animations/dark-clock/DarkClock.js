import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledDarkClock, Clock, Time, Number, Circle } from './styles';

const DarkClock = (props) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  const digitalHourRef = useRef(null);
  const digitalMinuteRef = useRef(null);
  const digitalSecondRef = useRef(null);
  const digitalAMPMRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      minuteRef.current.style.transform = `rotateZ(${mm}deg)`;
      secondRef.current.style.transform = `rotateZ(${ss}deg)`;

      // Digital Clock Code
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();

      const am = h >= 12 ? 'PM' : 'AM';

      //Convert 24 Hour Time To 12 Hour with AM PM Indicator
      if (h > 12) {
        h = h - 12;
      }

      // Add zero before Single Numbers
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      digitalHourRef.current.innerHTML = h;
      digitalMinuteRef.current.innerHTML = m;
      digitalSecondRef.current.innerHTML = s;
      digitalAMPMRef.current.innerHTML = am;
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledDarkClock {...props}>
      <Clock>
        <Circle className="circle sc" color="#04fc43" ref={secondRef}>
          <i></i>
        </Circle>
        <Circle className="circle circle2 mn" color="#fee800" ref={minuteRef}>
          <i></i>
        </Circle>
        <Circle className="circle circle3 hr" color="#ff2972" ref={hourRef}>
          <i></i>
        </Circle>
        {[...Array(12)].map((e, i) => {
          return (
            <Number key={i} i={i + 1}>
              <b>{i + 1}</b>
            </Number>
          );
        })}
      </Clock>
      <Time>
        <div className="hour" ref={digitalHourRef} />
        <div className="minutes" ref={digitalMinuteRef} />
        <div className="seconds" ref={digitalSecondRef} />
        <div className="ampm" ref={digitalAMPMRef} />
      </Time>
    </StyledDarkClock>
  );
};

DarkClock.propTypes = {
  /** support styled-components extend */
  className: PropTypes.string,
};

export default DarkClock;
