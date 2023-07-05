import "./sidebar.css" 

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem2">
        
        <p>
        Join us on our social media handles, where a world of excitement and connection awaits. Discover exclusive offers, sneak peeks of new arrivals, and behind-the-scenes glimpses into our brand. Engage with fellow enthusiasts, share your experiences, and become part of our ever-growing community. Stay up-to-date with the latest trends, tips, and inspiration, curated just for you
        </p>
      </div>
      <div className="sidebarItem">
      <span className = "sidebarTitle">About_us</span>
      <span className = "sidebarTitle">Categories</span>
      <span className="sidebarTitle">Follow</span>
      </div>
      <div className="sidebarItem">
        
        <div className="sidebarSocial">
            <i className="TopLeftIcon fa-brands fa-square-facebook"></i>
            <i className="TopLeftIcon fa-brands fa-twitter"></i>
            <i className="TopLeftIcon fa-brands fa-instagram"></i>
            <i className="TopLeftIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  )
}
