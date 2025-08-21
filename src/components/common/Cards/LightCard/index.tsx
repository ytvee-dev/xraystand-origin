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


const LightCard = ({
    imageName = "",
    title = "",
    subTitle = "",
    label = "",
    linkedText = "",
    action = () => {},
    backgroundColor = "#FFFFFF",
    minWidth = "270px", // XXpx | 100%
    maxWidth = "270px", // XXpx | 100%
    imageHeight = "150px",
    sxText = defaultDSCardSX,
}: IContentImageCardProps): ReactElement => {

    const imagePath = dsCardImagePathPrefix + imageName;

    return (
        <Card className={'light-card'} sx={{
            minWidth: minWidth,
            maxWidth: maxWidth,
            width: "100%",
            backgroundColor: backgroundColor,
        }}>
            <CardActionArea onClick={action} sx={{height: "100%"}}>

                {imageName && (
                    <CardMedia
                        component="img"
                        height={imageHeight}
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
                            sx={{color: sxText.titleColor, fontWeight: sxText.fontWeight, fontSize: sxText?.titleFontSize}}
                        >{title}</Typography>
                    )}

                    {subTitle && (
                        <Typography
                            gutterBottom variant="h6"
                            component="h6"
                            sx={{paddingBottom: "20px", color: sxText.subTitleColor, fontWeight: sxText.fontWeight, fontSize: sxText?.subTitleFontSize}}
                        >{subTitle}</Typography>
                    )}

                    {label && (
                        <Typography
                            variant="body2"
                            sx={{color: sxText.labelColor, fontSize: sxText?.labelFontSize}}
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

export default LightCard;
