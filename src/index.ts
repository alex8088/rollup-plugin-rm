import fs from 'node:fs/promises'
import type { Plugin } from 'rollup'

export default function rm(
  target: string,
  hook: 'buildStart' | 'buildEnd'
): Plugin | void {
  if (hook !== 'buildStart' && hook !== 'buildEnd') return
  return {
    name: 'clean',
    [hook]: async (): Promise<void> => {
      await fs.rm(target, { recursive: true, force: true }).catch(() => {})
    }
  }
}
