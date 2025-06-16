import ModalWindow from "@components/ModalWindow";
import ContentInfoCard from "@components/ContentInfoCard";
import useControlTranslation from "@hooks/useControlTranslation";
import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
import type { IInfoCardResources } from "@domains/Translate";
import { Button } from "@mui/material";
import {
    CONTENT_INFO_CARD_HOVER_REACTIVE_CLASSNAME,
    contentCardClassnamesRecord,
    ContentCardStyleTypes,
    contentImageSrcPrefix,
    contentImageSrcSuffix,
} from "@utils/constants";
import "./style.css";

export interface IContentImageCardProps {
    imageId: string;
    label: string;
    styleType?: ContentCardStyleTypes;
    additionalInfo?: IInfoCardResources;
    isSmallSize?: boolean;
    isHoverReactive?: boolean;
}

const ContentImageCard = ({
    imageId,
    label,
    styleType = ContentCardStyleTypes.PRIMARY_BIG_TEXT,
    additionalInfo,
    isSmallSize = false,
    isHoverReactive = true,
}: IContentImageCardProps): ReactElement => {
    const { contentCardAdditionalInfo } = useControlTranslation();

    const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] =
        useState<boolean>(false);

    const handleOpenAdditionalInfo = (
        event: MouseEvent<HTMLButtonElement>
    ): void => {
        event.stopPropagation();

        setIsAdditionalInfoOpen(true);
    };
    const closeAdditionalInfo = (): void => {
        setIsAdditionalInfoOpen(false);
    };

    useEffect(() => {
        document.addEventListener("click", closeAdditionalInfo);

        return () => {
            document.removeEventListener("click", closeAdditionalInfo);
        };
    }, []);

    const fullImageSrc: string = `${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`;

    const { imageContainerStyleClassname, descriptionStyleClassname } =
        contentCardClassnamesRecord[styleType];
    const sizeClassname: string = !isSmallSize ? "" : "small";
    const hoverReactiveClassname: string = !isHoverReactive ? "" : CONTENT_INFO_CARD_HOVER_REACTIVE_CLASSNAME;

    return (
        <div className={`content-image-card ${sizeClassname} ${hoverReactiveClassname}`}>
            <div className={`image-container ${imageContainerStyleClassname}`}>
                <img src={fullImageSrc} alt="content card image" />
            </div>
            <div className={`card-description ${descriptionStyleClassname}`}>
                {label}
            </div>
            {additionalInfo && (
                <Button
                    className="additional-info-button secondary-control-text text-color-secondary-control"
                    sx={{ width: "100%", WebkitJustifyContent: "start" }}
                    onClick={handleOpenAdditionalInfo}
                >
                    {contentCardAdditionalInfo}
                </Button>
            )}
            {isAdditionalInfoOpen && additionalInfo && (
                <ModalWindow>
                    <ContentInfoCard data={additionalInfo} isHoverReactive={false}/>
                </ModalWindow>
            )}
        </div>
    );
};

export default ContentImageCard;
