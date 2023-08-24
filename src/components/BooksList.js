import { useNavigate, useLocation, Await,useRouteLoaderData } from 'react-router-dom'
import { Suspense, useState } from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import Loader from '../components/Loader'
import DeleteButton from '../components/DeleteButton'


function BooksList ({loadedBooks}) {
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname

    const [slide, setSlide] = useState(0)
    console.log(slide)

    function next (){
        if(slide === 2){
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }

    function previous (){
        if(slide === 0){
            setSlide(2)
        } else {
            setSlide(slide - 1)
        }
    }

    
    const token = useRouteLoaderData('rootLoader')
    return (
        <>
        {page === '/books' && (

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
                  
            )}
      
      


        {page === '/' && (

            // <div className='slideshowSlider'>
            // <BsArrowLeftCircle className='arrow-left'/>
            // <BsArrowRightCircle className='arrow-right' />
            //     <Suspense fallback={<Loader />}> 
            //         <Await resolve={loadedBooks.books}>

            //             {/* solo i primi tre libri */}

            //             {loadedBooks => loadedBooks.books.slice(0,3).map(book => {
            //                 return (
            //                     <article className="book-container">
            //                         <img src={require("../img/book.png")} alt="" />
            //                         <div className="book-container-text">
            //                             <h3>{book.title}</h3>
            //                             <h4>{book.author}</h4>
            //                         </div>
            //                     </article>         

            //                 )
                            
            //             })}
            //         </Await>
            //         </Suspense>
            // </div>



            <div className='slideshowSlider'>
                <Suspense fallback={<Loader />}> 
                    <Await resolve={loadedBooks.books}>

                        {loadedBooks => {
                            const loadedfirest = loadedBooks.books.slice(0,3)
                            console.log(loadedfirest)
                            
                            return (
                                <>
                                <BsArrowLeftCircle className='arrow-left' onClick={previous}/>
                                <BsArrowRightCircle className='arrow-right' onClick={next}/>
                                <article className="book-container">
                                    <img src={require("../img/book.png")} alt="" />
                                <div className="book-container-text">
                                       <h3>{loadedfirest[slide].title}</h3>
                                      <h4>{loadedfirest[slide].author}</h4>
                                 </div>
                                </article>  
                                </>
                                 )
                        }}

            
                    </Await>
                    </Suspense>
            </div>

)}
           
      
</>
    )
}


export default BooksList