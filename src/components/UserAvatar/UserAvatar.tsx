import type { User } from '../../utils/mockCurrentUser'
import { CustomImage } from '../shared'
import './UserAvatar.scss'

const UserAvatar = ({ image, name }: User) => {
  return (
    <div className='user-avatar'>
      <CustomImage
        width={82}
        height={82}
        src={image ?? ''}
        alt='User avatar'
        className='user-avatar__image'
      />
      {name && <p className='user-avatar__name'>{name}</p>}
    </div>
  )
}

export default UserAvatar
