import { useRef, useState, useEffect } from 'react'
import type { VideoItem } from '../../../utils/mockData'
import mockVideosData from '../../../utils/mockData'
import { buildTrendingList, setLastClickedId } from '../../../utils/trendingUtilts'
import FeaturedVideo from '../FeaturedVideo/FeaturedVideo'
import TrendingNowSection from '../TrendingNowSection/TrendingNowSection'
import classNamesConstructor from '../../../utils/classNamesUtils'

import './Home.scss'

const { baseClassname } = classNamesConstructor('home')

const Home: React.FC = () => {
  const [featured, setFeatured] = useState<VideoItem>(mockVideosData.Featured)
  const [showVideo, setShowVideo] = useState(false)
  const trendingItems = buildTrendingList(mockVideosData.TendingNow)

  const timerRef = useRef<number | null>(null)

  const handlePick = (item: VideoItem) => {
    setFeatured(item)
    setLastClickedId(item.Id)

    setShowVideo(false)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setShowVideo(true), 2000)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <main className={baseClassname()}>
      <FeaturedVideo
        item={featured}
        showVideo={showVideo}
        onPlay={() => {
          if (timerRef.current) window.clearTimeout(timerRef.current)
          setShowVideo(true)
        }}
      />
      <TrendingNowSection items={trendingItems} onPick={handlePick} />
    </main>
  )
}

export default Home
