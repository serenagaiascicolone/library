
import { useNavigate, Await, useLoaderData, NavLink, defer, useParams} from "react-router-dom"
import Tab from "../components/Tab"
import Hero from "../components/Hero"
import { Suspense } from "react"
import Loader from "../components/Loader"
import ProgressiveBar from "../components/ProgressiveBar"


function Book (){
const navigate = useNavigate()
const loadedBook = useLoaderData()
const id = useParams()


    return(

        <>
        
        <Hero />
        <Tab />

                <section className="book-details-container">
                    <Suspense fallback={<Loader />}>
                        <Await resolve={loadedBook.book}>
                            {loadedBook => (
                                <article className="book-details">
                                    <div className="book-details-img">
                                    <img src={require("../img/book.png")} alt="" />
                                    </div>

                                    <div className="book-details-text">
                                        <h3>{loadedBook.book.title}</h3>
                                        <h4>{loadedBook.book.author}</h4>
                                        <ProgressiveBar bookVal = {loadedBook.book.valutation}/>
                                        <p> {loadedBook.book.description}</p>
                                    {/* <NavLink to=''> Acquista </NavLink> */}
                                    </div>
                                </article>

                            )}
                    </Await>
                    </Suspense>
                </section>
        
        
        
        </>
       
    )
}

async function  getBook ({id}) {

    let res = await fetch(`http://localhost:4000/api/books/${id}`)
    // if(!res.ok){
        //     throw new Error('Fetch fail')
        // }
        
        const resData = await res.json()
        return resData 

}

export async function loader ({params}) {
    console.log(params)
    return defer (
        {
            book: getBook(params)
        }
    )
}



export default Book 