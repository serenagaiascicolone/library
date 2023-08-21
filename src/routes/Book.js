import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"
import { useNavigate } from "react-router-dom"

function Book (){
const navigate = useNavigate()


    return(
        <>
        <section className="hero-book">
        <img src={require("../img/girl.png")} alt="" />
    </section>
        <section className="back-button">
            <BiSolidHomeHeart className="back-item" onClick={() => navigate('/')}/> |
            <PiBooks className="back-item" onClick={() => navigate('/books')}/> |
            <p className="item">Libro</p>
       
        </section>
        <section className="book-details-container">
            <article className="book-details">
                <div className="book-details-img">
                 <img src={require("../img/book.png")} alt="" />
                </div>

                <div className="book-details-text">
                    <h3>Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et! Fugiat error voluptate alias iusto, quam qui vero rerum atque pariatur, placeat, sunt quisquam nisi voluptatum iste doloremque nemo ex?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et! Fugiat error voluptate alias iusto, quam qui vero rerum atque pariatur, placeat, sunt quisquam nisi voluptatum iste doloremque nemo ex?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et! Fugiat error voluptate alias iusto, quam qui vero rerum atque pariatur, placeat, sunt quisquam nisi voluptatum iste doloremque nemo ex?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et! Fugiat error voluptate alias iusto, quam qui vero rerum atque pariatur, placeat, sunt quisquam nisi voluptatum iste doloremque nemo ex?
                        </p>
                <a href=""> Acquista </a>
                </div>
            </article>
        </section>
        </>
    )
}

export default Book 