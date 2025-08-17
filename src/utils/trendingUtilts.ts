import type { VideoItem } from './mockData'

const LAST_CLICKED_KEY = 'lastClickedId'

export const getLastClickedId = () => sessionStorage.getItem(LAST_CLICKED_KEY)
export const setLastClickedId = (id: string) => sessionStorage.setItem(LAST_CLICKED_KEY, id)

/** max 50, sort by Date desc; if lastClicked present, put it at the front */
export const buildTrendingList = (items: VideoItem[]): VideoItem[] => {
  const copy = [...items]
  copy.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
  const limited = copy.slice(0, 50)

  const last = getLastClickedId()
  if (!last) return limited

  const idx = limited.findIndex((x) => x.Id === last)
  if (idx <= 0) return limited
  const [picked] = limited.splice(idx, 1)
  return [picked, ...limited]
}
