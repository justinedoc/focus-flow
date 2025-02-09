import { Route, Routes } from "react-router";
import Signup from "./components/auth/pages/Signup";
import LandingPage from "./components/landing/LandingPage";
import Login from "./components/auth/pages/Login";
import Home from "./components/dashboard/pages/Home";
import Messages from "./components/dashboard/pages/Messages";
import Tasks from "./components/dashboard/pages/Tasks";
import Members from "./components/dashboard/pages/Members";
import Settings from "./components/dashboard/pages/Settings";
import Projects from "./components/dashboard/pages/Projects";

function App() {
  // return <LandingPage />;
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard">
        <Route index element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="members" element={<Members />} />
        <Route path="settings" element={<Settings />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
