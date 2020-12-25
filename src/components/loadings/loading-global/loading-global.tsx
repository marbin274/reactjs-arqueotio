import React, { FunctionComponent } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { IRootReducer } from "redux-app/reducer";
import { useSelector } from "react-redux";

import './loading-global.scss';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const LoadingGlobal: FunctionComponent = () => {
    const { loading, message, content, noOpacity, hideProgress } = useSelector((state: IRootReducer) => state.app.loader);
    const classes = useStyles();

    if (!loading) {
        return <></>;
    }

    return (
        <div>
            <Backdrop className={`backdrop ${classes.backdrop}${noOpacity === true ? ' no-opacity' : ''}`} open={true}>
                <div className="backdrop__container">
                    {hideProgress === true ? null : <CircularProgress color="inherit" />}
                    {message && <Typography component="p" variant="body2" className="backdrop__container message">{message}</Typography>}
                    {content && <div className="backdrop__container content">{content}</div>}
                </div>
            </Backdrop>
        </div>
    );
}

export default LoadingGlobal;
