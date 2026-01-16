import DefaultLayout from "@layout/Default";
import Spinner from "@components/common/Spinner";
import * as paths from "@modules/safetyPrecautions/locales/paths.json";
import * as contentRu from "@modules/safetyPrecautions/locales/rus.json";
import * as contentKz from "@modules/safetyPrecautions/locales/kaz.json";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {useLocaleContent} from "@hooks/useLocale";
import {usePageData} from "@hooks/usePageData";
import {type ReactElement} from "react";
import "./style.css";
import DoubleCardsSection from "@modules/safetyPrecautions/Sections/DoubleCardsSection";
import type {SafetyPrecautionsContent} from "@modules/home/types";

const SafetyPrecautions = (): ReactElement => {
    const {isContentLoaded} = usePageData();
    const content: SafetyPrecautionsContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const sectionsProps = {
        classroom: {
            leftSideContent: {
                content: content.leftCommonRules,
                sx: {
                    titleColor: '#18A778',
                    descriptionColor: 'rgba(0, 0, 0, 0.87)',
                }
            },
            rightSideContent: {
                content: content.rightCommonRules,
                sx: {
                    titleColor: '#F5B423',
                    descriptionColor: '#FFFFFF',
                }
            }
        }
    }

    return (
        <DefaultLayout langSwitchColor="#00855A">
            <div className="safety-precautions-page">
                {!isContentLoaded && <Spinner/>}
                <DoubleCardsSection
                    leftSideContent={sectionsProps.classroom.leftSideContent}
                    rightSideContent={sectionsProps.classroom.rightSideContent}
                    leftBackground="white"
                    rightBackground="#246138"
                    leftLayer="straight-left"
                    rightLayer="straight-right"
                />
            </div>
        </DefaultLayout>
    );
};

export default SafetyPrecautions;
