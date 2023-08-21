import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"
import {GrAddCircle} from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import Tab from "../components/Tab"


function AddBook (){
const navigate = useNavigate()

    return(
        <>
        <section className="hero-book">
        <img src={require("../img/add-book.png")} alt="" />
        {/* <h1>Nuovo Libro</h1> */}
    </section>
        <Tab />
        <section className="book-details-container">
            <article className="book-details">
                <div className="book-details-img add-img">
                 <div className="add-img-content">
                    <GrAddCircle className="add-img-icon"/>
                    <span> Immagine</span>
                 </div>
                 {/* <input type="file" name="add-img" id="" /> */}
                </div>

                <div className="book-details-text add-details-form">
                    <h3>Title: </h3>
                    <input type="text" name="add-title" id="" />
                    <p> Descrizione: </p>
                    <textarea name="add-description" id="" cols="30" rows="10"></textarea>
                <button> Aggiungi </button>
                </div>
            </article>
        </section>
        </>
    )
}

export default AddBook 