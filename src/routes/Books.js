// TODO FAR FUNZIONARE MODALE (IN APP.JS COME LAYOUT CON OUTLET)



import { useNavigate, useLoaderData, defer, Await, Outlet, useRouteLoaderData } from 'react-router-dom'
import Tab from '../components/Tab'
import Hero from '../components/Hero'
import BooksList from '../components/BooksList'

function Books (){
const navigate = useNavigate()
const loadedBooks = useLoaderData()
console.log(loadedBooks)
const token = useRouteLoaderData('rootLoader')



    return (
        <>
        <Hero />
        <Tab />
        <section className='books-list'>
        <BooksList loadedBooks={loadedBooks}/>
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
