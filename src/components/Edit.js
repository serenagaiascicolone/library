import { AiOutlineClose} from 'react-icons/ai'
import { Form } from 'react-router-dom'


function Edit ({isModal, setIsModal}) {
    return (
        <>
        <div className={`modal-edit-wrapper ${isModal ? 'show' : ''}`} >
            <div className="modal-edit">
                <AiOutlineClose className={'close-button'} onClick={() => setIsModal(false)}/>
                    <h1>Modifica</h1>    
                        <Form >
                            <label htmlFor="image"> Immagine </label>
                            <input type="file" name="image" id="" />
                            <label htmlFor="title"> Titolo </label>
                            <input type="text" name="title"/>
                            <label htmlFor="title"> Autore </label>
                            <input type="text" name="title"/>
                            <label htmlFor="image"> Descrizione </label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                            <button onClick={() => setIsModal(false)}>Annulla</button>
                            <button> Modifica </button>
                        </Form>
            </div>

        </div>
        </>
        

    )
}

export default Edit 