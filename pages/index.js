import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Posts from './blog'
import Resume from './resume'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Melo</title>
        <meta name="description" content="I am Juan Melo, a software developer passionate about open source and Full Stack Development
                            trying to build new things." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </div>
  )
}
