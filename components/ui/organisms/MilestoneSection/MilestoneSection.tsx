import React from 'react';
import styles from './MilestoneSection.module.css';

const MilestoneSection = () => {
  const urlGnome = 'https://wiki.gnome.org/Hackfests/PeruRumboGSoC2018';

  return (
    <section className={styles.milestoneSection}>
      <div>
        <p>
          Empece mi carrera como desarrollador de software en un programa
          llamado Peru Rumbo GSoC 2018 organizado por LinuxAtUNI
          del cual llegue a ser el Top 1.
        </p>
      </div>
      <div className="flex-justify">
        <iframe
          title="PeruRumboGSoC2018"
          height="500"
          width="80%"
          src={urlGnome}
        />
      </div>
    </section>
  );
};

export default MilestoneSection;
