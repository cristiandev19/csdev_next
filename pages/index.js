import Head from 'next/head';
import Image from 'next/image';
import ProgressImg from '../components/ui/molecules/ProgressImg/ProgressImg';
import styles from '../styles/Home.module.css';
import Button from '../components/ui/atoms/Button/Button';
import LinkButton from '../components/ui/atoms/LinkButton/LinkButton';
import TrophyResponsive from '../components/TrophyResponsive/TrophyResponsive';

export default function Home() {
  const urlCV = 'https://drive.google.com/file/d/1Wy9OrjhQmzAfKWnj9tbkgcsPcuQAXsxa/view?usp=sharing';

  const dataSkills = [
    {
      radius: 60,
      stroke: 8,
      image: '/images/git.png',
      color: '#F05133',
      percent: 80,
      title: 'Git Skills',
      skills: [
        'Implemente un sistema de versionamiento (semver) para que las subidas y el uso de git tags para que los cambios a producción sean mas simples de encontrar y que sean cambiables en caso de problemas.',
        'Cree scripts de automatizacion con git para hacer cambios sobre multiples ramas, por ejemplo borrar multiples ramas que estaban en un repositorio remoto.',
        'Monitorear las ramas y ultimos cambios dentro de un repositorio.',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/mongo.png',
      color: '#70B35E',
      percent: 70,
      title: 'Mongo Skills',
      skills: [
        'Uso de todas las funciones de MongoDB para filtrar, modificar y tratar la data.',
        'Crear una copia de la información para crear un ambiente de pruebas funcional dentro del mismo cluster.',
        'Optimizar el modelado de la informacion dentro de las colecciones.',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/node.png',
      color: '#83CD29',
      percent: 90,
      title: 'Node Skills',
      skills: [
        'He trabajado en proyectos de frontend con VanillaJs de los cuales implemente animaciones, validaciones e integraciones con API’s para posteriormente hacer un updgrade progresivo a una libreria como Vue para que sea mas interactivo.',
        'He creado y mantenido proyectos con librerias de JS como Vue y React, de este ultimo implementando librerias como MaterialUI y hooks para formularios con validaciones.',
        'Hice mantenimiento de proyectos backend con Nodejs, tanto un monolito alojado en un servidor en la nube como de un proyecto usando microservicios (lambda) en la nube alojados en AWS.',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/typescript.png',
      color: '#007ACD',
      percent: 90,
      title: 'Typescript Skills',
      skills: [
        'He trabajado en proyectos de frontend con Typescript usando el framework Angular.',
        'He creado y mantenido proyectos backend con Nodejs usando Typescript como lenguaje de desarrollo para implementar conceptos de SOLID y DDD dentro de un servidor. ',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/css.png',
      color: '#2965F1',
      percent: 70,
      title: 'CSS Skills',
      skills: [
        'Hice maquetaciones de interfaces con Sass usando Angular, y adaptando diseños al estandar de material.',
        'Con CSS adapte una guia de estilos para que su aplicacion a distintos componentes y reutilización sea mas simple.',
        'Hice animaciones tanto en Sass como en CSS para darle mas fluidez a interfaces. En un proyecto usando las animaciones de Angular y en otro usando directivas nativas de CSS.',
      ],
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sass.png',
      color: '#CD6799',
      percent: 70,
      title: 'SASS Skills',
      skills: [
        'Hice maquetaciones de interfaces con Sass usando Angular, y adaptando diseños al estandar de material.',
        'Con CSS adapte una guia de estilos para que su aplicacion a distintos componentes y reutilización sea mas simple.',
        'Hice animaciones tanto en Sass como en CSS para darle mas fluidez a interfaces. En un proyecto usando las animaciones de Angular y en otro usando directivas nativas de CSS.',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sql.png',
      color: '#157EFB',
      percent: 80,
      title: 'SQL Skills',
      skills: [
        'Manejo avanzado de bases de datos SQL, principalmente en PostgreSQL. Uso de funciones, triggers, indexes, tablas temporales, etc.',
        'Uso de bases de datos de replica (maestro-esclavo) para un sistema altamente concurrente.',
        'Optimización de querys tanto en legibilidad como en rendimiento. Pase reportes de un año que tardaba mas de 30 segundos a que para la misma información tarde 2 a 3 segundos.',
        'Uso de JSON y JSONB dentro de PostgreSQL para organizar información.',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/react.png',
      color: '#00D8FF',
      percent: 60,
      title: 'React Skills',
      skills: [
        'Implemente librerias como MaterialUI, React Router DOM y React Hook Form para hacer una interfaz mas usable, dinamica y mantenible.',
        'Cree hooks personalizados para trabajos especificos en la UI como hover y decomponiendo hooks de librerias como React Form Hook para entender mejor su funcionamiento',
        'Use hooks propios del lenguaje como useState, useEffect, useContext y demas propios de la libreria.',
        'Hice prueba unitarias con testing library y jest',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/vue.png',
      color: '#00C887',
      percent: 60,
      title: 'Vue Skills',
      skills: [
        'Hice una implementación de esta libreria en proyectos legacy que renderizaban pug, para hacerlo mas dinamico y que respondiera a las necesidades del los usuarios de manera mas fluida',
        'Implemente componentes reutilizables a la par de VanillaJs para hacer mejoras continuas',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/angular.png',
      color: '#DD0031',
      percent: 80,
      title: 'Angular Skills',
      skills: [
        'Implemente librerias como RXJS y NGRX para mejorar el rendimiento y la mantenibilidad del proyecto.',
        'Asi mismo trabaje con interceptores para trabajar con autenticación.',
        'Hice mantenimiento de un proyecto con LazyLoading para mejorar la carga y experiencia de usuario.',
        'Trabaje con librerias como Angular Material y Highcharts para la interfaz de usuario.',
        'Realice optimizaciones en logica de componentes usando mecanismos propios de Angular como pipes, change detections strategies y demas.',
        'Use formularios reactivos de manera extensiva para validaciones de multiples campos, de arreglos de formularios, validaciones personalizadas y demas. ',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/aws.png',
      color: '#FF9900',
      percent: 50,
      title: 'AWS Skills',
      skills: [
        'Use servicios de AWS como: Lambda, Cloudwatch, S3, RDS, entre otros.',
        'Hice monitoreo a los servicios que usabamos con Cloudwatch y programe crons desde la API.',
        'Me certifique en fundamentos de AWS desde migracion de un on-premise hasta aplicaciones serverless. ',
      ],
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/invision.png',
      color: '#FF3366',
      percent: 24,
      title: 'Invision Skills',
      skills: [
        'Uso Figma como herramienta de maquetado de pantallas, imagenes, logos, etc.',
        'Y uso Invision como herramienta de maquetado rapido cuando necesito plasmar ideas de una reunion en un wireframe mas visual para darle una idea al stakeholder de como quedaria.',
        'Este curriculum fue hecho en figma asi como todos los demas componentes visualies exceptuando imagenes ',
      ]
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/figma.png',
      color: '#A259FF',
      percent: 25,
      title: 'Git Skills',
      skills: [
        'Uso Figma como herramienta de maquetado de pantallas, imagenes, logos, etc.',
        'Y uso Invision como herramienta de maquetado rapido cuando necesito plasmar ideas de una reunion en un wireframe mas visual para darle una idea al stakeholder de como quedaria.',
        'Este curriculum fue hecho en figma asi como todos los demas componentes visualies exceptuando imagenes ',
      ]
    },
  ]


  return (
    <div className={styles.container}>
      <Head>
        <title>Cristian Sotomayor</title>
        <meta name="description" content="Personal web made with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

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

            <h1>Soy Cristian Sotomayor</h1>

            <p>Un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.</p>

            {/* <Button text="Descargar CV" /> urlCV */}
            <LinkButton href={urlCV}>
              Descargar CV
            </LinkButton>
            {/* <a href={urlCV} target="_blank" rel="noreferrer">Descargar CV</a> */}
          </div>
        </section>
        <section className={styles.skillSection}>
          <h2 className={styles.title}>Habilidades</h2>

          <div className={styles.list}>

            {
              dataSkills.map((data) => (
                <ProgressImg
                  radius={data.radius}
                  stroke={data.stroke}
                  image={data.image}
                  color={data.color}
                  percent={data.percent}
                  key={data.image}
                />
              ))
            }

          </div>

        </section>

        <section className={styles.trophySection}>
          <h2 className={styles.title}>Github</h2>

          <div className={styles.trophy}>
            <TrophyResponsive />
          </div>
        </section>

        <section className={styles.hitosSection}>
          <div>
            <p>
              Empece mi carrera como desarrollador de software en un programa llamado "Peru Rumbo GSoC 2018" organizado por LinuxAtUNI del cual llegue a ser el Top 1.
            </p>
          </div>
          <div className="flex-justify">
            {/* <iframe src="https://wiki.gnome.org/Hackfests/PeruRumboGSoC2018"></iframe> */}

            <iframe height="500" width="100%" src="https://wiki.gnome.org/Hackfests/PeruRumboGSoC2018"></iframe>
          </div>
        </section>
      </main>
      {/*       
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
