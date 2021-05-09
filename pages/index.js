import Head from 'next/head';
import Image from 'next/image';
import ProgressImg from '../components/molecules/ProgressImg/ProgressImg';
import styles from '../styles/Home.module.css';
import Button from '../components/atoms/Button/Button';

export default function Home() {
  const urlCV = 'https://drive.google.com/file/d/1gj3sskWpp9RNnZTr4_WIgJRH6Uaw5fT5/view?usp=sharing';

  const dataSkills = [
    {
      radius: 60,
      stroke: 8,
      image: '/images/figma.png',
      color: '#A259FF',
      percent: 19,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/git.png',
      color: '#F05133',
      percent: 59,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/invision.png',
      color: '#FF3366',
      percent: 24,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/mongo.png',
      color: '#70B35E',
      percent: 79,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/node.png',
      color: '#83CD29',
      percent: 86,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sass.png',
      color: '#CD6799',
      percent: 100,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/sql.png',
      color: '#157EFB',
      percent: 18,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/vue.png',
      color: '#00C887',
      percent: 37,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/angular.png',
      color: '#DD0031',
      percent: 55,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/aws.png',
      color: '#FF9900',
      percent: 76,
    },
    {
      radius: 60,
      stroke: 8,
      image: '/images/css.png',
      color: '#2965F1',
      percent: 79,
    },
  ]


  return (
    <div className={styles.container}>
      <Head>
        <title>Cristian sotomayor</title>
        <meta name="description" content="Personal web made with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <section className={styles.main}>
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

            <Button text="Descargar CV" />
          </div>
        </section>
        <section>
          <h2 className={styles.title}>Habilidades</h2>

          <div className={styles.list}>

            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/figma.png'}
              color={'#A259FF'}
              percent={19}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/git.png'}
              color={'#F05133'}
              percent={59}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/invision.png'}
              color={'#FF3366'}
              percent={24}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/mongo.png'}
              color={'#70B35E'}
              percent={79}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/node.png'}
              color={'#83CD29'}
              percent={86}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/sass.png'}
              color={'#CD6799'}
              percent={100}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/sql.png'}
              color={'#157EFB'}
              percent={18}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/vue.png'}
              color={'#00C887'}
              percent={37}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/angular.png'}
              color={'#DD0031'}
              percent={55}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/aws.png'}
              color={'#FF9900'}
              percent={76}
            />
            <ProgressImg
              radius={60}
              stroke={8}
              image={'/images/css.png'}
              color={'#2965F1'}
              percent={79}
            />
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
