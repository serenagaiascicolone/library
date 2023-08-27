import { Outlet, useSubmit, useLoaderData } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import { getUserTokenValidity } from './../utilities/authentication';
import { useEffect } from "react";
function Layout () {

// controllo del token
let token = useLoaderData()
const submit = useSubmit()

useEffect(() => {
    if(token){
        return
    }

    if (token = 'tokenExpired'){
        submit(null, {action: '/logout', method: 'post'})
    }


    const userTokenDuration = getUserTokenValidity();
    setTimeout(() => {
        submit(null, {action: '/logout', method: 'post'})
    }, userTokenDuration)
},[token, submit])


    return(
        <>

        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout