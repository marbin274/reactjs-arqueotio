import React from "react";
import { Skeleton } from "@material-ui/lab";

export type LoadingComponentProps = {
    type?: "table"
}

function LoadingComponent(props: LoadingComponentProps) {
    return (
        <>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </>);
}
export default LoadingComponent;