import {useState} from "react";
import LargeCard, {
    type ILargeCardProps,
    type ILargeCardDescription,
    type ILargeCardColorScheme,
} from "@components/common/Cards/LargeCard";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

export const defaultLargeCardColorScheme: ILargeCardColorScheme = {
    titleColor: "#289FF5",
    subtitleColor: "black",
    descriptionColor: "black",
    notificationBackgroundColor: "beige",
    notificationTextColor: "black",
};

export const defaultLargeCardProps: ILargeCardProps = {
    title: "Заголовок",
    description: {
        subtitle: "Подзаголовок",
        content: ["Пункт 1", "Пункт 2", "Пункт 3"],
    },
    notificationLabel: "Уведомление",
    colorScheme: defaultLargeCardColorScheme,
    children: <p>Контент карточки</p>,
};

function parseChildren(text: string) {
    const lines = text.split("\n");
    return (
        <div>
            {lines.map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
}

export function LargeCardPlayground() {
    const [title, setTitle] = useState<string>(defaultLargeCardProps.title ?? "");
    const [subtitle, setSubtitle] = useState<string>(
        typeof defaultLargeCardProps.description === "string"
            ? defaultLargeCardProps.description
            : (defaultLargeCardProps.description as ILargeCardDescription).subtitle
    );
    const [childrenText, setChildrenText] = useState<string>("Контент карточки");
    const [notificationLabel, setNotificationLabel] = useState<string>(
        defaultLargeCardProps.notificationLabel ?? ""
    );
    const [scheme, setScheme] = useState<ILargeCardColorScheme>({
        ...defaultLargeCardColorScheme,
        notificationBackgroundColor: defaultLargeCardColorScheme.notificationBackgroundColor as string,
    });

    const description: string | ILargeCardDescription =
        { subtitle, content: [] };

    const resetAll = () => {
        setTitle(defaultLargeCardProps.title ?? "");
        setSubtitle(
            typeof defaultLargeCardProps.description === "string"
                ? defaultLargeCardProps.description
                : (defaultLargeCardProps.description as ILargeCardDescription).subtitle
        );
        setChildrenText("Контент карточки");
        setNotificationLabel(defaultLargeCardProps.notificationLabel ?? "");
        setScheme(defaultLargeCardColorScheme);
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{marginTop: 0, marginBottom: 25}}>Large Card</h3>

                <h4>Текст</h4>
                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div style={fieldWrap}>
                    <label>Подзаголовок</label>
                    <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                </div>

                <div style={fieldWrap}>
                    <label>Контент (children)</label>
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

                <h4 style={{marginTop: 20}}>Цвета</h4>
                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input
                        type="color"
                        value={String(scheme.titleColor)}
                        onChange={(e) => setScheme({...scheme, titleColor: e.target.value})}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Подзаголовок</label>
                    <input
                        type="color"
                        value={String(scheme.subtitleColor)}
                        onChange={(e) => setScheme({...scheme, subtitleColor: e.target.value})}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Bg уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationBackgroundColor)}
                        onChange={(e) =>
                            setScheme({...scheme, notificationBackgroundColor: e.target.value as any})
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Текст уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationTextColor)}
                        onChange={(e) =>
                            setScheme({...scheme, notificationTextColor: e.target.value})
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Иконка уведомления</label>
                    <input
                        type="color"
                        value={String(scheme.notificationTextColor)}
                        onChange={(e) =>
                            setScheme({...scheme, notificationIconColor: e.target.value})
                        }
                    />
                </div>

                <div style={{display: "flex", gap: 12, marginTop: 12}}>
                    <button type="button" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <LargeCard
                    title={title}
                    description={description}
                    notificationLabel={notificationLabel}
                    colorScheme={scheme}
                >
                    {childrenText.includes("\n") ? parseChildren(childrenText) : <span>{childrenText}</span>}
                </LargeCard>
            </div>
        </div>
    );
}
