import React from "react";
import './style.css';
import SpriteIcon from "@components/common/Other/SpriteIcon";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

const imagePath = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1771159897/card_bg_1_k5q9r9.webp';

// const listTempalte = [
//     'Нельзя паниковать — хаотичные действия только мешают спасению.',
//     'Нельзя возвращаться за вещами — главное сохранить жизнь.',
//     'Нельзя самостоятельно тушить крупный пожар, если пламя уже распространилось — нужно срочно эвакуироваться.',
//     'Нельзя открывать окна и двери без необходимости — это усиливает приток кислорода и раздувает пламя.',
// ]

const Implementation: React.FC = () => {
    return (
        <div className={"implementation-page"}>
            <Card className="card">
                <CardActionArea className="card-area">
                    <CardMedia
                        className="background-card"
                        component="img"
                        height="140"
                        image={imagePath}
                        alt="green iguana"
                    />
                </CardActionArea>
                <div className="card-content">
                    <SpriteIcon iconId="logo" color="white" />
                    <p style={{color: 'white', fontWeight: 700}}>Название</p>
                </div>
            </Card>
        </div>
    );
};

export default Implementation;
