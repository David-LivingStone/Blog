import './single.css'
import SideBar from '../sideBar/SideBar'
import SinglePost from '../singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
      {/* <Post/> */}
      <SinglePost/>
      <SideBar/>
    </div>
  )
}
