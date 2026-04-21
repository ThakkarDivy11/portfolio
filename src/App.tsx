import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <div className="main-layout">
          <div className="three-bg">
            <Suspense fallback={null}>
              <CharacterModel />
            </Suspense>
          </div>
          <div className="main-content">
            <Suspense fallback={null}>
              <MainContainer />
            </Suspense>
          </div>
        </div>
      </LoadingProvider>
    </>
  );
};

export default App;
