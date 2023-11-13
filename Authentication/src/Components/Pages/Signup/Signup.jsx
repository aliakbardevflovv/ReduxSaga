import React, { useEffect, useState } from "react";
import {useRef} from "react"
import Home from '../Home/Home'


const Signup = () =>{

    const name= useRef();
    const email = useRef();
    const password = useRef() ;
    const [showHome, setShowHome] = useState(false) ;
    const [show, setShow] = useState(false) ;

    const localSignup = localStorage.getItem("signup") ;
    const localEmail = localStorage.getItem("email") ;
    const localName = localStorage.getItem("name") ;
    const localPassword = localStorage.getItem("password") ;

    useEffect(() => {
        if(localSignup) {
            setShowHome(true)
        }
        if(localEmail){
            
            setShow(true)

        }

    })

    const handleClick = () => {
        if(name.current.value&&email.current.value&&password.current.value)
        {
            //console.log(name.current.value, email.current.value, password.current.value);
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signup", email.current.value)
            alert("Account Created Successfully")
            window.location.reload() ;

        }
        
    }

    const handleLogin = () => {
        if(email.current.value==localEmail&&password.current.value==localPassword){
            localStorage.setItem("signup", email.current.value)
            window.location.reload() ;
        }
        else{
            alert("Email or password incorrect") ;
        }
    }


    return(

        <>

        {showHome?<Home/> :

        (show?
            <div className="container">
            <h1>Hello {localName}</h1>
            <div className="inputSpace">
                <input type="Email" placeholder="email" ref={email} />
            </div>
            <div className="inputSpace">
                <input type="Password" placeholder="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign up</button>

        </div>
        :
        <div className="container">
            <div className="inputSpace">
                <input type="text" placeholder="Name" ref={name} />
            </div>
            <div className="inputSpace">
                <input type="Email" placeholder="email" ref={email} />
            </div>
            <div className="inputSpace">
                <input type="Password" placeholder="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign up</button>

        </div>
        )
}

        </>
    

    )
}

export default Signup ;