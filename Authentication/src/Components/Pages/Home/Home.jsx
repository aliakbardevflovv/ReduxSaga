const Home = () => {
    const logout = () => {
        localStorage.removeItem("signup");
        window.location.reload() ;
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload() ;
    }
    return(
        <>
            <h1>This is Home Page</h1>
            <h1>Welcome {localStorage.getItem("name")}</h1>
            <button onClick={logout}>Logout</button> 
            <button onClick={deleteAccount}>Delete</button> 
           
        </>
    )
}

export default Home;