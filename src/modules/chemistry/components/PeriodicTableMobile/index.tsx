import {useDispatch, useSelector} from "react-redux";
import {type ReactElement, type FC} from "react";
import type {TRootState} from "@store/index.ts";
import type {IElementJson} from "@pages/Chemistry/types.ts";
import type { TElementsInfo} from "@pages/Chemistry/types.ts";
import {selectElement, setIsModalOpened} from "@store/slices/ChemistryPage";
import ElementCell from "@modules/chemistry/components/ElementCell";
import {Languages} from "@domains/Translate";
import * as contentKZ from "@modules/chemistry/locales/kaz.json";
import * as contentRU from "@modules/chemistry/locales/rus.json";
import "./style.css";

const groupElementsByPeriod = (elements: TElementsInfo): Record<number, TElementsInfo> => {
    return elements.reduce((acc, el) => {
        const period = Number(el.period);
        if (!period) return acc;

        if (!acc[period]) {
            acc[period] = [];
        }
        acc[period].push(el);
        return acc;
    }, {} as Record<number, TElementsInfo>);
};

const PeriodicTableMobile: FC = (): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const { elements } = currentLocale === "kz" ? contentKZ : contentRU;
    const grouped = groupElementsByPeriod(elements);
    const sortedPeriods = Object.keys(grouped).map(Number).sort((a, b) => a - b);
    const dispatch = useDispatch();

    const handleClick = (el: IElementJson) => {
        dispatch(selectElement(el));
        dispatch(setIsModalOpened(true));
    };

    return (
        <div className="mobile-table-wrapper">
            <div className="mobile-table">
                <div className="mobile-cells">
                    {sortedPeriods.map((period) => (
                        <div key={period} className="period-line">
                            {period < 8 && <h3 className="period-label">{`Период ${period}`}</h3>}
                            {period === 8 && <h3 className="period-label">Лантаноиды</h3>}
                            {period === 9 && <h3 className="period-label">Актиноиды</h3>}
                            <div className="mobile-elements">
                                {grouped[period].map((el) => (
                                    <ElementCell
                                        variant="MOBILE"
                                        key={el.number}
                                        {...el}
                                        visible={true}
                                        action={() => handleClick(el)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeriodicTableMobile;