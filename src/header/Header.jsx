import "./header.css"

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">{title}</span> */}
        <span className="headerTitleLg">{title}</span>
        
      </div>
      <img
      className="headerImg"
      src="images/autumn-landscape-nature-background-dried-flowers-water-drops-rain-field-banner-selective-focus-75038244.jpg"
      alt=""
      />
    </div>
  )
}
