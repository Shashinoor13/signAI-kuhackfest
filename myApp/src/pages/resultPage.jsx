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
            <h1>{mainText}</h1>
        <img src={image}></img>
        <h5>You Scored {obtainedScore}/{totalScore}</h5>
        <div className='custom-justify-center'></div>
        <div className="button-wrapper">
        <button type="button" class="btn btn-success custom-margin-right" onClick={()=>navigate("/")}>Home</button>
        <button type="button" class="btn btn-danger custom-margin-left" onClick={()=>navigate("/mcq")}>Try Again</button>
        </div>
        
            </div>
        
        </div>
    )
}
export default ResultPage