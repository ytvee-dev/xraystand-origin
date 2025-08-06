import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import {SvgSpriteIds} from "@utils/constants";
import "./style.css";

export type TBackgroundColors = "beige" | "lightSand" | "sand";
export type TAlertTypes = "warning-beige";

export enum AlertBackgroundColors {
    beige = "#FEFCF3",
    lightSand = "#EFE4D3",
    sand = "#EBCD91",
};

export interface IFlexibleAlertProps {
    label: string;
    type: TAlertTypes;
    backgroundColor: TBackgroundColors;
}

export const alertTypes: Record<string, TAlertTypes> = {
    warningBeige: "warning-beige",
};

const ICON_SIZE: string = "19px";

const FlexibleAlert = ({label, type, backgroundColor}: IFlexibleAlertProps): ReactElement => {
    return (
        <div className="flexible-alert-wrapper">
            <Alert
                className={`flexible-alert alert-${type}`}
                sx={{backgroundColor: AlertBackgroundColors[backgroundColor]}}
                icon={<SpriteIcon iconId={SvgSpriteIds.WARNING} size={ICON_SIZE}/>}>
                {label}
            </Alert>
        </div>
    );
};

export default FlexibleAlert;
