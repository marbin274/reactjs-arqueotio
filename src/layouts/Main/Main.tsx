import React, { FunctionComponent, useRef, useEffect } from 'react';
import { makeStyles, CssBaseline, Theme, Container } from '@material-ui/core';

import { TopBar, SideBar, FabScrollTop } from 'layouts/Main/components'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },

    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }
}));

const Main: FunctionComponent = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const myContenedor = useRef<HTMLDivElement>(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const nombreContenedorPrincipal = "main-container";

    useEffect(() => {

    });
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />
            <SideBar handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />
            <main ref={myContenedor} id={nombreContenedorPrincipal} className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth={false} className={classes.container}>
                    {props.children}
                    <FabScrollTop myContenedor={myContenedor} mainContainer={nombreContenedorPrincipal} />                    
                </Container>
            </main>
        </div>
    );
}

export default Main;