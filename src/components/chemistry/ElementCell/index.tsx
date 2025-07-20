import type {FC} from "react";
import type {ICellProps} from "@pages/Chemistry/types.ts";
import {VARIANT} from "@components/chemistry/ElementCell/meta.ts";
import "./style.css";

export const ElementCell: FC<ICellProps> = ({
    variant="DESKTOP",
    number,
    name,
    symbol,
    category,
    xpos,
    ypos,
    atomic_mass,
    visible,
    action = () => {},
}) => (
    <div
        key={number}
        // number === 0 if line need to be empty
        className={`${number !== 0 ? "cell " + VARIANT[variant] : "empty-cell"}`}
        data-category={category}
        style={{
            gridRowStart: ypos,
            gridColumnStart: xpos,
            backgroundColor: !visible ? "transparent" : "",
            transition: "background-color 0.3s ease-in-out",
            cursor: visible ? "pointer" : "auto",
        }}
        onClick={visible ? action : undefined}
    >
        {/* number === 0 if line need to be empty */}
        <span className="number">{number !== 0 && number}</span>
        <span className="symbol">{symbol}</span>
        <span className="name">{name}</span>
        <span className="atomic-mass">{atomic_mass}</span>
    </div>
);

export default ElementCell;
