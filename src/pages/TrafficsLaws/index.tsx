import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import type {IContentLabel, TContentItem} from "@modules/trafficLaws/types";
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
import * as paths from '@modules/trafficLaws/locales/paths.json';
import "./style.css";

const modalPolicemanImagesPaths: Record<string, string[]> = {
    "Для пешеходов": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandUp_v9nefx.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandStop_yfoevu.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051922/policemanHandsSide_fiqpfo.webp"
    ],
    "Для водителей": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051922/policemanHandsSide_fiqpfo.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanInProfile_k9sw1o.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandUp_v9nefx.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandStop_yfoevu.webp",
    ],
    "Реттеушінің қимылдары": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandUp_v9nefx.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandStop_yfoevu.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051922/policemanHandsSide_fiqpfo.webp"
    ],
    "Көлік жүргізушілерге": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051922/policemanHandsSide_fiqpfo.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanInProfile_k9sw1o.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandUp_v9nefx.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/policemanHandStop_yfoevu.webp",
    ],
};

const signsImagesPaths: Record<string, string[]> = {
    "Информационные": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/toptop_f7kwwa.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/bus_h6fe55.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/plus_xrqyhz.webp",
    ],
    "Приоритета": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/romb_fjh25o.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051929/triangle_kazg0z.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/stop_a2motr.webp",
    ],
    "Предписывающие": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051929/up_c0q0jt.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/human_h2xl4b.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/bibicycle_ylnlet.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051925/down_vbkzkj.webp",
    ],
    "Запрещающие": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/nopeople_d3k6wq.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/kirpich_ejm3eb.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/nobicycle_fsu3ur.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/nofast_hh6ydx.webp",
    ],
    "Предупреждающие": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/child_cgwypg.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051930/zebra_bayfjc.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/bicycle_oarkev.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/train_kgk3az.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051925/dangerous_vmcqez.webp",
    ],

    "Ақпараттық белгілер": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/toptop_f7kwwa.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/bus_h6fe55.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/plus_xrqyhz.webp",
    ],
    "Басымдық белгілері": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/romb_fjh25o.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051929/triangle_kazg0z.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/stop_a2motr.webp",
    ],
    "Нұсқаушы белгілер": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051929/up_c0q0jt.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/human_h2xl4b.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051923/bibicycle_ylnlet.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051925/down_vbkzkj.webp",
    ],
    "Тыйым салатын белгілер": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051927/nopeople_d3k6wq.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/kirpich_ejm3eb.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/nobicycle_fsu3ur.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051926/nofast_hh6ydx.webp",
    ],
    "Ескерту белгілері": [
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/child_cgwypg.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051930/zebra_bayfjc.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051924/bicycle_oarkev.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051928/train_kgk3az.webp",
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051925/dangerous_vmcqez.webp",
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
