import clsx from 'clsx';
import HoveredCard from 'components/ui/atoms/HoveredCard';
import ProgressContainer from 'components/ui/molecules/ProgressContainer';
import useWindowSize from 'hooks/useWindowSize';
import React, { FunctionComponent, useEffect, useState } from 'react';

type ProgressImgProps = {
  radius: number;
  stroke: number;
  image: string;
  color: string;
  percent: number;
  onClick: () => void;
  showPercent?: boolean;
};

const ProgressImg: FunctionComponent<ProgressImgProps> = ({
  radius,
  stroke,
  image,
  color,
  percent,
  onClick,
  showPercent = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const [progressProperties] = useState({
    radius,
    stroke,
    color,
    percent,
  });

  const handleChanges = (hover: boolean) => {
    setHovered(hover);
  };

  return (
    <HoveredCard onClick={onClick} emitChanges={handleChanges}>
      <ProgressContainer
        radius={progressProperties.radius}
        stroke={progressProperties.stroke}
        color={progressProperties.color}
        percent={progressProperties.percent}
        animate={hovered}
      />
      <img
        src={image}
        alt=""
        className={clsx('absolute')}
        style={{
          filter: hovered ? 'grayscale(0)' : 'grayscale(100%)',
          width: '60px',
          top: '30px',
          left: '30px',
        }}
      />
      {showPercent && (
        <text
          style={{
            color,
            top: '50px',
            left: '115px',
            fontWeight: 900,
            lineHeight: '20px',
          }}
          className="absolute"
        >{`${percent}%`}</text>
      )}
    </HoveredCard>
  );
};

export default ProgressImg;
