import '../App.css'
import{useState} from 'react'
function ImgBox({imgUrl, onClicked, isMatched}){
    const [pointerEvents, setPointerEvents] = useState('');

  const handleClick = () => {
    setPointerEvents("disableEvent")
    onClicked();
  };
    return(
        <div
        
         className={`imgLayout ${pointerEvents}`}>
        <img src={imgUrl} className={`circular-box border `} onClick={handleClick} ></img>
        </div>
    );
}


function TextBox({text, onClicked}){
    const [pointerEvents, setPointerEvents] = useState('');

  const handleClick = () => {
    setPointerEvents("disableEvent")
    onClicked();
  };
    return(
        <>
        <div
        
         >
<div  className={`circular-box border ${pointerEvents}`} onClick={handleClick}>{text}</div>
        </div>
        </>
    );
}
//export both functions
export {ImgBox,TextBox};