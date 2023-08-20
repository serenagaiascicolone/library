import {RxHamburgerMenu} from 'react-icons/rx'
import {GiBookshelf} from 'react-icons/gi'
import { AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

// hooks
import { useState } from 'react'

function Header () {
const [isShow, setIsShow] = useState(false)


    return (
        <header>
        <h3> Books <GiBookshelf className='logo'/></h3>
       <RxHamburgerMenu className='hamburger' onClick={() => setIsShow(true)}/> 
           <nav className={isShow ? 'show': ''}>
            
               <AiOutlineClose className='close-button' onClick={() => setIsShow(false)}/>

                <NavLink  to='/' className={'nav-link'} onClick={() => setIsShow(false)}> Home </NavLink>
                <NavLink to='/books' className={'nav-link'}> Libri </NavLink>
                <NavLink className={'nav-link'}> Login </NavLink>
                <NavLink className={'nav-link'}> Signup </NavLink>
                <NavLink className={'nav-link'}> Aggiungi Libro </NavLink>
   
{/*           
               <a href="http://">Home</a>
               <a href="http://">Libri</a>
               <a href="http://">Login</a>
               <a href="http://">Signup</a> */}
   
           </nav>
       </header>
    )
}

export default Header