
import { redirect } from 'react-router-dom';

export function action () {
    localStorage.removeItem('userToken')
    return redirect ('/')
}

