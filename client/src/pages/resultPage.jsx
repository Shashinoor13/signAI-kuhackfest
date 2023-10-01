import { useLocation } from 'react-router-dom';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function ResultPage({mainText, image}){
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const obtainedScore = searchParams.get("obtainedScore");
    const totalScore = searchParams.get("totalScore");
    return(
        <div className='custom-justify-center'>
            <div className="content-wrapper">
            <h1 className='text-7xl'>{mainText}</h1>
        <img src={image}></img>
        <h5>You Scored {obtainedScore}/{totalScore}</h5>
        <div className='custom-justify-center'></div>
        <div className="button-wrapper">
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>navigate("/")}>Home</button>
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>navigate("/mcq")}>Try Again</button>
        </div>
        
            </div>
        
        </div>
    )
}
export default ResultPage