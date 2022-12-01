import './home.css'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'

export default function Home({ }) {
  return (
    <>
    <Header title= 'LivingStone Blog'/>
    <div className='home'>
      <Posts/>
      <SideBar/>
    </div>
    </>
  )
}
