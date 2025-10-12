import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import {Chip} from "@mui/material";
import "./style.css";

interface DevelopmentSectionProps {
    content: HomeSection;
}

const COLORS_PAIRS = [
    { background: '#5C6064', text: '#FFFFFF' },
    { background: '#EFFA7A', text: '#000000' },
    { background: '#000000', text: '#FFFFFF' },
];

const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({content}): ReactElement => {

    const [chipsFirstPart, chipsSecondPart, chipsThirdPart] = React.useMemo(() => {
        const items = content.content ?? [];
        const n = items.length;
        const k = 3;

        const base = Math.floor(n / k);
        const extra = n % k;
        const sizes = [base, base, base + extra];
        let start = 0;

        const a0 = items.slice(start, start + sizes[0]); start += sizes[0];
        const b0 = items.slice(start, start + sizes[1]); start += sizes[1];
        const c0 = items.slice(start, start + sizes[2]);

        const takeFromStart = (arr: typeof items) => [arr[0], arr.slice(1)] as const;
        const takeFromEnd   = (arr: typeof items) => [arr[arr.length - 1], arr.slice(0, -1)] as const;

        let a = a0, b = b0, c = c0;

        if (b.length) {
            const [el, rest] = takeFromStart(b);
            a = [...a, el];
            b = rest;
        }
        if (c.length) {
            const [el, rest] = takeFromEnd(c);
            a = [...a, el];
            c = rest;
        }

        return [a, b, c] as const;
    }, [content.content]);

    return (
        <section id="home-development" className="home-section development-section">
            <div className="development-wrapper">
                <div className="development-text-wrapper">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                </div>
                <div className="development-chips-wrapper">
                    <div className="chips-first-line">
                        {chipsSecondPart?.map((chip, i) => {
                            const color = COLORS_PAIRS[i % COLORS_PAIRS.length];
                            return (
                                <Chip
                                    key={chip.title}
                                    label={chip.title}
                                    onClick={() => {}}
                                    sx={{
                                        backgroundColor: color.background,
                                        color: color.text,
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: '16px',
                                    }}
                                />
                            );
                        })}
                    </div>
                    <div className="chips-second-line">
                        {chipsFirstPart?.map((chip, i) => {
                        const color = COLORS_PAIRS[i % COLORS_PAIRS.length];
                        return (
                            <Chip
                                key={chip.title}
                                label={chip.title}
                                onClick={() => {}}
                                sx={{
                                    backgroundColor: color.background,
                                    color: color.text,
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '16px',
                                }}
                            />
                        );
                    })}
                    </div>
                    <div className="chips-third-line">
                        {chipsThirdPart?.map((chip, i) => {
                        const color = COLORS_PAIRS[i % COLORS_PAIRS.length];
                        return (
                            <Chip
                                key={chip.title}
                                label={chip.title}
                                onClick={() => {}}
                                sx={{
                                    backgroundColor: color.background,
                                    color: color.text,
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '16px',
                                }}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentSection;