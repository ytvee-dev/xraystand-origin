import {type ReactElement, useEffect, useState} from "react";
import type {TRootState} from "@store/index.ts";
import type {IContentLabel, TContentItem} from "@utils/types/trafficLawsTypes";
import {useDispatch, useSelector} from "react-redux";
import {setIsModalOpened} from "@store/slices/Application";
import DefaultLayout from "@layout/Default";
import FirstSection from "@pages/TrafficsLaws/Sections/FirstSection";
import SecondSection from "@pages/TrafficsLaws/Sections/SecondSection";
import ThirdSection from "@pages/TrafficsLaws/Sections/ThirdSection";
import FourthSection from "@pages/TrafficsLaws/Sections/FourthSection";
import FifthSection from "@pages/TrafficsLaws/Sections/FifthSection";
import SixthSection from "@pages/TrafficsLaws/Sections/SixthSection";
import SeventhSection from "@pages/TrafficsLaws/Sections/SeventhSection";
import EighthSection from "@pages/TrafficsLaws/Sections/EighthSection";
import NinthSection from "@pages/TrafficsLaws/Sections/NinthSection";
import CoverSection from "@pages/TrafficsLaws/Sections/CoverSection";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import DefaultImageCard from "@components/common/Cards/DefaultImageCard";
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
};

const signsImagesPaths: Record<string, string[]> = {
    "Информационные": [
        "trafficLawsPage/modal/zebra",
        "trafficLawsPage/modal/stopPlace",
        "trafficLawsPage/modal/stop",
        "trafficLawsPage/modal/stop",
    ],
    "Приоритета": [
        "trafficLawsPage/modal/",
    ],
    "": [
        "trafficLawsPage/modal/",
    ],

};

const TrafficsLawsPage = (): ReactElement => {
    const dispatch = useDispatch();
    const isModalOpened: boolean = useSelector((state: TRootState) => state.application.isModalOpened);
    const modalContentName: TContentItem =
        useSelector((state: TRootState) => state.trafficLaws.modalContentName) as IContentLabel;
    const [modalTitle, setModalTitle] = useState<string>(
        modalContentName.title || "none"
    );
    console.log(modalContentName)

    const splitString = (str: string): string[] => {
        const i = str.indexOf("—");
        return [
            str.slice(0, i),
            str.slice(i + 2)
        ];
    }

    const PoliceManModalContent = (): ReactElement => {
        return (
            <div className="tl-modal-content">
                {modalContentName.additionalInfo?.pointsTextList.map((item: string, index: number) => (
                    <DefaultImageCard
                        imageId={modalPolicemanImagesPaths[modalContentName.title!][index]}
                        title={splitString(modalContentName.additionalInfo?.pointsTextList[index] as string)[0]}
                        label={splitString(item as string)[1]}
                    />
                ))}
            </div>
        );
    };

    const SignModalContent = (): ReactElement => {
        return (
            <div className="tl-modal-content">
                {modalContentName.additionalInfo?.pointsTextList.map((_item: string, index: number) => (
                    <DefaultImageCard
                        imageId={modalPolicemanImagesPaths[modalContentName.title!][index]}
                        title={modalContentName.additionalInfo?.pointsTextList[index]}
                    />
                ))}
            </div>
        );
    };

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
    };

    useEffect(() => {
        const title = modalContentName?.title || "";
        setModalTitle(title);
    }, [isModalOpened])

    return (
        <DefaultLayout>
            <div className="traffics-laws-page">
                <FlexibleModal
                    isModalOpened={isModalOpened}
                    closeAction={closeModal}
                >
                    {isModalOpened && (
                        <div>
                            <p className="tl-modal-title">{modalContentName.title}</p>
                            <div className="tl-modal-content">
                                {modalTitle in modalPolicemanImagesPaths && <PoliceManModalContent/>}
                                {modalTitle in signsImagesPaths && <SignModalContent/>}
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
