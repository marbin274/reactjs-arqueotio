import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme, IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import { MainListItems } from 'layouts/Main/components/ListItems/ListItems'


type SideBarProps = {
    handleDrawerOpen: any,
    handleDrawerClose: any,
    open: boolean
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
    }),
);

const SideBar: FunctionComponent<SideBarProps> = (props) => {
    const classes = useStyles();
    return <Drawer
        variant="permanent"
        classes={{
            paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
        }}
        open={props.open}
    >
        <div className={classes.toolbarIcon}>
            <IconButton onClick={props.handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
        <List><MainListItems /></List>
        {/*
            <Divider />
            <List>{secondaryListItems}</List>
            */
        }
    </Drawer>;
}

export default SideBar;