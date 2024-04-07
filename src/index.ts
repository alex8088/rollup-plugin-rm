import fs from 'node:fs/promises'
import type { Plugin } from 'rollup'

export default function rm(
  target: string,
  hook: 'buildStart' | 'buildEnd'
): Plugin | void {
  if (hook !== 'buildStart' && hook !== 'buildEnd') return
  const _rm = async (target): Promise<void> => {
    await fs.rm(target, { recursive: true, force: true }).catch(() => {})
  }
  return {
    name: 'clean',
    [hook]: async (): Promise<void> => {
      await _rm(target)
    }
  }
}
