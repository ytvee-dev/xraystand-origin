import {type ReactElement, type ReactNode} from "react";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {Languages} from "@domains/Translate";
import "./style.css"

export interface IFlexibleModal {
    modalHeader?: string;
    isModalOpened: boolean;
    closeAction: () => void;
    children: ReactElement | ReactNode;
}

const FlexibleModal = ({children, modalHeader, isModalOpened, closeAction}: IFlexibleModal): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const handleClose = () => {
        closeAction();
    };

    return (
        <Dialog
            open={isModalOpened}
            keepMounted
            onClose={handleClose}
        >
            {modalHeader && <DialogTitle>{modalHeader}</DialogTitle>}
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    {currentLocale === "kz" ? "Жабу" : "Закрыть"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FlexibleModal;