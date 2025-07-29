import {type ReactElement, type ReactNode, useState} from "react";
import {componentsLibrary} from "@pages/Components/meta.tsx";
import "./style.css";

interface IComponentData {
    name: string;
    category: string;
    component: ReactNode | ReactElement;
}

const ComponentsPage = (): ReactElement => {
    const [currentComponent, setCurrentComponent] = useState<IComponentData>(componentsLibrary[0]);

    const handleClick = (index: number): void => {
        setCurrentComponent(componentsLibrary[index]);
    };

    return (
        <div className="components-page">
            <div className="components-side-bar">
                {componentsLibrary.map((item, index:  number) => (
                    <div
                        key={item.name}
                        className="components-side-bar-item"
                        onClick={() => handleClick(index)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="components-content">
                <div className="components-content-desktop-wrapper">{currentComponent.component}</div>
                <div className="components-content-mobile-wrapper">{currentComponent.component}</div>
            </div>
        </div>
    );
};

export default ComponentsPage;
