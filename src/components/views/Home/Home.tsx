import { useState } from 'react'
import type { VideoItem } from '../../../utils/mockData'
import mockVideosData from '../../../utils/mockData'
import { prepareTrending, setLastClickedId } from '../../../utils/trendingUtilts'
import FeaturedVideo from '../FeaturedVideo/FeaturedVideo'
import TrendingNowSection from '../TrendingNowSection/TrendingNowSection'
import classNamesConstructor from '../../../utils/classNamesUtils'

import './Home.scss'

const { baseClassname } = classNamesConstructor('home')

const Home: React.FC = () => {
  const [featured, setFeatured] = useState<VideoItem>(mockVideosData.Featured)
  const [showVideo, setShowVideo] = useState(false)
  const [trending, setTrending] = useState<VideoItem[]>(() =>
    prepareTrending(mockVideosData.TendingNow),
  )

  const handlePick = (item: VideoItem) => {
    setFeatured(item)
    setShowVideo(false) // reset to image first
    setLastClickedId(item.Id) // remember
    // after 2s swap to video
    window.setTimeout(() => setShowVideo(true), 2000)
  }

  return (
    <main className={baseClassname()}>
      <FeaturedVideo
        item={featured}
        showVideo={showVideo}
        onPlay={() => setShowVideo(true)}
        onMoreInfo={() => {}}
      />

      <TrendingNowSection items={trending} onPick={handlePick} />
    </main>
  )
}

export default Home
