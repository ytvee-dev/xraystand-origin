import {type ReactElement} from "react";
import type {IContentImageCardProps} from "@components/common/Cards/CardsTypes.ts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {defaultDSCardSX, dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import "./style.css";


const DSCard = ({
    imageName = "",
    title = "",
    label = "",
    linkedText = "",
    action = () => alert("click"),
    backgroundColor = "#FFFFFF",
    width = "270px", // XXpx | 100%
    sxText = defaultDSCardSX,
}: IContentImageCardProps): ReactElement => {

    const imagePath = dsCardImagePathPrefix + imageName;

    return (
        <Card sx={{maxWidth: width, backgroundColor: backgroundColor}}>
            <CardActionArea onClick={action}>

                {imageName && (
                    <CardMedia
                        component="img"
                        height={width}
                        image={imagePath}
                        alt={imageName}
                        sx={{
                            objectFit: sxText.imgObjectFit!,
                            padding: sxText.imgPadding!,
                        }}
                    />
                )}

                <CardContent>

                    {title && (
                        <Typography
                            gutterBottom variant="h5"
                            component="h5"
                            sx={{color: sxText.titleColor}}
                        >{title}</Typography>
                    )}

                    {label && (
                        <Typography
                            variant="body2"
                            sx={{color: sxText.labelColor}}
                        >{label}</Typography>
                    )}

                </CardContent>
            </CardActionArea>

            {linkedText && (
                <CardActions>
                    <Button
                        size="small"
                        onClick={action}
                        sx={{color: sxText.linkColor}}
                    >{linkedText}</Button>
                </CardActions>
            )}
        </Card>
    );
};

export default DSCard;
