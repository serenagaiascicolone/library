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
//   return userSearch
  
}

// function handleChange (e) {
//     console.log(e.target.value)
// }


// console.log(readRef())  



    return (
<>
        <section className='home'>
        <h3>Cerca nella mia libreria</h3>
        <div className='home-container search'>
         
      
        <input ref={searchRef} type="search" name="" id="" placeholder='cerca libro'/>  
        <BiSearchAlt onClick={readRef} className='search-icon'/>
  
    </div>



<Suspense fallback={<Loader />}>  
<Await resolve={loadedBooks.books}>
  

    {loadedBooks => {
        const books = loadedBooks.books
        const selectedBook = books.map(book => book).filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))
        console.log(selectedBook)
        // console.log(books.map(book => console.log(book)))
        // const searchBooks = loadedBooks.books.filter(book => book.title.includes(readRef()))
        return (
    
            
            <>
     
            
            <NavLink className='selected-book' to={`/books/${selectedBook[0].id}`}>{searchInput ? `${selectedBook[0].title}` : ''}</NavLink>

        </>
        )
        
    }}
</Await>
</Suspense>



    </section>
</>
)

}


export default Search