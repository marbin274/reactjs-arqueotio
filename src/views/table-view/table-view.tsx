import { Grid } from "@material-ui/core";
import * as React from "react";
import { Switch, Route, withRouter, RouteComponentProps } from "react-router";
import {
  TableList,
  TableRegister,
  TableDetail,
} from "views/table-view/components";

const TableView = (props: RouteComponentProps) => {
  const { match } = props;
  return (
    <Grid container spacing={3}>
      <Switch>
        <Route exact path={`${match.path}`}>
          <TableList />
        </Route>
        <Route exact path={`${match.path}/register`}>
          <TableRegister />
        </Route>
        <Route exact path={`${match.path}/detail/:index`}>
          <TableDetail />
        </Route>
        <Route exact path={`${match.path}/edit/:index`}>
          <TableRegister />
        </Route>
      </Switch>
    </Grid>
  );
};

export default withRouter(TableView);
