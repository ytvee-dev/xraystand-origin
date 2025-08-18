import {useSelector} from "react-redux";
import type {FC, ReactNode} from "react";
import type {TRootState} from "@store/index.ts";
import type {IElementJson} from "@pages/Chemistry/types.ts";
import ElementCell from "@modules/chemistry/components/ElementCell";
import {contentFieldsKz, contentFieldsRu} from "@modules/chemistry/components/ChemistryModalContent/meta.ts";
import "./style.css";

const ChemistryModalContent: FC = (): ReactNode => {
    const locale = useSelector((state: TRootState) => state.locale.locale);
    const elementInformation = useSelector(
        (state: TRootState) => state.chemistry.elementInformation
    ) as IElementJson | null;

    if (!elementInformation) {
        return <></>;
    }

    const fields: (keyof IElementJson)[] = [
        "number",
        "atomic_mass",
        "category",
        "phase",
        "color",
        "melt",
        "boil",
        "density",
        "applying",
        "fact",
    ];

    return (
        <div className="chemistry-modal-content">
            <div className="element-cell-image-container">
                <ElementCell
                    variant="MODAL"
                    visible={true}
                    {...elementInformation}
                />
            </div>
            <div className="element-information-container">
                {fields.map((fieldKey) => {
                    const value = elementInformation[fieldKey];
                    if (!value) return null;

                    return (
                        <div key={fieldKey} className="element-information-field">
                            <span className="element-information-field-name">
                                {locale === "ru" ? contentFieldsRu[fieldKey] : contentFieldsKz[fieldKey]}:
                            </span>
                            <span className="element-information-field-value">
                                {value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChemistryModalContent;