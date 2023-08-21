import { useLocation, useNavigate, useParams } from "react-router-dom"
import {PiBooks} from "react-icons/pi"
import {BiSolidHomeHeart} from "react-icons/bi"


function Tab () {
    const location = useLocation()
    const navigate = useNavigate()
    const page = location.pathname
    const params = useParams()
    return (
        <section className="back-button">
        <BiSolidHomeHeart className="back-item" onClick={() => navigate('/')}/> |
        <PiBooks className="back-item" onClick={() => navigate('/books')}/> |
        <span className="item">
            {page === '/books' && 'Libri'}
            {page === '/books/add' && 'Aggiungi nuovo libro'}
            {page === `/books/${params.id}` && 'Libro'}
        </span>
    </section>
    )
}

export default Tab 