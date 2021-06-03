import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Progress = ({
  radius, stroke, color, percent,
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percent / 100 * circumference;

  return (
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
        // strokeWidth={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
        />
    </svg>
  );
};

Progress.propTypes = {
  radius: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Progress;
