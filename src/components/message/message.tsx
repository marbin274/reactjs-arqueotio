import { useSelector, useDispatch } from "react-redux";
import { Alert } from '@material-ui/lab';
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { IRootReducer } from "redux-app/reducer";
import { appHideAlert } from 'redux-app/app/actions';

export default function Message() {
    const { visible, message, severity } = useSelector((state: IRootReducer) => state.app.message);
    const dispatch = useDispatch();


    const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(appHideAlert());
    };

    return (
        <Snackbar open={visible} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} variant="filled" elevation={6}>
                {message}
            </Alert>
        </Snackbar>
    );
}
