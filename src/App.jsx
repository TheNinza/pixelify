import Particles from "react-particles-js";
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Homepage from "./pages/Homepage/homepage";
import { GlobalStyles } from "./lib/styled-components/globalStyles";
import { particleConfig } from "./configs/particlesjs-config";
import useIsOnline from "./hooks/useIsOnline";
import Navbar from "./components/navbar/navbar";

function App() {
  const location = useLocation();
  const online = useIsOnline();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      {online ? (
        <AnimatePresence exitBeforeEnter={true}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Homepage} />
          </Switch>
        </AnimatePresence>
      ) : (
        <h1>You are offline</h1> //TODO: must make a better component later
      )}

      {/* <Particles
        className="particlesDiv"
        canvasClassName="fixedCanvas"
        params={particleConfig}
      /> */}
    </>
  );
}

export default App;
