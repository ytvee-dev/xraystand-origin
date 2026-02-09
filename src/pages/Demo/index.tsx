import { type ReactElement } from "react";
import DefaultLayout from "@layout/Default";
import ContentSection from "@components/common/Sections/DSContentSection";
import "./style.css";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { CardContent, CardMedia, Typography } from "@mui/material";

const textContent = {
    title: "Демонстрация",
    description: "",
};

const demoImage =  "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051906/card1_hfnmqe.webp";

const Demo = (): ReactElement => {

    return (
        <DefaultLayout strictLanguage='ru'>
            <ContentSection textData={textContent}>
                <div className="pages-container">
                    
                    <Card className={'bordered-card'} sx={{
                        minWidth: 200,
                        maxWidth: 100,
                        width: "100%",
                        // backgroundColor: backgroundColor,
                    }}>
                        <CardActionArea className="bordered-card-content-wrapper" onClick={() => console.log('click')} sx={{height: "100%"}}>

                             <CardMedia
                                component="img"
                                image={demoImage}
                                alt={'imageName'}
                                className="bordered-card-image"
                                // sx={{
                                //     objectFit: sxText.imgObjectFit!,
                                //     padding: sxText.imgPadding!,
                                // }}
                            />

                            <CardContent className="bordered-card-content">
                                <Typography
                                    gutterBottom variant="h5"
                                    component="h5"
                                    // sx={{color: sxText.titleColor, fontWeight: sxText.fontWeight}}
                                >{'title'}</Typography>

                                <Typography
                                    variant="body2"
                                    // sx={{color: sxText.labelColor}}
                                >{'label'}</Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
            </ContentSection>
        </DefaultLayout>
    );
};

export default Demo;
