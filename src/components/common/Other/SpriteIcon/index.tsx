import { svgSpriteSrcPrefix } from "@utils/constants";
import { type ReactElement } from "react";

export interface ISpriteIconProps {
    iconId: string;
    width?: string;
    height?: string;
    color?: string;
}

const defaultColor = "#BD7D22";
const DEFAULT_ICON_SIZE: string = "100px";

const SpriteIcon = ({
    iconId,
    width = DEFAULT_ICON_SIZE,
    height = DEFAULT_ICON_SIZE,
    color = defaultColor,
}: ISpriteIconProps): ReactElement => {
    const fullIconId: string = `${svgSpriteSrcPrefix}${iconId}`;

    return (
        <svg
            width={width}
            height={height}
            color={color}
            aria-hidden="true"
            focusable="false"
        >
            <use
                href={fullIconId}
                width={width}
                height={height}
            />
        </svg>
    );
};

export default SpriteIcon;
