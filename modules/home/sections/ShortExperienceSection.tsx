import React, { useEffect, useState, VoidFunctionComponent } from 'react';
// import LinkButton from 'components/ui/atoms/LinkButton/LinkButton';
import Container from 'components/ui/atoms/Container';
import ShortExperienceCard from 'modules/home/components/ShortExperienceCard';
import { ShortExperience } from 'helpers/interfaces/experience.interfaces';
import { useTranslation } from 'react-i18next';

const ShortExperienceSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const [experienceData, setExperienceData] = useState<ShortExperience[]>([]);

  const experienceMock: ShortExperience[] = [
    {
      title: t('short.experience.pamer.title'),
      description: t('short.experience.pamer.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image:
        'https://media-exp1.licdn.com/dms/image/C4E0BAQEcGrPK0CQBXg/company-logo_100_100/0/1620939348609?e=1642636800&v=beta&t=yHFJ4JCtYhorgBO-MzGWP6qRsw5ad_iC8VUPg4au4ak',
      provisionalDate: t('short.experience.pamer.date'),
    },
    {
      title: t('short.experience.cedhinfo.title'),
      description: t('short.experience.cedhinfo.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image:
        'https://media-exp1.licdn.com/dms/image/C560BAQGfg6H64MDYTQ/company-logo_100_100/0/1631738746829?e=1642636800&v=beta&t=C_RbWjcoQg7lpAIHuS1-z2HkiPQlu5yio5cwEoMv9EE',
      provisionalDate: t('short.experience.cedhinfo.date'),
    },
    {
      title: t('short.experience.smiledu.title'),
      description: t('short.experience.smiledu.desc'),
      endStart: new Date(),
      startDate: new Date(),
      image:
        'https://media-exp1.licdn.com/dms/image/C560BAQHOTJw5u64m3Q/company-logo_100_100/0/1619474234761?e=1642636800&v=beta&t=sG5JdnZEbArA5mPvJ2i3n54oNk2rUMh6CKDMoO_JDug',
      provisionalDate: t('short.experience.smiledu.date'),
    },
  ];

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
