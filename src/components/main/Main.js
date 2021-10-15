import "./Main.css";
import Chart from "../charts/Chart";
import {FiLogOut,FiPlus} from 'react-icons/fi';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import { MdLibraryBooks } from 'react-icons/md';
import { AiOutlineBarChart } from 'react-icons/ai';





const Main = () => {

    return (
        <main>
            <div className="main__container">
                <div className="main_tittle">
                    <div className="main__greeting">
                        <h1>Hello Edward Elric</h1>
                        <p>Seja bem vindo ao seu dashboard</p> 
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        
                        <div className="card_inner">
                            <p className="text-primary-p">Projetos em andamento</p>
                            <span className="font-bold text-title">87</span>
                        </div>
                    </div>

                <div className="card">
                    
                    <div className="card_inner">
                        <p className="text-primary-p">Projetos concluidos</p>
                        <span className="font-bold text-title">127</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card_inner">
                        <p className="text-primary-p">Relatorios</p>
                        <span className="font-bold text-title">197</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card_inner">
                        <p className="text-primary-p">Pessoas no projeto</p>
                        <span className="font-bold text-title">5</span>
                    </div>
                </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Projeto mais recente</h1>
                                <p>Moura fácil</p>
                                <Chart />
                            </div>
                            <div className="charts__right">
                        <div className="charts__right__title">
                        <div className="charts__right__cards">
                            
                            <div className="card1">
                                <FiPlus size={60}/>
                                <h2>Novo relatório</h2>
                            </div>

                            <div className="card2">
                                < HiOutlineDocumentReport size={60}/>
                                <h2>Meus relatórios</h2>
                            </div>

                            <div className="card3">
                                <MdLibraryBooks size={60} />
                               <h2>Biblioteca de relatórios</h2>
                            </div>

                            <div className="card4">
                                <AiOutlineBarChart size={60}/>
                               <h2>Comparações avançadas</h2>
                            </div>
                        </div>
                        </div>

                        
                    </div> 
                        </div>
                        
                    </div> 

                     
                </div>               
            </div>
        </main>
    )

}

export default Main;