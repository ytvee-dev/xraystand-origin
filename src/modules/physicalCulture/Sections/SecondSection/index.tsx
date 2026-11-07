import { type ReactElement } from "react";
import BenefitCard, { type BenefitListItem } from "../../components/BenefitCard";
import FilledTitle from "../../components/FilledTitle";
import paths from "../../locales/paths.json";
import "./style.css";

interface BenefitText {
    title: string;
    description?: string;
    list?: BenefitListItem[];
}

interface MainBenefitCard extends BenefitText {
    list: BenefitListItem[];
    conclusion?: string;
    cards?: BenefitText[];
}

interface BenefitGroup {
    title: string;
    mainCard: MainBenefitCard;
    cards?: BenefitText[];
}

interface SecondSectionContent {
    physicalHealth: BenefitGroup;
    mentalHealth: BenefitGroup;
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

const SecondSection = ({ content }: SecondSectionProps): ReactElement => {
    const { physicalHealth, mentalHealth } = content;
    const physicalCards = physicalHealth.mainCard.cards ?? [];
    const mentalCards = mentalHealth.cards ?? [];
    const [postureCard, bonesCard, immunityCard] = physicalCards;
    const [brainCard, sleepCard] = mentalCards;

    return (
        <section className="physical-culture-second-section">
            <div className="physical-culture-benefit-group">
                <FilledTitle
                    title={physicalHealth.title}
                    bgColor="#A44BB6"
                    variant="h2"
                />

                <div className="physical-culture-physical-main-row">
                    <BenefitCard
                        title={physicalHealth.mainCard.title}
                        description={physicalHealth.mainCard.description}
                        list={physicalHealth.mainCard.list}
                        conclusion={physicalHealth.mainCard.conclusion}
                        className="physical-culture-organs-card"
                    />
                    <img
                        className="physical-culture-strong-woman"
                        src={paths.secondSection.strongWoman}
                        alt=""
                    />
                </div>

                <div className="physical-culture-physical-cards">
                    {postureCard && (
                        <BenefitCard
                            title={postureCard.title}
                            description={postureCard.description}
                            list={postureCard.list}
                            image={paths.secondSection.goodPosture}
                            imageAlt={postureCard.title}
                            className="physical-culture-secondary-card"
                        />
                    )}
                    {bonesCard && (
                        <BenefitCard
                            title={bonesCard.title}
                            description={bonesCard.description}
                            list={bonesCard.list}
                            image={paths.secondSection.bonesAndJoints}
                            imageAlt={bonesCard.title}
                            className="physical-culture-secondary-card"
                        />
                    )}
                    {immunityCard && (
                        <BenefitCard
                            title={immunityCard.title}
                            description={immunityCard.description}
                            list={immunityCard.list}
                            image={paths.secondSection.immunity}
                            imageAlt={immunityCard.title}
                            className="physical-culture-secondary-card physical-culture-wide-benefit-card"
                        />
                    )}
                </div>
            </div>

            <div className="physical-culture-benefit-group">
                <FilledTitle
                    title={mentalHealth.title}
                    bgColor="#A44BB6"
                    variant="h2"
                />

                <div className="physical-culture-mental-main-row">
                    <img
                        className="physical-culture-antistress-image"
                        src={paths.secondSection.antistress}
                        alt=""
                    />
                    <BenefitCard
                        title={mentalHealth.mainCard.title}
                        description={mentalHealth.mainCard.description}
                        list={mentalHealth.mainCard.list}
                        conclusion={mentalHealth.mainCard.conclusion}
                        className="physical-culture-antistress-card"
                    />
                </div>

                <div className="physical-culture-mental-cards">
                    {brainCard && (
                        <BenefitCard
                            title={brainCard.title}
                            description={brainCard.description}
                            list={brainCard.list}
                            image={paths.secondSection.sleepingMan}
                            imageAlt={brainCard.title}
                            className="physical-culture-secondary-card physical-culture-mental-card"
                        />
                    )}
                    {sleepCard && (
                        <BenefitCard
                            title={sleepCard.title}
                            description={sleepCard.description}
                            list={sleepCard.list}
                            image={paths.secondSection.BrainLearning}
                            imageAlt={sleepCard.title}
                            className="physical-culture-secondary-card physical-culture-mental-card"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
