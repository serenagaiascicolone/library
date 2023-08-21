import {BsArrowRightShort} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Edit from '../components/Edit'
import Tab from '../components/Tab'


function Books (){
const navigate = useNavigate()
const [isModal, setIsModal] = useState(false)

    return (
        <>
        <section className="hero-books">
            <img src={require("../img/books.png")} alt="" />
        </section>
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

export default Books
