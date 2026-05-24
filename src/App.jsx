import Home from "./pages/Home.jsx";
import useArcaneImageMotion from "./hooks/useArcaneImageMotion.js";

export default function App() {
  useArcaneImageMotion();

  return <Home />;
}
