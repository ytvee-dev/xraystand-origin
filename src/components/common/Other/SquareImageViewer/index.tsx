import {type ReactElement} from "react";
import "./style.css";

export interface ISquareImageViewerProps {
    path: string;
    width?: number;
}


const SquareImageViewer = ({path, width}: ISquareImageViewerProps): ReactElement => {
    return (
        <div className="square-image-wrapper" style={{maxWidth: width}}>
            <img className="square-image" src={path} alt="square image"/>
        </div>
    );
};

export default SquareImageViewer;
