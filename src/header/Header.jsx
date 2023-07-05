import "./header.css"

export default function Header() {
  return (
    <div className = "header">
        <div className="headerTitles">
            <span className = "headerTitleSm">Flowers</span>
            <span className = "headerTitleLg">Love 🌷</span>
        </div>
        <img className="headerImg" src = "https://images.pexels.com/photos/1083895/pexels-photo-1083895.jpeg?cs=srgb&dl=pexels-roon-z-1083895.jpg&fm=jpg" alt = ""></img>
    </div>
  )
}
