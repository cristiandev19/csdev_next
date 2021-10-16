import CheckIcon from 'components/Icons/CheckIcon';
import Modal, { ModalBaseProps } from 'components/ui/atoms/Modal/Modal';
import { DataTechnologie } from 'modules/home/sections/TechnologiesSection';
import React, { FunctionComponent } from 'react';

interface TechnologiesModalProps extends ModalBaseProps {
  data: DataTechnologie;
}

const TechnologiesModal: FunctionComponent<TechnologiesModalProps> = ({
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
      {data?.technologies.map((skill) => (
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

export default TechnologiesModal;
