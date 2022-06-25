import React, { useState, VoidFunctionComponent } from 'react';
import ProgressImg from 'molecules/ProgressImg/ProgressImg';
import TechnologiesModal from 'molecules/TechnologiesModal/TechnologiesModal';
import { useTranslation } from 'react-i18next';

export type DataTechnologie = {
  radius: number;
  stroke: number;
  image: string;
  color: string;
  percent: number;
  title: string;
  technologies: string;
};

const TechnologiesSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();

  const [technologieSelected, settechnologieSelected] = useState(null);
  const dataTechnologies: DataTechnologie[] = [
    {
      radius: 60,
      stroke: 8,
      image: '/images/git.png',
      color: '#F05133',
      percent: 80,
      title: t('tech.git.title'),
      technologies: t('tech.git.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/mongo.png',
      color: '#70B35E',
      percent: 70,
      title: t('tech.mongo.title'),
      technologies: t('tech.mongo.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/node.png',
      color: '#83CD29',
      percent: 90,
      title: t('tech.node.title'),
      technologies: t('tech.node.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/typescript.png',
      color: '#007ACD',
      percent: 90,
      title: t('tech.ts.title'),
      technologies: t('tech.ts.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/css.png',
      color: '#2965F1',
      percent: 70,
      title: t('tech.css.title'),
      technologies: t('tech.css.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sass.png',
      color: '#CD6799',
      percent: 70,
      title: t('tech.sass.title'),
      technologies: t('tech.sass.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sql.png',
      color: '#157EFB',
      percent: 80,
      title: t('tech.sql.title'),
      technologies: t('tech.sql.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/react.png',
      color: '#00D8FF',
      percent: 60,
      title: t('tech.react.title'),
      technologies: t('tech.react.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/vue.png',
      color: '#00C887',
      percent: 60,
      title: t('tech.vue.title'),
      technologies: t('tech.vue.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/angular.png',
      color: '#DD0031',
      percent: 80,
      title: t('tech.angular.title'),
      technologies: t('tech.angular.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/aws.png',
      color: '#FF9900',
      percent: 50,
      title: t('tech.aws.title'),
      technologies: t('tech.aws.tech'),
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/figma.png',
      color: '#A259FF',
      percent: 25,
      title: t('tech.figma.title'),
      technologies: t('tech.figma.tech'),
    },
  ];

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
      <div className="m-auto w-3/4 z-10">
        <h2 className="text-center text-2xl my-8">{t('tech.title')}</h2>

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
      <div className="absolute w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1203 1110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1203 364C1203 565.032 1040.03 728 839 728C637.968 728 475 565.032 475 364C475 162.968 637.968 0 839 0C1040.03 0 1203 162.968 1203 364Z"
            fill="url(#paint0_linear_127:89)"
          />
          <path
            d="M379 622.5C379 680.766 331.766 728 273.5 728C215.234 728 168 680.766 168 622.5C168 564.234 215.234 517 273.5 517C331.766 517 379 564.234 379 622.5Z"
            fill="url(#paint1_linear_127:89)"
          />
          <path
            d="M576 826.5C576 880.9 531.9 925 477.5 925C423.1 925 379 880.9 379 826.5C379 772.1 423.1 728 477.5 728C531.9 728 576 772.1 576 826.5Z"
            fill="url(#paint2_linear_127:89)"
          />
          <path
            d="M99 572.5C99 599.838 76.8381 622 49.5 622C22.1619 622 0 599.838 0 572.5C0 545.162 22.1619 523 49.5 523C76.8381 523 99 545.162 99 572.5Z"
            fill="url(#paint3_linear_127:89)"
          />
          <path
            d="M458 1060.5C458 1087.84 435.838 1110 408.5 1110C381.162 1110 359 1087.84 359 1060.5C359 1033.16 381.162 1011 408.5 1011C435.838 1011 458 1033.16 458 1060.5Z"
            fill="url(#paint4_linear_127:89)"
          />
          <path
            d="M99 875.5C99 889.031 88.031 900 74.5 900C60.969 900 50 889.031 50 875.5C50 861.969 60.969 851 74.5 851C88.031 851 99 861.969 99 875.5Z"
            fill="url(#paint5_linear_127:89)"
          />
          <path
            d="M273 925.5C273 939.031 262.031 950 248.5 950C234.969 950 224 939.031 224 925.5C224 911.969 234.969 901 248.5 901C262.031 901 273 911.969 273 925.5Z"
            fill="url(#paint6_linear_127:89)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_127:89"
              x1="-2.05032e-05"
              y1="853.106"
              x2="1024.63"
              y2="92.1992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF338F" />
              <stop offset="1" stopColor="#F6AE13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default TechnologiesSection;
