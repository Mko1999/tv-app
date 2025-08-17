import cx from 'classnames'
import './UserAvatar.scss'
import classNamesConstructor from '../../../utils/classNamesUtils'
import type { User } from '../../../utils/mockCurrentUser'
import CustomImage from '../CustomImage/CustomImage'

const { baseClassname } = classNamesConstructor('user-avatar')

const UserAvatar = ({ image, name, className }: User & { className?: string }) => {
  return (
    <div className={cx(baseClassname(), className)}>
      <CustomImage
        width={82}
        height={82}
        src={image ?? ''}
        alt='User avatar'
        className={baseClassname('__image')}
      />
      {name && <p className={baseClassname('__name')}>{name}</p>}
    </div>
  )
}

export default UserAvatar
