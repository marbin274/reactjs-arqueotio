import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Message, LoadingGlobal, DialogGlobal } from "components";
import { Provider } from "react-redux";
import store from "redux-app/store";
import siagieThemeConfig from "app/siagie-theme-config";
import { ReactQueryDevtools } from "react-query-devtools";

const siagieTheme = createMuiTheme(siagieThemeConfig);

function App() {
  return (
    <>
      <ThemeProvider theme={siagieTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <Message />
          <LoadingGlobal />
          <DialogGlobal />
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
