import { exec } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import pc from 'picocolors'

const logPrefix = '[only-branch]'

export const logError = (text: string) => console.error(pc.red(`${logPrefix} ${text}`))

export const logWarning = (text: string) => console.warn(pc.yellow(`${logPrefix} ${text}`))

export const isGit = (dir: string) => existsSync(join(dir, '.git'))

export const getBranch = () =>
  new Promise((resolve, reject) =>
    exec('git branch --show-current', (error, stdout, stderr) => {
      if (error) return reject(error.message)
      if (stderr) return console.error(stderr)
      resolve(stdout.trim())
    })
  )