import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { CountDown } from '@/constants';

import Circle from './circle';
import { StyledCountdown } from './styles';

const Countdown = (props) => {
  const { endTime = {}, hideDay, hideHour, hideMin, hideSec, colors, size, className, onFinish } = props;

  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const secondsRef = useRef(null);
  if (isEmpty(endTime)) return null;

  const newSize = size < 40 ? CountDown.MAX_SIZE : size;
  const circleSize = newSize * 6.28;

  useEffect(() => {
    const intervalId = setInterval(() => {
      let now = new Date(endTime).getTime();
      let countDown = new Date().getTime();
      let distance = now - countDown;

      let dd = document.getElementById('dd');
      let hh = document.getElementById('hh');
      let mm = document.getElementById('mm');
      let ss = document.getElementById('ss');

      let day_dot = document.querySelector('.day_dot');
      let hr_dot = document.querySelector('.hr_dot');
      let min_dot = document.querySelector('.min_dot');
      let sec_dot = document.querySelector('.sec_dot');

      // time calculation for days, hours, minutes and seconds
      let d = Math.floor(distance / (1000 * 60 * 60 * 24));
      let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((distance % (1000 * 60)) / 1000);

      // output the result in element
      dayRef.current.innerHTML = d;
      hourRef.current.innerHTML = h;
      minRef.current.innerHTML = m;
      secondsRef.current.innerHTML = s;

      // animation stroke
      dd.style.strokeDashoffset = circleSize - (circleSize * d) / 365;
      // 365 days in an year
      hh.style.strokeDashoffset = circleSize - (circleSize * h) / 24;
      // 24 hrs in a day
      mm.style.strokeDashoffset = circleSize - (circleSize * m) / 60;
      // 60 minutes in an hours
      ss.style.strokeDashoffset = circleSize - (circleSize * s) / 60;
      // 60 seconds in a seconds

      // animation circle dots
      day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
      // 360deg / 365dys = 0.986
      hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
      // 360deg / 24hrs = 15
      min_dot.style.transform = `rotateZ(${m * 6}deg)`;
      // 360deg / 60minutes = 6
      sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

      if (distance < 0) {
        clearInterval(intervalId);
        if (onFinish) onFinish();
      }
    });

    return () => clearInterval(intervalId);
  }, [endTime, dayRef, size]);

  return (
    <StyledCountdown className={className}>
      {!hideDay && (
        <Circle
          ref={dayRef}
          color={colors?.days || '#ffffff'}
          size={newSize || 70}
          type="days"
          name="dd"
          dotType="day_dot"
        />
      )}
      {!hideHour && (
        <Circle
          ref={hourRef}
          color={colors?.hours || '#ff2972'}
          size={newSize || 70}
          type="hours"
          name="hh"
          dotType="hr_dot"
        />
      )}
      {!hideMin && (
        <Circle
          ref={minRef}
          color={colors?.minutes || '#fee800'}
          size={newSize || 70}
          type="minutes"
          name="mm"
          dotType="min_dot"
        />
      )}
      {!hideSec && (
        <Circle
          ref={secondsRef}
          color={colors?.seconds || '#04fc43'}
          size={newSize || 70}
          type="seconds"
          name="ss"
          dotType="sec_dot"
        />
      )}
    </StyledCountdown>
  );
};

Countdown.propTypes = {
  /** End time format mm/dd/yyyy */
  endTime: PropTypes.string.isRequired,

  /** Display size */
  size: PropTypes.number,

  /** List colors for countdown */
  colors: PropTypes.object,

  /** Hide day */
  hideDay: PropTypes.bool,

  /** Hide hour */
  hideHour: PropTypes.bool,

  /** Hide minutes */
  hideMin: PropTypes.bool,

  /** Hide Second */
  hideSec: PropTypes.bool,

  /** callback when countdown is finished */
  onFinish: PropTypes.func,

  /** support styled-components extend */
  className: PropTypes.string,
};

Countdown.defaultProps = {
  hideDay: false,
  hideHour: false,
  hideMin: false,
  hideSec: false,
  size: 70,
  colors: {
    days: '#ffffff',
    hours: '#ff2972',
    minutes: '#fee800',
    seconds: '#04fc43',
  },
};

export default Countdown;
