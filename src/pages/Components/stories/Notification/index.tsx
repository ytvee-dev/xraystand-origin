import { useState, type ReactElement } from "react";
import DSNotification, {
    type IFlexibleAlertProps,
} from "@components/common/DSNotification";
import { fieldWrap, box, grid } from "@pages/Components/stories/footer";

export const defaultDSNotificationProps: IFlexibleAlertProps = {
    label: "Notification label",
    type: "warning",
    backgroundColor: "#FEFCF3",
    textColor: "black",
    borderColor: "#EBCD91",
    iconName: "warningIcon",
    iconSize: "19px",
    iconColor: "#BD7D22",
    fullWidth: true,
};

export function DSNotificationPlayground(): ReactElement {
    const [label, setLabel] = useState<string>(defaultDSNotificationProps.label || "");
    const [type, setType] = useState<IFlexibleAlertProps["type"]>(defaultDSNotificationProps.type || "warning");
    const [backgroundColor, setBackgroundColor] = useState<string>(String(defaultDSNotificationProps.backgroundColor || "#FEFCF3"));
    const [textColor, setTextColor] = useState<string>(String(defaultDSNotificationProps.textColor || "black"));
    const [borderColor, setBorderColor] = useState<string>(String(defaultDSNotificationProps.borderColor || "#EBCD91"));
    const [iconName, setIconName] = useState<string>(String(defaultDSNotificationProps.iconName || "warningIcon"));
    const [iconSize, setIconSize] = useState<string>(String(defaultDSNotificationProps.iconSize || "19px"));
    const [iconColor, setIconColor] = useState<string>(String(defaultDSNotificationProps.iconColor || "#BD7D22"));
    const [fullWidth, setFullWidth] = useState<boolean>(Boolean(defaultDSNotificationProps.fullWidth));

    const resetAll = () => {
        setLabel(defaultDSNotificationProps.label || "");
        setType(defaultDSNotificationProps.type || "warning");
        setBackgroundColor(String(defaultDSNotificationProps.backgroundColor || "#FEFCF3"));
        setTextColor(String(defaultDSNotificationProps.textColor || "black"));
        setBorderColor(String(defaultDSNotificationProps.borderColor || "#EBCD91"));
        setIconName(String(defaultDSNotificationProps.iconName || "warningIcon"));
        setIconSize(String(defaultDSNotificationProps.iconSize || "19px"));
        setIconColor(String(defaultDSNotificationProps.iconColor || "#BD7D22"));
        setFullWidth(Boolean(defaultDSNotificationProps.fullWidth));
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{ marginTop: 0, marginBottom: 25 }}>DSNotification</h3>

                <h4>Контент</h4>
                <div style={fieldWrap}>
                    <label>Label</label>
                    <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Тип и ширина</h4>
                <div style={fieldWrap}>
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value as IFlexibleAlertProps["type"])}>
                        <option value="warning">warning</option>
                        <option value="info">info</option>
                    </select>
                </div>
                <div style={fieldWrap}>
                    <label>Full width</label>
                    <input type="checkbox" checked={fullWidth} onChange={(e) => setFullWidth(e.target.checked)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Цвета</h4>
                <div style={fieldWrap}>
                    <label>Background</label>
                    <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Text color</label>
                    <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                </div>
                <div style={fieldWrap}>
                    <label>Border color</label>
                    <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
                </div>

                <h4 style={{ marginTop: 20 }}>Иконка</h4>
                <div style={fieldWrap}>
                    <label>Icon name</label>
                    <input type="text" value={iconName} onChange={(e) => setIconName(e.target.value)} placeholder="warningIcon" />
                </div>
                <div style={fieldWrap}>
                    <label>Icon size</label>
                    <input type="text" value={iconSize} onChange={(e) => setIconSize(e.target.value)} placeholder="19px" />
                </div>
                <div style={fieldWrap}>
                    <label>Icon color</label>
                    <input type="color" value={iconColor} onChange={(e) => setIconColor(e.target.value)} />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <button type="button" onClick={resetAll}>Reset</button>
                </div>
            </div>

            <div>
                <DSNotification
                    label={label}
                    type={type}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    iconName={iconName}
                    iconSize={iconSize}
                    iconColor={iconColor}
                    fullWidth={fullWidth}
                />
            </div>
        </div>
    );
}
