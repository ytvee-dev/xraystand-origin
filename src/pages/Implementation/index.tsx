import Card from "@modules/seasons/components/Card";
import path from "@modules/seasons/locales/paths.json";
import textContentRu from "@modules/seasons/locales/rus.json";
import textContentKz from "@modules/seasons/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import ImageCard from "@modules/seasons/components/ImageCard";
import "./style.css";

const SeasonPage = () => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <div className="cards">
            <ImageCard
                season="winter"
                title={textContent.winterSection.content[9].subTitle}
                description={textContent.winterSection.content[9].description}
                imagePath={path.winter.snowCards[0]}
            />
        </div>
    );
};

export default SeasonPage;
