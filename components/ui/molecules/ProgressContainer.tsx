import Progress, { ProgressProps } from 'components/ui/atoms/Progress/Progress';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface ProgressContainerProps extends ProgressProps {
  animate: boolean;
}

const ProgressContainer: FunctionComponent<ProgressContainerProps> = ({
  radius,
  stroke,
  color,
  percent,
  animate = false,
}) => {
  const [percentView, setPercentView] = useState(0);

  useEffect(() => {
    if (animate) {
      setPercentView(percent);
    } else {
      setPercentView(0);
    }
  }, [animate]);

  return (
    <>
      <Progress
        radius={radius}
        stroke={stroke}
        color={color}
        percent={percentView}
      />
    </>
  );
};

export default ProgressContainer;
