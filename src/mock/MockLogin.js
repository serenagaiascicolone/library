

function MockLogin (){
    return (
        <>
        <div className="login-container">
        <h1>Login</h1>
        <section className="login-container-img">
            <img src={require("../img/hero-image.jpg")} alt="" />
        </section>
        <section className="login-container-form">
            <form className="login-form" action="">
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

export default MockLogin