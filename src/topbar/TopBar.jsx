import "./topbar.css"

export default function TopBar() {
  return (
    <>
    <div className="top">
        <div className="TopLeft">
            <i className="TopLeftIcon fa-brands fa-square-facebook"></i>
            <i className="TopLeftIcon fa-brands fa-twitter"></i>
            <i className="TopLeftIcon fa-brands fa-instagram"></i>
            <i className="TopLeftIcon fa-brands fa-youtube"></i>
        </div>
        <div className="TopCenter">
            <ul className = "topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">Personalised</li>
                <li className="topListItem">Gifts</li>
                <li className="topListItem">Occasions</li>
                <li className="topListItem">International</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className="TopRight">
            <img className = "topimage" src = "https://img.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg?w=2000" alt = ""></img>
            <i className="topRightIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    
    </>
  )
}
