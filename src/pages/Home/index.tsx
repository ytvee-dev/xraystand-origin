import { type ReactElement } from "react";
import {Link} from "react-router";
import './style.css';

const HomePage = (): ReactElement => {

    return(
        <div className="home-page">
            <h1>Home Page</h1>

            <div className="pages-container">
                <div className="finished">
                    <h2>Завершенные</h2>
                    <p><Link to={"/traffic-laws"}>Правила дорожного движения</Link></p>
                    <p><Link to={"/chemistry"}>Химия</Link></p>
                    <p><Link to={"/ruslit"}>Русская литература</Link></p>
                    <p><Link to={"/kazakhadebiet"}>Казахская литература</Link></p>
                    <p><Link to={"/healthyfood"}>Правильное питание</Link></p>

                </div>

                <div className="unfinished">
                    <h2>В процессе</h2>
                    <p><Link to={"/math"}>Математика</Link></p>
                    <p><Link to={"/classroomsafety"}>Техника безопасности в кабинетах</Link></p>
                    <p><Link to={"/kazmusicinstr"}>Музыка (каз нац инструменты)</Link></p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
