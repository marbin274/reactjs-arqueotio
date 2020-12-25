import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Message, LoadingGlobal, DialogGlobal } from "components";
import { Provider } from "react-redux";
import store from "redux-app/store";
import arqueotypeThemeConfig from "app/arqueotype-theme-config";
import { ReactQueryDevtools } from "react-query-devtools";

const arqueotypeTheme = createMuiTheme(arqueotypeThemeConfig);

function App() {
  return (
    <>
      <ThemeProvider theme={arqueotypeTheme}>
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
