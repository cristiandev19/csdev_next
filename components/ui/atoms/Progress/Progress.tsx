import React, { FunctionComponent } from 'react';

type ProgressProps = {
  radius: number;
  stroke: number;
  color: string;
  percent: number;
};

const Progress: FunctionComponent<ProgressProps> = ({
  radius,
  stroke,
  color,
  percent,
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = ((100 - percent) * circumference) / 100;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default Progress;
