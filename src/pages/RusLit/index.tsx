import {type ReactElement, useEffect} from "react";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/rusLitModule/Sections/CoverSection";
import FirstSection from "@modules/rusLitModule/Sections/FirstSection";
import SecondSection from "@modules/rusLitModule/Sections/SecondSection";
import ThirdSection from "@modules/rusLitModule/Sections/ThirdSection";
import usePreloadImages from "@hooks/usePreloadImages.ts";
import paths from "@modules/rusLitModule/locales/paths.json";
import "./style.css";

const R2_BASE_URL: string = import.meta.env.VITE_R2_BASE_URL;

const collectPaths = (data: unknown): string[] => {
    const result: string[] = [];
    const traverse = (value: unknown): void => {
        if (typeof value === "string") {
            result.push(value);
        } else if (Array.isArray(value)) {
            value.forEach(traverse);
        } else if (value && typeof value === "object") {
            Object.values(value).forEach(traverse);
        }
    };
    traverse(data);
    return result;
};

const rusLitPreloadUrls: string[] = collectPaths(paths).map(
    (p) => `${R2_BASE_URL}/${p}`
);

const RusLit = (): ReactElement => {
    usePreloadImages(rusLitPreloadUrls);
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = `${R2_BASE_URL}/${paths.backgrounds.cover}`;
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <DefaultLayout strictLanguage='ru'>
            <div className="ruslit-page" >
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default RusLit;