import { type ReactElement } from "react";
import FilledTitle from "../../components/FilledTitle";
import IconListCard from "../../components/IconListCard";
import paths from "../../locales/paths.json";
import "./style.css";

interface ComparisonContent {
    title: string;
    list: string[];
}

interface FifthSectionContent {
    title: string;
    description: string;
    sport: ComparisonContent;
    physicalCulture: ComparisonContent;
    activityNotifications: string[];
}

interface FifthSectionProps {
    content: FifthSectionContent;
}

const FifthSection = ({ content }: FifthSectionProps): ReactElement => {
    const [firstNotification, secondNotification] = content.activityNotifications;

    return (
        <section className="physical-culture-fifth-section">
            <FilledTitle
                title={content.title}
                bgColor="#C21E23"
                variant="h2"
            />

            <p className="physical-culture-fifth-description">{content.description}</p>

            <div className="physical-culture-comparison">
                <img
                    className="physical-culture-comparison-person physical-culture-comparison-person-left"
                    src={paths.fifthSection.left}
                    alt=""
                />

                <IconListCard
                    title={content.sport.title}
                    list={content.sport.list}
                    icons={paths.fifthSection.firstCard}
                    className="physical-culture-comparison-card physical-culture-sport-card"
                />

                <img
                    className="physical-culture-comparison-person physical-culture-comparison-person-right"
                    src={paths.fifthSection.right}
                    alt=""
                />

                <IconListCard
                    title={content.physicalCulture.title}
                    list={content.physicalCulture.list}
                    icons={paths.fifthSection.secondCard}
                    className="physical-culture-comparison-card physical-culture-fitness-card"
                />

                <div className="physical-culture-comparison-note">
                    <p>{firstNotification}</p>
                    <p>{secondNotification}</p>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
