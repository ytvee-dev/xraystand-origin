import {useState, type ReactElement} from "react";
import FlexibleModal, {type IFlexibleModal} from "@components/common/Modal/FlexibleModal";
import {fieldWrap, box, grid} from "@pages/Components/stories/footer";

export const defaultFlexibleModalProps: IFlexibleModal = {
    modalHeader: "Заголовок модального окна",
    isModalOpened: false,
    closeAction: () => {
    },
    children: <p>Контент модального окна</p>,
};

function parseChildren(text: string) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    return (
        <div>
            {lines.map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
}

export function FlexibleModalPlayground(): ReactElement {
    const [modalHeader, setModalHeader] = useState<string>(defaultFlexibleModalProps.modalHeader || "");
    const [isModalOpened, setIsModalOpened] = useState<boolean>(Boolean(defaultFlexibleModalProps.isModalOpened));
    const [childrenText, setChildrenText] = useState<string>("Контент модального окна");

    const openModal = () => setIsModalOpened(true);
    const closeAction = () => setIsModalOpened(false);

    const resetAll = () => {
        setModalHeader(defaultFlexibleModalProps.modalHeader || "");
        setIsModalOpened(false);
        setChildrenText("Контент модального окна");
    };

    return (
        <div style={grid}>
            <div style={box}>
                <h3 style={{marginTop: 0, marginBottom: 25}}>FlexibleModal</h3>

                <h4>Параметры</h4>
                <div style={fieldWrap}>
                    <label>Заголовок</label>
                    <input type="text" value={modalHeader} onChange={(e) => setModalHeader(e.target.value)}/>
                </div>

                <div style={fieldWrap}>
                    <label>Контент</label>
                    <textarea
                        rows={6}
                        value={childrenText}
                        onChange={(e) => setChildrenText(e.target.value)}
                    />
                </div>

                <div style={fieldWrap}>
                    <label>Открыт</label>
                    <input
                        type="checkbox"
                        checked={isModalOpened}
                        onChange={(e) => setIsModalOpened(e.target.checked)}
                    />
                </div>

                <div style={{display: "flex", gap: 12, marginTop: 12}}>
                    <button type="button" onClick={openModal}>Open</button>
                    <button type="button" onClick={resetAll}>Reset</button>
                </div>
            </div>

            <div>
                <FlexibleModal
                    modalHeader={modalHeader}
                    isModalOpened={isModalOpened}
                    closeAction={closeAction}
                >
                    {parseChildren(childrenText)}
                </FlexibleModal>
            </div>
        </div>
    );
}
