import "./topbar.css"
import { Link } from "react-router-dom"

export default function topbar( {search, setSearch}) {
  return (
    <div className='top'>
        <div className='topleft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topcentre'>
            <ul className="topList">
                <li className="topListItem"><Link to={"/"}>Home</Link></li>
                <li className="topListItem"><Link to={"/about"}>About</Link></li>
                <li className="topListItem"><Link to={"/contact"}>Contact</Link></li>
                <li className="topListItem"><Link to={"/write"}>Write</Link></li>
                <li className="topListItem"><Link to={"/logout"}>Logout</Link></li>
                
            </ul>
        </div>
        <div className="searchbox">
        <form className="search">
                <div className='searchFormGroup'>
                    <input
                        id="search" 
                        className='searchInput' 
                        type="text" 
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <label htmlFor='search'>
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
                    </label>
                </div>
            </form >
        </div>
        <div className='topright'>
            <img 
                className="topImg"
                src="images/Ajayi David - Data Sci.jpg" 
                alt=""
            />  
        </div>
      
    </div>
  )
}

