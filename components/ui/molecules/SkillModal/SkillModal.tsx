import React, { FunctionComponent } from 'react';
import CheckIcon from '../../../Icons/CheckIcon';
import Modal, { ModalBaseProps } from '../../atoms/Modal/Modal';
import { DataSkill } from '../../organisms/SkillSection/SkillSection';

interface SkillCardProps extends ModalBaseProps {
  data: DataSkill;
}

const SkillCard: FunctionComponent<SkillCardProps> = ({
  data,
  open,
  onClose,
}) => (
  <Modal onClose={onClose} open={open}>
    <h3 className="text-center text-xl my-8">{data?.title}</h3>
    <figure>
      <img className="m-auto" src={data?.image} alt="" />
    </figure>
    <ul className="relative space-y-3 mt-8">
      {data?.skills.map((skill) => (
        <li className="flex items-center space-x-2" key={skill}>
          <div style={{ color: data?.color }}>
            <CheckIcon height={20} width={20} />
          </div>
          <span className="w-full">{skill}</span>
        </li>
      ))}
    </ul>
  </Modal>
);

export default SkillCard;
