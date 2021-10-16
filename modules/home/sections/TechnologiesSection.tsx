import React, { useState, VoidFunctionComponent } from 'react';
import ProgressImg from 'components/ui/molecules/ProgressImg/ProgressImg';
import TechnologiesModal from 'modules/home/components/TechnologiesModal';
import { mockData } from 'helpers/mock/technologies.mock';

export type DataTechnologie = {
  radius: number;
  stroke: number;
  image: string;
  color: string;
  percent: number;
  title: string;
  technologies: Array<string>;
};

const TechnologiesSection: VoidFunctionComponent = () => {
  const [technologieSelected, settechnologieSelected] = useState(null);
  const dataTechnologies: DataTechnologie[] = mockData;

  const [opened, setOpened] = useState(false);

  const handleClick = (data) => {
    settechnologieSelected(data);
    setOpened(true);
  };

  const handleClose = () => {
    settechnologieSelected(null);
    setOpened(false);
  };

  return (
    <section className="py-12 md:py-0 relative md:h-screen flex">
      <div className="m-auto w-3/4">
        <h2 className="text-center text-2xl my-8">Tecnologías</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {dataTechnologies.map((data) => (
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
      </div>
      <TechnologiesModal
        data={technologieSelected}
        onClose={handleClose}
        open={opened}
      />
    </section>
  );
};

export default TechnologiesSection;
