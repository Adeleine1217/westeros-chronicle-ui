import Home from "./pages/Home.jsx";
import useArcaneImageMotion from "./hooks/useArcaneImageMotion.js";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useArcaneImageMotion();
  useScrollReveal();

  return <Home />;
}
