import type {FC} from "react";
import {type ReactElement} from "react";
import type {ElementJson} from "@components/chemistry/PeriodicTable/types.ts";
import ElementCell from "@components/chemistry/ElementCell";
import {selectElement, setIsModalOpened} from "@store/slices/ChemistryPage";
import {useDispatch} from "react-redux";
import elements from "@components/chemistry/elements.json";
import "./style.css";

const groupElementsByPeriod = (elements: ElementJson[]): Record<number, ElementJson[]> => {
    return elements.reduce((acc, el) => {
        const period = Number(el.period);
        if (!period) return acc;

        if (!acc[period]) {
            acc[period] = [];
        }
        acc[period].push(el);
        return acc;
    }, {} as Record<number, ElementJson[]>);
};

const PeriodicTableMobile: FC = (): ReactElement => {
    const grouped = groupElementsByPeriod(elements);
    const sortedPeriods = Object.keys(grouped).map(Number).sort((a, b) => a - b);
    const dispatch = useDispatch();

    const handleClick = (el: ElementJson) => {
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