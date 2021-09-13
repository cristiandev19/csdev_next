import clsx from 'clsx';
import React from 'react';
import { DataSkill } from '../../organisms/SkillSection/SkillSection';

const SkillCard = ({
  data,
  handleClose,
}: { data: DataSkill; handleClose: any }) => (
  <div
    className={clsx(
      'rounded-2xl',
      'w-4/5',
      'm-auto',
      'p-5',
      'relative',
    )}
    style={{
      border: `4px ${data.color} solid`,
    }}
  >
    <h3 className="text-center">{data.title}</h3>
    <button
      className="border-none absolute"
      onClick={handleClose}
      type="button"
      style={{ top: '20px', right: '20px', color: data.color }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
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
);

export default SkillCard;
