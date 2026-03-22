import React from 'react'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import backers from '@site/backers.json'

function Sponsor({ sponsorEntity: { name, slug, website, url, imageUrl } }) {
  return (
    <a
      key={slug}
      className={styles.sponsorItem}
      title={`$${name || slug}`}
      target="_blank"
      rel="nofollow noopener sponsored"
      href={website || url || `https://opencollective.com/${slug}`}
    >
      {
        <img
          className={styles.sponsorAvatar}
          src={imageUrl}
          alt={name || slug ? `${name || slug}'s avatar` : 'avatar'}
        />
      }
    </a>
  )
}

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h3>Featured Sponsors</h3>
        <p>
          For their outstanding support to the project, we are very thankful to
          our Angel Sponsors.
          <br />
          <a
            href="https://www.bairesdev.com/sponsoring-open-source-projects/"
            target="_blank"
            rel="nofollow noopener"
          >
            <img
              width="350px"
              alt="bd-logo-orange"
              src="https://github.com/user-attachments/assets/caa67711-33df-4974-9bbe-cd2b7356712e"
            />
          </a>
        </p>
        <div className={styles.sponsorsAvatars}>
          {backers
            .filter((b) => b.featured)
            .sort((a, b) => b.totalDonations.value - a.totalDonations.value)
            .map(Sponsor)}
        </div>
        <p>
          YOURLS is free and open source, made possible by wonderful sponsors.
          <br />
          <a
            href="https://opencollective.com/yourls#section-contributors"
            target="_blank"
            rel="nofollow noopener"
          >
            Join {backers.length}+ donors
          </a>{' '}
          who sponsor YOURLS for $1 or more per month on{' '}
          <a
            href="https://opencollective.com/yourls"
            target="_blank"
            rel="nofollow noopener"
          >
            OpenCollective
          </a>
          .
        </p>
        <div class={styles.sponsorsButtons}>
          <Link className="button button--primary" to="/sponsor">
            Sponsor YOURLS
          </Link>
          <Link className="button button--secondary" to="/sponsor">
            Read more on sponsoring
          </Link>
        </div>
      </div>
    </section>
  )
}
