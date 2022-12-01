import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <span className="SidebarTitle">About Me</span>
        <img
        src="images/Ajayi David - Data Sci.jpg"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi iure excepturi omnis debitis, voluptas quidem nulla quae atque eligendi recusandae.</p>
      </div>

      <div className="SidebarItem">
        <span className="SidebarTitle">Categories</span>
        <ul className="Sidebarlist">
            <li className="SidebarListitem">Life</li>
            <li className="SidebarListitem">Music</li>
            <li className="SidebarListitem">Style</li>
            <li className="SidebarListitem">Sport</li>
            <li className="SidebarListitem">Tech</li>
            <li className="SidebarListitem">Cinema</li>
            <li className="SidebarListitem">Cartoon</li>
        </ul>
        
      </div>

      <div className="SidebarItem">
        <span className="SidebarTitle">Follow Us</span>
        <ul className="Sidebarsocial">
        <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </ul>
        
      </div>
    </div>
  )
}
 