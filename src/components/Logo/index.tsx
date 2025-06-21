import SpriteIcon from "@components/SpriteIcon";
import { SvgSpriteIds } from "@utils/constants";
import { type ReactElement } from "react";

export interface ILogoProps {
    size?: string;
}

const Logo = ({ size }: ILogoProps): ReactElement => {
    return <SpriteIcon iconId={SvgSpriteIds.LOGO} size={size} />;
};

export default Logo;
