import type {FC} from "react";
import {type ChangeEvent, type ReactElement, useState} from "react";
import type {CategoryState, ElementJson} from "@components/chemistry/PeriodicTable/types.ts";
import ElementCell from "@components/chemistry/ElementCell";
import {useDispatch} from "react-redux";
import {selectElement, setIsModalOpened} from "@store/slices/ChemistryPage";
import elements from "@components/chemistry/elements.json";
import "./style.css";

const makeInitialCategories = (): CategoryState =>
    elements.reduce<CategoryState>(
        (acc: CategoryState, {category}) => {
            acc[category as keyof CategoryState] = true;
            return acc;
        },
        {} as CategoryState,
    );

const PeriodicTable: FC = (): ReactElement => {
    const [state, setState] = useState<CategoryState>(makeInitialCategories);
    const dispatch = useDispatch();

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
        (category: keyof CategoryState) =>
            (e: ChangeEvent<HTMLInputElement>) =>
                setState(prev => ({...prev, [category]: e.target.checked}));

    const handleClick = (el: ElementJson) => {
        dispatch(selectElement(el));
        dispatch(setIsModalOpened(true));
    };

    return (
        <div className="table-wrapper">
            <div className="table">
                <div className="cells">
                    <Categories/>
                    {elements.map((el: ElementJson) => (
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