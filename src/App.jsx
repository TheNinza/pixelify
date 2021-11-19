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
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as OfflineIcon } from "./assets/offline.svg";
import { axiosInstance } from "./lib/axios/axiosInstance";

function App() {
  const location = useLocation();
  const online = useIsOnline();

  const [showBody, setShowBody] = useState(false);
  const [isServerOnline, setIsServerOnline] = useState(false);

  useEffect(() => {
    if (!online) {
      toast.error(
        "You are offline. Please connect to the internet to use this app."
      );
    }
  }, [online]);

  useEffect(() => {
    const PingPromise = axiosInstance.post("/ping", {}).then(({ data }) => {
      console.log(data);
    });

    toast.promise(
      PingPromise,
      {
        loading: "Waking up the server",
        success: () => {
          setIsServerOnline(true);
          return "Server is online";
        },
        error: () => {
          setIsServerOnline(false);
          return "Server is not awake. Please Refresh";
        },
      },
      {
        position: "bottom-center",
      }
    );
  }, []);

  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" reverseOrder={false} />
      {isServerOnline && (
        <>
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
            <div
              style={{
                maxWidth: "90vw",
                position: "absolute",
                bottom: 10,
                left: "50vw",
                transform: "translateX(-50%)",
              }}
            >
              <OfflineIcon style={{ height: "80vh", maxWidth: "90vw" }} />
            </div>
          )}
        </>
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
