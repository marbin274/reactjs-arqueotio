import React, { FunctionComponent } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

export type LoadingProps = {
    hideLoading?: boolean
}

const Loading: FunctionComponent<LoadingProps> = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Backdrop className={classes.backdrop} open={true}>
                {props.hideLoading === true ? null : <CircularProgress color="inherit" />}
                {props.children}
            </Backdrop>
        </div>
    );
}

export default Loading;
