import RulesList from "../../Other/RulesList";
import DSNotification from "@components/common/DSNotification";
import type { ISectionProps } from "@modules/safetyPrecautions/types";
import type { CSSProperties, ReactElement } from "react";
import "./style.css";

const TwoBackgroundColorSection = ({
    title,
    img,
    notificationLabel,
    content,
    backgroundLeft,
    backgroundRight,
    rulesBackground,
    rulesListTitleColor,
    rulesSectionPaddingLeft,
    rulesSectionPaddingRight,
}: ISectionProps): ReactElement => {
    return (
        <div className="section">
            {!!img && (
                <section
                    className="board-section"
                    style={
                        {
                            "--board-background-left": backgroundLeft,
                            "--board-background-right": backgroundRight,
                            "--rules-background": rulesBackground,
                        } as CSSProperties
                    }
                >
                    <h2 className="board-section-title">{title}</h2>

                    <img src={img} alt={title} className="board-section-img" />

                    {notificationLabel && (
                        <div className="board-section-notification">
                            <DSNotification
                                label={notificationLabel}
                                fullWidth={true}
                            />
                        </div>
                    )}
                </section>
            )}

            {!!content?.length && (
                <section
                    className="rules-section"
                    style={
                        {
                            "--rules-background": rulesBackground,
                            "--rules-padding-left": rulesSectionPaddingLeft,
                            "--rules-padding-right": rulesSectionPaddingRight,
                        } as CSSProperties
                    }
                >
                    <h2 className="rules-section-title" style={{
                        "--rules-list-title-color": rulesListTitleColor,
                    } as CSSProperties} >{title}</h2>
                    <RulesList items={content} />
                </section>
            )}
        </div>
    );
};

export default TwoBackgroundColorSection;
