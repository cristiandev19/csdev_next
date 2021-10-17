import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import clsx from 'clsx';
import Container from 'components/ui/atoms/Container';
import LinkButton from 'components/ui/atoms/LinkButton/LinkButton';
import useWindowSize, { WidthSizesProps } from 'hooks/useWindowSize';
import CsdevIcon from 'components/Icons/CsdevIcon';

const devNamePerSize: WidthSizesProps<string> = {
  extrasmall: 'Cristian S.',
  small: 'Cristian S.',
  medium: 'Cristian Sotomayor',
  large: 'Cristian Sotomayor',
  extralarge: 'Cristian Sotomayor',
};

const MainSection: VoidFunctionComponent = () => {
  const urlCV =
    'https://drive.google.com/file/d/1Wy9OrjhQmzAfKWnj9tbkgcsPcuQAXsxa/view?usp=sharing';
  const urlLogo =
    'https://s3.us-east-2.amazonaws.com/csdev19.personal/logo.png';

  const [devName, setDevName] = useState('Cristian Sotomayor');

  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setDevName(devNamePerSize[widthStates]);
  }, [size]);

  return (
    <section>
      <Container>
        <div
          className={clsx(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'sm:mt-0',
            'xl:mt-4',
            'md:h-screen',
          )}
        >
          <div
            className={clsx(
              'w-4/5',
              'flex',
              'xl:w-4/5',
              'm-auto',
              'sm:my-auto',
              'sm:ml-0',
            )}
          >
            <CsdevIcon width="100%" height="100%" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-lg">¡Saludos! Yo soy </div>

            <div className="flex">
              <div className="typing-effect">
                <h1 className="my-4 text-2xl lg:text-2xl font-bold">
                  &#60;
                  {devName}
                  /&#62;
                </h1>
              </div>
            </div>

            <p className="text-lg	">
              <span>
                Fullstack Developer con mas de 3 años de experiencia
                desarrollando software, liderando equipos de desarrollo,
                implementando nuevas tecnologias y dando asesoramiento tecnico a
                equipos de TI &#128293;
              </span>
            </p>

            <LinkButton type="external" href={urlCV}>
              Descargar CV
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainSection;
