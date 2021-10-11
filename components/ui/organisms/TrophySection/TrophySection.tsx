import React, { VoidFunctionComponent } from 'react';
import TrophyResponsive from '../../../TrophyResponsive/TrophyResponsive';
import styles from './TrophySection.module.css';

const TrophySection: VoidFunctionComponent = () => (
  <section className={styles.trophySection}>
    <h2 className="text-center text-2xl my-8">Github</h2>

    <div className={styles.trophy}>
      <TrophyResponsive />
    </div>
  </section>
);

export default TrophySection;
