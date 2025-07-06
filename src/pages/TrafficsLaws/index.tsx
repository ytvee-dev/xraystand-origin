import { type ReactElement } from "react";
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
import CoverSection from "@components/trafficLaws/CoverSection";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import "./style.css";

const TrafficsLawsPage = (): ReactElement => {
    const dispatch = useDispatch();
    const isModalOpened: boolean = useSelector((state: TRootState) => state.application.isModalOpened);
    const modalContentName: TContentItem =
        useSelector((state: TRootState) => state.trafficLaws.modalContentName) as IContentLabel;

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
    };

    return (
        <DefaultLayout>
            <div className="traffics-laws-page">
                <FlexibleModal
                    isModalOpened={isModalOpened}
                    closeAction={closeModal}
                >
                    {isModalOpened && (
                        <div>
                            <p>{modalContentName.label}</p>
                            <div>
                                {modalContentName.additionalInfo?.pointsTextList.map((item: string) => (
                                    <p>{item}</p>
                                ))}
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
                <EighthSection />
                <NinthSection />
            </div>
        </DefaultLayout>
    );
};

export default TrafficsLawsPage;
