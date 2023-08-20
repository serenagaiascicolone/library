function Signup (){
    return (
        <>
        <div className="auth-container bg-signup">
        <h1>Registrati</h1>
        <section className="auth-container-img">
            <img src={require("../img/hero-image.jpg")} alt="" />
        </section>
        <section className="auth-container-form">
            <form className="auth-form" action="">
                <label htmlFor=""> E-mail </label>
                <input type="email" name="email" placeholder="inserisci qui la tua email"/>
                <label htmlFor=""> Password </label>
                <input type="password" name="password" placeholder="inserisci qui la tua password"/>
                <button>Registrati</button>
            </form>
        </section>
        </div>
        </>
    )
}

export default Signup