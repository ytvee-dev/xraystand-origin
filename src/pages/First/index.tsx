import usePageImagesIds from "@hooks/usePageImagesIds";
import FirstPageIntro from "@components/FirstPageIntro";
import ContentImage from "@components/ContentImage.tsx";
import ContentSection from "@components/ContentSection";
import usePageTranslation from "@hooks/usePageTranslation";
import InstructionBlock from "@components/InstructionBlock";
import ScrollingImageLine from "@components/ScrollingImageLine";
import ContentInfoCardsList from "@components/ContentInfoCardsList";
import ContentImageCardsList from "@components/ContentImageCardsList";
import animatedCarSrc from "@assets/images/animations/animatedCar.png";
import { Fragment, type ReactElement } from "react";
import {
    ContentCardStyleTypes,
    ContentImagesMaxWidths,
    ContentSectionColorTypes,
} from "@utils/constants";
import {
    PageIds,
    PageSectionIds,
    PageSectionItemsIds,
    type IImageCardResources,
    type IInfoCardResources,
} from "@domains/Translate";

const FirstPage = (): ReactElement => {
    const { textTranslation } = usePageTranslation(PageIds.FIRST_PAGE);
    const { pageImageIdData } = usePageImagesIds(PageIds.FIRST_PAGE);

    return (
        <div className="first-page">
            <FirstPageIntro />
            <ContentSection
                textData={textTranslation[PageSectionIds.FIRST_SECTION]}
                colorType={ContentSectionColorTypes.SECONDARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.FIRST_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.firstSection.contentListData
                        }
                    />
                }
            </ContentSection>
            <section className="multiple-section">
                <ContentSection
                    textData={textTranslation[PageSectionIds.SECOND_SECTION]}
                    colorType={ContentSectionColorTypes.SECONDARY}
                >
                    {
                        <Fragment>
                            <InstructionBlock
                                data={
                                    textTranslation[
                                        PageSectionIds.SECOND_SECTION
                                    ][
                                        PageSectionItemsIds.CONTENT
                                    ] as IInfoCardResources
                                }
                            />
                            <ScrollingImageLine
                                imageSrc={animatedCarSrc}
                                height="173px"
                                scrollMultiplier={3}
                            />
                        </Fragment>
                    }
                </ContentSection>
                <div className="content-image-container">
                    <ContentImage
                        imageId={pageImageIdData.secondSection.globalData[0]}
                        maxWidth={ContentImagesMaxWidths.DEFAULT}
                    />
                </div>
            </section>
            <ContentSection
                textData={textTranslation[PageSectionIds.THIRD_SECTION]}
                colorType={ContentSectionColorTypes.PRIMARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.THIRD_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.thirdSection.contentListData
                        }
                        styleType={ContentCardStyleTypes.SECONDARY_BIG_TEXT}
                    />
                }
            </ContentSection>
            <section className="multiple-section">
                <ContentSection
                    textData={textTranslation[PageSectionIds.FOURTH_SECTION]}
                    colorType={ContentSectionColorTypes.SECONDARY}
                >
                    {
                        <ContentInfoCardsList
                            cardsDataList={
                                textTranslation[PageSectionIds.FOURTH_SECTION][
                                    PageSectionItemsIds.CONTENT
                                ] as IInfoCardResources[]
                            }
                        />
                    }
                </ContentSection>
                <div className="content-image-container">
                    <ContentImage
                        imageId={pageImageIdData.fourthSection.globalData[0]}
                        maxWidth={ContentImagesMaxWidths.DEFAULT}
                    />
                </div>
            </section>
            <ContentSection
                textData={textTranslation[PageSectionIds.FIFTH_SECTION]}
                colorType={ContentSectionColorTypes.SECONDARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.FIFTH_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.fifthSection.contentListData
                        }
                        styleType={ContentCardStyleTypes.SECONDARY_SMALL_TEXT}
                    />
                }
            </ContentSection>
            <ContentSection
                textData={textTranslation[PageSectionIds.SIXTH_SECTION]}
                colorType={ContentSectionColorTypes.SECONDARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.SIXTH_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.sixthSection.contentListData
                        }
                        styleType={
                            ContentCardStyleTypes.SECONDARY_SMALL_OPACITY_TEXT
                        }
                        isSmallCards
                    />
                }
            </ContentSection>
            <section className="multiple-section">
                <div className="content-image-container">
                    <ContentImage
                        imageId={pageImageIdData.seventhSection.globalData[0]}
                        maxWidth={ContentImagesMaxWidths.DEFAULT}
                    />
                </div>
                <ContentSection
                    textData={textTranslation[PageSectionIds.SEVENTH_SECTION]}
                    colorType={ContentSectionColorTypes.SECONDARY}
                >
                    {
                        <ContentImageCardsList
                            cardsTextData={
                                textTranslation[PageSectionIds.SEVENTH_SECTION][
                                    PageSectionItemsIds.CONTENT
                                ] as IImageCardResources[]
                            }
                            imageIdData={
                                pageImageIdData.seventhSection.contentListData
                            }
                            styleType={ContentCardStyleTypes.SECONDARY_BIG_TEXT}
                        />
                    }
                </ContentSection>
            </section>
            <ContentSection
                textData={textTranslation[PageSectionIds.EIGHTH_SECTION]}
                colorType={ContentSectionColorTypes.PRIMARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.EIGHTH_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.eighthSection.contentListData
                        }
                        styleType={ContentCardStyleTypes.SECONDARY_BIG_TEXT}
                    />
                }
            </ContentSection>
            <ContentSection
                textData={textTranslation[PageSectionIds.NINTH_SECTION]}
                colorType={ContentSectionColorTypes.SECONDARY}
                itemsCenter
            >
                {
                    <ContentImageCardsList
                        cardsTextData={
                            textTranslation[PageSectionIds.NINTH_SECTION][
                                PageSectionItemsIds.CONTENT
                            ] as IImageCardResources[]
                        }
                        imageIdData={
                            pageImageIdData.ninthSection.contentListData
                        }
                        styleType={
                            ContentCardStyleTypes.SECONDARY_SMALL_OPACITY_TEXT
                        }
                        isSmallCards
                    />
                }
            </ContentSection>
        </div>
    );
};

export default FirstPage;
