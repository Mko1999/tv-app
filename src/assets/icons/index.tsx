import homeIconUrl from './home-icon.png'
import genresIconUrl from './genres-icon.png'
import searchIconUrl from './search-icon.png'
import moviesIconUrl from './movies-icon.png'
import tvShowsIconUrl from './tv-shows-icon.png'
import playIconUrl from './play-icon.png'
import watchLaterIconUrl from './watch-later-icon.png'

import CustomImage, {
  type FixedSrcImageProps,
} from '../../components/shared/CustomImage/CustomImage'

export const HomeIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={homeIconUrl} {...props} />
)

export const GenreIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={genresIconUrl} {...props} />
)
export const SearchIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={searchIconUrl} {...props} />
)
export const MoviesIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={moviesIconUrl} {...props} />
)
export const TVShowsIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={tvShowsIconUrl} {...props} />
)

export const WatchLaterIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={watchLaterIconUrl} {...props} />
)

export const PlayIcon: React.FC<FixedSrcImageProps> = (props) => (
  <CustomImage src={playIconUrl} {...props} />
)
