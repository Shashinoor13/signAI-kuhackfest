import '../App.css'
function MyHeadings({myTitle}){
    return(
        <div style={{
            borderRadius:"7px"
        }} className="heading-container">
        <h1 className="fancy-heading">{myTitle}</h1>
    </div>
    )
}
export default MyHeadings;