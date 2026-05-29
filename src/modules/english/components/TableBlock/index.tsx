import * as paths from "@modules/english/locales/paths.json";
import type { IBlockData, IBlockLabel } from "../InfoBlock";
import type { ReactElement } from "react";
import "./style.css";

interface ITableBlockProps {
    title: string;
    labelsData: IBlockData;
    tableText: string[];
}

const TableBlock = ({
    title,
    labelsData,
    tableText,
}: ITableBlockProps): ReactElement => {
    return (
        <div className="table-block">
            <div className="table-block-title">{title}</div>

            <div className="table-block-content">
                <div className="table-block-grid">
                    {paths.blocks.ninethSection.map(
                        (path: string, i: number) => (
                            <img
                                className="table-block-grid-image"
                                key={i}
                                src={path}
                                alt="image"
                            />
                        ),
                    )}
                    {tableText.map((text: string, index: number) => (
                        <span key={index} className="info-block-description">
                            {text}
                        </span>
                    ))}
                </div>

                <div className="table-block-labels-container">
                    <span className="table-block-subtitle info-block-subtitle">
                        {labelsData.title}
                    </span>

                    {labelsData.content?.map(
                        (labelData: IBlockLabel, index: number) => (
                            <span
                                className="info-block-description"
                                key={index}
                            >
                                {labelData.description}
                            </span>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default TableBlock;
