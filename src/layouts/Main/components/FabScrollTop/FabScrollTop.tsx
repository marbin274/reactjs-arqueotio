import React, { FunctionComponent, useEffect } from 'react';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, Theme, Fab, Zoom, useTheme } from '@material-ui/core';


type FabScrollTopProps = {
    myContenedor: any;
    mainContainer: string;
}
const useStyles = makeStyles((theme: Theme) => ({

    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));



const FabScrollTop: FunctionComponent<FabScrollTopProps> = (props) => {
    const { myContenedor, mainContainer } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mostrarFab, setMostrarFab] = React.useState(false);


    const scrollToTop = () => {
        const container = document.getElementById(mainContainer);
        if (container !== null) {
            container.scrollTo(0, 0);
        }
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    useEffect(() => {
        const myContenedorElement = myContenedor.current;
        (myContenedorElement as HTMLDivElement).addEventListener("scroll", onScrollMain);
        return () => {
            if (myContenedorElement !== null) {
                (myContenedorElement as HTMLDivElement).removeEventListener("scroll", onScrollMain);
            }
        };
    }, [myContenedor]);

    const onScrollMain = (event: any) => {
        const newScrollTop = event.target.scrollTop;
        if (newScrollTop > 300) {
            setMostrarFab(true);
        } else if (newScrollTop <= 300) {
            setMostrarFab(false);
        }

    }
    return <>
        <Zoom
            in={mostrarFab === true}
            timeout={transitionDuration}
            style={{
                transitionDelay: `${mostrarFab === true ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
        >
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={scrollToTop}>
                <UpIcon />
            </Fab>
        </Zoom>
    </>
}

export default FabScrollTop;