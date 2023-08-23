import { useLocation, useNavigate, useParams, useRouteLoaderData } from "react-router-dom"
import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"


function Tab () {
    const location = useLocation()
    const navigate = useNavigate()
    const page = location.pathname
    const params = useParams()

    // inserire dinamicamento titolo tab nella rotta Book 
    const books = useRouteLoaderData('rootBooks')
    const findBook = books.books.filter(book => book.id.includes(params.id))
    // const titleBookDetails = findBook[0].title


    return (
        <section className="back-button">
        <BiSolidHomeHeart className="back-item" onClick={() => navigate('/')}/> |
        <PiBooks className="back-item" onClick={() => navigate('/books')}/> |
        <span className="item">
            {page === '/books' && 'Libri'}
            {page === '/books/add' && 'Aggiungi nuovo libro'}
            {page === `/books/${params.id}` && `${findBook[0].title}`}
        </span>
    </section>
    )
}

export default Tab 