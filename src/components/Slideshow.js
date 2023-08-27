import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Await , useNavigate} from 'react-router-dom'
import BooksList from './BooksList'
import { Suspense, useEffect, useState, useRef } from 'react'

import Loader from './Loader'


function Slideshow ({loadedBooks}) {
const navigate = useNavigate()

/*SLIDESHOW */
    let [slide, setSlide] = useState(0)
    // console.log(slide)
    const lastBookslength = 3;
 
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

   useEffect (() => {
    const interval = setInterval(()=> {
        setSlide((prevSlide) => (prevSlide +1) % lastBookslength)
        
    }, 5000);
    return () => clearInterval(interval)
   },[])
  


   /* MEDIA QUERIES */
   const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)"))
   useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches(e.matches))
   })
  

   
    return (
        <section className='home slideshow-container'>
      
        <h3>Ultimi libri letti</h3>
        <div className='home-container slideshow'>
           
        
        
        
        {!matches && (
       <div className='slideshowSlider'>
                <Suspense fallback={<Loader />}> 
                    <Await resolve={loadedBooks.books}>

                        {loadedBooks => {
                            const lastbooks = loadedBooks.books.slice(0,3)
                                return (
                                    <>
                                    <BsArrowLeftCircle className='arrow-left' onClick={previous}/>
                                    <BsArrowRightCircle className='arrow-right' onClick={next}/>
                                            <article onClick={()=> navigate(`/books/${lastbooks[slide].id}`)}className="book-container">
                                                <img src={require("../img/book.png")} alt="" />
                                            <div className="book-container-text">
                                                <h3>{lastbooks[slide].title}</h3>
                                                <h4>{lastbooks[slide].author}</h4>
                                            </div>
                                            </article>  
                                    </>
                                     )                 
                            }}
                        </Await>
                    </Suspense>
            </div>


        )}


        {matches && (
        <>
        
         <BsArrowLeftCircle className='arrow-left' onClick={previous}/>
            <BsArrowRightCircle className='arrow-right' onClick={next} />
        
        
        <div className='slideshowSlider'>
            <Suspense fallback={<Loader />}> 
                  <Await resolve={loadedBooks.books}>

                        {/* solo i primi tre libri */}

                    {loadedBooks => loadedBooks.books.slice(0,`${lastBookslength}`).map((book,i) => {
            
                   


                           return (
                             <article id={i} onClick={()=> navigate(`/books/${book.id}`)} className={`book-container ${slide === i ? 'slideSelected' : 'slideUnSelected'}`}>
                                <img src={require("../img/book.png")} alt="" />
                                     <div className="book-container-text">
                                       <h3>{book.title}</h3>
                                    <h4>{book.author}</h4>
                                    </div>
                               </article>         
                        )

                           
                            
                       })}
                  </Await>
                     </Suspense>
            </div>
            
        
        
        </>



        )}



        </div>
    </section>
    )
    
}



export default Slideshow 