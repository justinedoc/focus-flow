import { Route, Routes } from "react-router";
import Signup from "./components/auth/pages/Signup";
import LandingPage from "./components/landing/LandingPage";
import Login from "./components/auth/pages/Login";

function App() {
  // return <LandingPage />;
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
