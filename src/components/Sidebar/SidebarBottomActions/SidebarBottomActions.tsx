import CustomButton from '../../shared/CustomButton/CustomButton'
import './SidebarBottomActions.scss'

const actions = [
  { label: 'Language', onClick: () => console.log('Language clicked') },
  { label: 'Get Help', onClick: () => console.log('Get Help clicked') },
  { label: 'Exit', onClick: () => console.log('Exit clicked') },
]

const SidebarBottomActions = () => {
  return (
    <div className='sidebar__bottom'>
      {actions.map(({ label, onClick }) => (
        <CustomButton key={label} className='sidebar__bottom__action' onClick={onClick}>
          {label}
        </CustomButton>
      ))}
    </div>
  )
}

export default SidebarBottomActions
