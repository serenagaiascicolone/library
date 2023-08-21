import {RxHamburgerMenu} from 'react-icons/rx'
import {GiBookshelf} from 'react-icons/gi'
import { AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

// hooks
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Header () {
const [isShow, setIsShow] = useState(false)
const location = useLocation()
// console.log(location.pathname)

    return (
        <header>
        <h3> {location.pathname === '/' ? 'Books' : 'La libreria di Serena'} <GiBookshelf className='logo'/></h3>
       <RxHamburgerMenu className='hamburger' onClick={() => setIsShow(true)}/> 
           <nav className={isShow ? 'show': ''}>
            
               <AiOutlineClose className='close-button' onClick={() => setIsShow(false)}/>

                <NavLink  to='/' className={'nav-link link'} onClick={() => setIsShow(false)}> Home </NavLink>
                <NavLink to='/books' className={'nav-link link'}  onClick={() => setIsShow(false)}> Libri </NavLink>
                <NavLink to= 'login' className={'nav-link link'} onClick={() => setIsShow(false)}> Login </NavLink>
                <NavLink to= 'signup' className={'nav-link link'} onClick={() => setIsShow(false)}> Signup </NavLink>
                <NavLink to= '/books/add' className={'nav-link link'} onClick={() => setIsShow(false)}> Aggiungi Libro </NavLink>

   
           </nav>
       </header>
    )
}

export default Header