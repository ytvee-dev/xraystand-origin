import {type ReactElement} from "react";
import DefaultLayout from "@layout/Default";
import PeriodicTable from "@components/chemistry/PeriodicTable";
import type {ContentSectionProps} from "@pages/Chemistry/types.ts";
import {textContent} from "@pages/Chemistry/meta.ts";
import "./style.css";


const Chemistry = (): ReactElement => {
    const CustomContentSection = ({title, description, children}: ContentSectionProps) => {
        return (
            <section className="custom-chemistry-content-section">
                <div className="custom-chemistry-content-section-text-container">
                    <h1 className="custom-chemistry-content-section-title">
                        {title}
                    </h1>
                    <h3 className="custom-chemistry-content-section-description">
                        {description}
                    </h3>
                </div>
                <div className="custom-chemistry-content-section-content-container">
                    {children}
                </div>
            </section>
        );
    };

    return (
        <DefaultLayout>
            <CustomContentSection {...textContent}>
                <div className="periodic-table-container">
                    <PeriodicTable/>
                </div>
            </CustomContentSection>
        </DefaultLayout>
    );
};

export default Chemistry;