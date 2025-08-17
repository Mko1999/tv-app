export const formatDuration = (totalSecondsStr: string) => {
  const s = Number(totalSecondsStr) || 0
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  return h ? `${h}h ${m}m` : `${m}m`
}
