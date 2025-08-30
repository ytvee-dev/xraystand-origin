import { type FC, type ReactElement, type ReactNode, useState, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import { MDXProvider } from "@mdx-js/react";
import { componentsLibrary } from "@pages/Components/meta.tsx";
import { mdxComponents } from "@utils/mdxComponents.tsx";
import "./style.css";

interface IComponentData {
    name: string;
    category: string;
    component: ReactNode | ReactElement;
    variants: {
        default: ReactNode | ReactElement;
    };
    documentation: ReactNode | ReactElement;
}

interface SubComponentProp {
    children: ReactNode;
}

const Documentation: FC<SubComponentProp> = ({ children }): ReactElement => {
    return (
        <div className="components-documentation">
            <h2>Documentation</h2>
            <article className="markdown-body">
                <MDXProvider components={mdxComponents}>
                    {children}
                </MDXProvider>
            </article>
        </div>
    );
};

const ComponentsPage = (): ReactElement => {
    const [currentComponent, setCurrentComponent] = useState<IComponentData>(
        componentsLibrary[0]
    );

    const { pageImageIdData } = usePageImagesIds(PageIds.COMPONENTS_PAGE);
    const imageIds = useMemo(() => {
        if (!pageImageIdData) return [];
        return Array.from(
            new Set(
                Object.values(pageImageIdData).flatMap(section => [
                    ...section.globalData,
                    ...section.contentListData,
                ]),
            ),
        );
    }, [pageImageIdData]);
    const { isLoaded } = useImagesPreloader(imageIds);

    if (!isLoaded) {
        return <Spinner />;
    }

    const handleClick = (index: number): void => {
        setCurrentComponent(componentsLibrary[index]);
    };

    return (
        <div className="components-page">
            <div className="components-side-bar">
                {componentsLibrary.map((item, index: number) => (
                    <div
                        key={item.name}
                        className="components-side-bar-item"
                        onClick={() => handleClick(index)}
                        style={{
                            textDecoration:
                                currentComponent.name === item.name
                                    ? "underline"
                                    : "none",
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="components-content">
                <div className="components-content-child">
                    <h2>Playground</h2>
                    <div className="components-content-desktop-wrapper">
                        {currentComponent.component}
                    </div>

                    <h2>Desktop view</h2>
                    <div className="components-content-desktop-wrapper">
                        {currentComponent.variants.default}
                    </div>

                    <Documentation>{currentComponent.documentation}</Documentation>
                </div>
            </div>
        </div>
    );
};

export default ComponentsPage;
