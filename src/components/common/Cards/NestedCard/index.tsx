import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import type { INestedCardProps } from "@components/common/Cards/CardsTypes.ts";
import { type ReactElement } from "react";
import {
    defaultDSCardSX,
    dsCardImagePathPrefix,
    nestedDSCardSX,
} from "@components/common/Cards/cardsMeta.tsx";
import "./style.css";

const NestedCard = ({
    imageName = "ds-system/cards/ds-card-1.jpg",
    withImage = true,
    title = "Title of a large nested card",
    linkedText = "",
    nestedCards = [],
    action = () => {},
    backgroundColor = "#FFFFFF",
    minWidth = "270px", // XXpx | 100%
    maxWidth = "270px", // XXpx | 100%
    imageHeight = "150px",
    justifyContent = "flex-start",
    sxText = defaultDSCardSX,
    sxNestedCards = nestedDSCardSX,
    style,
    actionWrapperStyle,
    titleStyle,
    labelDescriptionStyle,
    nestedCardsStyle,
}: INestedCardProps): ReactElement => {
    const imagePath = dsCardImagePathPrefix + imageName;
    const nestedCardTitleColor = sxNestedCards.titleColor;
    const nestedCardLabelColor = sxNestedCards.labelColor;

    return (
        <Card
            className={"nested-card"}
            sx={{
                minWidth: minWidth,
                maxWidth: maxWidth,
                width: "100%",
                backgroundColor: backgroundColor,
            }}
            style={style}
        >
            <CardActionArea
                onClick={action}
                sx={{
                    height: "100%",
                    justifyContent: justifyContent,
                    ...actionWrapperStyle,
                }}
            >
                {withImage && imageName && (
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

                <CardContent style={{ height: "auto" }}>
                    {title && (
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            sx={{
                                color: sxText.titleColor,
                                fontWeight: sxText.fontWeight,
                                fontSize: sxText?.titleFontSize,
                            }}
                            style={titleStyle}
                        >
                            {title}
                        </Typography>
                    )}

                    {nestedCards && (
                        <div className="nested-cards-container">
                            {nestedCards.map((nestedCard, indx: number) => (
                                <div
                                    key={`${nestedCard.title}-${indx}`}
                                    className="nested-card-box"
                                    style={{
                                        fontFamily: sxNestedCards.fontFamily,
                                        backgroundColor:
                                            sxNestedCards.backgroundColor,
                                        ...nestedCardsStyle,
                                    }}
                                >
                                    <h5
                                        style={{
                                            color: nestedCardTitleColor,
                                            fontSize:
                                                sxNestedCards.titleFontSize,
                                            fontWeight:
                                                sxNestedCards.titleFontWeight,
                                        }}
                                    >
                                        {nestedCard.title}
                                    </h5>
                                    <p
                                        style={{
                                            color: nestedCardLabelColor,
                                            fontSize:
                                                sxNestedCards.titleFontSize,
                                            fontWeight:
                                                sxNestedCards.fontWeight,
                                            ...labelDescriptionStyle,
                                        }}
                                    >
                                        {nestedCard.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </CardActionArea>

            {linkedText && (
                <CardActions>
                    <Button
                        size="small"
                        onClick={action}
                        sx={{ color: sxText.linkColor }}
                    >
                        {linkedText}
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default NestedCard;
