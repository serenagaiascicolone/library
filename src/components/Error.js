import { useRouteError, useNavigate } from "react-router-dom";

function Error () {
const navigate = useNavigate()
    const error = useRouteError();

    return (
        <div className="error-container"> 
        <h1>Error!</h1>
        <p>{error.message}</p>
        <button onClick={()=> navigate(-1)}>Torna Indietro</button>
        </div>
    )
}

export default Error