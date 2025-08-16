import classNamesConstructor from '../../../utils/classNamesUtils'
import CustomButton from '../../shared/CustomButton/CustomButton'
import './SidebarBottomActions.scss'

const actions = [
  { label: 'Language', onClick: () => console.log('Language clicked') },
  { label: 'Get Help', onClick: () => console.log('Get Help clicked') },
  { label: 'Exit', onClick: () => console.log('Exit clicked') },
]

const { baseClassname } = classNamesConstructor('sidebar__bottom')

const SidebarBottomActions = () => {
  return (
    <div className={baseClassname()}>
      {actions.map(({ label, onClick }) => (
        <CustomButton key={label} className={baseClassname('__action')} onClick={onClick}>
          {label}
        </CustomButton>
      ))}
    </div>
  )
}

export default SidebarBottomActions
