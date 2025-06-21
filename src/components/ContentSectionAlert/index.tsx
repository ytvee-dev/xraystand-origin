import SpriteIcon from "@components/SpriteIcon";
import { SvgSpriteIds } from "@utils/constants";
import { type ReactElement } from "react";
import { Alert } from "@mui/material";
import "./style.css";

export interface IContentSectionAlertProps {
    label: string;
}

const ICON_SIZE: string = "19px";

const ContentSectionAlert = ({label}: IContentSectionAlertProps): ReactElement => {
    return (
        <Alert
            className="content-section-alert"
            sx={{backgroundColor: "#FEFCF3"}}
            icon={<SpriteIcon iconId={SvgSpriteIds.CONTENT_SECTION_NOTIFICATION_ICON} size={ICON_SIZE} />}>
            {label}
        </Alert>
    );
};

export default ContentSectionAlert;
