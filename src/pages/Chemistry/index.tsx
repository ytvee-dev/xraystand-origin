import {useDispatch, useSelector} from "react-redux";
import {type ReactElement} from "react";
import type {ContentSectionProps} from "@pages/Chemistry/types.ts";
import type {TRootState} from "@store/index.ts";
import DefaultLayout from "@layout/Default";
import useWindowWidth from "@hooks/useScreenWidth.ts";
import PeriodicTable from "@components/chemistry/PeriodicTable";
import PeriodicTableMobile from "@components/chemistry/PeriodicTableMobile";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import ChemistryModalContent from "@components/chemistry/ChemistryModalContent";
import {setIsModalOpened} from "@store/slices/ChemistryPage";
import {textContent} from "@pages/Chemistry/meta.ts";
import "./style.css";


const Chemistry = (): ReactElement => {
    const windowWidth = useWindowWidth();
    const dispatch = useDispatch();
    const isElementModalOpened: boolean = useSelector((state: TRootState) => state.chemistry.isModalOpened);

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

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
    };

    return (
        <DefaultLayout>
            <CustomContentSection {...textContent}>
                <FlexibleModal
                    isModalOpened={isElementModalOpened}
                    closeAction={closeModal}
                >
                    <ChemistryModalContent/>
                </FlexibleModal>
                <div className="periodic-table-container">
                    { windowWidth >= 1300 && <PeriodicTable/> }
                    { windowWidth < 1300 && <PeriodicTableMobile/> }
                </div>
            </CustomContentSection>
        </DefaultLayout>
    );
};

export default Chemistry;