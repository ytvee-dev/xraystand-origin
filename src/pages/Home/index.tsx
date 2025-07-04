import { type ReactElement } from "react";
import {Link} from "react-router";

const HomePage = (): ReactElement => {

    return(
        <div className="home-page">
            <h1>Home Page</h1>
            <p><Link to={"/traffic-laws"}>Правила дорожного движения</Link></p>
            <p><Link to={"/chemistry"}>Химия</Link></p>
            <p><Link to={"/ruslit"}>Русская литература</Link></p>
            <p><Link to={"/kazakhadebiet"}>Казахская литература</Link></p>
        </div>
    );
};

export default HomePage;