export const classNamesConstructor = (block: string) => {
  const baseClassname = (part?: string, when: boolean = true): string => {
    if (!when) return ''
    const p = (part ?? '').trim()
    return p ? `${block}${p}` : block
  }

  return { baseClassname } as const
}

export default classNamesConstructor
