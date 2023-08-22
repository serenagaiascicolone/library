import {BsArrowRightShort} from 'react-icons/bs'

import { useNavigate, useLoaderData, defer, Await } from 'react-router-dom'
import { useState, Suspense } from 'react'
import Edit from '../components/Edit'
import Tab from '../components/Tab'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import DeleteButton from '../components/DeleteButton'

function Books (){
const navigate = useNavigate()
const [isModal, setIsModal] = useState(false)
const loadedBooks = useLoaderData()

    return (
        <>
        <Hero />
        <Tab />
        <section className="books-list">
        <Suspense fallback={<Loader />}> 
            <Await resolve={loadedBooks.books}>
                {loadedBooks => loadedBooks.books.map(book => {
                    return (

                        <article className="book-container">
                            <img src={require("../img/book.png")} alt="" />
                            <div className="book-container-text">
                                <h3>{book.title}</h3>
                                <h4>{book.author}</h4>
                            </div>
                                <button onClick={()=> navigate(`/books/${book.id}`)}>Scopri di più<BsArrowRightShort className='book-button-arrow'/></button>
                            <div className='buttons-books-container'>
                                <button onClick={() => setIsModal(true)}> Modifica </button>
                                <DeleteButton id={book.id}/>
                            </div>
                        </article>         

                    )

                })}
            </Await>
            </Suspense>

        
        </section>
        <Edit isModal = {isModal} setIsModal = {setIsModal}/>
        </>
    )
}


// funzione per chiamare lista libri

async function  getBooks () {
    let res = await fetch('http://localhost:4000/api/books')
    // if(!res.ok){
    //     throw new Error('Fetch fail')
    // }
    
    const resData = await res.json()
    console.log(resData)
    return resData 

}

export async function loader () {
   return defer (
        {
            books: getBooks()
        }
    )
}

export default Books
