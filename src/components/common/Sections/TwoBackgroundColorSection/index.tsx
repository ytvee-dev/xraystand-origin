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
    classname,
    children,
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

                    {notificationLabel && screen.width >=800 &&(
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
                    className={`rules-section ${classname}`}
                    style={
                        {
                            "--rules-background": rulesBackground,
                        } as CSSProperties
                    }
                >
                    <h2
                        className="rules-section-title"
                        style={
                            {
                                color: rulesListTitleColor,
                            } as CSSProperties
                        }
                    >
                        {title}
                    </h2>
                    {children}
                </section>
            )}
        </div>
    );
};

export default TwoBackgroundColorSection;
