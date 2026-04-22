import * as paths from "@modules/english/locales/paths.json";
import type { IBlockLabel } from "../InfoBlock";
import type { ReactElement } from "react";
import "./style.css";

interface ITextBlock {
    title?: string;
    labels?: IBlockLabel[];
}

const TextBlock = ({ title, labels }: ITextBlock): ReactElement => {
    return (
        <div className="text-block">
            <span className="text-block-title">{title}</span>

            <div className="text-block-content">
                <div className="text-block-images-wrapper">
                    {paths.blocks.ninethSection
                        .slice(1)
                        .map((path: string, i: number) => (
                            <img
                                key={i}
                                className="text-block-image"
                                src={path}
                                alt="image"
                            />
                        ))}
                </div>

                {labels && (
                    <div className="text-block-labels">
                        {labels.map((labelData: IBlockLabel, index: number) => (
                            <span
                                className="info-block-description"
                                key={index}
                            >
                                {labelData.description}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextBlock;
