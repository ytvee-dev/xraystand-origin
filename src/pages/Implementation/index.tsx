import React from "react";
import './style.css';
import SquareCard from "@components/common/Cards/SquareCard";
import DSNotification from "@components/common/DSNotification";
import SpriteIcon from "@components/common/Other/SpriteIcon";

const imagePath = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051951/1_h2dh5q.webp';

const listTempalte = [
    'Нельзя паниковать — хаотичные действия только мешают спасению.',
    'Нельзя возвращаться за вещами — главное сохранить жизнь.',
    'Нельзя самостоятельно тушить крупный пожар, если пламя уже распространилось — нужно срочно эвакуироваться.',
    'Нельзя открывать окна и двери без необходимости — это усиливает приток кислорода и раздувает пламя.',
]

const Implementation: React.FC = () => {
    return(
        <div className={"implementation-page"}>
            <DSNotification
                iconName="super-attention"
                iconSize="45px"
                list={listTempalte}
                backgroundColor={'#C3473B'}
                textColor={'white'}
                alignIcon={'start'}
                listStyle="numeric"
                sx={{
                    maxWidth: '580px',
                    borderRadius: 'medium'
                }}
            />
        </div>
    );
};

export default Implementation;
