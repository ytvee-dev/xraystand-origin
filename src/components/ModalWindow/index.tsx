import { type ReactElement } from "react";
import "./style.css";

export interface IModalWindowProps {
    children: ReactElement;
}

const ModalWindow = ({ children }: IModalWindowProps): ReactElement => {
    return (
        <div className="modal-window-wrapper">
            <div className="modal">{children}</div>
        </div>
    );
};

export default ModalWindow;
