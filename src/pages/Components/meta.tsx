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


export const componentsLibrary = [
    {
        name: "Stand Footer",
        category: "Footers",
        component: <>Stand Footer</>,
        variants: {
            default: <>Stand Footer</>,
        },
        documentation: <></>,
    },
    {
        name: "Stand Header",
        category: "Headers",
        component: <>Stand Header</>,
        variants: {
            default: <>Stand Header</>,
        },
        documentation: <></>,
    },
    {
        name: "Content Block",
        category: "Containers",
        component: <DSContentBlock><span>Empty content</span></DSContentBlock>,
        variants: {
            default: (
                <DSContentBlock
                    title={"Title"}
                    description={"description"}
                    notificationLabel={"notificationLabel"}
                    colorScheme={{
                        titleColor: "#289FF5",
                        subtitleColor: "black",
                        descriptionColor: "black",
                        notificationBackgroundColor: "beige",
                        notificationTextColor: "black",
                    }}
                >
                    <span>Default content</span>
                </DSContentBlock>
            ),
        },
        documentation: <DocDSContentBlock />,
    },
    {
        name: "Card",
        category: "Cards",
        component: <DSCard />,
        variants: {
            default: <DSCard
                        imageName={templateDSCardNames[0]}
                        title="Card title"
                        label="Card label"
                        linkedText="Linked text"
                        action={() => alert("click")}
                        backgroundColor="#FFFFFF"
                        minWidth="270px"
                        sxText={defaultDSCardSX}
                    />,
        },
        documentation: <DocDSCard />,
    },
    {
        name: "Info Card",
        category: "Cards",
        component: <DSInformationCard/>,
        variants: {
            default: <DSInformationCard
                        title="Заголовок"
                        liOptions={["Card option 1", "Card option 2", "Card option 3"]}
                        action={() => alert("click")}
                        backgroundColor="#FFFFFF"
                        width="270px"
                        sxText={defaultDSCardSX}
                    />,
        },
        documentation: <DocDSInformationCard />,
    },
    {
        name: "Notification",
        category: "Alerts",
        component: <DSNotification />,
        variants: {
            default: <DSNotification
                        label="Notification label"
                        type="warning"
                        backgroundColor="#FEFCF3"
                        textColor="black"
                        borderColor="#EBCD91"
                        iconName="warningIcon"
                        iconSize="19px"
                        fullWidth
                    />,
        },
        documentation: <DocDSNotification />,
    },
    {
        name: "Scrollable Modal",
        category: "Modals",
        component: <>Scrollable Modal</>,
        variants: {
            default: <>Scrollable Modal</>,
        },
        documentation: <></>,
    },
    {
        name: "Image Wrapper",
        category: "Wrappers",
        component: <>Image Wrapper</>,
        variants: {
            default: <>Image Wrapper</>,
        },
        documentation: <></>,
    },
    {
        name: "Card List",
        category: "Lists",
        component: (<DSCardsWrapper wrapperMaxWidth={"1200px"} >
                        {Array.from({length: 3}).map((_, i) => (
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
                    </DSCardsWrapper>),
        variants: {
            default: (<DSCardsWrapper
                            screenMaxWidth={1000}
                            maxHeight="500px"
                            cardsGap="16px"
                            overflow="auto"
                            isWrap={false}
                        >
                            {Array.from({length: 5}).map((_, i) => (
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
                        </DSCardsWrapper>),
        },
        documentation: <DocDSCardsWrapper />,
    },
    {
        name: "Cover Section",
        category: "Sections",
        component: <>Cover Section</>,
        variants: {
            default: <>Cover Section</>,
        },
        documentation: <></>,
    },
    {
        name: "CardsList Section",
        category: "Sections",
        component: <>CardsList Section</>,
        variants: {
            default: <>CardsList Section</>,
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