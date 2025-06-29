import type {ReactNode} from "react";

export interface TextContent {
    title: string;
    description: string;
}

export interface ContentSectionProps extends TextContent {
    children: ReactNode;
}
