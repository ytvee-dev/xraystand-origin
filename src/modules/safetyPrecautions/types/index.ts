import React from "react";

export interface TRuleItem {
    title: string;
    subTitle?: string;
}

export interface ISectionProps {
    title?: string;
    img?: string;
    notificationLabel?: string;
    classname?: string;
    content?: TRuleItem[];
    description?: string;
    backgroundLeft?: string;
    backgroundRight?: string;
    rulesBackground?: string;
    rulesListTitleColor?: string;
    children?: React.ReactNode;
}
