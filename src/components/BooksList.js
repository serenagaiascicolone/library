import { useNavigate, useLocation, Await,useRouteLoaderData } from 'react-router-dom'
import { Suspense } from 'react'

import {BsArrowRightShort} from 'react-icons/bs'
import Loader from '../components/Loader'
import DeleteButton from '../components/DeleteButton'


function BooksList ({loadedBooks}) {
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname

    const token = useRouteLoaderData('rootLoader')
    return (
        <>
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

           </>
    )
}


export default BooksList