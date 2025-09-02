import {type ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {IContentSectionProps, ITextContent} from "./types.ts";
import {Languages} from "../../domains/Translate";
import type {TRootState} from "../../store";
import {setIsModalOpened} from "../../store/slices/ChemistryPage";
import useWindowWidth from "../../hooks/useScreenWidth.ts";
import DefaultLayout from "../../layout/Default";
import PeriodicTable from "../../modules/chemistry/components/PeriodicTable";
import PeriodicTableMobile from "../../modules/chemistry/components/PeriodicTableMobile";
import FlexibleModal from "../../components/common/Modal/FlexibleModal";
import ChemistryModalContent from "../../modules/chemistry/components/ChemistryModalContent";
import Spinner from "@components/common/Spinner";
import * as contentKZ from "../../modules/chemistry/locales/kaz.json";
import * as contentRU from "../../modules/chemistry/locales/rus.json";
import "./style.css";

const Chemistry = (): ReactElement => {
    const windowWidth = useWindowWidth();
    const dispatch = useDispatch();
    const isElementModalOpened: boolean = useSelector((state: TRootState) => state.chemistry.isModalOpened);

    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );

    const sectionMeta = currentLocale === "kz" ? contentKZ : contentRU;
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
        <DefaultLayout langSwitchColor={'#249FF5'}>
            <CustomContentSection {...sectionMetaTranslation}>

                {!isContentLoaded && (<Spinner />)}

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