import React, { useEffect, useState } from 'react';
import useWindowSize, { WidthSizesProps } from '../../../../hooks/useWindowSize';
import LinkButton from '../../atoms/LinkButton/LinkButton';
import styles from './MainSection.module.css';

const devNamePerSize: WidthSizesProps<string> = {
  extrasmall: 'CSDEV19',
  small: 'CSDEV19',
  medium: 'CSDEV19',
  large: 'Cristian Sotomayor',
  extralarge: 'Cristian Sotomayor',
};

const MainSection = () => {
  const urlCV: string = 'https://drive.google.com/file/d/1Wy9OrjhQmzAfKWnj9tbkgcsPcuQAXsxa/view?usp=sharing';
  const text = 'Soy un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.';

  const [devName, setDevName] = useState('Cristian Sotomayor');

  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setDevName(devNamePerSize[widthStates]);
  }, [size]);

  return (
    <section className={styles.mainSection}>

      <div>
        <figure className={styles.logo}>
          <img src="/logo1.png" alt="" className="fullwidth" />

          {/* <Image
            src="/logo1.png"
            alt="Picture of the author"
            layout="fill"
            className="full-width"
          /> */}
        </figure>
      </div>
      <div className={styles.contentside}>

        <h2>¡Hola a todos!</h2>

        <h1 className={styles['typing-effect']}>
          &#60;
          {devName}
          /&#62;
        </h1>
        {/* <div className={styles.wrapper}>
        </div> */}

        <p>{text}</p>

        <LinkButton href={urlCV}>
          Descargar CV
        </LinkButton>
      </div>
    </section>
  );
};

export default MainSection;
