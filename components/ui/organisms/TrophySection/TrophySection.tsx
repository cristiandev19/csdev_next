import React from 'react';
import TrophyResponsive from '../../../TrophyResponsive/TrophyResponsive';
import styles from './TrophySection.module.css';

const TrophySection = () => {
  return (
    <section className={styles.trophySection}>
      <h2 className={'text-center'}>Github</h2>

      <div className={styles.trophy}>
        <TrophyResponsive />
      </div>
    </section>
  )
}

export default TrophySection;
