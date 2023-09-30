import{BrowserRouter, Routes, Route} from 'react-router-dom';
import McqPage from './pages/mcq';
import ResultPage from './pages/resultPage';
import Container from './components/container';
import { TextBox } from './components/imgBox';
import Match from './pages/match';
import DetectApp from './pages/detect';
function App() {

  return (
   <div>
      <BrowserRouter>
      <Routes>
      <Route path="/mcq" element={<McqPage></McqPage>}/>
      <Route path="/" element={<DetectApp></DetectApp>}/>
      <Route path="/result/passed" element={<ResultPage mainText="Congratulations" image="/photos/trophy.png"></ResultPage>}/>
      <Route path="/result/failed" element={<ResultPage mainText="Sorry! You Failed" image="/photos/lost.png"></ResultPage>}/>
      <Route path="/match" element={<Match></Match>}/>
      </Routes>
      
      </BrowserRouter>
   </div>
  );
}

export default App;
