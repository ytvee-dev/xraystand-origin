import type { ReactElement } from "react";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
import * as audioPaths from "@modules/KazMusInstruments/locales/audio.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import SoundCards from "@modules/KazMusInstruments/components/SoundCard";
import { type kazMuzInstrumentProps } from "@modules/KazMusInstruments/types";

const ThirdSection = ({ content }: kazMuzInstrumentProps): ReactElement => {
    const topCards = content.content.map((item) => ({
        title: item.title,
    }));

    const images = [
        paths.percussionInstruments.daulpaz,
        paths.percussionInstruments.shyn,
        paths.percussionInstruments.asa_tayak,
    ];

    return (
        <section className="music-instruments-section music-dark">
            <h2>{content.title}</h2>

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
                            <CardMedia component="img" image={images[index]} />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    fontSize={20}
                                    fontWeight={700}
                                >
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
                            img: images[index],
                        }}
                        audioPath={audioPaths.thirdSection[index]}
                    />
                ))}
            </div>
        </section>
    );
};

export default ThirdSection;
