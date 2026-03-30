import DefaultLayout from "@layout/Default";
import Spinner from "@components/common/Spinner";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import CoverSection from "@modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "@modules/kazakhAdebietModule/Sections/FirstSection";
import ThirdSection from "@modules/kazakhAdebietModule/Sections/ThirdSection";
import SecondSection from "@modules/kazakhAdebietModule/Sections/SecondSection";
import { setModalContentName } from "@store/slices/KazakhAdebietPage";
import { collectFromPathsJson } from "@utils/collectAssetUrls.ts";
import type { IContentLabel } from "@modules/trafficLaws/types";
import { usePreloadImages } from "@hooks/usePreloadImages.ts";
import { setIsModalOpened } from "@store/slices/Application";
import { useSelector, useDispatch } from "react-redux";
import { usePageData } from "@hooks/usePageData";
import type { TRootState } from "@store/index";
import { type ReactElement } from "react";
import "./style.css";

const KazakhAdebiet = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths);

    const { isContentLoaded } = usePageData();
    usePreloadImages(imgUrls);

    const dispatch = useDispatch();

    const isModalOpened = useSelector(
        (state: TRootState) => state.application.isModalOpened,
    );

    const modalContent = useSelector(
        (state: TRootState) => state.kazakhAdebiet.modalContentName,
    );

    const hasModalContent =
        modalContent &&
        typeof modalContent === "object" &&
        "title" in modalContent;

    const shouldOpenModal = isModalOpened && hasModalContent;

    const closeModal = () => {
        dispatch(setIsModalOpened(false));
        dispatch(setModalContentName(""));
    };

    const KazakhModalContent = (): ReactElement => {
        if (!hasModalContent) return <></>;

        const content = modalContent as IContentLabel;

        const additionalInfo = content.additionalInfo;

        const imagePath = additionalInfo?.imagePath;

        const textData = additionalInfo?.text;

        const isPeople = textData?.some(
            (section: any) => section.title === "Өмірбаяны",
        );

        const imageWrapperStyle = isPeople
            ? {}
            : {
                  maxHeight: "none",
                  width: "100%",
                  height: "100%",
                  padding: "0",
              };

        if (!additionalInfo?.text) return <></>;

        return (
            <div className="kz-adebiet-modal-content">
                <div
                    className="kz-adebiet-modal-image-wrapper"
                    style={imageWrapperStyle}
                >
                    <img
                        className="kz-adebiet-image"
                        src={imagePath}
                        alt="author-image"
                    />
                </div>

                {additionalInfo.text.map((modalData: any, id: number) => (
                    <div key={id} className="modal-paragraph">
                        <h3 className="modal-title">{modalData.title}</h3>

                        {modalData.content.map((item: any, i: number) => (
                            <div key={i} className="modal-paragraph-item">
                                {item.subtitle && (
                                    <h4 className="modal-subtitle">
                                        {item.subtitle}
                                    </h4>
                                )}

                                {item.description && (
                                    <p className="modal-description">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <DefaultLayout strictLanguage="kz">
            <div className="kazakh-adebiet-page">
                {!isContentLoaded && <Spinner />}
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />

                <FlexibleModal
                    isModalOpened={shouldOpenModal as boolean}
                    closeAction={closeModal}
                >
                    {shouldOpenModal && hasModalContent && (
                        <KazakhModalContent />
                    )}
                </FlexibleModal>
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;
