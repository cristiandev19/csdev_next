import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Progress from '../../atoms/Progress/Progress';
import styles from './ProgressImg.module.css'


const ProgressImg = ({
  radius, stroke, image, color, percent, onClick,
}) => {
  return (
    <div className={styles['progress-container']} onClick={onClick}>
      <Progress
        radius={radius}
        stroke={stroke}
        color={color}
        percent={percent}
      />
      <img src={image} alt="" className={styles['progress-image']}/>
      <text style={{ color: color }} className={styles['progress-percent']}>{ `${percent}%` }</text>
    </div>
  );
};

ProgressImg.propTypes = {
  radius: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProgressImg;
