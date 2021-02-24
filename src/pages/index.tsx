import { CompletedChallenges } from '../component/CompletedChallenges';
import { Countdown } from '../component/Countdown';
import { ExperienceBar } from '../component/ExperienceBar';
import { Profile } from '../component/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Início | Move.it
        </title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
