import { useNavigate } from "react-router-dom"

function NotFound () {
const navigate = useNavigate()
    return (
        <div className="not-found-container">
            <section className="not-found-img">
                <img src={ require("../img/not-found.png")} alt="" srcset="" />
            </section>
            <section className="not-found-text">
            <p> Oops! </p>
            <p> 404 </p>
            <p> Page not found </p>
            <button onClick={() => navigate('/')}> Vai alla Home </button>
            </section>
        </div>
    )
}

export default NotFound