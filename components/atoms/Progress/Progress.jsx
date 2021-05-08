import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.module.css'


const Progress = ({
  radius, stroke, image, color, percent,
}) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(null);
  const [circumference, setCircumference] = useState(null);
  const [normalizedRadius, setNormalizedRadius] = useState(null);

  useEffect(() => {
    // const circumference = this.normalizedRadius * 2 * Math.PI;
    // const normalizedRadius = radius - stroke * 2;
    // const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    setNormalizedRadius(radius - stroke * 2);
    console.log('normalizedRadius', normalizedRadius);
    setCircumference(normalizedRadius * 2 * Math.PI);

    // const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    setStrokeDashoffset(circumference - percent / 100 * circumference);

    // return () => {
    //   cleanup
    // }
  }, [percent, radius, stroke]);

  console.log('circumference', circumference);

  return (
    <div className={styles['progress-container']}>
      <svg
        height={radius * 2}
        width={radius * 2}
        >
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
          />

        {/* <text x="49%" y="50%" text-anchor="middle" stroke="#4BDBA9" stroke-width="1.5px" dy=".3em">
          { 'hlola' }
        </text> */}
      </svg>
      <img src={image} alt="" className={styles['progress-image']}/>
      <text style={{ color: color }} className={styles['progress-percent']}>{ `${percent}%` }</text>
    </div>
  );
};

Progress.propTypes = {
  radius: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Progress;
