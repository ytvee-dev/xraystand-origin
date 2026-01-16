import DefaultLayout from "@layout/Default";
import Spinner from "@components/common/Spinner";
import * as paths from "@modules/safetyPrecautions/locales/paths.json";
import * as contentRu from "@modules/safetyPrecautions/locales/rus.json";
import * as contentKz from "@modules/safetyPrecautions/locales/kaz.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls.ts";
import { usePreloadImages } from "@hooks/usePreloadImages.ts";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import { type ReactElement } from "react";
import "./style.css";
import DoubleCardsSection from "@modules/safetyPrecautions/Sections/DoubleCardsSection";
import type {SafetyPrecautionsContent} from "@modules/home/types";

const SafetyPrecautions = (): ReactElement => {
    const { isContentLoaded } = usePageData();
    const content: SafetyPrecautionsContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    return (
        <DefaultLayout langSwitchColor="#00855A">
            <div className="safety-precautions-page">
                {!isContentLoaded && <Spinner />}
                <DoubleCardsSection
                    leftSideContent={content.leftCommonRulesSection}
                    rightSideContent={content.rightCommonRulesSection}
                />
            </div>
        </DefaultLayout>
    );
};

export default SafetyPrecautions;
