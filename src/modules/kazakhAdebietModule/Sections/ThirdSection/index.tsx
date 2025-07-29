import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";

import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import ContentSection from "@components/common/Sections/ContentSection";

import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import "./style.css";

const SecondSection = (): ReactElement => {
    return (
        <section className="kza-third-section">
            <ContentSection textData={{
                title: content.thirdSection["title"],
                description: content.thirdSection["description"],
                colorScheme: {
                    background: "#EBCD91",
                    text: "#8A2F17",
                }
            }}>
                <div className={"background-cards-container"}>
                    <DefaultCardsListOL
                        content={content.thirdSection["content"].slice(0, 4) as TContentItem[]}
                        imageIdData={paths.people.slice(0, 4) ?? []}
                    />
                </div>
                <div className={"background-cards-container"}>
                    <DefaultCardsListOL
                        content={content.thirdSection["content"].slice(4, 9) as TContentItem[]}
                        imageIdData={paths.people.slice(4, 9) ?? []}
                    />
                </div>
                <div className="content-section-alert-wrapper">
                    <ContentSectionAlert label={content.thirdSection.notificationLabel as string}/>
                </div>
            </ContentSection>
        </section>
    );
};

export default SecondSection;
