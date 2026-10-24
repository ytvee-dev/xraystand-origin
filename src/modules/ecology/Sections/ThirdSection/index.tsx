import { type ReactElement } from "react";
import NumberTitle from "../../components/NumberTitle";
import paths from "../../locales/path.json";
import "./style.css";

interface TextBlock {
    title: string;
    description: string;
}

interface ChallengeCard {
    title: string;
    description: string;
    mission: TextBlock;
    content: TextBlock[];
}

interface EnergyCard extends ChallengeCard {
    task: TextBlock;
    result: TextBlock;
    greenCards: string[];
}

interface RecycleCard {
    title: string;
    description: string;
    content: TextBlock[];
}

interface ThirdSectionContent {
    title: string;
    description: string;
    cards: {
        constructor: ChallengeCard;
        agriculture: ChallengeCard;
        energy: EnergyCard;
        recycle: RecycleCard;
    };
}

interface ThirdSectionProps {
    content: ThirdSectionContent;
}

interface ChallengeArticleProps {
    challenge: ChallengeCard;
    className: string;
}

const recycleImageStarts = [0, 4, 7, 8, 9];
const recycleImageCounts = [4, 3, 1, 1, 0];

const getRecycleTaskImages = (taskIndex: number): string[] => {
    const imageStart = recycleImageStarts[taskIndex] ?? 0;
    const imageCount = recycleImageCounts[taskIndex] ?? 0;

    return paths.recycleCard.slice(imageStart, imageStart + imageCount);
};

const TextBlockContent = ({ title, description }: TextBlock): ReactElement => {
    return (
        <p className="ecology-third-text-block">
            <strong>{title}</strong> {description}
        </p>
    );
};

const ChallengeArticle = ({
    challenge,
    className,
}: ChallengeArticleProps): ReactElement => {
    const {
        title,
        description,
        mission,
        content: [assignment, result],
    } = challenge;

    return (
        <article className={`ecology-third-card ${className}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="ecology-third-mission">
                <TextBlockContent {...mission} />
            </div>
            {assignment && <TextBlockContent {...assignment} />}
            {result && <TextBlockContent {...result} />}
        </article>
    );
};

const ThirdSection = ({ content }: ThirdSectionProps): ReactElement => {
    const { title, description, cards } = content;
    const {
        constructor: constructorCard,
        agriculture,
        energy,
        recycle,
    } = cards;

    return (
        <section className="ecology-third-section">
            <div className="ecology-third-container">
                <NumberTitle number="03" title={title} />
                <p className="ecology-third-lead">{description}</p>

                <div className="ecology-third-challenges">
                    <ChallengeArticle
                        challenge={constructorCard}
                        className="ecology-third-constructor"
                    />
                    <img
                        className="ecology-third-tree"
                        src={paths.thirdSectionThreeBg}
                        alt=""
                    />
                    <ChallengeArticle
                        challenge={agriculture}
                        className="ecology-third-agriculture"
                    />
                </div>

                <article className="ecology-third-card ecology-third-energy">
                    <h2>{energy.title}</h2>
                    <div className="ecology-third-energy-main">
                        <div className="ecology-third-energy-copy">
                            <p>{energy.description}</p>
                            <TextBlockContent {...energy.mission} />
                            {energy.content.map((contentBlock) => (
                                <TextBlockContent
                                    key={contentBlock.title}
                                    {...contentBlock}
                                />
                            ))}
                        </div>
                        <div className="ecology-third-energy-grid">
                            {energy.greenCards.map((appliance) => (
                                <div
                                    className="ecology-third-energy-target"
                                    key={appliance}
                                >
                                    {appliance}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ecology-third-energy-footer">
                        <TextBlockContent {...energy.task} />
                        <TextBlockContent {...energy.result} />
                    </div>
                </article>

                <article className="ecology-third-card ecology-third-recycle">
                    <h2>{recycle.title}</h2>
                    <p>{recycle.description}</p>
                    <div className="ecology-third-recycle-grid">
                        {recycle.content.map((recycleTask, taskIndex) => {
                            const taskImages = getRecycleTaskImages(taskIndex);

                            return (
                                <div
                                    className="ecology-third-recycle-task"
                                    key={recycleTask.title}
                                >
                                    <TextBlockContent {...recycleTask} />
                                    {taskImages.length > 0 && (
                                        <div className="ecology-third-recycle-images">
                                            {taskImages.map((imageUrl) => (
                                                <img
                                                    src={imageUrl}
                                                    alt=""
                                                    key={imageUrl}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ThirdSection;
