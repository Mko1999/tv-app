import * as React from 'react'
import classNamesConstructor from '../../../../utils/classNamesUtils'
import { PlayIcon } from '../../../../assets/icons'
import { formatDuration } from '../../../../utils/timeUtilts'

import CustomButton from '../../../shared/CustomButton/CustomButton'

import './FeaturedVideoDetails.scss'

type FeatureVideoDetailsProps = {
  releaseYear: string
  mpaRating: string
  duration: string
  description: string
  onPlay?: () => void
  onMoreInfo?: () => void
}

const { baseClassname } = classNamesConstructor('featured-video-details')

const FeaturedVideoDetails: React.FC<FeatureVideoDetailsProps> = ({
  releaseYear,
  mpaRating,
  duration,
  description,
  onPlay,
  onMoreInfo,
}) => {
  return (
    <div className={baseClassname()}>
      <div className={baseClassname('__facts')}>
        <span className={baseClassname('__facts__item')}>{releaseYear}</span>
        <span className={baseClassname('__facts__item')}>{mpaRating}</span>
        <span className={baseClassname('__facts__item')}>{formatDuration(duration)}</span>
      </div>

      <p className={baseClassname('__desc')}>{description}</p>

      <div className={baseClassname('__actions')}>
        <CustomButton
          className={`${baseClassname('__actions__item')} ${baseClassname('__actions__play')}`}
          onClick={onPlay}
          startAdornment={<PlayIcon width={18} height={24} />}
        >
          Play
        </CustomButton>
        <CustomButton
          className={`${baseClassname('__actions__item')} ${baseClassname('__actions__more')}`}
          onClick={onMoreInfo}
        >
          More Info
        </CustomButton>
      </div>
    </div>
  )
}

export default FeaturedVideoDetails
