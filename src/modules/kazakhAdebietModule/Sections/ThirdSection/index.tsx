import DSNotification from "@components/common/DSNotification";
import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import type { TContentItem } from "@modules/trafficLaws/types";
import { type ReactElement } from "react";
import "./style.css";

const ThirdSection = (): ReactElement => {
    return (
        <section className="kza-third-section">
            <ContentSection
                textData={{
                    title: content.thirdSection["title"],
                    description: content.thirdSection["description"],
                    colorScheme: {
                        background: "#EBCD91",
                        text: "#8A2F17",
                    },
                }}
            >
                <DefaultCardsListOL
                    content={content.thirdSection.content as TContentItem[]}
                    imageIdData={paths.people}
                    isCardsClickable={true}
                    style={{ flexWrap: "wrap", justifyContent: "center" }}
                    smallImageSizes={false}
                />

                <div className="content-section-alert-wrapper">
                    <DSNotification
                        content={
                            content.thirdSection.notificationLabel as string
                        }
                    />
                </div>
            </ContentSection>
        </section>
    );
};

export default ThirdSection;
