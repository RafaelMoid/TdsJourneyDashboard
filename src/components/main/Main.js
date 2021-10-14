//import "./Main.css";
import Chart from "../charts/Chart";
import {FiLogOut} from 'react-icons/fi';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';



const Main = () => {

    return (
        <main>
            <div className="main__container">
                <div className="main_tittle">
                    <img src={"logo.png"} alt="logo" />
                    <div className="main__greeting">
                        <h1>Hello Edward Elric</h1>
                        <p>Seja bem vindo ao seu dashboard</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <FiLogOut />
                        <div className="card_inner">
                            <p className="text-primary-p">Projetos em andamento</p>
                            <span className="font-bold text-title">87</span>
                        </div>
                    </div>

                <div className="card">
                    <FiLogOut />
                    <div className="card_inner">
                        <p className="text-primary-p">Projetos concluidos</p>
                        <span className="font-bold text-title">127</span>
                    </div>
                </div>

                <div className="card">
                    <HiOutlineDocumentReport />
                    <div className="card_inner">
                        <p className="text-primary-p">Relatorios</p>
                        <span className="font-bold text-title">197</span>
                    </div>
                </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Projeto favoritado</h1>
                                <p>Investigação dos homunculús</p>
                            </div>
                            <AiOutlineFundProjectionScreen />
                        </div>
                        <Chart />
                    </div> 

                    <div className="charts__right">
                        <div className="charts__right">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Recife, Penambuco, Brasil</p>
                            </div>
                        </div>
                    </div>  
                </div>               
            </div>
        </main>
    )

}

export default Main;