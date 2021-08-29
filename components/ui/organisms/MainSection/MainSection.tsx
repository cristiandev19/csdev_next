import React from 'react'
import LinkButton from '../../atoms/LinkButton/LinkButton';
import styles from './MainSection.module.css';

const MainSection = () => {
  const urlCV: string = 'https://drive.google.com/file/d/1Wy9OrjhQmzAfKWnj9tbkgcsPcuQAXsxa/view?usp=sharing';

  return (
    <section className={styles.mainSection}>

      <div>
        <figure className={styles.logo}>
          <img src={'/logo1.png'} alt="" className="fullwidth"/>

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

        <h1>&#60;Cristian Sotomayor /&#62;</h1>

        <p>Soy un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.</p>

        <LinkButton href={urlCV}>
          Descargar CV
        </LinkButton>
      </div>
    </section>

  )
}

export default MainSection;
