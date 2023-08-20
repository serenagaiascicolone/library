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

                <NavLink  to='/' className={'nav-link link'} onClick={() => setIsShow(false)}> Home </NavLink>
                <NavLink to='/books' className={'nav-link link'}  onClick={() => setIsShow(false)}> Libri </NavLink>
                <NavLink to= 'login' className={'nav-link link'} onClick={() => setIsShow(false)}> Login </NavLink>
                <NavLink className={'nav-link link'}> Signup </NavLink>
                <NavLink className={'nav-link link'}> Aggiungi Libro </NavLink>

   
           </nav>
       </header>
    )
}

export default Header