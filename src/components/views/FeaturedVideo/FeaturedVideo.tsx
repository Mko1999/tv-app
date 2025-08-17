import cx from 'classnames'

import type { VideoItem } from '../../../utils/mockData'
import classNamesConstructor from '../../../utils/classNamesUtils'

import './FeaturedVideo.scss'
import { CustomImage } from '../../shared'
import { publicImage } from '../../../utils/imageUtils'
import { MOCK_VIDEO_URL } from '../../../utils/mockVideoUrl'
import FeaturedVideoDetails from './FeaturedVideoDetails/FeaturedVideoDetails'

type FeaturedProps = {
  item: VideoItem
  showVideo: boolean
  onPlay?: () => void
  onMoreInfo?: () => void
}

const { baseClassname } = classNamesConstructor('featured-video')

const FeaturedVideo: React.FC<FeaturedProps> = ({ item, showVideo, onPlay, onMoreInfo }) => {
  if (showVideo && item.VideoUrl) {
    return (
      <section className={baseClassname()}>
        <video
          className={cx(baseClassname('__bg-video'), baseClassname('__bg-layer'))}
          src={MOCK_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload='auto'
        />
      </section>
    )
  }

  return (
    <section className={baseClassname()}>
      <div className={baseClassname('__bg')}>
        <CustomImage
          src={publicImage(item?.CoverImage)}
          alt={item?.Title}
          className={cx(baseClassname('__bg-img'), baseClassname('__bg-layer'))}
        />

        <div className={baseClassname('__overlay')} />
      </div>

      <div className={baseClassname('__content')}>
        <div className={baseClassname('__meta-top')}>
          <span className={baseClassname('__category')}>{item?.Category}</span>
        </div>

        {/* Title image (transparent PNG). Fallback to text if missing */}
        <div className={baseClassname('__title')}>
          {item?.TitleImage ? (
            <CustomImage
              src={publicImage(item?.TitleImage)}
              alt={item.Title}
              className={baseClassname('__title-img')}
            />
          ) : (
            <h1 className={baseClassname('__title-text')}>{item?.Title}</h1>
          )}
        </div>
        <FeaturedVideoDetails
          releaseYear={item.ReleaseYear}
          mpaRating={item.MpaRating}
          duration={item.Duration}
          description={item.Description}
          onPlay={onPlay}
          onMoreInfo={onMoreInfo}
        />
      </div>
    </section>
  )
}

export default FeaturedVideo
