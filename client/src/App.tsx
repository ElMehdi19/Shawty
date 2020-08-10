import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Wrapper from "./components/main/Wrapper";
import Footer from "./components/main/Footer";
import Shorten from "./components/routes/Shorten";
import Check from "./components/routes/Check";
import Report from "./components/routes/Report";
import ConfirmReport from "./components/routes/ConfirmReport";
import ContextProvider from "./store/context";
import ThemeContextProvider from "./store/themeContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <ContextProvider>
          <Switch>
            <Route exact path="/">
              <Wrapper />
            </Route>
            <Route path="/shorten">
              <Shorten />
            </Route>
            <Route path="/track">
              <Check />
            </Route>
            <Route exact path="/report">
              <Report />
            </Route>
            <Route path="/report/:token" component={ConfirmReport} />
          </Switch>
        </ContextProvider>
        <Footer />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
