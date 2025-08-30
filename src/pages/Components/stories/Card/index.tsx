import { useState, type ReactElement } from "react";
import DSCard from "../../../../components/common/Cards/DSCard";
import {
    defaultDSCardSX, templateDSCardNames,
} from "../../../../components/common/Cards/cardsMeta.tsx";
import type { IContentImageCardProps } from "../../../../components/common/Cards/CardsTypes.ts";
import { fieldWrap, box, grid } from "../footer";

export const defaultDSCardProps: IContentImageCardProps = {
    imageName: "",
    title: "Card title",
    label: "Card label",
    linkedText: "Linked text",
    action: () => alert("click"),
    backgroundColor: "#FFFFFF",
    minWidth: "270px",
    maxWidth: "270px",
    imageHeight: "150px",
    sxText: defaultDSCardSX,
};

export function DSCardPlayground(): ReactElement {
    const [imageName, setImageName] = useState<string>(defaultDSCardProps.imageName || templateDSCardNames[0]);
    const [title, setTitle] = useState<string>(defaultDSCardProps.title || "");
    const [label, setLabel] = useState<string>(defaultDSCardProps.label || "");
    const [linkedText, setLinkedText] = useState<string>(defaultDSCardProps.linkedText || "");
    const [backgroundColor, setBackgroundColor] = useState<string>(
        String(defaultDSCardProps.backgroundColor || "#FFFFFF")
    );
    const [minWidth, setMinWidth] = useState<string>(String(defaultDSCardProps.minWidth || "270px"));
    const [maxWidth, setMaxWidth] = useState<string>(String(defaultDSCardProps.maxWidth || "270px"));
    const [imageHeight, setImageHeight] = useState<string>(
        String(defaultDSCardProps.imageHeight || "150px")
    );

    const [titleColor, setTitleColor] = useState<string>(String(defaultDSCardSX.titleColor));
    const [labelColor, setLabelColor] = useState<string>(String(defaultDSCardSX.labelColor));
    const [linkColor, setLinkColor] = useState<string>(String(defaultDSCardSX.linkColor));
    const [fontWeight, setFontWeight] = useState<number>(Number(defaultDSCardSX.fontWeight || 600));
    const [imgObjectFit, setImgObjectFit] = useState<string>(
        String(defaultDSCardSX.imgObjectFit || "cover")
    );
    const [imgPadding, setImgPadding] = useState<string>(String(defaultDSCardSX.imgPadding || "0"));

    const resetAll = () => {
        setImageName(defaultDSCardProps.imageName || "");
        setTitle(defaultDSCardProps.title || "");
        setLabel(defaultDSCardProps.label || "");
        setLinkedText(defaultDSCardProps.linkedText || "");
        setBackgroundColor(String(defaultDSCardProps.backgroundColor || "#FFFFFF"));
        setMinWidth(String(defaultDSCardProps.minWidth || "270px"));
        setMaxWidth(String(defaultDSCardProps.maxWidth || "270px"));
        setImageHeight(String(defaultDSCardProps.imageHeight || "150px"));

        setTitleColor(String(defaultDSCardSX.titleColor));
        setLabelColor(String(defaultDSCardSX.labelColor));
        setLinkColor(String(defaultDSCardSX.linkColor));
        setFontWeight(Number(defaultDSCardSX.fontWeight || 600));
        setImgObjectFit(String(defaultDSCardSX.imgObjectFit || "cover"));
        setImgPadding(String(defaultDSCardSX.imgPadding || "0"));
    };

    const sxText = {
        ...defaultDSCardSX,
        titleColor,
        labelColor,
        linkColor,
        fontWeight,
        imgObjectFit,
        imgPadding,
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>DSCard</h3>

                <h4>Контент</h4>
                <div style={fieldWrap}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Label</label>
                    <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Linked text</label>
                    <input type="text" value={linkedText} onChange={(e) => setLinkedText(e.target.value)} />
                </div>

                <div style={fieldWrap}>
                    <label>Image name</label>
                    <input
                        type="text"
                        placeholder="my-image.avif"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                    />
                </div>

                <h4 style={{ marginTop: 20 }}>Размеры и фон</h4>
                <div style={fieldWrap}>
                    <label>Min width</label>
                    <input
                        type="text"
                        value={minWidth}
                        onChange={(e) => setMinWidth(e.target.value)}
                        placeholder="270px | 100%"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Max width</label>
                    <input
                        type="text"
                        value={maxWidth}
                        onChange={(e) => setMaxWidth(e.target.value)}
                        placeholder="270px | 100%"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Image height</label>
                    <input
                        type="text"
                        value={imageHeight}
                        onChange={(e) => setImageHeight(e.target.value)}
                        placeholder="150px"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Background</label>
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                </div>

                <h4 style={{ marginTop: 20 }}>Стиль (sxText)</h4>
                <div style={fieldWrap}>
                    <label>Title color</label>
                    <input
                        type="color"
                        value={titleColor}
                        onChange={(e) => setTitleColor(e.target.value)}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Label color</label>
                    <input
                        type="color"
                        value={labelColor}
                        onChange={(e) => setLabelColor(e.target.value)}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Link color</label>
                    <input type="color" value={linkColor} onChange={(e) => setLinkColor(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Font weight</label>
                    <input
                        type="number"
                        min={100}
                        max={900}
                        step={50}
                        value={fontWeight}
                        onChange={(e) => setFontWeight(Number(e.target.value))}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Image object-fit</label>
                    <select value={imgObjectFit} onChange={(e) => setImgObjectFit(e.target.value)}>
                        <option value="cover">cover</option>
                        <option value="contain">contain</option>
                        <option value="fill">fill</option>
                        <option value="none">none</option>
                        <option value="scale-down">scale-down</option>
                    </select>
                </div>
                <div style={fieldWrap}>
                    <label>Image padding</label>
                    <input
                        type="text"
                        value={imgPadding}
                        onChange={(e) => setImgPadding(e.target.value)}
                        placeholder="0 | 8px 12px"
                    />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <DSCard
                    imageName={imageName}
                    title={title}
                    label={label}
                    linkedText={linkedText}
                    action={() => alert("click")}
                    backgroundColor={backgroundColor}
                    minWidth={minWidth}
                    maxWidth={maxWidth}
                    imageHeight={imageHeight}
                    sxText={sxText}
                />
            </div>
        </div>
    );
}
