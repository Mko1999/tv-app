import cx from 'classnames'
import './Sidebar.scss'

import UserAvatar from '../UserAvatar/UserAvatar'
import {
  GenreIcon,
  HomeIcon,
  MoviesIcon,
  SearchIcon,
  TVShowsIcon,
  WatchLaterIcon,
} from '../../assets/icons'
import { useState, type FC } from 'react'
import SidebarBottomActions from './SidebarBottomActions/SidebarBottomActions'
import type { User } from '../../utils/mockCurrentUser'
import type { SidebarSection } from './NavButton/NavButton'
import NavButton from './NavButton/NavButton'

type NavItem = {
  section: SidebarSection
  label: string
  Icon: FC<React.ImgHTMLAttributes<HTMLImageElement>>
}

const NAV_ITEMS: NavItem[] = [
  { section: 'search', label: 'Search', Icon: SearchIcon },
  { section: 'home', label: 'Home', Icon: HomeIcon },
  { section: 'tv', label: 'TV Shows', Icon: TVShowsIcon },
  { section: 'movies', label: 'Movies', Icon: MoviesIcon },
  { section: 'genres', label: 'Genres', Icon: GenreIcon },
  { section: 'watch', label: 'Watch Later', Icon: WatchLaterIcon },
]

export type SidebarProps = {
  user: User
  defaultSection?: SidebarSection
  onSectionSelect: (section: SidebarSection) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  defaultSection = 'home',
  onSectionSelect,
}) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false)
  const [selectedSection, setSelectedSection] = useState<SidebarSection>(defaultSection)

  const rootClasses = cx('sidebar', { 'sidebar--open': isMenuExpanded })
  const backdropClasses = cx('sidebar__backdrop', { 'sidebar__backdrop--show': isMenuExpanded })
  const sidebarPanelClasses = cx('sidebar__panel', { 'sidebar__panel--expanded': isMenuExpanded })

  const handleSelect = (section: SidebarSection) => {
    setSelectedSection(section)
    onSectionSelect?.(section)
  }

  return (
    <div
      className={rootClasses}
      onMouseEnter={() => setIsMenuExpanded(true)}
      onMouseLeave={() => setIsMenuExpanded(false)}
      onTouchStart={() => setIsMenuExpanded(true)}
      onTouchEnd={() => setIsMenuExpanded(true)}
      // onFocusCapture={() => setIsMenuExpanded(true)}
      // onBlurCapture={() => setIsMenuExpanded(false)}
    >
      <div className={backdropClasses} aria-hidden />

      <aside className={sidebarPanelClasses} aria-expanded={isMenuExpanded}>
        <div className='sidebar__top-block'>
          {isMenuExpanded && <UserAvatar name={user?.name ?? ''} image={user?.image ?? ''} />}

          <nav className='sidebar__nav'>
            {NAV_ITEMS.map(({ section, label, Icon }) => (
              <NavButton
                key={section}
                section={section}
                label={label}
                Icon={Icon}
                isActive={selectedSection === section}
                onClick={() => handleSelect(section)}
                isExpanded={isMenuExpanded}
              />
            ))}
          </nav>
        </div>

        {isMenuExpanded && <SidebarBottomActions />}
      </aside>
    </div>
  )
}

export default Sidebar
