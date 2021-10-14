import "./Navbar.css";
import {FaSearch} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';



const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Apoie os desenvolvedores</a>
                <a href="#">Strateegia</a>
                <a className="active_link" href="#">Dashboard</a>
            </div>
            <div className="navbar__right">
                 <a href="#">
                    <FaSearch />
                 </a>
                 <a href="#">
                    <FiLogOut/>
                 </a>
                 <a href="#">
                    <img  width="30" src={"logo.png"} alt="logo" className="icone"/>
                 </a>   
            </div>
        </nav>
    )
}

export default Navbar;