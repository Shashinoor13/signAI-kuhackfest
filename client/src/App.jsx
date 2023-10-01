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
import McqPage from "./pages/mcq";
import ResultPage from "./pages/resultPage";
import Match from "./pages/match";

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
            <Route path="/mcq" element={<McqPage/>}/>
            <Route path="/result/passed" element={<ResultPage mainText="Congratulations" image="/photos/trophy.png"></ResultPage>}/>
            <Route path="/result/failed" element={<ResultPage mainText="Sorry! You Failed" image="/photos/lost.png"></ResultPage>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/match" element={<Match></Match>}/>
            <Route path="/quiz" element={<McqPage/>}/>
        </Routes>
        </>
    </BrowserRouter>
  )
}