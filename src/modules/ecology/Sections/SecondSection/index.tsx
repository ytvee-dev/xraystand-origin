import { type ReactElement } from "react";
import NumberTitle from "../../components/NumberTitle";
import paths from "../../locales/path.json";
import "./style.css";

interface ContentItem {
    title: string;
    description: string;
}

interface EcologyCard {
    title: string;
    description: string;
    contentTitle: string;
    content: ContentItem[];
}

interface SecondSectionContent {
    title: string;
    description: string;
    cards: EcologyCard[];
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

const SecondSection = ({
    content,
}: SecondSectionProps): ReactElement => {
    const { title, cards } = content;

    const jeans = cards[0];
    const bottle = cards[1];

    return (
        <section className="ecology-second-section">
            <div className="ecology-container">
                <NumberTitle number="02" title={title} />

                {jeans && (
                    <article className="ecology-card jeans-card">
                        <div className="ecology-intro">
                            <img
                                className="jeans-image"
                                src={paths.secondSectionCards[0]}
                                alt=""
                            />

                            <div className="ecology-intro-text">
                                <h2 className="ecology-card-title">
                                    {jeans.title}
                                </h2>
                                <div className="ecology-description">
                                    {jeans.description
                                        .split("\n")
                                        .map((paragraph, index) => (
                                            <p
                                                className="ecology-paragraph"
                                                key={index}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <div className="ecology-tips">
                            <h3>{jeans.contentTitle}</h3>

                            <div className="ecology-tips-grid">
                                {jeans.content.map((item, index) => (
                                    <div className="ecology-tip" key={index}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                )}

                {bottle && (
                    <article className="ecology-card">
                        <h2 className="ecology-card-title bottle-card-title">
                            {bottle.title}
                        </h2>

                        <div className="ecology-description">
                            {bottle.description
                                .split("\n")
                                .map((paragraph, index) => (
                                    <p
                                        className="ecology-paragraph"
                                        key={index}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                        </div>

                        <img
                            className="recycling-image"
                            src={paths.secondSectionCards[1]}
                            alt=""
                        />

                        <ol className="ecology-steps">
                            {bottle.content.map((item, index) => (
                                <li className="ecology-step" key={index}>
                                    <span className="ecology-step-number">
                                        {index + 1}
                                    </span>

                                    {item.title && <h3>{item.title}</h3>}

                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ol>
                    </article>
                )}
            </div>
        </section>
    );
};

export default SecondSection;
