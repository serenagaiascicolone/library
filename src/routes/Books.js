import {BsArrowRightShort} from 'react-icons/bs'


function Books (){
    return (
        <>
        <section className="hero-books">
            <img src={require("../img/books.png")} alt="" />
            <h1>I miei libri</h1>
        </section>
        <section className="books-list">
            <article className="book-container">
                <img src={require("../img/book.png")} alt="" />
                <div className="book-container-text">
                    <h3>Title</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum animi magnam deserunt unde, ipsum odit molestias earum eius eveniet, vero sint similique, rem reprehenderit eum sunt nemo molestiae est?</p>
                </div>
                    <button >Scopri di più <BsArrowRightShort className='book-button-arrow'/></button>
            </article>
            <article className="book-container">
                <img src={require("../img/book.png")} alt="" />
                <div className="book-container-text">
                    <h3>Title</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum animi magnam deserunt unde, ipsum odit molestias earum eius eveniet, vero sint similique, rem reprehenderit eum sunt nemo molestiae est?</p>
                </div>
                    <button >Scopri di più <BsArrowRightShort className='book-button-arrow'/></button>
            </article>
            <article className="book-container">
                <img src={require("../img/book.png")} alt="" />
                <div className="book-container-text">
                    <h3>Title</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum animi magnam deserunt unde, ipsum odit molestias earum eius eveniet, vero sint similique, rem reprehenderit eum sunt nemo molestiae est?</p>
                </div>
                    <button >Scopri di più <BsArrowRightShort className='book-button-arrow'/></button>
            </article>
            <article className="book-container">
                <img src={require("../img/book.png")} alt="" />
                <div className="book-container-text">
                    <h3>Title</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rerum animi magnam deserunt unde, ipsum odit molestias earum eius eveniet, vero sint similique, rem reprehenderit eum sunt nemo molestiae est?</p>
                </div>
                    <button >Scopri di più <BsArrowRightShort className='book-button-arrow'/></button>
            </article>
          
        </section>
        </>
    )
}

export default Books
