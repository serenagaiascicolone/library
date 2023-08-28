

function ProgressiveBar ({bookVal}){
    console.log(bookVal)

    let rating = bookVal * 14
    return (
        <span className="progressive-bar-container">
            <span className="progressive-bar" style={{width: `${rating}px`}}></span>
        </span>
    )
}

export default ProgressiveBar