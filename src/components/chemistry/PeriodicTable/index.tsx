import {type ChangeEvent, type ReactElement, useState, type FC} from "react";
import {useDispatch} from "react-redux";
import {selectElement, setIsModalOpened} from "@store/slices/ChemistryPage";
import type {TCategoryState, IElementJson, IChemistryPageResources} from "@pages/Chemistry/types.ts";
import ElementCell from "@components/chemistry/ElementCell";
import type {TElementsInfo} from "@pages/Chemistry/types.ts";
import usePageTranslation from "@hooks/usePageTranslation.ts";
import {PageIds} from "@domains/Translate";
import "./style.css";

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
    const {textTranslation} = usePageTranslation(PageIds.CHEMISTRY_PAGE);
    const { elements } = textTranslation as IChemistryPageResources;
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