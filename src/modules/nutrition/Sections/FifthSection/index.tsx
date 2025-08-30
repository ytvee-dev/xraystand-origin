import React, {type ReactElement} from "react";
import type {FifthSection as TFifthSection} from "../../types";
import useScreenWidth from "../../../../hooks/useScreenWidth.ts";

import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EggAltIcon from '@mui/icons-material/EggAlt';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import BgContentSection from "../../../../components/common/Sections/BgContentSection";
import {dsCardImagePathPrefix} from "../../../../components/common/Cards/cardsMeta.tsx";
import * as paths from "../../locales/paths.json";
import "./style.css";

interface FifthSectionProps {
    content: { fifthSection: TFifthSection };
}

const NutritionTimeline: React.FC<FifthSectionProps> = ({content}: FifthSectionProps): ReactElement => {

    const screenWidth = useScreenWidth();

    const TitleLabel = ({title, label}: { title: string, label: string }) => (
        <div className='title-label-item'>
            <h3>{title}</h3>
            <p>{label}</p>
        </div>
    );

    const BackgroundLabel = ({label, sx = {}, type = 'info'}: {
        label: string,
        sx?: { [key: string]: string },
        type?: string
    }) => (
        <div className={`background-label-item-${type}`} style={sx}>
            <p>{label}</p>
        </div>
    );

    // DESKTOP VERSION
    if (screenWidth > 768) {
        return (
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <TitleLabel
                            title={content.fifthSection.content[0].title}
                            label={content.fifthSection.content[0].label}
                        />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                            <EggAltIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <BackgroundLabel
                            label={content.fifthSection.content[1].label}
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <TitleLabel
                            title={content.fifthSection.content[2].title}
                            label={content.fifthSection.content[2].label}
                        />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                            <RiceBowlIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2, justifyContent: 'flex-end'}}>
                        <BackgroundLabel
                            label={content.fifthSection.content[3].label}
                            sx={{marginLeft: 'auto'}}
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <TitleLabel
                            title={content.fifthSection.content[4].title}
                            label={content.fifthSection.content[4].label}
                        />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                            <RamenDiningIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <BackgroundLabel
                            label={content.fifthSection.content[5].label}
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <TitleLabel
                            title={content.fifthSection.content[6].title}
                            label={content.fifthSection.content[6].label}
                        />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                            <EmojiFoodBeverageIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2, justifyContent: 'flex-end'}}>
                        <BackgroundLabel
                            label={content.fifthSection.content[7].label}
                            sx={{marginLeft: 'auto'}}
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <TitleLabel
                            title={content.fifthSection.content[8].title}
                            label={content.fifthSection.content[8].label}
                        />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                            <DinnerDiningIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <BackgroundLabel
                            label={content.fifthSection.content[9].label}
                            type='error'
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        );
    }

    // MOBILE VERSION
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: '0 0 0 10px',
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <EggAltIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3 style={{paddingTop: 10, paddingBottom: 20}}>{content.fifthSection.content[0].title}</h3>
                    <BackgroundLabel
                        label={content.fifthSection.content[1].label}
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <RiceBowlIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3 style={{paddingTop: 10, paddingBottom: 20}}>{content.fifthSection.content[2].title}</h3>
                    <BackgroundLabel
                        label={content.fifthSection.content[3].label}
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <RamenDiningIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3 style={{paddingTop: 10, paddingBottom: 20}}>{content.fifthSection.content[4].title}</h3>
                    <BackgroundLabel
                        label={content.fifthSection.content[5].label}
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <EmojiFoodBeverageIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3 style={{paddingTop: 10, paddingBottom: 20}}>{content.fifthSection.content[6].title}</h3>
                    <BackgroundLabel
                        label={content.fifthSection.content[7].label}
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <DinnerDiningIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3 style={{paddingTop: 10, paddingBottom: 20}}>{content.fifthSection.content[8].title}</h3>
                    <BackgroundLabel
                        label={content.fifthSection.content[9].label}
                    />
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );

};

const FifthSection: React.FC<FifthSectionProps> = ({content}: FifthSectionProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.backgrounds.fifthSection;

    return (
        <BgContentSection
            textData={content.fifthSection}
            sectionName={'nutrition-fifth-section'}
            backgroundImage={backgroundImage}
            strictHeight={true}
        >
            <NutritionTimeline content={content}/>
        </BgContentSection>
    );
};

export default FifthSection;
