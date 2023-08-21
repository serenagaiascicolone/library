import { AiOutlineClose} from 'react-icons/ai'

function Edit ({isModal, setIsModal}) {
    return (
        <>
        <div className={`modal-edit-wrapper ${isModal ? 'show' : ''}`} >
            <div className="modal-edit">
                <AiOutlineClose className={'close-button'} onClick={() => setIsModal(false)}/>
                    <h1>Modifica</h1>    
                        <form action="">
                            <label htmlFor="image"> Immagine </label>
                            <input type="file" name="image" id="" />
                            <label htmlFor="title"> Titolo </label>
                            <input type="text" name="title"/>
                            <label htmlFor="image"> Descrizione </label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                            <button>Annulla</button>
                            <button> Modifica </button>
                        </form>
            </div>

        </div>
        </>
        

    )
}

export default Edit 