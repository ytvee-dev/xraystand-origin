import {type ReactElement} from "react";
import type {IInformationCardProps} from "@components/common/Cards/CardsTypes.ts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {
    defaultDSCardSX,
    defaultDSInformationCardSX,
} from "@components/common/Cards/cardsMeta.tsx";
import "./style.css";


const DSInforamtionCard = ({
    marker = "decimal", // decimal | disc | circle | square | none
    title = "",
    liOptions = [],
    action = () => {},
    backgroundColor = "#FFFFFF",
    width = "270px", // XXpx | 100%
    sxText = defaultDSCardSX,
    sxContent = defaultDSInformationCardSX,
}: IInformationCardProps): ReactElement => {

    return (
        <Card sx={{
            maxWidth: width,
            backgroundColor: backgroundColor
        }}>
            <CardActionArea onClick={action}>
                <CardContent
                    sx={{
                        minHeight: sxContent?.minHeight,
                        minWidth: sxContent?.minWidth,
                        maxWidth: sxContent?.maxWidth,
                    }}
                >

                    {title && (
                        <Typography
                            gutterBottom variant="h5"
                            component="h5"
                            sx={{
                                color: sxText?.titleColor,
                                fontSize: sxText?.titleFontSize,
                                fontWeight: sxText?.fontWeight
                            }}
                        >{title}</Typography>
                    )}

                    {liOptions && (
                        <ul
                            style={{
                                fontSize: sxText?.labelFontSize,
                                listStyleType: marker,
                                paddingLeft: sxContent?.listPadding
                            }}
                        >
                            {
                                liOptions.map((option: string, index: number) => (
                                    <li
                                        key={index}
                                        style={{
                                            color: sxText?.labelColor,
                                        }}
                                    >{option}</li>
                                ))
                            }
                        </ul>
                    )}

                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default DSInforamtionCard;
