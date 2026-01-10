import React, { type ReactElement } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOpened } from "@store/slices/Application";
import { setModalContentName } from "@store/slices/TrafficLawsPage";
import type { TRootState } from "@store/index";
import { useLocaleContent } from "@hooks/useLocale";
import { trafficLawsFooterMeta } from "@components/common/Footers/StrictFooter/content";
import "./style.css";

const PrivacyPolicyModal: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isModalOpened = useSelector((state: TRootState) => state.application.isModalOpened);
    const modalContentName = useSelector((state: TRootState) => state.trafficLaws.modalContentName);
    const content = useLocaleContent(trafficLawsFooterMeta.ru, trafficLawsFooterMeta.kz);

    // Открываем PrivacyPolicyModal только если нет modalContentName (т.е. это не модальное окно для знаков/жестов)
    // Проверяем, что modalContentName - это пустая строка или не объект с title
    const hasModalContent = modalContentName && typeof modalContentName === 'object' && 'title' in modalContentName;
    const shouldOpen = isModalOpened && !hasModalContent;

    const handleClose = () => {
        dispatch(setIsModalOpened(false));
        dispatch(setModalContentName(""));
    };

    return (
        <Modal
            open={shouldOpen}
            onClose={handleClose}
            aria-labelledby="privacy-policy-modal"
            className="privacy-policy-modal"
        >
            <Box className="privacy-policy-modal-content">
                <Box className="privacy-policy-modal-header">
                    <Typography 
                        id="privacy-policy-modal" 
                        variant="h4" 
                        component="h2"
                        className="privacy-policy-modal-title"
                    >
                        {content.content.privacyPolicyText.title}
                    </Typography>
                    <IconButton 
                        onClick={handleClose}
                        className="privacy-policy-modal-close"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                
                <Box className="privacy-policy-modal-body">
                    <div
                        className="privacy-policy-content"
                        dangerouslySetInnerHTML={{ __html: content.content.privacyPolicyText.content }}
                    />
                </Box>
            </Box>
        </Modal>
    );
};

export default PrivacyPolicyModal;

