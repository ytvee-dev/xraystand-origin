import {type ReactElement, useEffect} from "react";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "@modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "@modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "@modules/kazakhAdebietModule/Sections/ThirdSection";
import usePreloadImages from "@hooks/usePreloadImages.ts";
import paths from "@modules/kazakhAdebietModule/locales/paths.json";
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

const kazakhPreloadUrls: string[] = collectPaths(paths).map(
    (p) => `${R2_BASE_URL}/${p}`
);

const coverPreloadUrls: string[] = [
    `${R2_BASE_URL}/kazakhAdebiet/cover.avif`,
    `${R2_BASE_URL}/kazakhAdebiet/coverMobile.avif`,
];

const KazakhAdebiet = (): ReactElement => {
    usePreloadImages(kazakhPreloadUrls);
    useEffect(() => {
        const links = coverPreloadUrls.map((href) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = href;
            document.head.appendChild(link);
            return link;
        });
        return () => {
            links.forEach((link) => document.head.removeChild(link));
        };
    }, []);

    return (
        <DefaultLayout strictLanguage='kz'>
            <div className="kazakh-adebiet-page">
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;