import {AiFillGithub, AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'

function Footer (){
    return (
        <footer>
        <p> © Serena Gaia Scicolone</p>
        <span className='social-bar'>
             <AiFillGithub /> <AiFillLinkedin /> 
            <AiOutlineTwitter /> 
        </span>
    </footer>
    )
}

export default Footer