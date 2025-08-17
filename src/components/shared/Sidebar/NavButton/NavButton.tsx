import type { FC } from 'react'
import cx from 'classnames'
import classNamesConstructor from '../../../../utils/classNamesUtils'
import CustomButton from '../../CustomButton/CustomButton'

import './NavButton.scss'

export type SidebarSection = 'search' | 'home' | 'tv' | 'movies' | 'genres' | 'watch'

const { baseClassname } = classNamesConstructor('nav-button')

const NavButton: FC<{
  section: SidebarSection
  label: string
  Icon: FC<React.ImgHTMLAttributes<HTMLImageElement>>
  isActive: boolean
  onClick: () => void
  isExpanded: boolean
}> = ({ label, Icon, isActive, onClick, isExpanded }) => {
  return (
    <CustomButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onClick()
      }}
      className={cx(
        baseClassname(),
        baseClassname('--active', isActive),
        baseClassname('--expanded', isExpanded),
        baseClassname('--expanded--active', isExpanded && isActive),
      )}
      startAdornment={<Icon alt={label} />}
    >
      {isExpanded ? <span className={baseClassname('__text')}>{label}</span> : null}
    </CustomButton>
  )
}

export default NavButton
