import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Progress = ({
  radius, stroke, color, percent,
}) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(null);
  const [circumference, setCircumference] = useState(null);
  const [normalizedRadius, setNormalizedRadius] = useState(null);

  useEffect(() => {
    console.log('creando');
    setNormalizedRadius(radius - stroke * 2);
    setCircumference(normalizedRadius * 2 * Math.PI);
    setStrokeDashoffset(circumference - percent / 100 * circumference);
  }, []);

  useEffect(() => {
    console.log('cambios')
    setNormalizedRadius(radius - stroke * 2);
    setCircumference(normalizedRadius * 2 * Math.PI);
    setStrokeDashoffset(circumference - percent / 100 * circumference);
  }, [percent]);

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
        // stroke-width={ stroke }
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
