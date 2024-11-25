'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description />
        <div className={styles.spotifyContainer}>
        <iframe 
          style={{borderRadius: '12px'}} 
          src="https://open.spotify.com/embed/playlist/6yYolP415L058gNFtT5GKW?utm_source=generator" 
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className={styles.spotifyEmbed}
        ></iframe>
      </div>
        <div id='projects'>
          <Projects />
        </div>
      </main>
  )
}
