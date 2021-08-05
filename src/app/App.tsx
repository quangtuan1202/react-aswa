import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import Toolbar from "components/Toolbar";
import Footer from "components/Footer";
import Main from "components/Main";
import { store } from "./store";
// import PrivateRoute from "components/PrivateRoute";

const Home = React.lazy(() => import("pages/Home"));
const Counter = React.lazy(() => import("pages/Counter"));
const Document = React.lazy(() => import("pages/Document"));
const Todo = React.lazy(() => import("pages/Todo"));

function App() {
  const renderRoutes = () => {
    return (
      <Switch>
        {/* <PrivateRoute path="/todos">
          <Todos />
        </PrivateRoute> */}
        <Route path="/todo" component={Todo} />
        <Route path="/document" component={Document} />
        <Route path="/counter" component={Counter} />
        <Route path="/" component={Home} />
      </Switch>
    );
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Toolbar />
          <Main>
            <React.Suspense fallback={<p>Loading...</p>}>
              {renderRoutes()}
              <GlobalStyle />
            </React.Suspense>
          </Main>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
