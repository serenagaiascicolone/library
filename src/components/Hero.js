import { useLocation } from "react-router-dom"


function Hero () {
    const location = useLocation()
    const page = location.pathname


    return (
        <section className={page === '/' ? 'hero' : 'hero-books'}>
            
            {page === '/' && 
            <>
            <img src={require("../img/hero-image.jpg")} alt="" />
            <h1> La libreria di Serena </h1>
            </>
        }
            {page === '/books' && 
            <img src={require("../img/books.png")} alt="" />
        }
            {page === '/books/add' && 
            <img src={require("../img/add-book.png")} alt="" />
        }

            {page === '/books/book' && 
            <img src={require("../img/girl.png")} alt="" />
            }
        </section> 

)

}

export default Hero 