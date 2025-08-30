import {type ChangeEvent, type ReactElement, useState, type FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectElement, setIsModalOpened} from "../../../../store/slices/ChemistryPage";
import type {TCategoryState, IElementJson} from "../../../../pages/Chemistry/types.ts";
import ElementCell from "../ElementCell";
import type {TElementsInfo} from "../../../../pages/Chemistry/types.ts";
import {Languages} from "../../../../domains/Translate";
import "./style.css";
import type {TRootState} from "../../../../store";
import * as contentKZ from "../../locales/kaz.json";
import * as contentRU from "../../locales/rus.json";

const makeInitialCategories = (elements: TElementsInfo): TCategoryState =>
    elements.reduce<TCategoryState>(
        (acc: TCategoryState, {category}) => {
            acc[category as keyof TCategoryState] = true;
            return acc;
        },
        {} as TCategoryState,
    );

const PeriodicTable: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const { elements } = currentLocale === "kz" ? contentKZ : contentRU;
    const [state, setState] = useState<TCategoryState>(makeInitialCategories(elements));

    const Categories: FC = (): ReactElement => {
        let groupedCategories = [];
        const categoriesMatrix = [];

        for (const category in state) {
            groupedCategories.push(category)
            if (groupedCategories.length === 2) {
                categoriesMatrix.push(groupedCategories);
                groupedCategories = [];
            }
        }
        if (!categoriesMatrix.length) {
            return <></>;
        }

        return (
            <div className="categories">
                {categoriesMatrix.map((pairCategories, index) => (
                    <div className="category-group" key={index}>
                        {pairCategories.map((category) => (
                            !!category.length && (
                                <span key={category}>
                                    <input
                                        id={category}
                                        type="checkbox"
                                        name={category}
                                        checked={state[category]}
                                        onChange={toggle(category)}
                                    />
                                    <label htmlFor={category}>{category}</label>
                                </span>
                            )
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    const toggle =
        (category: keyof TCategoryState) =>
            (e: ChangeEvent<HTMLInputElement>) =>
                setState(prev => ({...prev, [category]: e.target.checked}));

    const handleClick = (el: IElementJson) => {
        dispatch(selectElement(el));
        dispatch(setIsModalOpened(true));
    };

    return (
        <div className="table-wrapper">
            <div className="table">
                <div className="cells">
                    <Categories/>
                    {elements.map((el: IElementJson) => (
                        <ElementCell
                            key={el.number}
                            {...el}
                            visible={state[el.category]}
                            action={() => handleClick(el)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeriodicTable;