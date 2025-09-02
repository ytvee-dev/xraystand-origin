import {type ReactElement} from "react";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import "./style.css";

export interface ISquareImageViewerProps {
    path: string;
    width?: number | string;
    height?: number | string;
    objectFit?: "contain" | "cover";
    imagePadding?: number | string;
}


const SquareImageViewer = ({
    path,
    width,
    height="",
    objectFit="contain",
    imagePadding = "29px"
}: ISquareImageViewerProps): ReactElement => {
    return (
        <div
            className="square-image-wrapper"
            style={{
                maxWidth: width,
                height: height,
                padding: imagePadding,
            }}
        >
            <LazyLoadImage
                className="square-image"
                alt={"square image"}
                src={path}
                style={{
                    objectFit: objectFit
                }}
            />
        </div>
    );
};

export default SquareImageViewer;
