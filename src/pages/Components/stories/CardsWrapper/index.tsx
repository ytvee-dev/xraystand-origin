import { useState, type ReactElement } from "react";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSCard from "@components/common/Cards/DSCard";
import { defaultDSCardSX, templateDSCardNames } from "@components/common/Cards/cardsMeta.tsx";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

export const defaultDSCardsWrapperProps = {
    screenMaxWidth: 1000,
    wrapperMaxWidth: "1200px",
    maxHeight: "",
    cardsGap: "16px",
    overflow: "none" as "none" | "auto" | "scroll" | "hidden",
    isWrap: false,
    cardsCount: 5,
};

export function DSCardsWrapperPlayground(): ReactElement {
    const [screenMaxWidth, setScreenMaxWidth] = useState<number>(defaultDSCardsWrapperProps.screenMaxWidth);
    const [wrapperMaxWidth, setWrapperMaxWidth] = useState<string>(defaultDSCardsWrapperProps.wrapperMaxWidth);
    const [maxHeight, setMaxHeight] = useState<string>(defaultDSCardsWrapperProps.maxHeight);
    const [cardsGap, setCardsGap] = useState<string>(defaultDSCardsWrapperProps.cardsGap);
    const [overflow, setOverflow] = useState<"none" | "auto" | "scroll" | "hidden">(defaultDSCardsWrapperProps.overflow);
    const [isWrap, setIsWrap] = useState<boolean>(defaultDSCardsWrapperProps.isWrap);
    const [cardsCount, setCardsCount] = useState<number>(defaultDSCardsWrapperProps.cardsCount);

    const resetAll = () => {
        setScreenMaxWidth(defaultDSCardsWrapperProps.screenMaxWidth);
        setWrapperMaxWidth(defaultDSCardsWrapperProps.wrapperMaxWidth);
        setMaxHeight(defaultDSCardsWrapperProps.maxHeight);
        setCardsGap(defaultDSCardsWrapperProps.cardsGap);
        setOverflow(defaultDSCardsWrapperProps.overflow);
        setIsWrap(defaultDSCardsWrapperProps.isWrap);
        setCardsCount(defaultDSCardsWrapperProps.cardsCount);
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>DSCardsWrapper</h3>

                <h4>Параметры</h4>
                <div style={fieldWrap}>
                    <label>screenMaxWidth</label>
                    <input
                        type="number"
                        value={screenMaxWidth}
                        onChange={(e) => setScreenMaxWidth(Number(e.target.value))}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>wrapperMaxWidth</label>
                    <input
                        type="text"
                        value={wrapperMaxWidth}
                        onChange={(e) => setWrapperMaxWidth(e.target.value)}
                        placeholder="e.g. 1200px | 100%"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>maxHeight</label>
                    <input
                        type="text"
                        value={maxHeight}
                        onChange={(e) => setMaxHeight(e.target.value)}
                        placeholder="e.g. 500px"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>cardsGap</label>
                    <input
                        type="text"
                        value={cardsGap}
                        onChange={(e) => setCardsGap(e.target.value)}
                        placeholder="e.g. 16px"
                    />
                </div>
                <div style={fieldWrap}>
                    <label>overflow</label>
                    <select value={overflow} onChange={(e) => setOverflow(e.target.value as any)}>
                        <option value="none">none</option>
                        <option value="auto">auto</option>
                        <option value="scroll">scroll</option>
                        <option value="hidden">hidden</option>
                    </select>
                </div>
                <div style={fieldWrap}>
                    <label>isWrap</label>
                    <input
                        type="checkbox"
                        checked={isWrap}
                        onChange={(e) => setIsWrap(e.target.checked)}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>cardsCount</label>
                    <input
                        type="number"
                        min={0}
                        max={24}
                        value={cardsCount}
                        onChange={(e) => setCardsCount(Number(e.target.value))}
                    />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>Reset</button>
                </div>
            </div>

            <div>
                <DSCardsWrapper
                    screenMaxWidth={screenMaxWidth}
                    wrapperMaxWidth={wrapperMaxWidth}
                    maxHeight={maxHeight}
                    cardsGap={cardsGap}
                    overflow={overflow}
                    isWrap={isWrap}
                >
                    {Array.from({ length: cardsCount }).map((_, i) => (
                        <DSCard
                            key={i}
                            imageName={templateDSCardNames[0]}
                            title={`Card ${i + 1}`}
                            label="Card label"
                            linkedText="More"
                            action={() => alert(`Card ${i + 1}`)}
                            backgroundColor="#FFFFFF"
                            minWidth="270px"
                            sxText={defaultDSCardSX}
                        />
                    ))}
                </DSCardsWrapper>
            </div>
        </div>
    );
}
