import DSCard from "@components/common/Cards/DSCard";
import DSInformationCard from "@components/common/Cards/DSInformationCard";
import DSNotification from "@components/common/DSNotification";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSContentBlock from "@components/common/DSContentBlock";

import DocDSCard from "@components/common/Cards/DSCard/DocDSCard.mdx";
import DocDSInformationCard from "@components/common/Cards/DSInformationCard/DocDSInformationCard.mdx";
import DocDSNotification from "@components/common/DSNotification/DocDSNotification.mdx";
import DocDSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper/DocDSCardsWrapper.mdx";
import DocDSContentBlock from "@components/common/DSContentBlock/DocDSContentBlock.mdx";

import {defaultDSCardSX, templateDSCardNames} from "@components/common/Cards/cardsMeta.tsx";
import {defaultFooterSX, FooterPlayground, strictFooterMeta} from "@pages/Components/stories/footer";
import Footer from "@components/common/Footers/StrictFooter";

import {
    ContentBlockPlayground,
    defaultContentBlockColorScheme,
    defaultContentBlockProps,
} from "@pages/Components/stories/ContentBlock";

import Header from "@components/common/Header";
import { HeaderPlayground } from "@pages/Components/stories/Header";
import { DSCardPlayground, defaultDSCardProps } from "@pages/Components/stories/Card";
import {DSCardsWrapperPlayground, defaultDSCardsWrapperProps} from "@pages/Components/stories/CardsWrapper";
import {DSInformationCardPlayground, defaultDSInformationCardProps} from "@pages/Components/stories/InformationCard";
import {
    defaultLargeCardColorScheme,
    defaultLargeCardProps,
    LargeCardPlayground
} from "@pages/Components/stories/LargeCard";
import LargeCard from "@components/common/Cards/LargeCard";
import {DSNotificationPlayground} from "@pages/Components/stories/Notification";
import {FlexibleModalPlayground} from "@pages/Components/stories/FlexibleModal";
import {ContentSectionPlayground, defaultContentSectionProps} from "@pages/Components/stories/ContentSection";
import ContentSection from "@components/common/Sections/DSContentSection";

export const componentsLibrary = [
    {
        name: "Stand Footer",
        category: "Footers",
        component: <FooterPlayground />,
        variants: {
            default: <Footer meta={strictFooterMeta} sx={defaultFooterSX} />,
        },
        documentation: <></>,
    },
    {
        name: "Stand Header",
        category: "Headers",
        component: <HeaderPlayground />,
        variants: {
            default: <Header singleLanguage={false} />,
        },
        documentation: <></>,
    },
    {
        name: "Content Block",
        category: "Containers",
        component: <ContentBlockPlayground />,
        variants: {
            default: (
                <DSContentBlock
                    title={defaultContentBlockProps.title}
                    description={defaultContentBlockProps.description}
                    notificationLabel={defaultContentBlockProps.notificationLabel}
                    colorScheme={defaultContentBlockColorScheme}
                >
                    {defaultContentBlockProps.children}
                </DSContentBlock>
            ),
        },
        documentation: <DocDSContentBlock />,
    },
    {
        name: "Card",
        category: "Cards",
        component: <DSCardPlayground />,
        variants: {
            default: (
                <DSCard
                    imageName={templateDSCardNames[0]}
                    title={defaultDSCardProps.title}
                    label={defaultDSCardProps.label}
                    linkedText={defaultDSCardProps.linkedText}
                    action={defaultDSCardProps.action}
                    backgroundColor={defaultDSCardProps.backgroundColor}
                    minWidth={defaultDSCardProps.minWidth}
                    maxWidth={defaultDSCardProps.maxWidth}
                    imageHeight={defaultDSCardProps.imageHeight}
                    sxText={defaultDSCardSX}
                />
            ),
        },
        documentation: <DocDSCard />,
    },
    {
        name: "Info Card",
        category: "Cards",
        component: <DSInformationCardPlayground />,
        variants: {
            default: (
                <DSInformationCard
                    marker={defaultDSInformationCardProps.marker}
                    title={defaultDSInformationCardProps.title}
                    liOptions={defaultDSInformationCardProps.liOptions}
                    action={defaultDSInformationCardProps.action}
                    backgroundColor={defaultDSInformationCardProps.backgroundColor}
                    width={defaultDSInformationCardProps.width}
                    sxText={defaultDSInformationCardProps.sxText}
                    sxContent={defaultDSInformationCardProps.sxContent}
                />
            ),
        },
        documentation: <DocDSInformationCard />,
    },
    {
        name: "Large Card",
        category: "Cards",
        component: <LargeCardPlayground />,
        variants: {
            default: (
                <LargeCard
                    title={defaultLargeCardProps.title}
                    description={defaultLargeCardProps.description}
                    notificationLabel={defaultLargeCardProps.notificationLabel}
                    colorScheme={defaultLargeCardColorScheme}
                >
                    {defaultLargeCardProps.children}
                </LargeCard>
            ),
        },
        documentation: <></>,
    },
    {
        name: "Notification",
        category: "Alerts",
        component: <DSNotificationPlayground />,
        variants: {
            default: (
                <DSNotification
                    label="Notification label"
                    type="warning"
                    backgroundColor="#FEFCF3"
                    textColor="black"
                    borderColor="#EBCD91"
                    iconName="warningIcon"
                    iconSize="19px"
                    fullWidth
                />
            ),
        },
        documentation: <DocDSNotification />,
    },
    {
        name: "Scrollable Modal",
        category: "Modals",
        component: <FlexibleModalPlayground />,
        variants: {
            default: <>Scrollable Modal</>,
        },
        documentation: <></>,
    },
    {
        name: "Cards Wrapper",
        category: "Wrappers",
        component: <DSCardsWrapperPlayground />,
        variants: {
            default: (
                <DSCardsWrapper
                    screenMaxWidth={defaultDSCardsWrapperProps.screenMaxWidth}
                    wrapperMaxWidth={defaultDSCardsWrapperProps.wrapperMaxWidth}
                    maxHeight={defaultDSCardsWrapperProps.maxHeight}
                    cardsGap={defaultDSCardsWrapperProps.cardsGap}
                    overflow={defaultDSCardsWrapperProps.overflow}
                    isWrap={defaultDSCardsWrapperProps.isWrap}
                >
                    {Array.from({ length: defaultDSCardsWrapperProps.cardsCount }).map((_, i) => (
                        <DSCard
                            key={i}
                            imageName={templateDSCardNames[0]}
                            title={`Card ${i + 1}`}
                            label="Card label"
                            linkedText="More"
                            action={() => alert(`Card ${i + 1}`)}
                            backgroundColor="#FFFFFF"
                            minWidth="270px"
                            sxText={defaultDSCardSX}
                        />
                    ))}
                </DSCardsWrapper>
            ),
        },
        documentation: <DocDSCardsWrapper />,
    },
    {
        name: "Card List",
        category: "Lists",
        component: (
            <DSCardsWrapper wrapperMaxWidth={"1200px"}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <DSCard
                        key={i}
                        imageName={templateDSCardNames[0]}
                        title="Card title"
                        label="Card label"
                        linkedText="Linked text"
                        action={() => alert("click")}
                        backgroundColor="#FFFFFF"
                        minWidth="270px"
                        sxText={defaultDSCardSX}
                    />
                ))}
            </DSCardsWrapper>
        ),
        variants: {
            default: (
                <DSCardsWrapper
                    screenMaxWidth={1000}
                    maxHeight="500px"
                    cardsGap="16px"
                    overflow="auto"
                    isWrap={false}
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <DSCard
                            key={i}
                            imageName={templateDSCardNames[0]}
                            title="Card title"
                            label="Card label"
                            linkedText="Linked text"
                            action={() => alert("click")}
                            backgroundColor="#FFFFFF"
                            minWidth="270px"
                            sxText={defaultDSCardSX}
                        />
                    ))}
                </DSCardsWrapper>
            ),
        },
        documentation: <DocDSCardsWrapper />,
    },
    {
        name: "Content Section",
        category: "Sections",
        component: <ContentSectionPlayground />,
        variants: {
            default: (
                <ContentSection textData={defaultContentSectionProps.textData}>
                    {defaultContentSectionProps.children}
                </ContentSection>
            ),
        },
        documentation: <></>,
    },
    {
        name: "TwoCols Section",
        category: "Sections",
        component: <>TwoCols Section</>,
        variants: {
            default: <>TwoCols Section</>,
        },
        documentation: <></>,
    },
];
