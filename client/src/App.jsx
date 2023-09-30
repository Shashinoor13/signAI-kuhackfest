import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import ModelPage from "./pages/model-page";
import LearningPage from "./pages/learning-page";
import WordPage from "./pages/wordPage";
import SearchPage from "./pages/search-page";

export default function App() {
  return (
    <BrowserRouter>
        <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/model-demo" element = {<ModelPage />} />
            <Route path="/learn" element = {<LearningPage />} />
            <Route path="/learn/:id" element = {<WordPage />} />
            <Route path="/search-sign" element = {<SearchPage />} />
        </Routes>
        </>
    </BrowserRouter>
  )
}