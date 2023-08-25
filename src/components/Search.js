import {BiSearchAlt} from 'react-icons/bi'
import { useRef, Suspense, useState } from 'react'
import Loader from './Loader'
import { Await } from 'react-router-dom'
function Search ({loadedBooks}){
const searchRef = useRef()


function readRef () {
  const userSearch = searchRef.current.value
  console.log(userSearch)  
  return userSearch
  
}




    return (
<>
        <section className='home'>
        <h3>Cerca nella mia libreria</h3>
        <div className='home-container search'>
         
        <input ref={searchRef} onChange={readRef} type="search" name="" id="" placeholder='cerca libro'/>  
        <BiSearchAlt onClick={() => readRef()} className='search-icon'/>
        </div>
    </section>


<Suspense fallback={<Loader />}> 
<Await resolve={loadedBooks.books}>
  

    {loadedBooks => {
        const books = loadedBooks.books
        console.log(books.map(book => book.title).filter(book => book.includes(readRef())))
        // const searchBooks = loadedBooks.books.filter(book => book.title.includes(readRef()))
        return (
            
            <p>{loadedBooks.booltitle}</p>
        )
        
    }}
</Await>
</Suspense>
</>
    )
}


export default Search