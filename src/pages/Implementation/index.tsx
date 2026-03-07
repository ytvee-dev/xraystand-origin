import React from "react";
import './style.css';
import SquareCard from "@components/common/Cards/SquareCard";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const imagePath = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051951/1_h2dh5q.webp';

const listTempalte = [
    'Нельзя паниковать — хаотичные действия только мешают спасению.',
    'Нельзя возвращаться за вещами — главное сохранить жизнь.',
    'Нельзя самостоятельно тушить крупный пожар, если пламя уже распространилось — нужно срочно эвакуироваться.',
    'Нельзя открывать окна и двери без необходимости — это усиливает приток кислорода и раздувает пламя.',
]

const Implementation: React.FC = () => {
    return (
        <div className={"implementation-page"}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imagePath}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
               
            </Card>
        </div>
    );
};

export default Implementation;
