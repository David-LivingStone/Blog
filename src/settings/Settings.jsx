import './settings.css'
import SideBar from './../sideBar/SideBar'

export default function Settings() {
  return (
    <div className='setting'>
      <div className="settingWrapper">
        <div className="settingTitle">
            <span className='settingUpdateTitle'> Update Your Account</span>
            <span className='settingDeleteTitle'> Delete Your Account</span>
        </div>
        <form className='"settingsForm'>
            <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img
                    src='images/Ajayi David - Data Sci.jpg'
                    alt=''
                    /> 
                    <label htmlFor='fileInput'>
                    <i className=" settingsPPIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id ='fileInput' style={{display: 'none'}}/>
                      
                </div> 
                <div className='settingsFormGroup'>
                <label>Username</label>
                <input type='text' placeholder='David'/>
                <label>Email</label>
                <input type='text' placeholder='david@gmail.com'/>
                <label>Password</label>
                <input type='password'/>
                <button className='settingSubmit'>Update</button>
                </div>
        </form>


      </div>
      <SideBar/>
    </div>
  )
}
