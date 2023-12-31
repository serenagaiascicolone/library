//header
import {RxHamburgerMenu} from 'react-icons/rx'
import {GiBookshelf} from 'react-icons/gi'
// news-article
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
// header e footer 
import {AiFillGithub, AiFillLinkedin,AiOutlineTwitter, AiOutlineClose} from 'react-icons/ai'



function MockHome () {
    return (
        <>
        {/* app */}
        <div className='container'>
            
        {/* header */}
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
        
        {/* home */}
        <main>

            <section className='hero'>
                <img src = { require("../img/hero-image.jpg")} alt="" />
                <h1> La libreria di Serena </h1>
            </section>

            {/* books */}
            <section className='news'>
                <h3>News</h3>
                <div className='news-container'>
                    <BsArrowLeftCircle className='arrow-left'/>
                    <BsArrowRightCircle className='arrow-right' />
                   
                   {/* book */}
                    <article className='news-article'>
                      
                        <img src={("https://via.placeholder.com/250x100")} alt="" />
                        <div className='news-article-text'>

                        <h4> Title</h4>
                        
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis in quos. Suscipit qui ipsam consequuntur ratione odit dolore obcaecati quam laborum. In magni voluptates eveniet repellat vel. At, ratione.</p>
                        </div>

                        <button> Continua  </button>
                    </article>
               
                  
                  
                </div>
            </section>
        </main>
        </div>
        
        
        {/* footer */}
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

export default MockHome