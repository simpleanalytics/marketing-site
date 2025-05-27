import { test } from 'node:test'
import assert from 'node:assert'
import { spawn } from 'node:child_process'
import { setTimeout as delay } from 'node:timers/promises'

const port = '3001'

test('homepage loads', async () => {
  const server = spawn('node', ['.output/server/index.mjs'], {
    env: { ...process.env, PORT: port, NODE_ENV: 'production' },
    stdio: 'inherit'
  })

  try {
    await delay(2000)
    const response = await fetch(`http://localhost:${port}/`)
    assert.equal(response.status, 200)
  } finally {
    server.kill()
  }
})
