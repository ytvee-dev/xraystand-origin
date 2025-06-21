import { type ReactElement } from "react";
import {Link} from "react-router";

const HomePage = (): ReactElement => {

    return(
        <div className="home-page">
            <h1>Home Page</h1>
            <Link to={"/traffic-laws"}>Traffic Laws</Link>
        </div>
    );
};

export default HomePage;