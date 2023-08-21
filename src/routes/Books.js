import {BsArrowRightShort} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Edit from '../components/Edit'
import Tab from '../components/Tab'
import Hero from '../components/Hero'


function Books (){
const navigate = useNavigate()
const [isModal, setIsModal] = useState(false)

    return (
        <>
        <Hero />
       
        <Tab />
        <section className="books-list">
            
            <article className="book-container">
                <img src={require("../img/book.png")} alt="" />
                <div className="book-container-text">
                    <h3>Title</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum animi magnam deserunt unde, ipsum odit molestias earum eius eveniet, vero sint similique, rem reprehenderit eum sunt nemo molestiae est?</p>
                </div>
                    <button onClick={()=> navigate('book')}>Scopri di più<BsArrowRightShort className='book-button-arrow'/></button>
                <div className='buttons-books-container'>
                    <button onClick={() => setIsModal(true)}> Modifica </button>
                    <button> Cancella </button>
                </div>
            </article>         
        
        </section>
        <Edit isModal = {isModal} setIsModal = {setIsModal}/>
        </>
    )
}


// funzione per chiamare lista libri
export async function load () {

}

export default Books
