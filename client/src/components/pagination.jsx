import { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'


function Pagination({boolFunc, onPageChange, onSubmit}){
    const progressNo = [1,2,3,4,5];
    const currentPage = "page-link text-bg-primary"
    const correctPage = "page-link text-bg-success"
    const wrongPage = "page-link text-bg-danger"
    const defaultPage = "page-link"
    const [userAnswers, setUserAnswers] = useState([]);


    const[pageNo, setPageNo] = useState(1);
    const[buttonText, setButtonText] = useState("Next");

  
    return(
    <nav aria-label="...">
    <ul className="pagination custom-justify-center">
    {progressNo.map(number =>  <li className="page-item disabled" key={number}>
    <a className={number === pageNo ? currentPage: userAnswers[number-1] ? correctPage : userAnswers[number-1] === false ? wrongPage : defaultPage} href="#" >{number}
    </a>
  </li>)}
  <button type="button" className="btn btn-secondary" onClick={()=> {
    onPageChange(pageNo+1)
    setPageNo(pageNo+1) 
  pageNo >= progressNo.length-1 ? setButtonText("Submit") : setButtonText("Next")
 setUserAnswers([...userAnswers, boolFunc()])

if (buttonText ==="Submit") {
  onSubmit()
}

//call match function and set the userAnswers array 
  
}}>{buttonText}</button>    </ul>
  </nav>);
  }

export default Pagination;