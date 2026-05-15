#!/usr/bin/env node

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/jestjs/jest/blob/bd1c6db7c15c23788ca3e09c919138e48dd3b28a/website/fetchSupporters.js
 */

import fs from 'node:fs'
import path from 'node:path'
import { promisify } from 'node:util'
import { gql, request } from 'graphql-request'

// These sponsors will be featured on the homepage.
// These backers are reviewed by the team to confirm
// they are not donating just to juice their SEO.
const FEATURED_SPONSORS = new Set(['route4me', 'BairesDev-LLC'])
const opencollectiveGraphqlQuery = gql`
  {
    account(slug: "yourls") {
      orders(status: ACTIVE, limit: 1000) {
        nodes {
          sponsorEntity: fromAccount {
            name
            slug
            website
            imageUrl
          }
        }
      }
    }
  }
`

const githubGraphqlQuery = gql`
  {
    organization(login: "YOURLS") {
      sponsorshipsAsMaintainer(first: 100, activeOnly: true) {
        nodes {
          sponsorEntity {
            ... on Organization {
              name
              slug: login
              url
              website: websiteUrl
              imageUrl: avatarUrl
            }
            ... on User {
              name
              slug: login
              url
              website: websiteUrl
              imageUrl: avatarUrl
            }
          }
        }
      }
    }
  }
`

const writeFile = promisify(fs.writeFile)
const featuredBackers = (backer) => {
  if (FEATURED_SPONSORS.has(backer.sponsorEntity.slug)) {
    backer.featured = true
  }
  return backer
}

Promise.all([
  request(
    'https://api.opencollective.com/graphql/v2',
    opencollectiveGraphqlQuery,
  ).then((data) => data.account.orders.nodes.map(featuredBackers)),
  request(
    'https://api.github.com/graphql',
    githubGraphqlQuery,
    {},
    {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  ).then((data) =>
    data.organization.sponsorshipsAsMaintainer.nodes.map(featuredBackers),
  ),
])
  .then((data) =>
    writeFile(
      path.resolve(path.dirname(''), 'backers.json'),
      JSON.stringify([].concat(...data)),
    ),
  )
  .then(() => {
    console.log('Fetched 1 file: backers.json')
  })
  .catch((error) => {
    console.error('Failed to write backers file:', error)
    process.exitCode = 1
  })
