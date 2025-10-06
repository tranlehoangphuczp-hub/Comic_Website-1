import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ComicPage from "./pages/ComicPage";
import ChapterPage from "./pages/ChapterPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comic/:comicId" element={<ComicPage />} />
        <Route path="/comic/:comicId/chapter/:chapterId" element={<ChapterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
