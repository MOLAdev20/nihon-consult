import { Route, Switch } from "wouter";
import Login from "./Login";
import Page from "./Page";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={"/"} component={Login} />
        <Route path={"/login"} component={Login} />
        <Route path={"/data"} component={Page} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
