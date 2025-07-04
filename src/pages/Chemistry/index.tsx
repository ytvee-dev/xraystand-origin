import {type ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {IChemistryPageResources, IContentSectionProps, ITextContent} from "@pages/Chemistry/types.ts";
import {PageIds} from "@domains/Translate";
import type {TRootState} from "@store/index.ts";
import {setIsModalOpened} from "@store/slices/ChemistryPage";
import usePageTranslation from "@hooks/usePageTranslation.ts";
import useWindowWidth from "@hooks/useScreenWidth.ts";
import DefaultLayout from "@layout/Default";
import PeriodicTable from "@components/chemistry/PeriodicTable";
import PeriodicTableMobile from "@components/chemistry/PeriodicTableMobile";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import ChemistryModalContent from "@components/chemistry/ChemistryModalContent";
import "./style.css";

const Chemistry = (): ReactElement => {
    const windowWidth = useWindowWidth();
    const dispatch = useDispatch();
    const isElementModalOpened: boolean = useSelector((state: TRootState) => state.chemistry.isModalOpened);

    const {textTranslation} = usePageTranslation(PageIds.CHEMISTRY_PAGE);
    const sectionMeta: IChemistryPageResources = textTranslation as IChemistryPageResources;
    const sectionMetaTranslation: ITextContent = sectionMeta.section;

    const CustomContentSection = ({title, subtitle, children}: IContentSectionProps) => {
        return (
            <section className="custom-chemistry-content-section">
                <div className="custom-chemistry-content-section-text-container">
                    <h1 className="custom-chemistry-content-section-title">
                        {title}
                    </h1>
                    <h3 className="custom-chemistry-content-section-description">
                        {subtitle}
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
            <CustomContentSection {...sectionMetaTranslation}>
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