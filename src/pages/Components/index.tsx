import {type ReactElement, type ReactNode, useState} from "react";
import { MDXProvider } from '@mdx-js/react';
import Switch from '@mui/material/Switch';
import {componentsLibrary} from "@pages/Components/meta.tsx";
import {mdxComponents} from "@utils/mdxComponents.tsx";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import DocDSCard from "@components/common/Cards/DSCard/DocDSCard.mdx";
import "./style.css";

interface IComponentData {
    name: string;
    category: string;
    component: ReactNode | ReactElement;
    variants: {
        default: ReactNode | ReactElement;
    },
    documentation: Function;
}


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

    const Documentation = (): ReactElement => {
        return (
            <div>
                <article className="markdown-body">
                    <MDXProvider components={mdxComponents}>
                        {currentComponent.documentation}
                    </MDXProvider>
                </article>
            </div>
        );
    };

    const MobileScreens = (): ReactElement => {
        return (
            <div className="components-content-mobile-wrapper">
                <div className="components-content-mobile-screen-1199">
                    <h3>992px - 1199px</h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-991">
                    <h3>768px - 991px. </h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-767">
                    <h3>576px - 767px</h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-414">
                    <h3>414px</h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-375">
                    <h3>375px</h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-360">
                    <h3>360px</h3>
                    {currentComponent.variants.default}</div>
                <div className="components-content-mobile-screen-320">
                    <h3>320px</h3>
                    {currentComponent.variants.default}</div>
            </div>
        );
    }

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
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="components-content">
                {showDoc && (
                    <Documentation/>
                )}

                {!showDoc && (
                    <div className="components-content-child">
                        <h2>Without props</h2>
                        <div className="components-content-desktop-wrapper">{currentComponent.component}</div>

                        <h2>Desktop</h2>
                        <div className="components-content-desktop-wrapper">{currentComponent.variants.default}</div>

                        <h2>Tablet & Mobile</h2>
                        <MobileScreens/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentsPage;
