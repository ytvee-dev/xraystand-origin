import {type ReactElement, type ReactNode} from "react";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "./style.css"

export interface IFlexibleModal {
    modalHeader?: string;
    isModalOpened: boolean;
    closeAction: () => void;
    children: ReactElement | ReactNode;
}

const FlexibleModal = ({children, modalHeader, isModalOpened, closeAction}: IFlexibleModal): ReactElement => {
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
                <Button onClick={handleClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FlexibleModal;