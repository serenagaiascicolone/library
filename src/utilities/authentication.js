// gestione del token

export function getUserToken () {

    let token = localStorage.getItem('userToken')

    if(!token){
        return null
    }


    return token 

}