import { useRef, useState, type FC } from 'react'
import cx from 'classnames'

import UserAvatar from '../UserAvatar/UserAvatar'
import {
  GenreIcon,
  HomeIcon,
  MoviesIcon,
  SearchIcon,
  TVShowsIcon,
  WatchLaterIcon,
} from '../../assets/icons'
import SidebarBottomActions from './SidebarBottomActions/SidebarBottomActions'
import type { User } from '../../utils/mockCurrentUser'
import type { SidebarSection } from './NavButton/NavButton'
import NavButton from './NavButton/NavButton'
import classNamesConstructor from '../../utils/classNamesUtils'
import { useClickOutside } from '../../hooks'

import './Sidebar.scss'

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

const { baseClassname } = classNamesConstructor('sidebar')

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  defaultSection = 'home',
  onSectionSelect,
}) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(true)
  const [selectedSection, setSelectedSection] = useState<SidebarSection>(defaultSection)

  const openExpandedMenu = () => setIsMenuExpanded(true)
  const closeExpandedMenu = () => setIsMenuExpanded(false)
  const toggleExpandedMenu = () => setIsMenuExpanded((v) => !v)

  const panelRef = useRef<HTMLDivElement | null>(null)

  const lastPointerType = useRef<'mouse' | 'touch' | 'pen' | 'unknown'>('unknown')

  const rootClasses = cx(baseClassname(), baseClassname('--open', isMenuExpanded))
  const backdropClasses = cx(
    baseClassname('__backdrop'),
    baseClassname('__backdrop--show', isMenuExpanded),
  )
  const sidebarPanelClasses = cx(
    baseClassname('__panel'),
    baseClassname('__panel--expanded', isMenuExpanded),
  )

  const navMenuClasses = cx(baseClassname('__nav'), baseClassname('__nav--show', isMenuExpanded))

  const handleSelect = (section: SidebarSection) => {
    setSelectedSection(section)
    onSectionSelect?.(section)
  }

  useClickOutside(panelRef, () => {
    if (isMenuExpanded) closeExpandedMenu()
  })

  return (
    <div
      ref={panelRef}
      className={rootClasses}
      onPointerDown={(e) => {
        const pt = (e.pointerType || 'unknown') as typeof lastPointerType.current
        lastPointerType.current = pt
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') openExpandedMenu()
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') closeExpandedMenu()
      }}
      onClick={() => {
        if (lastPointerType.current !== 'mouse') toggleExpandedMenu()
      }}
    >
      <div className={backdropClasses} aria-hidden />

      <aside className={sidebarPanelClasses} aria-expanded={isMenuExpanded}>
        <div className={baseClassname('__top-block')}>
          {isMenuExpanded && (
            <UserAvatar
              className={baseClassname('__user-avatar')}
              name={user?.name ?? ''}
              image={user?.image ?? ''}
            />
          )}

          <nav className={navMenuClasses}>
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
