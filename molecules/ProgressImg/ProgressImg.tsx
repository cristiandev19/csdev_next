import React, { FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import { ProgressImgProps } from './ProgressImg.types';
import ProgressContainer from '@molecules/ProgressContainer';
import HoveredCard from '@atoms/HoveredCard';

const ProgressImg: FunctionComponent<ProgressImgProps> = ({
  radius,
  stroke,
  image,
  color,
  // percent,
  onClick,
  showPercent = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const [progressProperties] = useState({
    radius,
    stroke,
    color,
    // percent,
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
        percent={100}
        animate={hovered}
      />
      <img
        src={image}
        alt=""
        className={clsx(
          'absolute',
          'transition',
          'duration-700',
          'ease-in-out',
        )}
        style={{
          filter: hovered ? 'grayscale(0)' : 'grayscale(100%)',
          width: '60px',
          top: '30px',
          left: '30px',
        }}
      />
      {/* {showPercent && (
        <text
          style={{
            color,
            top: '50px',
            left: '115px',
            fontWeight: 900,
            lineHeight: '20px',
          }}
          className="absolute"
        >{`${100}%`}</text>
      )} */}
    </HoveredCard>
  );
};

export default ProgressImg;
