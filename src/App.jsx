import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/loginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
