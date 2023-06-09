import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage activeLang={"en"} />} />
      <Route path="/arm" element={<Homepage activeLang={"arm"} />} />
      <Route path="/est" element={<Homepage activeLang={"est"} />} />
      <Route path="/ru" element={<Homepage activeLang={"ru"} />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
