import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import Tab from "../components/Tab"
import Hero from "../components/Hero"


function Book (){
const navigate = useNavigate()


    return(
        <>
        <Hero />
       
        <Tab />
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