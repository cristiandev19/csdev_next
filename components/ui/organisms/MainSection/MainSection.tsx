import clsx from 'clsx';
import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import useWindowSize, {
  WidthSizesProps,
} from '../../../../hooks/useWindowSize';
import LinkButton from '../../atoms/LinkButton/LinkButton';

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
  const text =
    'Soy un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.';

  const [devName, setDevName] = useState('Cristian Sotomayor');

  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setDevName(devNamePerSize[widthStates]);
  }, [size]);

  return (
    <section
      className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'sm:mt-0')}
    >
      <figure
        className={clsx(
          'w-4/5',
          'flex',
          'xl:w-full',
          'm-auto',
          'sm:my-auto',
          'sm:ml-0',
        )}
      >
        <img src={urlLogo} alt="" className="w-full" />
      </figure>
      <div className="flex flex-col justify-center">
        <div className="">¡Hola a todos!</div>

        <div className="flex">
          <div className="typing-effect">
            <h1 className="my-4 text-2xl lg:text-2xl">
              &#60;
              {devName}
              /&#62;
            </h1>
          </div>
        </div>

        <p>{text}</p>

        <LinkButton href={urlCV}>Descargar CV</LinkButton>
      </div>
    </section>
  );
};

export default MainSection;
