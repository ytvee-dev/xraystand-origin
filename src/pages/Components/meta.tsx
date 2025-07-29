import { MDXProvider } from '@mdx-js/react';
import {mdxComponents} from "@utils/mdxComponents.tsx";

import DSCard from "@components/common/Cards/DSCard";
import DocDSCard from "@components/common/Cards/DSCard/DocDSCard.mdx";
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
        name: "Content Card",
        category: "Cards",
        component: <>Content Card</>,
        variants: {
            default: <>Content Card</>,
        },
        documentation: <></>,
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
                        width="270px"
                        sxText={defaultDSCardSX}
                    />,
        },
        documentation: <DocDSCard />,
    },
    {
        name: "Info Card",
        category: "Cards",
        component: <>Info Card</>,
        variants: {
            default: <>Info Card</>,
        },
        documentation: <></>,
    },
    {
        name: "Notification",
        category: "Alerts",
        component: <>Notification alert</>,
        variants: {
            default: <>Notification alert</>,
        },
        documentation: <></>,
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
        component: <>Card List</>,
        variants: {
            default: <>Card List</>,
        },
        documentation: <></>,
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