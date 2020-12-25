import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

type PaperCustomProps = {
    minHeight?: number
}

const PaperCustom: FunctionComponent<PaperCustomProps> = (props) => {


    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            minHeight: props.minHeight ?? 100,
        },
    }));

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Paper className={fixedHeightPaper}>
            {props.children}
        </Paper>
    );
}

export default PaperCustom;