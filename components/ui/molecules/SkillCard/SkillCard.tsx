import React from 'react'
import { DataSkill } from '../../organisms/SkillSection/SkillSection';
import styles from './SkillCard.module.css';

const SkillCard = ({
  data,
  handleClose,
}: { data: DataSkill; handleClose: any }) => {
  return (
    <div 
      className={styles['skill-card']}
      style={{
        border: `4px ${data.color} solid`
      }}
    >
      <h3 className="text-center">{data.title}</h3>
      <button
        className={styles['skill-card__close']}
        onClick={handleClose}
      >
        cerrar
      </button>
      <figure className="flex-justify">
        <img src={data.image} alt="" />
      </figure>
      <ul>
        {
          data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SkillCard;
