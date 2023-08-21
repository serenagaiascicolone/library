

function Login (){
    return (
        <>
        <div className="auth-container bg-login">
        <h1>Login</h1>
        {/* cambiare immagine */}
        <section className="auth-container-img">
            <img src={require("../img/login.jpg")} alt="" />
        </section>
        <section className="auth-container-form">
            <form className="auth-form" action="">
                <label htmlFor=""> E-mail </label>
                <input type="email" name="email" placeholder="inserisci qui la tua email"/>
                <label htmlFor=""> Password </label>
                <input type="password" name="password" placeholder="inserisci qui la tua password"/>
                <button>Accedi</button>
            </form>
        </section>
        </div>
        </>
    )
}

export default Login