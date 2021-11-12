import Particles from "react-particles-js";
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Homepage from "./pages/homepage/homepage";
import { GlobalStyles } from "./lib/styled-components/globalStyles";
import { particleConfig } from "./configs/particlesjs-config";
import useIsOnline from "./hooks/useIsOnline";
import Navbar from "./components/navbar/navbar";
import EncryptPage from "./pages/encrypt/encrypt";
import DecryptPage from "./pages/decrypt/decrypt";
import { useState } from "react";

function App() {
  const location = useLocation();
  const online = useIsOnline();

  const [showBody, setShowBody] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Navbar setShowBody={setShowBody} />
      {online ? (
        // showing body only if the animation is completed
        showBody && (
          <AnimatePresence exitBeforeEnter={true}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Homepage} />
              <Route path="/encrypt" exact component={EncryptPage} />
              <Route path="/decrypt" exact component={DecryptPage} />
            </Switch>
          </AnimatePresence>
        )
      ) : (
        <h1>You are offline</h1> //TODO: must make a better component later
      )}

      <Particles
        className="particlesDiv"
        canvasClassName="fixedCanvas"
        params={particleConfig}
      />
    </>
  );
}

export default App;
