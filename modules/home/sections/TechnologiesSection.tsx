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
      <div
        className="absolute w-full h-full"
        style={{ right: '75%', top: '-50%' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2013 1315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_118:32)">
            <ellipse
              cx="1006.5"
              cy="657.5"
              rx="828.5"
              ry="479.5"
              fill="url(#paint0_linear_118:32)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_118:32"
              x="0"
              y="0"
              width="2013"
              height="1315"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="89"
                result="effect1_foregroundBlur_118:32"
              />
            </filter>
            <linearGradient
              id="paint0_linear_118:32"
              x1="178"
              y1="915.053"
              x2="1089.71"
              y2="-164.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute w-full h-full"
        style={{ left: '75%', bottom: '-30%' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2013 1315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_118:32)">
            <ellipse
              cx="1006.5"
              cy="657.5"
              rx="828.5"
              ry="479.5"
              fill="url(#paint0_linear_118:32)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_118:32"
              x="0"
              y="0"
              width="2013"
              height="1315"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="89"
                result="effect1_foregroundBlur_118:32"
              />
            </filter>
            <linearGradient
              id="paint0_linear_118:32"
              x1="178"
              y1="915.053"
              x2="1089.71"
              y2="-164.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
