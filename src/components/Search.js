import {BiSearchAlt} from 'react-icons/bi'
import { useRef, Suspense, useState } from 'react'
import Loader from './Loader'
import { Await, NavLink } from 'react-router-dom'



function Search ({loadedBooks}){
const searchRef = useRef()
const [searchInput, setSearchInput] = useState('')

function readRef () {

  let userSearch = searchRef.current.value.toLowerCase()
  setSearchInput(userSearch)
 
}

function handleKeyDown (e){
    if(e.key === 'Enter'){
       readRef()
    }
}

 



    return (
<>
        <section className='home'>
        <h3>Cerca nella mia libreria</h3>
        <div className='home-container search'>
         
      
        <input ref={searchRef}  onKeyDown={handleKeyDown}  type="search" name="" id="" placeholder='cerca libro'/>  
        <BiSearchAlt onClick={readRef} className='search-icon'/>
  
    </div>



<Suspense fallback={<Loader />}>  
<Await resolve={loadedBooks.books}>
  

    {loadedBooks => {
        const books = loadedBooks.books
        const selectedBook = books.map(book => book).filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))
        console.log(selectedBook)

       try {

           return (
    
        
               
               <NavLink className='selected-book' to={`/books/${selectedBook[0].id}`}>{searchInput ? `${selectedBook[0].title}` : ''}</NavLink>
    
       
    
           
           )

       } catch(error){
          return (
            <p className='selected-book'>Nessun risultato</p>
          ) 

       }
           
    
        
    }}
</Await>
</Suspense>



    </section>
</>
)

}


export default Search