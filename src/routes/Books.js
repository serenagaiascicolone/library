// TODO FAR FUNZIONARE MODALE (IN APP.JS COME LAYOUT CON OUTLET)

import {BsArrowRightShort} from 'react-icons/bs'

import { useNavigate, useLoaderData, defer, Await, Outlet, useRouteLoaderData } from 'react-router-dom'
import { useState, Suspense } from 'react'
import Edit from '../components/Edit'
import Tab from '../components/Tab'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import DeleteButton from '../components/DeleteButton'
import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Books (){
const navigate = useNavigate()
const loadedBooks = useLoaderData()
const token = useRouteLoaderData('rootLoader')



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
                           
                           
                           {token && (

                            <div className='buttons-books-container'>
                                {/* <button onClick={() => setIsModal(true)}> Modifica </button> */}

                              
                                <button onClick={() =>navigate(`edit/${book.id}`)}> Modifica </button>
                                {/* <button onClick={() => navigate(`edit/${book.id}`)}> Modifica </button> */}
                                <DeleteButton id={book.id}/>
                            </div>

                           )}
                        </article>         

                    )

                })}
            </Await>
            </Suspense>
           
        </section>
        </>
    )
}


// funzione per chiamare lista libri

 export async function  getBooks () {
    let res = await fetch('http://localhost:4000/api/books')
    if(!res.ok){
        throw new Error('Fetch fail')
    }
    
    const resData = await res.json()
    // console.log(resData.books.map(book=> book.title))
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
