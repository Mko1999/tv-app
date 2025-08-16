import type { FC } from 'react'
import cx from 'classnames'
import CustomButton from '../../shared/CustomButton/CustomButton'

import './NavButton.scss'

export type SidebarSection = 'search' | 'home' | 'tv' | 'movies' | 'genres' | 'watch'

const NavButton: FC<{
  section: SidebarSection
  label: string
  Icon: FC<React.ImgHTMLAttributes<HTMLImageElement>>
  isActive: boolean
  onClick: () => void
  isExpanded: boolean
}> = ({ label, Icon, isActive, onClick, isExpanded }) => (
  <CustomButton
    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onClick()
    }}
    className={cx('nav-button', {
      'nav-button--active': isActive,
      'nav-button--expanded': isExpanded,
      'nav-button--expanded--active': isExpanded && isActive,
    })}
    startAdornment={<Icon alt={label} />}
  >
    {isExpanded ? <span className='nav-button__text'>{label}</span> : null}
  </CustomButton>
)

export default NavButton
