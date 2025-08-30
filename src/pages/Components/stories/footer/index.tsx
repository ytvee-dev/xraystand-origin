import { useState } from "react";
import type { IStrictFooterContent } from "@components/common/Footers/StrictFooter/types";
import Footer from "@components/common/Footers/StrictFooter";
import madeBySrcLight from "@assets/madeByLight.avif";
import madeBySrcDark from "@assets/madeByDark.avif";

export const defaultFooterSX = {
    backgroundColor: "#181818",
    boldTextColor: "#ffffff",
    textColor: "#FFFFFF66",
    copyrightColor: "#FFFFFF66",
    logoColorMode: "light" as "light" | "dark",
    madeByColorMode: "light" as "light" | "dark",
};

export const strictFooterMeta: IStrictFooterContent = {
    logoPath: `./assets/icons/sprite.svg#`,
    contacts: {
        email: "hello@example.com",
        phone: "+7 (999) 123-45-67",
    },
    copyright: "© 2025 Компания. Все права защищены.",
    content: {
        description: "Короткое описание проекта/продукта. Можно редактировать ниже.",
        buttonsText: {
            support: "Техподдержка",
            privacy: "Политика конфиденциальности",
        },
        madeBy: {
            link: "https://ytvee.com/service",
            imagePath: {
                light: madeBySrcLight,
                dark: madeBySrcDark,
            },
        },
    }
};

export const fieldWrap: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "8px",
    alignItems: "center",
    marginBottom: 10,
};

export const box: React.CSSProperties = {
    padding: 16,
    border: "1px solid #e5e5e5",
    borderRadius: 12,
    background: "#fff",
};

export const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "340px minmax(0,1fr)",
    gap: 24,
    alignItems: "start",
};

export function FooterPlayground() {
    const [sx, setSx] = useState(defaultFooterSX);
    const [meta, setMeta] = useState<IStrictFooterContent>(strictFooterMeta);

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>Footer</h3>

                <h4>Цвета</h4>
                <div style={fieldWrap}>
                    <label>Background</label>
                    <input
                        type="color"
                        value={sx.backgroundColor}
                        onChange={(e) => setSx({ ...sx, backgroundColor: e.target.value })}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Bold text</label>
                    <input
                        type="color"
                        value={sx.boldTextColor}
                        onChange={(e) => setSx({ ...sx, boldTextColor: e.target.value })}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Text</label>
                    <input
                        type="color"
                        value={sx.textColor}
                        onChange={(e) => setSx({ ...sx, textColor: e.target.value })}
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Copyright Text</label>
                    <input
                        type="color"
                        value={sx.copyrightColor}
                        onChange={(e) => setSx({ ...sx, copyrightColor: e.target.value })}
                    />
                </div>

                <h4 style={{ marginTop: 20 }}>Режимы</h4>
                <div style={fieldWrap}>
                    <label>Logo</label>
                    <div>
                        <label style={{ marginRight: 12 }}>
                            <input
                                type="radio"
                                name="logoMode"
                                checked={sx.logoColorMode === "light"}
                                onChange={() => setSx({ ...sx, logoColorMode: "light" })}
                            />{" "}
                            light
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="logoMode"
                                checked={sx.logoColorMode === "dark"}
                                onChange={() => setSx({ ...sx, logoColorMode: "dark" })}
                            />{" "}
                            dark
                        </label>
                    </div>
                </div>

                <div style={fieldWrap}>
                    <label>Made by</label>
                    <div>
                        <label style={{ marginRight: 12 }}>
                            <input
                                type="radio"
                                name="madeByMode"
                                checked={sx.madeByColorMode === "light"}
                                onChange={() => setSx({ ...sx, madeByColorMode: "light" })}
                            />{" "}
                            light
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="madeByMode"
                                checked={sx.madeByColorMode === "dark"}
                                onChange={() => setSx({ ...sx, madeByColorMode: "dark" })}
                            />{" "}
                            dark
                        </label>
                    </div>
                </div>

                <h4 style={{ marginTop: 20 }}>Контент</h4>
                <div style={fieldWrap}>
                    <label>Описание</label>
                    <textarea
                        rows={3}
                        value={meta.content.description}
                        onChange={(e) =>
                            setMeta({
                                ...meta,
                                content: { ...meta.content, description: e.target.value },
                            })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Support</label>
                    <input
                        type="text"
                        value={meta.content.buttonsText.support}
                        onChange={(e) =>
                            setMeta({
                                ...meta,
                                content: {
                                    ...meta.content,
                                    buttonsText: {
                                        ...meta.content.buttonsText,
                                        support: e.target.value,
                                    },
                                },
                            })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Privacy</label>
                    <input
                        type="text"
                        value={meta.content.buttonsText.privacy}
                        onChange={(e) =>
                            setMeta({
                                ...meta,
                                content: {
                                    ...meta.content,
                                    buttonsText: {
                                        ...meta.content.buttonsText,
                                        privacy: e.target.value,
                                    },
                                },
                            })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={meta.contacts.email}
                        onChange={(e) =>
                            setMeta({
                                ...meta,
                                contacts: { ...meta.contacts, email: e.target.value },
                            })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>Телефон</label>
                    <input
                        type="text"
                        value={meta.contacts.phone}
                        onChange={(e) =>
                            setMeta({
                                ...meta,
                                contacts: { ...meta.contacts, phone: e.target.value },
                            })
                        }
                    />
                </div>
                <div style={fieldWrap}>
                    <label>©</label>
                    <input
                        type="text"
                        value={meta.copyright}
                        onChange={(e) => setMeta({ ...meta, copyright: e.target.value })}
                    />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={() => setSx(defaultFooterSX)}>
                        Reset SX
                    </button>
                    <button type="button" onClick={() => setMeta(strictFooterMeta)}>
                        Reset Meta
                    </button>
                </div>
            </div>

            {/* Превью */}
            <div>
                <Footer meta={meta} sx={sx} />
            </div>
        </div>
    );
}
