import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'

function Home () {
    return (
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
    )
}

export default Home