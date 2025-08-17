import useEmblaCarousel from 'embla-carousel-react'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'
import classNamesConstructor from '../../../utils/classNamesUtils'
import type { VideoItem } from '../../../utils/mockData'
import { CustomImage } from '../../shared'
import CustomButton from '../../shared/CustomButton/CustomButton'
import { publicImage } from '../../../utils/imageUtils'
import './TrendingNowSection.scss'
import { useEmblaScrollToStart } from '../../../hooks'

type Props = {
  items: VideoItem[]
  onPick: (item: VideoItem) => void
}

const { baseClassname } = classNamesConstructor('trending-now-section')

const TrendingNowSection: React.FC<Props> = ({ items, onPick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
      loop: false,
    },
    [WheelGesturesPlugin()],
  )

  const scrollToStart = useEmblaScrollToStart(emblaApi)

  return (
    <section className={baseClassname()}>
      <p className={baseClassname('__title')}>Trending Now</p>

      <div className={baseClassname('__viewport')} ref={emblaRef}>
        <div className={baseClassname('__container')}>
          {items.map((movie) => (
            <CustomButton
              key={movie.Id}
              className={baseClassname('__slide')}
              onClick={() => {
                onPick(movie)
                scrollToStart()
              }}
              aria-label={movie.Title}
            >
              <CustomImage
                className={baseClassname('__cover')}
                src={publicImage(movie.CoverImage)}
                alt={movie.Title}
              />
            </CustomButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingNowSection
