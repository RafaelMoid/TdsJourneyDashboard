import './Sidebar.css';
import '../../assets/logo.png';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={"logo.png"} alt="logo" />
                    <h1>Strateegia Dashboard</h1>
                </div>
                <i 
                className="fa fa-times" 
                id="sidebarIcon" 
                onClick={() => closeSidebar()}
                ></i>
            </div>
        </div>
    )
}

export default Sidebar;