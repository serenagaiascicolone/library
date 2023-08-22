import { AiOutlineClose} from 'react-icons/ai'
import { Form, redirect } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { getUserToken } from '../utilities/authentication';
function Edit () {
 const navigate = useNavigate()
    return (
        <>
        <div className={'modal-edit-wrapper'} >
            <div className="modal-edit">

                    <h1>Modifica</h1>    
                        <Form method='post'>
                            <label htmlFor="image"> Immagine </label>
                            <input type="file" name="image" id="" />
                            <label htmlFor="title"> Titolo </label>
                            <input type="text" name="title"/>
                            <label htmlFor="author"> Autore </label>
                            <input type="text" name="author"/>
                            <label htmlFor="description"> Descrizione </label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                            <button onClick={() => navigate('/books')}>Annulla</button>
                            <button> Modifica </button>
                        </Form>
            </div>

        </div>
        </>
        

    )
}

export async function action ({request, params}) {

    const data = await request.formData()
    const editBook = {
        title: data.get('title'),
        author: data.get('author'),
        description: data.get('description')
    }

    let token = getUserToken()
    const response = await fetch(`http://localhost:4000/api/books/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(editBook),
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


export default Edit 