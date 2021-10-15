import './Sidebar.css';
import '../../assets/logo.png';
import { FaHome, FaTools , FaChartLine, FaPowerOff} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {MdLocalLibrary} from 'react-icons/md';
import {FiInfo} from 'react-icons/fi';


const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={"image4.png"} alt="logo" className="logo" />
                    <h1>Strateegia Dashboard</h1>
                </div>
                < AiOutlineCloseSquare
                className="closeIcon" 
                id="sidebarIcon" 
                onClick={() => closeSidebar()} />
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    < FaHome/>
                    <a href="#"> Dashboard</a>
                </div>
                
                <h2><FaTools />  Ferramentas</h2>
                <div className="sidebar__link">
                    <CgProfile/>
                    <a href="#"> Gerenciamento de conta</a>
                </div>
                <div className="sidebar__link">
                    < HiOutlineDocumentReport />
                    <a href="#"> Meus relatórios</a>
                </div>
                <div className="sidebar__link">
                    < MdLocalLibrary />
                    <a href="#"> Biblioteca de relatórios</a>
                </div>
                <div className="sidebar__link">
                    <FaChartLine/>
                    <a href="#">  Comparações avançadas</a>
                </div>
                <div className="sidebar__link">
                    <FiInfo/>
                    <a href="#"> Guias</a>
                </div>
                <div className="sidebar__logout">
                    < FaPowerOff />
                    <a href="#" > Sign Out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;