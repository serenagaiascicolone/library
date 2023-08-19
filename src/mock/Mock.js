//header
import {RxHamburgerMenu} from 'react-icons/rx'
// news-article
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
import {GiBookshelf} from 'react-icons/gi'
import {AiFillGithub, AiFillLinkedin,AiOutlineTwitter, AiOutlineClose} from 'react-icons/ai'



function Mock () {
    return (
        <>
        <div className='container'>
        <header>
         <h3> Books <GiBookshelf className='logo'/></h3>
        <RxHamburgerMenu className='hamburger'/> 
            <nav >
             
                <AiOutlineClose className='close-button' />
                <a href="http://">Home</a>
                <a href="http://">Libri</a>

    
           
                <a href="http://">Login</a>
                <a href="http://">Signup</a>
    
            </nav>
        </header>
        <main>
            <section className='hero'>
                <img src = { require("../img/hero-image.jpg")} alt="" />
                <h1> La libreria di Serena </h1>
            </section>
            <section className='news'>
                <h3>News</h3>
                <div className='news-container'>
                    <BsArrowLeftCircle className='arrow-left'/>
                    <BsArrowRightCircle className='arrow-right' />
                    <article className='news-article'>
                      
                        <h4> Title</h4>
                        <img src={("https://via.placeholder.com/250x100")} alt="" />
                        
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis in quos. Suscipit qui ipsam consequuntur ratione odit dolore obcaecati quam laborum. In magni voluptates eveniet repellat vel. At, ratione.</p>
                        <button> Continua  </button>
                    </article>
               
                  
                  
                </div>
            </section>
        </main>
        </div>
        
        
        
        <footer>
            <p> © Serena Gaia Scicolone</p>
            <span className='social-bar'>
                 <AiFillGithub /> <AiFillLinkedin /> 
                <AiOutlineTwitter /> 
            </span>
        </footer>
        </>
    )
}

export default Mock