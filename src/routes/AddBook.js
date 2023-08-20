import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"
import {GrAddCircle} from "react-icons/gr"


function AddBook (){
    return(
        <>
        <section className="hero-book">
        <img src={require("../img/add-book.png")} alt="" />
        {/* <h1>Nuovo Libro</h1> */}
    </section>
        <section className="back-button">
            <BiSolidHomeHeart className="back-item"/> |
            <PiBooks className="back-item"/> |
            <span className="item"> Aggiungi nuovo libro </span>
        </section>
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