import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PlasmicRootProvider, PlasmicCanvasHost } from "@plasmicapp/loader-react";
import { PLASMIC } from './plasmic-init';
import Home from "./components/Homepage";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/plasmic-host" render={() => <PlasmicCanvasHost />} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </PlasmicRootProvider>
  );
}

export default App;
