export interface IListItemProps {
    label: string;
    value: string;
}

export const enum LocalStorageKeys {
    LOCALE = "locale",
}

export const svgSpriteSrcPrefix: string = "./assets/icons/sprite.svg#";
export const contentImageSrcPrefix: string = "./assets/images/";
export const contentAnimationsSrcPrefix: string = "./assets/images/animations/";
export const contentImageSrcSuffix: string = ".avif";

export const contentDSCardsSrcPrefix: string = "./public/assets/images/ds-system/cards/";

export const enum SvgSpriteIds {
    LOGO = "logo",
    CONTENT_SECTION_NOTIFICATION_ICON = "contentSectionNotificationIcon",
    WARNING = "warningIcon",
}

export const enum ContentSectionColorTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SECONDARY_HALF = "secondary-half",
}

export const enum ContentCardStyleTypes {
    PRIMARY_BIG_TEXT = "primaryBigText",
    SECONDARY_BIG_TEXT = "secondaryBigText",
    SECONDARY_SMALL_TEXT = "secondarySmallText",
    SECONDARY_SMALL_OPACITY_TEXT = "secondarySmallOpacityText",
}

export interface ICardClassnames {
    imageContainerStyleClassname: string;
    descriptionStyleClassname: string;
}

export const contentCardClassnamesRecord: Record<
    ContentCardStyleTypes,
    ICardClassnames
> = {
    [ContentCardStyleTypes.PRIMARY_BIG_TEXT]: {
        imageContainerStyleClassname: "primary",
        descriptionStyleClassname:
            "card-description-text text-color-common-opacity",
    },
    [ContentCardStyleTypes.SECONDARY_BIG_TEXT]: {
        imageContainerStyleClassname: "",
        descriptionStyleClassname:
            "card-description-text text-color-common-opacity",
    },
    [ContentCardStyleTypes.SECONDARY_SMALL_TEXT]: {
        imageContainerStyleClassname: "",
        descriptionStyleClassname: "common-text text-color-common-opacity",
    },
    [ContentCardStyleTypes.SECONDARY_SMALL_OPACITY_TEXT]: {
        imageContainerStyleClassname: "",
        descriptionStyleClassname:
            "common-text text-color-common-second-opacity",
    },
};

export const enum ContentMaximumWidths {
    SECTION = "564px",
};

export const enum ScrollingImageLineDirections {
    RIGHT = "right",
    LEFT = "left",
};

export const CONTENT_INFO_CARD_HOVER_REACTIVE_CLASSNAME: string = "hover-reactive";

export const getNumberRange = (firstValue: number, lastValue: number, step: number): number[] => {
    const rangeArray: number[] = [];

    for (let currentValue = firstValue; currentValue <= lastValue; currentValue += step) {
        rangeArray.push(currentValue);
    };

    return rangeArray;
};

export const CONTENT_URL='https://res.cloudinary.com/dy6zg8dhs/image/upload/';

