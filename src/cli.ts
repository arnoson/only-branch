import { defineCommand, runMain } from 'citty'
import { getBranch, isGit, logError, logWarning } from './utils'

const main = defineCommand({
  meta: {
    name: 'only-branch',
    description: 'Run scripts only on a certain branch',
  },
  args: {
    branch: {
      type: 'positional',
      description: 'The name of the allowed branch',
      required: true,
    },
  },
  async run({ args }) {
    if (!isGit(process.cwd())) {
      logError(`can't check branch: ${process.cwd()} is not a git repository`)
      process.exit(1)
    }

    const branch = await getBranch()
    if (branch !== args.branch) {
      logWarning(
        `allowed only on branch ${args.branch}, current branch is ${branch}`
      )
      process.exit(1)
    }
  },
})

runMain(main as any)
