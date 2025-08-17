import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/views/Home/Home'
import { mockCurrentUser } from '../../utils/mockCurrentUser'

import './MainLayout.scss'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Sidebar
        user={mockCurrentUser}
        onSectionSelect={(section) => console.warn(`Active section is: ${section} `)}
      />
      <Home />
    </div>
  )
}

export default MainLayout
