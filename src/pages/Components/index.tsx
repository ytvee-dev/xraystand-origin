import {type FC, type ReactElement, type ReactNode, useState} from "react";
import { MDXProvider } from '@mdx-js/react';
import Switch from '@mui/material/Switch';
import {componentsLibrary} from "@pages/Components/meta.tsx";
import {mdxComponents} from "@utils/mdxComponents.tsx";
import "./style.css";

interface IComponentData {
    name: string;
    category: string;
    component: ReactNode | ReactElement;
    variants: {
        default: ReactNode | ReactElement;
    },
    documentation: ReactNode | ReactElement;
}

interface SubComponentProp {
    children: ReactNode;
}



const Documentation: FC<SubComponentProp> = ({ children }): ReactElement => {
    return (
        <div>
            <article className="markdown-body">
                <MDXProvider components={mdxComponents}>
                    {children}
                </MDXProvider>
            </article>
        </div>
    );
};

const ComponentsPage = (): ReactElement => {
    const [currentComponent, setCurrentComponent] = useState<IComponentData>(componentsLibrary[0]);
    const [showDoc, setShowDoc] = useState<boolean>(false);
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    const modalHandle = () => {
        setShowDoc(!showDoc);
    };

    const handleClick = (index: number): void => {
        setCurrentComponent(componentsLibrary[index]);
        console.log(currentComponent)
    };

    return (
        <div className="components-page">
            <div className="components-side-bar">
                <div className="components-content-switcher">
                    <span>Docs</span>
                    <Switch onChange={modalHandle} {...label} defaultChecked/>
                    <span>View</span>
                </div>
                {componentsLibrary.map((item, index: number) => (
                    <div
                        key={item.name}
                        className="components-side-bar-item"
                        onClick={() => handleClick(index)}
                        style={{textDecoration: currentComponent.name === item.name ? "underline" : "none"}}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="components-content">

                {showDoc && (
                    <Documentation children={currentComponent.documentation} />
                )}

                {!showDoc && (
                    <div className="components-content-child">
                        <h2>Playground</h2>
                        <div className="components-content-desktop-wrapper">
                            {currentComponent.component}
                        </div>

                        <h2>Desktop view</h2>
                        <div className="components-content-desktop-wrapper">
                            {currentComponent.variants.default}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentsPage;
