import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { IRootReducer } from "redux-app/reducer";
import { appHideDialog } from 'redux-app/app/actions';
import { useSelector, useDispatch } from 'react-redux';

function DialogGlobal() {
    const { type, title, showTitle, content, onOpen, onClose, onAccept, onCancel, visible } = useSelector((state: IRootReducer) => state.app.dialog);
    const dispatch = useDispatch();

    const handleClose = () => {
        onClose && onClose();
        dispatch(appHideDialog());
    };

    const handleCancel = () => {
        onCancel && onCancel();
        dispatch(appHideDialog());
    };

    const handleAccept = () => {
        onAccept && onAccept();
        dispatch(appHideDialog());
    };

    React.useEffect(() => {
        if (visible === true) {
            onOpen && onOpen();
        }
    }, [visible, onOpen]);

    return <Dialog
        open={visible === true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        {showTitle && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        <DialogContent>
            {content}
        </DialogContent>
        <DialogActions>
            {type === "confirm" && <Button onClick={handleCancel} color="primary">Cancelar</Button>}
            <Button onClick={handleAccept} color="primary" autoFocus>Aceptar</Button>
        </DialogActions>
    </Dialog>
}

export default DialogGlobal;