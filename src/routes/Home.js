// TODO aggiornare home con: slide ultimi libri letti, about-me, input: search

import { useLoaderData } from 'react-router-dom'

import {BiSearchAlt} from 'react-icons/bi'
import Hero from '../components/Hero'

import Slideshow from './../components/Slideshow';
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
    

        <section className='home'>
            <h3>Cerca nella mia libreria</h3>
            <div className='home-container search'>
             
            <input type="search" name="" id="" placeholder='cerca libro'/>  
            <BiSearchAlt className='search-icon'/>
            </div>
        </section>
   
    </main>
    )
}



export default Home