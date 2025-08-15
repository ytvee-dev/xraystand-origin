import {type ReactElement, useState} from "react";
import DSContentBlock, {
    type DSContentBlockProps,
    type DSContentBlockColorScheme,
    type DSContentBlockDescription,
} from "@components/common/DSContentBlock";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

const ruSecondSection = {
    title: "Художественный язык",
    description:
        "Художественный языкы. Разберёмся, как работают сравнение, эпитет, метафора.",
    notificationLabel:
        "Поэма — «Қорқыт», очерк — публицистика Ыбырая Алтынсарина",
    genres: ["Өлең (поэзия)", "Рассказ", "Роман", "Драма", "Героический эпос"],
    folklore: ["Сказка", "Загадка", "Пословицы и поговорки", "Скороговорка", "Легенды"],
};

export const defaultContentBlockColorScheme: DSContentBlockColorScheme = {
    titleColor: "#289FF5",
    subtitleColor: "#000000",
    notificationBackgroundColor: "#FEFCF3",
    notificationBorderColor: "#EBCD91",
    notificationTextColor: "#000000",
    notificationIconColor: "#EBCD91",
};

export const defaultContentBlockProps: DSContentBlockProps = {
    title: ruSecondSection.title,
    description: ruSecondSection.description,
    notificationLabel: ruSecondSection.notificationLabel,
    children: (
        <div>
            <h4>Жанры:</h4>
            <ul>
                {ruSecondSection.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>

            <h4>Фольклор:</h4>
            <ul>
                {ruSecondSection.folklore.map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
        </div>
    ),
    colorScheme: defaultContentBlockColorScheme,
};

function parseChildren(text: string) {
    const lines = text.split("\n");
    const blocks: ReactElement[] = [];
    let list: string[] = [];

    const flushList = () => {
        if (list.length) {
            blocks.push(
                <ul key={`ul-${blocks.length}`}>
                    {list.map((l, i) => (
                        <li key={`${l}-${i}`}>{l}</li>
                    ))}
                </ul>
            );
            list = [];
        }
    };

    lines.forEach((raw, idx) => {
        const line = raw.trim();
        if (!line) {
            flushList();
            return;
        }
        if (line.endsWith(":")) {
            flushList();
            blocks.push(<h4 key={`h-${idx}`}>{line.slice(0, -1)}</h4>);
            return;
        }
        if (line.startsWith("— ")) {
            list.push(line.slice(2));
            return;
        }
        flushList();
        blocks.push(<p key={`p-${idx}`}>{line}</p>);
    });

    flushList();
    return <div>{blocks}</div>;
}

export function ContentBlockPlayground() {
    const [useTypedDescription, setUseTypedDescription] = useState(false);

    const [title, setTitle] = useState<string>(defaultContentBlockProps.title ?? "");
    const [subtitle, setSubtitle] = useState<string>(
        typeof defaultContentBlockProps.description === "string"
            ? defaultContentBlockProps.description
            : (defaultContentBlockProps.description as DSContentBlockDescription).subtitle
    );
    const [typedContent, setTypedContent] = useState<string[]>(
        typeof defaultContentBlockProps.description === "string"
            ? []
            : (defaultContentBlockProps.description as DSContentBlockDescription).content
    );

    const defaultChildrenText = [
        "Жанры:",
        "— Өлең (поэзия)",
        "— Рассказ",
        "— Роман",
        "— Драма",
        "— Героический эпос",
        "",
        "Фольклор:",
        "— Сказка",
        "— Загадка",
        "— Пословицы и поговорки",
        "— Скороговорка",
        "— Легенды",
    ].join("\n");

    const [childrenText, setChildrenText] = useState<string>(defaultChildrenText);
    const [notificationLabel, setNotificationLabel] = useState<string>(
        defaultContentBlockProps.notificationLabel ?? ""
    );
    const [scheme, setScheme] = useState<DSContentBlockColorScheme>(defaultContentBlockColorScheme);

    const description: string | DSContentBlockDescription = useTypedDescription
        ? { subtitle, content: typedContent }
        : subtitle;

    const resetAll = () => {
        setUseTypedDescription(false);
        setTitle(defaultContentBlockProps.title ?? "");
        setSubtitle(
            typeof defaultContentBlockProps.description === "string"
                ? defaultContentBlockProps.description
                : (defaultContentBlockProps.description as DSContentBlockDescription).subtitle
        );
        setTypedContent(
            typeof defaultContentBlockProps.description === "string"
                ? []
                : (defaultContentBlockProps.description as DSContentBlockDescription).content
        );
        setChildrenText(defaultChildrenText);
        setNotificationLabel(defaultContentBlockProps.notificationLabel ?? "");
        setScheme(defaultContentBlockColorScheme);
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>Content Block</h3>

                <h4>Текст</h4>
                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div style={fieldWrap}>
                    <label>{useTypedDescription ? "Subtitle" : "Описание"}</label>
                    <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                </div>

                <div style={fieldWrap}>
                    <label>Содержимое (children)</label>
                    <textarea
                        rows={6}
                        value={childrenText}
                        onChange={(e) => setChildrenText(e.target.value)}
                    />
                </div>

                <div style={fieldWrap}>
                    <label>Уведомление</label>
                    <input
                        type="text"
                        value={notificationLabel}
                        onChange={(e) => setNotificationLabel(e.target.value)}
                    />
                </div>

                <h4 style={{ marginTop: 20 }}>Цвета</h4>
                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input
                        type="color"
                        value={String(scheme.titleColor)}
                        onChange={(e) => setScheme({ ...scheme, titleColor: e.target.value })}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Подзаголовок</label>
                    <input
                        type="color"
                        value={String(scheme.subtitleColor)}
                        onChange={(e) => setScheme({ ...scheme, subtitleColor: e.target.value })}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Bg уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationBackgroundColor)}
                        onChange={(e) =>
                            setScheme({ ...scheme, notificationBackgroundColor: e.target.value })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Рамка уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationBorderColor)}
                        onChange={(e) =>
                            setScheme({ ...scheme, notificationBorderColor: e.target.value })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Текст уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationTextColor)}
                        onChange={(e) =>
                            setScheme({ ...scheme, notificationTextColor: e.target.value })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Иконка</label>
                    <input
                        type="color"
                        value={String(scheme.notificationIconColor)}
                        onChange={(e) =>
                            setScheme({ ...scheme, notificationIconColor: e.target.value })
                        }
                    />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <DSContentBlock
                    title={title}
                    description={description}
                    notificationLabel={notificationLabel}
                    colorScheme={scheme}
                >
                    {childrenText.includes("\n") ? parseChildren(childrenText) : <span>{childrenText}</span>}
                </DSContentBlock>
            </div>
        </div>
    );
}
