// gestione del token

export function getUserTokenValidity() {
    const userTokenEpirationDate = localStorage.getItem('expirationMillis');
    let now = new Date().getTime();
    // controllo che la data attuale non sia superiore a quella di validità del token
    const userTokenValidity = userTokenEpirationDate - now;
    return userTokenValidity;
  }


export function getUserToken () {

    let token = localStorage.getItem('userToken')

    if(!token){
        return null
    }


    // Recupero le informazioni sulla scadenza del token
    let userTokenValidity = getUserTokenValidity();
    // Se ho superato la scadenza, ritorno un avviso. Mi servirà per effettuare un logout automatico
    if(userTokenValidity < 0) {
      return 'tokenExpired';
    }
    
    return token;
  }



