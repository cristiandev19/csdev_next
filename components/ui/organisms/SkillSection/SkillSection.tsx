import React, { useState, VoidFunctionComponent } from 'react';
import { mockData } from '../../../../helpers/mock/skills.mock';
import ProgressImg from '../../molecules/ProgressImg/ProgressImg';
import SkillModal from '../../molecules/SkillModal/SkillModal';
import styles from './SkillSection.module.css';

export type DataSkill = {
  radius: number;
  stroke: number;
  image: string;
  color: string;
  percent: number;
  title: string;
  skills: Array<string>;
};

const SkillSection: VoidFunctionComponent = () => {
  const [skillSelected, setSkillSelected] = useState(null);
  const dataSkills: DataSkill[] = mockData;

  const [opened, setOpened] = useState(false);

  const handleClick = (data) => {
    setSkillSelected(data);
    setOpened(true);
  };

  const handleClose = () => {
    setSkillSelected(null);
    setOpened(false);
  };

  return (
    <section className={styles.skillSection}>
      <h2 className="text-center text-2xl my-8">Habilidades</h2>

      <div className={styles.list}>
        {dataSkills.map((data) => (
          <ProgressImg
            radius={data.radius}
            stroke={data.stroke}
            color={data.color}
            image={data.image}
            percent={data.percent}
            key={data.image}
            onClick={() => handleClick(data)}
          />
        ))}
      </div>
      <SkillModal data={skillSelected} onClose={handleClose} open={opened} />
    </section>
  );
};

export default SkillSection;
