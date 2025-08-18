import { useState, type ReactElement } from "react";
import Header from "@components/common/Header";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

export function HeaderPlayground(): ReactElement {
    const [singleLanguage, setSingleLanguage] = useState<boolean>(false);

    const resetAll = () => {
        setSingleLanguage(false);
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>Header</h3>

                <div style={fieldWrap}>
                    <label>Single Language</label>
                    <input
                        type="checkbox"
                        checked={singleLanguage}
                        onChange={(e) => setSingleLanguage(e.target.checked)}
                    />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <Header singleLanguage={singleLanguage} />
            </div>
        </div>
    );
}
