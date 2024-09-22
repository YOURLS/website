#!/usr/bin/env node

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * https://github.com/jestjs/jest/blob/bd1c6db7c15c23788ca3e09c919138e48dd3b28a/website/fetchSupporters.js
 */

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { gql, request } from 'graphql-request'

// These sponsors will be featured on the homepage.
// These backers donate >100 USD per month, and are
// reviewed by the Jest team to confirm they are not
// donating just to juice their SEO.
const FEATURED_SPONSORS = new Set(['route4me'])
const graphqlQuery = gql`
  {
    account(slug: "yourls") {
      orders(status: ACTIVE, limit: 1000) {
        nodes {
          tier {
            slug
          }
          fromAccount {
            name
            slug
            website
            imageUrl
          }
          totalDonations {
            value
          }
        }
      }
    }
  }
`

const writeFile = promisify(fs.writeFile)

request('https://api.opencollective.com/graphql/v2', graphqlQuery)
  .then((data) => {
    const backers = data.account.orders.nodes

    const backersWithFeatured = backers.map((backer) => {
      if (FEATURED_SPONSORS.has(backer.fromAccount.slug)) {
        backer.featured = true
      }
      return backer
    })

    return writeFile(
      path.resolve(path.dirname(''), 'backers.json'),
      JSON.stringify(backersWithFeatured),
    )
  })
  .then(() => {
    console.log('Fetched 1 file: backers.json')
  })
  .catch((error) => {
    console.error('Failed to write backers file:', error)
    process.exitCode = 1
  })
