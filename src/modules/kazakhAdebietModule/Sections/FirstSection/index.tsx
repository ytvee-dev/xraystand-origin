import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import ContentSection from "@components/common/Sections/ContentSection";

import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";

import "./style.css";

const FirstSection = (): ReactElement => {

    return (
        <section className="kza-first-section">
            <ContentSection textData={content.firstSection}>
                <div className={"kza-background-cards-container"}>
                    <DefaultCardsListOL
                        content={content.firstSection["content"] as TContentItem[]}
                        imageIdData={paths.cards}
                        backgroundCardsColor={"#ffffff"}
                    />
                </div>
            </ContentSection>
        </section>
    );
};

export default FirstSection;



