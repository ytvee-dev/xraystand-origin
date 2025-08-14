import { type ReactElement } from "react";
import "./style.css"

export interface IPageModal {
    sectionName: string;
    modalTitle: string;
}

const PageModal = ({ sectionName, modalTitle }: IPageModal): ReactElement => {
    return (
        <div className="tl-page-modal-container">{sectionName} - {modalTitle}</div>
    );
};

export default PageModal;