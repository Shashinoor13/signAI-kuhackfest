



function Container({titles,descriptions,imgUrl}) {

     
  return (
    <div className=' parent d-flex justify-content-center allign-items-center  '>
    <div className="card card rounded-3 custom-color-background" style={{width: '21rem', height:'22rem'}}>
    <div className="card-body text-center">
    <img src={imgUrl} className="rounded-circle bg-light custom-margin" alt="..." style={{ width: '120px', height: '120px' }}/>      
    <h5 className="card-title text-white custom-margin">{titles}</h5>
          <p className="card-text text-white custom-margin ">{descriptions}</p>
     
    </div>
  </div></div>
    
  );
}
// rgba(36, 39, 44, 1)
export default Container;