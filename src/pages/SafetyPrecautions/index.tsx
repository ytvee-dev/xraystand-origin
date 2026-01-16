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
import TwoColorsSection from "@components/common/Sections/TwoColorsSection";
import DSNotification from "@components/common/DSNotification";

const SafetyPrecautions = (): ReactElement => {
    const {isContentLoaded} = usePageData();
    const content: SafetyPrecautionsContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const sectionsProps = {
        commonBoard: {
            leftSideContent: {
                content: content.leftCommonRules,
                sx: {
                    titleColor: '#18A778',
                    descriptionColor: 'rgba(0, 0, 0, 0.87)',
                },
                icons: [
                    'CompostOutlined',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            },
            rightSideContent: {
                content: content.rightCommonRules,
                sx: {
                    titleColor: '#F5B423',
                    descriptionColor: '#FFFFFF',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            }
        },
        labsBoard: {
            leftSideContent: {
                content: content.leftLabsRules,
                sx: {
                    titleColor: '#000000',
                    descriptionColor: 'rgba(0, 0, 0, 0.87)',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            },
            rightSideContent: {
                content: content.rightLabsRules,
                sx: {
                    titleColor: '#E66C3F',
                    descriptionColor: '#FFFFFF',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            }
        },
        technologyBoard: {
            leftSideContent: {
                content: content.leftTechnologyRules,
                sx: {
                    titleColor: '#000000',
                    descriptionColor: 'rgba(0, 0, 0, 0.87)',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            },
            rightSideContent: {
                content: content.rightTechnologyRules,
                sx: {
                    titleColor: '#F5B423',
                    descriptionColor: '#FFFFFF',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            }
        },
        computerBoard: {
            leftSideContent: {
                content: content.leftComputerRules,
                sx: {
                    titleColor: '#269AD5',
                    descriptionColor: 'rgba(0, 0, 0, 0.87)',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            },
            rightSideContent: {
                content: content.rightComputerRules,
                sx: {
                    titleColor: '#F5B423',
                    descriptionColor: '#FFFFFF',
                },
                icons: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            }
        }
    }

    return (
        <DefaultLayout langSwitchColor="#00855A">
            <div className="safety-precautions-page">
                {!isContentLoaded && <Spinner/>}
                <TwoColorsSection
                    title={content.commonBoard.title}
                    imageSrc={paths.boards.common}
                    notification={
                        <DSNotification
                            label={content.commonBoard.notificationLabel}
                            fullWidth
                        />
                    }
                    sx={{
                        titleColor: "#FFFFFF",
                        leftSideBackgroundColor: "#1DAA7A",
                        rightSideBackgroundColor: "#00855A",
                    }}
                />
                <DoubleCardsSection
                    leftSideContent={sectionsProps.commonBoard.leftSideContent}
                    rightSideContent={sectionsProps.commonBoard.rightSideContent}
                    leftBackground="white"
                    rightBackground="#246138"
                    leftLayer="straight-left"
                    rightLayer="straight-right"
                    leftIcons={sectionsProps.commonBoard.leftSideContent.icons}
                    rightIcons={sectionsProps.commonBoard.rightSideContent.icons}
                />

                <TwoColorsSection
                    title={content.labsBoard.title}
                    imageSrc={paths.boards.common}
                    notification={
                        <DSNotification
                            label={content.labsBoard.notificationLabel}
                            fullWidth
                        />
                    }
                    sx={{
                        titleColor: "#FFFFFF",
                        leftSideBackgroundColor: "#886DAD",
                        rightSideBackgroundColor: "#6C5490",
                    }}
                />
                <DoubleCardsSection
                    leftSideContent={sectionsProps.labsBoard.leftSideContent}
                    rightSideContent={sectionsProps.labsBoard.rightSideContent}
                    leftBackground="white"
                    rightBackground="#4E307C"
                    leftLayer="purple-left"
                    rightLayer="purple-right"
                    leftIcons={sectionsProps.labsBoard.leftSideContent.icons}
                    rightIcons={sectionsProps.labsBoard.rightSideContent.icons}
                />

                <TwoColorsSection
                    title={content.technologyBoard.title}
                    imageSrc={paths.boards.common}
                    sx={{
                        titleColor: "#FFFFFF",
                        leftSideBackgroundColor: "#F7B626",
                        rightSideBackgroundColor: "#C78D0C",
                    }}
                />
                <DoubleCardsSection
                    leftSideContent={sectionsProps.technologyBoard.leftSideContent}
                    rightSideContent={sectionsProps.technologyBoard.rightSideContent}
                    leftBackground="white"
                    rightBackground="#7C5030"
                    leftLayer="yellow-left"
                    rightLayer="yellow-right"
                    leftIcons={sectionsProps.technologyBoard.leftSideContent.icons}
                    rightIcons={sectionsProps.technologyBoard.rightSideContent.icons}
                />

                <TwoColorsSection
                    title={content.computerBoard.title}
                    imageSrc={paths.boards.common}
                    sx={{
                        titleColor: "#FFFFFF",
                        leftSideBackgroundColor: "#1D93CC",
                        rightSideBackgroundColor: "#0D7AB3",
                    }}
                />
                <DoubleCardsSection
                    leftSideContent={sectionsProps.computerBoard.leftSideContent}
                    rightSideContent={sectionsProps.computerBoard.rightSideContent}
                    leftBackground="white"
                    rightBackground="#304B7C"
                    leftLayer="blue-left"
                    rightLayer="blue-right"
                    leftIcons={sectionsProps.computerBoard.leftSideContent.icons}
                    rightIcons={sectionsProps.computerBoard.rightSideContent.icons}
                />
            </div>
        </DefaultLayout>
    );
};

export default SafetyPrecautions;
