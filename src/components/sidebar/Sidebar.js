import './Sidebar.css';
import '../../assets/logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src="logo.png" alt="logo" />
                    <h1>Strateegia Journey</h1>
                </div>
                <i
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>Admin</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Àrea administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Loja</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>
                <h2>Pessoas</h2>
                <div>
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                </div>
                <div>
                    <i className="fa fa-circle"></i>
                    <a href="#">Usuários</a>
                </div>
                <div>
                    <i className="fa fa-money"></i>
                    <a href="#">Pagamentos e custos</a>
                </div>
                <div>
                    <i className="fa fa-taks"></i>
                    <a href="#">Plataforma</a>
                </div>
                <div>
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
                
            </div>

        </div>
    )
}

export default Sidebar;