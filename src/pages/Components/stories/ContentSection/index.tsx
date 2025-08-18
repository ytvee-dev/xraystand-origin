import { useState, type ReactElement } from "react";
import ContentSection, {
    type IContentSectionProps,
    type IContentSectionTextData,
} from "@components/common/Sections/DSContentSection";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

export const defaultContentSectionTextData: IContentSectionTextData = {
    title: "Заголовок секции",
    description: "Описание секции",
    notificationLabel: "Важное уведомление",
    alertText: "Текст алерта",
    colorScheme: {
        background: "#FFFFFF",
        text: "#289FF5",
    },
};

export const defaultContentSectionProps: IContentSectionProps = {
    textData: defaultContentSectionTextData,
    children: <p>Контент внутри секции</p>,
};

export function ContentSectionPlayground(): ReactElement {
    const [title, setTitle] = useState<string>(defaultContentSectionTextData.title);
    const [description, setDescription] = useState<string>(
        defaultContentSectionTextData.description || ""
    );
    const [background, setBackground] = useState<string>(
        defaultContentSectionTextData.colorScheme?.background || "#FFFFFF"
    );
    const [textColor, setTextColor] = useState<string>(
        defaultContentSectionTextData.colorScheme?.text || "#289FF5"
    );
    const [childrenText, setChildrenText] = useState<string>("Контент внутри секции");

    const resetAll = () => {
        setTitle(defaultContentSectionTextData.title);
        setDescription(defaultContentSectionTextData.description || "");
        setBackground(defaultContentSectionTextData.colorScheme?.background || "#FFFFFF");
        setTextColor(defaultContentSectionTextData.colorScheme?.text || "#289FF5");
        setChildrenText("Контент внутри секции");
    };

    const parseChildren = (text: string) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        return (
            <div>
                {lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        );
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>ContentSection</h3>

                <h4>Параметры</h4>

                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div style={fieldWrap}>
                    <label>Описание</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div style={fieldWrap}>
                    <label>Фон</label>
                    <input
                        type="color"
                        value={background}
                        onChange={(e) => setBackground(e.target.value)}
                    />
                </div>

                <div style={fieldWrap}>
                    <label>Цвет текста</label>
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                    />
                </div>

                <div style={fieldWrap}>
                    <label>Контент</label>
                    <textarea
                        rows={6}
                        value={childrenText}
                        onChange={(e) => setChildrenText(e.target.value)}
                    />
                </div>

                <div style={{ marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <ContentSection
                    textData={{
                        title,
                        description,
                        colorScheme: { background, text: textColor },
                    }}
                >
                    {parseChildren(childrenText)}
                </ContentSection>
            </div>
        </div>
    );
}
