import Card from "@modules/seasons/components/Card";
import path from "@modules/fireSafety/locales/paths.json";
import textContentRu from "@modules/seasons/locales/rus.json";
import textContentKz from "@modules/seasons/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const SeasonPage = () => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <div className="cards">
            <Card
                className="card"
                season="spring"
                title={textContent.springSection.content[0].subTitle}
                description={textContent.springSection.content[0].description}
            />

            <Card
                className="card"
                season="winter"
                reverse={true} 
                subTitle={textContent.winterSection.content[0].subTitle}
                description={textContent.winterSection.content[0].description}
                imagePath={path.images.phone}
            />

            <Card
                className="card"
                season="summer"
                reverse={false}
                subTitle={textContent.summerSection.content[0].subTitle}
                description={textContent.summerSection.content[0].description}
                imagePath={path.images.call}
            />

        </div>
    );
};

export default SeasonPage;
