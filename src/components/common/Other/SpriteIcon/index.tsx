import { svgSpriteSrcPrefix } from "@utils/constants";
import { type ReactElement } from "react";

export interface ISpriteIconProps {
    iconId: string;
    size?: string;
    color?: string;
}

const defaultColor = "#BD7D22";
const DEFAULT_ICON_SIZE: string = "100px";

const SpriteIcon = ({
    iconId,
    size = DEFAULT_ICON_SIZE,
    color = defaultColor,
}: ISpriteIconProps): ReactElement => {
    const fullIconId: string = `${svgSpriteSrcPrefix}${iconId}`;

    return (
        <svg
            width={size}
            height={size}
            color={color}
            aria-hidden="true"
            focusable="false"
        >
            <use
                href={fullIconId}
                width={size}
                height={size}
            />
        </svg>
    );
};

export default SpriteIcon;
