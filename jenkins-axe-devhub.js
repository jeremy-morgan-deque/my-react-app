const https = require('https')
const assert = require('assert')

// changed GIT_SHA to GIT_COMMIT
const { API_KEY, GIT_COMMIT } = process.env
assert(API_KEY, 'API_KEY is required')
assert(GIT_COMMIT, 'GIT_COMMIT is required')

const request = () =>
  new Promise((resolve, reject) => {
    /** @type {import('http').RequestOptions} */
    const options = {
      hostname: 'axe.deque.com',
      port: 443,
      path: `/api-pub/v1/axe-watcher/gh/${GIT_SHA}`,
      method: 'GET',
      headers: {
        'X-API-Key': API_KEY,
        Accept: 'application/json'
      }
    }

    let data = ''

    const req = https.request(options, res => {
      res.on('error', reject)

      res.on('data', d => {
        data += d
      })

      res.on('end', () => {
        const json = JSON.parse(data)
        resolve(json)
      })
    })
    req.end()
  })

const main = async () => {
  let json = null
  for (let tries = 0; tries < 10; tries++) {
    try {
      json = await request()
      break
    } catch (err) {
      console.warn(err.message)
    }
  }

  assert(json, 'Unable to fetch data from axe.deque.com')

  const { last_run_violation_count, axe_url, project_name, issues_over_a11y_threshold } = json

  if (last_run_violation_count) {
    console.log(
      `There are ${last_run_violation_count} violations in ${project_name}!`
    )
    console.log(`See ${axe_url} for more information`)
  } else {
    console.log('axe clean!')
  }
}

main()