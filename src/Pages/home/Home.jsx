import './home.css'
import Header from "../../header/Header";
import Tiles from '../../tiles/Tiles';
import Sidebar from "../../sidebar/Sidebar";

export default function Home() {
  return (
    <div className = "home2">
        <Header />
        <div className="home1">
            <Tiles />
            <Sidebar />
        </div>
    </div>
  )
}
