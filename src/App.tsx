import { Route, Routes } from "react-router";
import Signup from "./components/auth/pages/Signup";
import LandingPage from "./components/landing/LandingPage";

function App() {
  // return <LandingPage />;
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
