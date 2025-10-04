import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ComicPage from "./pages/ComicPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route cho trang chủ với layout */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />

        {/* Route cho trang login không có layout */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route cho trang register không có layout */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Route cho trang comic chi tiết với layout */}
        <Route path="/comic/:id" element={
          <Layout>
            <ComicPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
