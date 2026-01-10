import {type ReactElement, useState, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {IContentSectionProps, IElementJson, ITextContent} from "./types.ts";
import type {TRootState} from "../../store";
import {selectElement, setIsModalOpened} from "@store/slices/ChemistryPage";
import {usePageData} from "@hooks/usePageData";
import {useLocaleContent} from "@hooks/useLocale";
import DefaultLayout from "@layout/Default";
import PeriodicTable from "@modules/chemistry/components/PeriodicTable";
import PeriodicTableMobile from "@modules/chemistry/components/PeriodicTableMobile";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import ChemistryModalContent from "@modules/chemistry/components/ChemistryModalContent";
import Spinner from "@components/common/Spinner";
import * as contentKZ from "@modules/chemistry/locales/kaz.json";
import * as contentRU from "@modules/chemistry/locales/rus.json";
import "./style.css";
import PeriodicTable3D, {type MinimalElement} from "@modules/chemistry/components/PeriodicTable3D";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";

const Chemistry = (): ReactElement => {
    const { currentLocale, screenWidth, isContentLoaded } = usePageData();
    const sectionMeta = useLocaleContent(contentRU, contentKZ);
    const dispatch = useDispatch();
    const isElementModalOpened: boolean = useSelector((state: TRootState) => state.chemistry.isModalOpened);
    const [viewMode, setViewMode] = useState<'default' | '3d'>('default');

    const sectionMetaTranslation: ITextContent = sectionMeta.section;
    
    const elements = useMemo(() => sectionMeta.elements, [sectionMeta]);
    
    const switchButtons = useMemo(() => ({
        default: currentLocale === "kz" ? 'Стандартты көрініс' : 'Стандартный вид',
        volume: currentLocale === "kz" ? '3D моделі' : '3D Модель',
    }), [currentLocale]);
    
    const buttons = useMemo(() => ({
        table: currentLocale === "ru" ? 'Таблица' : 'Кесте',
        sphere: currentLocale === "ru" ? 'Сфера' : 'Шар',
        helix: currentLocale === "ru" ? 'Спираль' : 'Спираль',
        grid: currentLocale === "ru" ? 'Сетка' : 'Тор',
    }), [currentLocale]);
    
    const isMobile = useMemo(() => screenWidth < 1300, [screenWidth]);

    const CustomContentSection = ({title, subtitle, children}: IContentSectionProps) => {
        return (
            <section className="custom-chemistry-content-section">
                {viewMode === "default" && (
                    <div className="custom-chemistry-content-section-text-container">
                        <h1 className="custom-chemistry-content-section-title">
                            {title}
                        </h1>
                        <h3 className="custom-chemistry-content-section-description">
                            {subtitle}
                        </h3>
                    </div>
                )}
                <div className="custom-chemistry-content-section-content-container">
                    {children}
                </div>
            </section>
        );
    };

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
    };

    const handlePick3D = (el: MinimalElement) => {
        dispatch(selectElement(el as unknown as IElementJson));
        dispatch(setIsModalOpened(true));
    };

    return (
        <DefaultLayout langSwitchColor={'#249FF5'}>
            <div className="chemistry-page">
                {!isContentLoaded && (<Spinner />)}
                <CustomContentSection {...sectionMetaTranslation}>
                <FlexibleModal
                    isModalOpened={isElementModalOpened}
                    closeAction={closeModal}
                >
                    <ChemistryModalContent/>
                </FlexibleModal>

                <ButtonGroup variant="outlined" aria-label="Basic button group" className='buttons-group'>
                    <Button
                        variant={viewMode === 'default' ? 'contained' : 'outlined'}
                        onClick={() => setViewMode('default')}
                    >{switchButtons.default}</Button>
                    <Button
                        variant={viewMode === '3d' ? 'contained' : 'outlined'}
                        onClick={() => setViewMode('3d')}
                    >{switchButtons.volume}</Button>
                </ButtonGroup>

                <div className="periodic-table-container">
                    {viewMode === 'default' && !isMobile && <PeriodicTable/> }
                    {viewMode === 'default' && isMobile && <PeriodicTableMobile/> }

                    {viewMode === '3d' && (
                        <PeriodicTable3D
                            elements={elements as unknown as MinimalElement[]}
                            onPick={handlePick3D}
                            buttons={buttons}
                        />
                    )}
                </div>
                </CustomContentSection>
            </div>
        </DefaultLayout>
    );
};

export default Chemistry;