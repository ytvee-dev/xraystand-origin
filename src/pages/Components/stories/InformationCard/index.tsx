import { useState, type ReactElement } from "react";
import DSInformationCard from "../../../../components/common/Cards/DSInformationCard";
import {
    defaultDSCardSX,
    defaultDSInformationCardSX,
} from "../../../../components/common/Cards/cardsMeta.tsx";
import type { IInformationCardProps } from "../../../../components/common/Cards/CardsTypes.ts";
import { fieldWrap, box, grid } from "../footer";

export const defaultDSInformationCardProps: IInformationCardProps = {
    marker: "decimal",
    title: "Заголовок",
    liOptions: ["Пункт 1", "Пункт 2", "Пункт 3"],
    action: () => alert("click"),
    backgroundColor: "#FFFFFF",
    width: "270px",
    sxText: defaultDSCardSX,
    sxContent: defaultDSInformationCardSX,
};

export function DSInformationCardPlayground(): ReactElement {
    const [marker, setMarker] = useState<IInformationCardProps["marker"]>(
        defaultDSInformationCardProps.marker || "decimal"
    );
    const [title, setTitle] = useState<string>(defaultDSInformationCardProps.title || "");
    const [liOptionsText, setLiOptionsText] = useState<string>(
        (defaultDSInformationCardProps.liOptions || []).join("\n")
    );
    const [backgroundColor, setBackgroundColor] = useState<string>(
        String(defaultDSInformationCardProps.backgroundColor || "#FFFFFF")
    );
    const [width, setWidth] = useState<string>(String(defaultDSInformationCardProps.width || "270px"));

    const [titleColor, setTitleColor] = useState<string>(String(defaultDSCardSX.titleColor));
    const [titleFontSize, setTitleFontSize] = useState<string>(
        String(defaultDSCardSX.titleFontSize || "20px")
    );
    const [fontWeight, setFontWeight] = useState<number>(Number(defaultDSCardSX.fontWeight || 600));
    const [labelColor, setLabelColor] = useState<string>(String(defaultDSCardSX.labelColor));
    const [labelFontSize, setLabelFontSize] = useState<string>(
        String(defaultDSCardSX.labelFontSize || "14px")
    );

    const [minHeight, setMinHeight] = useState<string>(
        String(defaultDSInformationCardSX.minHeight || "auto")
    );
    const [minWidth, setMinWidth] = useState<string>(
        String(defaultDSInformationCardSX.minWidth || "auto")
    );
    const [listPadding, setListPadding] = useState<string>(
        String(defaultDSInformationCardSX.listPadding || "18px")
    );

    const resetAll = () => {
        setMarker(defaultDSInformationCardProps.marker || "decimal");
        setTitle(defaultDSInformationCardProps.title || "");
        setLiOptionsText((defaultDSInformationCardProps.liOptions || []).join("\n"));
        setBackgroundColor(String(defaultDSInformationCardProps.backgroundColor || "#FFFFFF"));
        setWidth(String(defaultDSInformationCardProps.width || "270px"));

        setTitleColor(String(defaultDSCardSX.titleColor));
        setTitleFontSize(String(defaultDSCardSX.titleFontSize || "20px"));
        setFontWeight(Number(defaultDSCardSX.fontWeight || 600));
        setLabelColor(String(defaultDSCardSX.labelColor));
        setLabelFontSize(String(defaultDSCardSX.labelFontSize || "14px"));

        setMinHeight(String(defaultDSInformationCardSX.minHeight || "auto"));
        setMinWidth(String(defaultDSInformationCardSX.minWidth || "auto"));
        setListPadding(String(defaultDSInformationCardSX.listPadding || "18px"));
    };

    const liOptions = liOptionsText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

    const sxText = {
        ...defaultDSCardSX,
        titleColor,
        titleFontSize,
        fontWeight,
        labelColor,
        labelFontSize,
    };

    const sxContent = {
        ...defaultDSInformationCardSX,
        minHeight,
        minWidth,
        listPadding,
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>DSInformationCard</h3>

                <h4>Контент</h4>
                <div style={fieldWrap}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>List items</label>
                    <textarea rows={6} value={liOptionsText} onChange={(e) => setLiOptionsText(e.target.value)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Список</h4>
                <div style={fieldWrap}>
                    <label>Marker</label>
                    <select value={marker} onChange={(e) => setMarker(e.target.value as any)}>
                        <option value="decimal">decimal</option>
                        <option value="disc">disc</option>
                        <option value="circle">circle</option>
                        <option value="square">square</option>
                        <option value="none">none</option>
                    </select>
                </div>

                <h4 style={{ marginTop: 20 }}>Размеры и фон</h4>
                <div style={fieldWrap}>
                    <label>Card width</label>
                    <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="270px | 100%" />
                </div>
                <div style={fieldWrap}>
                    <label>Background</label>
                    <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Текст (sxText)</h4>
                <div style={fieldWrap}>
                    <label>Title color</label>
                    <input type="color" value={titleColor} onChange={(e) => setTitleColor(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Title font size</label>
                    <input type="text" value={titleFontSize} onChange={(e) => setTitleFontSize(e.target.value)} />
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
                    <label>Label color</label>
                    <input type="color" value={labelColor} onChange={(e) => setLabelColor(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Label font size</label>
                    <input type="text" value={labelFontSize} onChange={(e) => setLabelFontSize(e.target.value)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Контент (sxContent)</h4>
                <div style={fieldWrap}>
                    <label>Min height</label>
                    <input type="text" value={minHeight} onChange={(e) => setMinHeight(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Min width</label>
                    <input type="text" value={minWidth} onChange={(e) => setMinWidth(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>List padding</label>
                    <input type="text" value={listPadding} onChange={(e) => setListPadding(e.target.value)} />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>Reset</button>
                </div>
            </div>

            <div>
                <DSInformationCard
                    marker={marker}
                    title={title}
                    liOptions={liOptions}
                    action={() => alert("click")}
                    backgroundColor={backgroundColor}
                    width={width}
                    sxText={sxText}
                    sxContent={sxContent}
                />
            </div>
        </div>
    );
}
