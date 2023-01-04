import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'FOSS',
    Svg: require('@site/static/assets/images/undraw_launching_re_tomg.svg')
      .default,
    description: (
      <>
        Free and open-source software. No strings attached. Full control over
        your data, on your own domain.
      </>
    ),
  },
  {
    title: 'Powerful Features',
    Svg: require('@site/static/assets/images/undraw_pie_graph_re_fvol.svg')
      .default,
    description: (
      <>
        Bookmarklets, developer API, and awesome stats with historical click
        reports, referrers tracking and visitors geo-location.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/assets/images/undraw_innovative_re_rr5i.svg')
      .default,
    description: (
      <>
        Terrific plugin architecture and dozens of plugins to easily implement
        new features. Make YOURLS work exactly the way you need. Endless
        possibilities.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
