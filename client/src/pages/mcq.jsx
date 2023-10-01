import React, { useEffect, useState } from 'react';
import '../App.css';
import { ImgBox } from '../components/imgBox';
import Pagination from '../components/pagination';
import MyHeadings from '../../../myApp/src/components/headings';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'

function McqPage() {
  const navigate = useNavigate();
  const [finalAnsCount, setFinalAnsCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const handlePageChange = (pageNumber) => {
    setPageNo(pageNumber);
  };
  const handleSubmit = () => {
    console.log("submit")
    finalAnsCount >= 2.5 ? navigate(`/result/passed?obtainedScore=${finalAnsCount}&totalScore=5`) : navigate(`/result/failed?obtainedScore=${finalAnsCount}&totalScore=5`);

  }
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch(`http://localhost:3000/model/${pageNo}`)
      .then((res) => res.json())
      .then((data) => setBackendData(data))

  }, [pageNo])
  console.log(backendData.image1)
  console.log(pageNo)
  const imgUrl1 = [backendData.image1, backendData.image2, backendData.image3];
  const title = backendData.question;
  const answer = backendData.answer;
  const [userAnswers, setUserAnswers] = useState([]);
  console.log("see: " + finalAnsCount)
  const handleImageClick = (url) => {


    console.log(userAnswers)

    if (url === answer) {
      setFinalAnsCount(finalAnsCount + 1)
      setUserAnswers((prevAnswers) => [true]); // Image matches, send false
    } else {
      setUserAnswers((prevAnswers) => [false]); // Image does not match, send true
    }
  };
  return (
    <div className='custom-page-background'>
      <MyHeadings
        myTitle={"Test Yourself!"}></MyHeadings>
      <div className="new-container">
        <h3 className='custom-text-center custom-margin-top'>{title}</h3>
        <div className="con custom-margin-top custom-margin-bottom">
          {imgUrl1.map((url) => (
            <div key={url} className="img-box-wrapper">
              <ImgBox imgUrl={url} onClicked={() => handleImageClick(url)} />
            </div>
          ))}
        </div>
      </div>


      <Pagination boolFunc={() => userAnswers.includes(true)} onPageChange={handlePageChange} onSubmit={handleSubmit} />


    </div>
  )

}


export default McqPage;