import React, { useEffect, useState, VoidFunctionComponent } from 'react';
// import LinkButton from 'components/ui/atoms/LinkButton/LinkButton';
import Container from 'components/ui/atoms/Container';
import { experienceMock } from 'helpers/mock/experience.mock';
import ShortExperienceCard from 'modules/home/components/ShortExperienceCard';
import { ShortExperience } from 'helpers/interfaces/experience.interfaces';

const ShortExperienceSection: VoidFunctionComponent = () => {
  const [experienceData, setExperienceData] = useState<ShortExperience[]>([]);

  useEffect(() => {
    setExperienceData(experienceMock);
  }, []);

  return (
    <section className="relative flex">
      <Container className="z-10">
        {experienceData.map((experience, index) => (
          <ShortExperienceCard
            description={experience.description}
            image={experience.image}
            provisionalDate={experience.provisionalDate}
            title={experience.title}
            key={index}
          />
        ))}
      </Container>
      {/* // <div className="flex">
        //   <LinkButton
        //     href="/experience"
        //     className="m-auto px-8"
        //     type="internal"
        //   >
        //     Ver mas
        //   </LinkButton>
        // </div> */}

      <div className="absolute w-full h-full" style={{ top: 0 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2077 1267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2076.5 0V212.5L0 1267V1042L2076.5 0Z"
            fill="url(#paint0_linear_120:33)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_120:33"
              x1="-3.53906e-05"
              y1="973.771"
              x2="1213.55"
              y2="-389.04"
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

export default ShortExperienceSection;
