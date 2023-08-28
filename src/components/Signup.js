import { redirect } from "react-router-dom"


export async function action ({request}) {
 
    
    const data = await request.formData()
    const userData = {
        email: data.get('email'),
        password: data.get('password'),
    }
         
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


    return redirect('/books')
}