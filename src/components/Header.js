import {RxHamburgerMenu} from 'react-icons/rx'
import {GiBookshelf} from 'react-icons/gi'
import { AiOutlineClose} from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'

// hooks
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { action } from './Logout'
import { useRouteLoaderData } from 'react-router-dom'


function Header () {
const [isShow, setIsShow] = useState(false)
const location = useLocation()
const navigate = useNavigate()
// console.log(location.pathname)
const token = useRouteLoaderData('rootLoader')

function handleLogout (){
    action()
    setIsShow(false)
    return navigate (0)
}

    return (

        <header>
        <h3> {location.pathname === '/' ? 'Books' : 'La libreria'} <GiBookshelf className='logo'/></h3>
       <RxHamburgerMenu className='hamburger' onClick={() => setIsShow(true)}/> 
           <nav className={isShow ? 'show': ''}>
            
               <AiOutlineClose className='close-button' onClick={() => setIsShow(false)}/>
                <NavLink  to='/' 
                     className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={() => setIsShow(false)}
                end> Home </NavLink>
               
               
                <NavLink 
                to='/books' 
                className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={() => setIsShow(false)}
                end> Libri </NavLink>

            {token && (
                <>

                <NavLink 
                to= '/' 
                 className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={handleLogout}
                end> Logout </NavLink>
               
                <NavLink 
                to= '/books/add' 
                className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={() => setIsShow(false)}
                end> Aggiungi Libro </NavLink>
                </>
                
            )}

            {!token && (

                <>
                
                <NavLink 
                to= 'login' 
                className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={() => setIsShow(false)}
                end> Login </NavLink>
               
             
               
                <NavLink 
                to= 'signup' 
                className={ ({ isActive }) => isActive ? 'nav-link link active' : 'nav-link link' } 
                onClick={() => setIsShow(false)}
                end> Signup </NavLink>
                </>
            )}

   
           </nav>
       </header>
    )
}

export default Header