import { Form, redirect, useNavigation } from "react-router-dom"

function Login (){
const navigation = useNavigation()
const isSubmitting = navigation.state !== 'idle'

    return (
        <div className="auth-container bg-login">
        <h1>Login</h1>
        {/* cambiare immagine */}
        <section className="auth-container-img">
            <img src={require("../img/login.jpg")} alt="" />
        </section>
        <section className="auth-container-form">
            <Form method="post" className="auth-form">
        
                <label htmlFor=""> E-mail </label>
                <input type="email" name="email" placeholder="inserisci qui la tua email"/>
                <label htmlFor=""> Password </label>
                <input type="password" name="password" placeholder="inserisci qui la tua password"/>
                <button disabled={isSubmitting}>{isSubmitting ? 'Login in corso' : 'Accedi'}</button>
        
        </Form>
        </section>
        </div>
    )
}

export async function action ({request}) {
    
    const data = await request.formData()
    const userData = {
        email: data.get('email'),
        password: data.get('password'),
    }

    const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }

        
        
    })


    if(!response.ok){
        throw new Error(response.statusText)
    }

    const responseData = await response.json()
    localStorage.setItem('userToken', responseData.token)
    let hourInMillis = 1000 * 60 * 60;
    let tokenExpirationMillis = new Date().getTime() + hourInMillis;
    localStorage.setItem('expirationMillis', tokenExpirationMillis);
    return redirect('/books')
}


export default Login