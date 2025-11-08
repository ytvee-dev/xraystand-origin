import {type ReactElement} from "react";
import type {TRootState} from "../../store";
import type {IContentLabel, TContentItem} from "@utils/types/trafficLawsTypes";
import {useDispatch, useSelector} from "react-redux";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {setIsModalOpened} from "@store/slices/Application";
import {setModalContentName} from "@store/slices/TrafficLawsPage";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import DefaultLayout from "@layout/Default";
import FirstSection from "@modules/trafficLaws/Sections/FirstSection";
import SecondSection from "@modules/trafficLaws/Sections/SecondSection";
import ThirdSection from "@modules/trafficLaws/Sections/ThirdSection";
import FourthSection from "@modules/trafficLaws/Sections/FourthSection";
import FifthSection from "@modules/trafficLaws/Sections/FifthSection";
import SixthSection from "@modules/trafficLaws/Sections/SixthSection";
import SeventhSection from "@modules/trafficLaws/Sections/SeventhSection";
import EighthSection from "@modules/trafficLaws/Sections/EighthSection";
import NinthSection from "@modules/trafficLaws/Sections/NinthSection";
import CoverSection from "@modules/trafficLaws/Sections/CoverSection";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import DefaultImageCard from "@modules/trafficLaws/components/DefaultImageCard";
import Spinner from "@components/common/Spinner";
import * as paths from '@data/imageSrc.json';
import "./style.css";

const modalPolicemanImagesPaths: Record<string, string[]> = {
    "Для пешеходов": [
        "trafficLawsPage/modal/policemanHandUp",
        "trafficLawsPage/modal/policemanHandStop",
        "trafficLawsPage/modal/policemanHandsSide"
    ],
    "Для водителей": [
        "trafficLawsPage/modal/policemanHandsSide",
        "trafficLawsPage/modal/policemanInProfile",
        "trafficLawsPage/modal/policemanHandUp",
        "trafficLawsPage/modal/policemanHandStop",
    ],
    "Реттеушінің қимылдары": [
        "trafficLawsPage/modal/policemanHandUp",
        "trafficLawsPage/modal/policemanHandStop",
        "trafficLawsPage/modal/policemanHandsSide"
    ],
    "Көлік жүргізушілерге": [
        "trafficLawsPage/modal/policemanHandsSide",
        "trafficLawsPage/modal/policemanInProfile",
        "trafficLawsPage/modal/policemanHandUp",
        "trafficLawsPage/modal/policemanHandStop",
    ],
};

const signsImagesPaths: Record<string, string[]> = {
    "Информационные": [
        "trafficLawsPage/modal/signs/toptop",
        "trafficLawsPage/modal/signs/bus",
        "trafficLawsPage/modal/signs/plus",
    ],
    "Приоритета": [
        "trafficLawsPage/modal/signs/romb",
        "trafficLawsPage/modal/signs/triangle",
        "trafficLawsPage/modal/signs/stop",
    ],
    "Предписывающие": [
        "trafficLawsPage/modal/signs/up",
        "trafficLawsPage/modal/signs/human",
        "trafficLawsPage/modal/signs/bibicycle",
        "trafficLawsPage/modal/signs/down",
    ],
    "Запрещающие": [
        "trafficLawsPage/modal/signs/nopeople",
        "trafficLawsPage/modal/signs/kirpich",
        "trafficLawsPage/modal/signs/nobicycle",
        "trafficLawsPage/modal/signs/nofast",
    ],
    "Предупреждающие": [
        "trafficLawsPage/modal/signs/child",
        "trafficLawsPage/modal/signs/zebra",
        "trafficLawsPage/modal/signs/bicycle",
        "trafficLawsPage/modal/signs/train",
        "trafficLawsPage/modal/signs/dangerous",
    ],

    "Ақпараттық белгілер": [
        "trafficLawsPage/modal/signs/toptop",
        "trafficLawsPage/modal/signs/bus",
        "trafficLawsPage/modal/signs/plus",
    ],
    "Басымдық белгілері": [
        "trafficLawsPage/modal/signs/romb",
        "trafficLawsPage/modal/signs/triangle",
        "trafficLawsPage/modal/signs/stop",
    ],
    "Нұсқаушы белгілер": [
        "trafficLawsPage/modal/signs/up",
        "trafficLawsPage/modal/signs/human",
        "trafficLawsPage/modal/signs/bibicycle",
        "trafficLawsPage/modal/signs/down",
    ],
    "Тыйым салатын белгілер": [
        "trafficLawsPage/modal/signs/nopeople",
        "trafficLawsPage/modal/signs/kirpich",
        "trafficLawsPage/modal/signs/nobicycle",
        "trafficLawsPage/modal/signs/nofast",
    ],
    "Ескерту белгілері": [
        "trafficLawsPage/modal/signs/child",
        "trafficLawsPage/modal/signs/zebra",
        "trafficLawsPage/modal/signs/bicycle",
        "trafficLawsPage/modal/signs/train",
        "trafficLawsPage/modal/signs/dangerous",
    ],

};

const TrafficsLawsPage = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths)
    usePreloadImages(imgUrls);

    const { isContentLoaded } = usePageData();
    const dispatch = useDispatch();

    const isModalOpened: boolean = useSelector((state: TRootState) => state.application.isModalOpened);
    const modalContentName: TContentItem =
        useSelector((state: TRootState) => state.trafficLaws.modalContentName) as IContentLabel;
    
    // Проверяем, что modalContentName - это объект с title (не пустая строка)
    const hasModalContent = modalContentName && typeof modalContentName === 'object' && 'title' in modalContentName;
    const title = hasModalContent ? (modalContentName as IContentLabel).title || "" : "";

    const splitString = (str: string): string[] => {
        const i = str.indexOf("—");
        return [
            str.slice(0, i),
            str.slice(i + 2)
        ];
    }

    const PoliceManModalContent = (): ReactElement => {
        if (!hasModalContent) return <></>;
        const content = modalContentName as IContentLabel;
        return (
            <div className="tl-modal-content">
                {content.additionalInfo?.pointsTextList.map((item: string, index: number) => (
                    <DefaultImageCard
                        key={index}
                        imageId={modalPolicemanImagesPaths[content.title!][index]}
                        title={splitString(content.additionalInfo?.pointsTextList[index] as string)[0]}
                        label={splitString(item as string)[1]}
                    />
                ))}
            </div>
        );
    };

    const SignModalContent = (): ReactElement => {
        if (!hasModalContent) return <></>;
        const content = modalContentName as IContentLabel;
        return (
            <div className="tl-modal-content">
                {content.additionalInfo?.pointsTextList.map((_item: string, index: number) => (
                    <DefaultImageCard
                        key={index}
                        imageId={signsImagesPaths[content.title!][index]}
                        title={content.additionalInfo?.pointsTextList[index]}
                    />
                ))}
            </div>
        );
    };

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
        dispatch(setModalContentName(""));
    };

    // Открываем модальное окно только если есть modalContentName (т.е. это модальное окно для знаков/жестов)
    const shouldOpenModal = isModalOpened && hasModalContent;

    return (
        <DefaultLayout langSwitchColor={'#249FF5'}>
            <div className="traffics-laws-page">
                {!isContentLoaded && (<Spinner />)}
                <FlexibleModal
                    isModalOpened={shouldOpenModal}
                    closeAction={closeModal}
                >
                    {shouldOpenModal && hasModalContent && (
                        <div>
                            <p className="tl-modal-title">{(modalContentName as IContentLabel).title}</p>
                            <div className="tl-modal-content">
                                {title in modalPolicemanImagesPaths && <PoliceManModalContent/>}
                                {title in signsImagesPaths && <SignModalContent/>}
                            </div>
                        </div>
                    )}
                </FlexibleModal>
                <CoverSection/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
                <SixthSection/>
                <SeventhSection/>
                <EighthSection/>
                <NinthSection/>
            </div>
        </DefaultLayout>
    );
};

export default TrafficsLawsPage;
