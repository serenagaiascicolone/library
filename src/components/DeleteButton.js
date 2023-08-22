import { useNavigate, redirect } from "react-router-dom"
import { getUserToken } from "../utilities/authentication"
import Error from "./Error"

function DeleteButton ({id}) {
    const navigate = useNavigate()
    
    
    function handleDelete () {
        action(id)
        navigate(0)
}    
    return (
        <button onClick={()=> handleDelete(id)}> Cancella </button>
    )
}


export async function action (id){
    let token = getUserToken()
    const response = await fetch(`http://localhost:4000/api/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Baerer ${token}`
        }
    })

    if(!response.ok){
        throw new Error(response.statusText)
    }

   

}

export default DeleteButton