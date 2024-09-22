import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Sponsors from '@site/src/components/Sponsors'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero_yourls', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <img
          alt="YOURLS"
          className={styles.heroLogo}
          src="./assets/images/logo.svg"
        />
        <div>
          <h1 className={styles.heroProjectTagline}>
            <b>{siteConfig.title}</b>
            <br />
            The <em>de facto</em> <b>standard</b> self-hosted{' '}
            <b>URL shortener</b>
          </h1>
          {/* <p className="hero__subtitle">
            <b>Your Own URL Shortener</b>
          </p> */}
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guide/install"
            >
              Install
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description="Your Own URL Shortener">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Sponsors />
      </main>
    </Layout>
  )
}
