import { useNavigate } from "react-router-dom"

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
    const response = await fetch(`http://localhost:4000/api/books/${id}`, {
        method: 'DELETE',
        // headers: {
        //     'Authorization': `Beare ${token}`
        // }
    })

}

export default DeleteButton