import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import {Link} from "react-router";
import './style.css';

const HomePage = (): ReactElement => {
    const { pageImageIdData } = usePageImagesIds(PageIds.HOME_PAGE);
    const imageIds = useMemo(() => {
        if (!pageImageIdData) return [];
        return Array.from(
            new Set(
                Object.values(pageImageIdData).flatMap(section => [
                    ...section.globalData,
                    ...section.contentListData,
                ]),
            ),
        );
    }, [pageImageIdData]);
    const { isLoaded } = useImagesPreloader(imageIds);

    if (!isLoaded) {
        return <Spinner />;
    }

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

                <div className="other">
                    <h2>Библиотека</h2>
                    <p><Link to={"/components"}>Компоненты</Link></p>
                    <p><Link to={"/spinner"}>Загрузка</Link></p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
