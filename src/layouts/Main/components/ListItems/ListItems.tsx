import React, { FunctionComponent } from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import LocalMall from '@material-ui/icons/LocalMall';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkStyle: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }),
);

export const MainListItems: FunctionComponent = () => {
  const classes = useStyles();
  const location = useLocation();
  const actualPath = "/" + location.pathname.split("/")[1];
  const menuArray = [
    {
      iconname: "DashboardIcon",
      name: "dashboard",
      pathname: "/",
      textname: "Dashboard"
    },
    {
      iconame: "DashboardIcon",
      name: "listaItems",
      pathname: "/items",
      textname: "Tabla de items"
    }
       
  ];

  return (<div>
    {
      menuArray.map((menu: any) => {
        return (<Link key={menu.name} to={menu.pathname} className={classes.linkStyle}>
          <ListItem button selected={actualPath === menu.pathname}>
            <ListItemIcon>
              {getIconByName(menu.iconname)}
            </ListItemIcon>
            <ListItemText primary={menu.textname} />
          </ListItem>
        </Link>);
      })
    }
  </div>);
};

function getIconByName(iconname: string) {
  switch (iconname) {
    case "DashboardIcon": return <DashboardIcon />;
    case "ShoppingCartIcon": return <ShoppingCartIcon />;
    case "PeopleIcon": return <PeopleIcon />;
    case "BarChartIcon": return <BarChartIcon />;
    case "LayersIcon": return <LayersIcon />;
    case "LocalMall": return <LocalMall />;
    default: return <DashboardIcon />
  }
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
