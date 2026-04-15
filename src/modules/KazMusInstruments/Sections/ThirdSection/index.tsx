import type { ReactElement } from "react";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SoundCards from "@modules/KazMusInstruments/components/SoundCard";
import "./style.css";

type Instrument = {
    title: string;
    subTitle?: string;
    description: string;
    soundDescription?: string;
};

type ThirdSectionProps = {
    title: string;
    content: Instrument[];
};

interface Props {
    content: ThirdSectionProps;
}

const ThirdSection = ({ content }: Props): ReactElement => {
    const topCards = content.content.map((item) => ({
        title: item.title,
    }));

    const images = [
        paths.percussionInstruments.daulpaz,
        paths.percussionInstruments.shyn,
        paths.percussionInstruments.asa_tayak
    ];

    return (
        <section className="music-third-section">
            <h2 className="music-third-section-title">{content.title}</h2>

            <div className="music-top-cards">
                {topCards.map((item, index) => (
                    <Card
                        className="music-top-card"
                        key={item.title}
                        sx={{
                            width: "100%",
                            maxWidth: 368,
                            backgroundColor: "#E6BB86",
                            color: "#000000DE",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
								className="kaz-card-media"
                                component="img"
                                image={images[index]}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontSize={20} fontWeight={700}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className="music-sound-cards">
                {content.content.map((item, index) => (
                    <SoundCards
                        key={item.title}
                        cardContent={{
                            title: item.title,
                            description: item.description,
                            soundDescription: item.soundDescription || "",
                            img: images[index]
                        }}
                        imgSide="left"
                    />
                ))}
            </div>
        </section>
    );
};

export default ThirdSection;