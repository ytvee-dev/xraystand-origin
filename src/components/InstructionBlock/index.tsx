import type { IInfoCardResources } from "@domains/Translate";
import { type ReactElement } from "react";
import "./style.css";

export interface IInstructionBlockProps {
    data: IInfoCardResources;
}

const InstructionBlock = ({ data }: IInstructionBlockProps): ReactElement => {
    return (
        <div className="instruction-block">
            <h3 className="instruction-title common-text text-color-common-opacity">
                {data.title}
            </h3>
            <div className="instruction">
                <ul>
                    {data.pointsTextList.map(
                        (pointText: string, index: number) => (
                            <li
                                className="common-text text-color-common-opacity"
                                key={index}
                            >
                                {pointText}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default InstructionBlock;
