import { existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '..')
const gitDir = path.join(repoRoot, '.git')

if (!existsSync(gitDir)) {
  process.exit(0)
}

try {
  execSync('git config core.hooksPath .githooks', {
    cwd: repoRoot,
    stdio: 'ignore',
  })
} catch {
  process.exit(0)
}
