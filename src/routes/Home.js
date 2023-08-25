

import { useLoaderData } from 'react-router-dom'


import Hero from '../components/Hero'

import Slideshow from './../components/Slideshow';
import Search from '../components/Search';


function Home () {
    const loadedBooks = useLoaderData()
 
    
    return (
        <main>

        <Hero />
     

        <section className='home'>
            <h3>About me</h3>
            <div className='about-me-container'>
                <article className='about-me-article'>

                    <div className='about-me-img'>
                    <img src={require("../img/about-me-img.jpg")} alt="" />
                    </div>
                    <div className='about-me-article-text'>
                    
                    <p> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis in quos. Suscipit qui ipsam consequuntur ratione odit dolore obcaecati quam laborum. In magni voluptates eveniet repellat vel. At, ratione.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis in quos. Suscipit qui ipsam consequuntur ratione odit dolore obcaecati quam laborum. In magni voluptates eveniet repellat vel. At, ratione.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officiis in quos. Suscipit qui ipsam consequuntur ratione odit dolore obcaecati quam laborum. In magni voluptates eveniet repellat vel. At, ratione.

                        
                    </p>
                    </div>

                </article>
           
              
              
            </div>
        </section>
        

        <Slideshow loadedBooks={loadedBooks} />
    

        <Search loadedBooks={loadedBooks}/>
   
    </main>
    )
}



export default Home