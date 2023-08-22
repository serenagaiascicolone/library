
import {GrAddCircle} from "react-icons/gr"
import { useNavigate, redirect, useNavigation } from "react-router-dom"
import Tab from "../components/Tab"
import Hero from "../components/Hero"
import { Form } from "react-router-dom"
import { getUserToken } from "../utilities/authentication"

function AddBook (){
const navigate = useNavigate()
const navigation = useNavigation ()
const isSubmitting = navigation.state !== 'idle'
    return(
        <>
        <Hero />
      
        <Tab />
        <section className="book-details-container">
                <Form method="post">
                    <article className="book-details">
                            <div className="book-details-img add-img">
                            <div className="add-img-content">
                                <GrAddCircle className="add-img-icon"/>
                                <span> Immagine</span>
                            </div>
                            {/* <input type="file" name="add-img" id="" /> */}
                            </div>

                            <div className="book-details-text add-details-form">
                                <h3>Titolo: </h3>
                                <input type="text" name="title" id="" />
                                <h3>Autore: </h3>
                                <input type="text" name="author" id="" />
                                <p> Descrizione: </p>
                                <textarea name="description" id="" cols="30" rows="10"></textarea>
                                 <button disabled={isSubmitting}> {isSubmitting ? 'Inserimento in corso' : 'Aggiungi'} </button>
                            </div>
                    </article>
                </Form>
        </section>
        </>
    )
}


export async function action ({request}) {
    
       const data = await request.formData()
       const newBook = {
           title: data.get('title'),
           author: data.get('author'),
           description: data.get('description')
       }


       let token = getUserToken()
       const response = await fetch('http://localhost:4000/api/books', {
           method: 'POST',
           body: JSON.stringify(newBook),
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `Baerer ${token}`
           }
   
           
           
       })
   
       if(!response.ok){
           throw new Error(response.statusText)
       }
   
       return redirect('/books')
   }

export default AddBook 