import * as React from 'react'
import cx from 'classnames'

import type { VideoItem } from '../../../utils/mockData'
import classNamesConstructor from '../../../utils/classNamesUtils'

import './FeaturedVideo.scss'
import { CustomImage } from '../../shared'
import { publicImage } from '../../../utils/imageUtils'
import { formatDuration } from '../../../utils/trendingUtilts'
import CustomButton from '../../shared/CustomButton/CustomButton'
import { PlayIcon } from '../../../assets/icons'

type FeaturedProps = {
  item: VideoItem
  showVideo: boolean
  onPlay?: () => void
  onMoreInfo?: () => void
}

const { baseClassname } = classNamesConstructor('featured-video')

const FeaturedVideo: React.FC<FeaturedProps> = ({ item, showVideo, onPlay, onMoreInfo }) => {
  return (
    <section className={baseClassname()}>
      <div className={baseClassname('__bg')}>
        {/* Image layer */}
        <CustomImage
          src={publicImage(item?.CoverImage)}
          alt={item?.Title}
          className={cx(baseClassname('__bg-img'), baseClassname('__bg-layer'))}
        />

        {/* Video layer (on top), hidden until showVideo */}
        {showVideo && item?.VideoUrl && (
          <video
            className={cx(baseClassname('__bg-video'), baseClassname('__bg-layer'))}
            autoPlay
            muted
            loop
            playsInline
            // src={item?.VideoUrl}
            // src='https://www.bigbuckbunny.org/'
          >
            <source src='mov_bbb.mp4' type='video/mp4' />
            <source src='mov_bbb.ogg' type='video/ogg' />
          </video>
        )}

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

        <div className={baseClassname('__facts')}>
          <span>{item?.ReleaseYear}</span>
          <span>{item?.MpaRating}</span>
          <span>{formatDuration(item.Duration)}</span>
        </div>

        <p className={baseClassname('__desc')}>{item?.Description}</p>

        <div className={baseClassname('__actions')}>
          <CustomButton
            className={cx(baseClassname('__actions__play'), baseClassname('__actions__item'))}
            onClick={onPlay}
            startAdornment={<PlayIcon width={18} height={24} />}
          >
            Play
          </CustomButton>
          <CustomButton
            className={cx(baseClassname('__actions__more'), baseClassname('__actions__item'))}
            onClick={onMoreInfo}
          >
            More Info
          </CustomButton>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideo
