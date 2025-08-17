import useEmblaCarousel from 'embla-carousel-react'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'
import classNamesConstructor from '../../../utils/classNamesUtils'
import type { VideoItem } from '../../../utils/mockData'
import { CustomImage } from '../../shared'
import CustomButton from '../../shared/CustomButton/CustomButton'
import { publicImage } from '../../../utils/imageUtils'
import './TrendingNowSection.scss'

type Props = {
  items: VideoItem[]
  onPick: (item: VideoItem) => void
}

const { baseClassname } = classNamesConstructor('trending-now-section')

const TrendingNowSection: React.FC<Props> = ({ items, onPick }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
      loop: false,
    },
    [WheelGesturesPlugin()],
  )

  return (
    <section className={baseClassname()}>
      <p className={baseClassname('__title')}>Trending Now</p>

      <div className={baseClassname('__viewport')} ref={emblaRef}>
        <div className={baseClassname('__container')}>
          {items.map((m) => (
            <CustomButton
              key={m.Id}
              className={baseClassname('__slide')}
              onClick={() => onPick(m)}
              aria-label={m.Title}
            >
              <CustomImage
                className={baseClassname('__cover')}
                src={publicImage(m.CoverImage)}
                alt={m.Title}
              />
            </CustomButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingNowSection
