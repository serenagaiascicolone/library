import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Await } from 'react-router-dom'
import BooksList from './BooksList'
import { useState } from 'react'


function Slideshow ({loadedBooks}) {







    // inserire dinamicamento titolo tab nella rotta Book 
  


    return (
        <section className='home'>
      
        <h3>Ultimi libri letti</h3>
        <div className='home-container slideshow'>
           
            {/* <div className='slideshowSlider'> */}
            {/* <BsArrowLeftCircle className='arrow-left'/> */}
            {/* <BsArrowRightCircle className='arrow-right' /> */}
            <BooksList  
            loadedBooks={loadedBooks} 
          />
            {/* </div> */}
       
          
          
        </div>
    </section>
    )
}



export default Slideshow 