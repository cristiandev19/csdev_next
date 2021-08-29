import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainSection from '../components/ui/organisms/MainSection/MainSection';
import SkillSection from '../components/ui/organisms/SkillSection/SkillSection';
import TrophySection from '../components/ui/organisms/TrophySection/TrophySection';
import MilestoneSection from '../components/ui/organisms/MilestoneSection/MilestoneSection';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cristian Sotomayor</title>
        <meta name="description" content="Personal web made with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <MainSection />

        <SkillSection />

        <TrophySection />

        <MilestoneSection />

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
