import { Form, redirect, useNavigation, useLocation, useActionData, useParams } from "react-router-dom"



function Authentication (){
    const navigation = useNavigation()
    const isSubmitting = navigation.state !== 'idle'
    const location = useLocation()
    const page = location.pathname
    const serverResponseData = useActionData()
 

    return (
        <div className={page === '/login' ? "auth-container bg-login" : "auth-container bg-signup"}>
        <h1>{page === '/login' ? 'Login' : 'Registrati'}</h1>
        {/* cambiare immagine */}
        <section className="auth-container-img">
        {page == '/login' ?
        <img src={require("../img/login.jpg")} alt="" />
            :
        <img src={require("../img/signup.jpg")} alt="" />    
        }
        </section>
        <section className="auth-container-form">
            <Form method="post" className="auth-form">
        
                <label htmlFor=""> E-mail </label>
                <input type="email" name="email" placeholder="inserisci qui la tua email"/>
                <label htmlFor=""> Password </label>
                <input type="password" name="password" placeholder="inserisci qui la tua password"/>
             
                {serverResponseData && serverResponseData.message &&
                    <>
                    <h1> {serverResponseData.message}</h1>
                    
                     {page === '/signup' &&
                     
                     <p>{serverResponseData.errors.email}</p>
                     }   
                    </>
                   
                }



                {page === '/login'  ? 

                    <button disabled={isSubmitting}>{isSubmitting ? 'Login in corso' : 'Accedi'}</button>
                  :  
                    <button>Registrati</button>
                } 
         
        
        </Form>
        </section>
        </div>
    )
}

 

export async function action ({request}) {
    const page = window.location.pathname

    const data = await request.formData()
    const userData = {
        email: data.get('email'),
        password: data.get('password'),
    }
    
    if(page === '/login') {
        const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
            
            
        })
        
        if(response.status === 401){
            return response 
        }

        if(response.status === 422){
            return response 
        }


        if(!response.ok){
            throw new Error(response.statusText)
        }
    
        const responseData = await response.json()
        localStorage.setItem('userToken', responseData.token)
        let hourInMillis = 1000 * 60 * 60;
        let tokenExpirationMillis = new Date().getTime() + hourInMillis;
        localStorage.setItem('expirationMillis', tokenExpirationMillis);
   
    }

    if(page === '/signup') {
        
        const response = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
    
            
            
        })

        if(response.status === 422){
            return response 
        }

        if(!response.ok){
            throw new Error(response.statusText)
        }
    
        const responseData = await response.json()
        localStorage.setItem('userToken', responseData.token)
        let hourInMillis = 1000 * 60 * 60;
        let tokenExpirationMillis = new Date().getTime() + hourInMillis;
        localStorage.setItem('expirationMillis', tokenExpirationMillis);

    }



    return redirect('/books')
}


export default Authentication