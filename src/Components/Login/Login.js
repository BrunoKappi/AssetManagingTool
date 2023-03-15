import React, { useState } from "react";
import { LogarComGooglePopup, LoginUtil } from "../../Functions/Login";
import { DefaultLoggedUser } from "../../GlobalVars";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { setLoggedUser } from "../../Config/store/actions/LoggedUserActions";
import store from "../../Config/store/store";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [IsLogging, setIsLoggin] = useState(false);
    const [Erro, setErro] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Email && Password) {
            setIsLoggin(true)
            LoginUtil(Email.toLocaleLowerCase(), Password).then((message) => {
                const user = {
                    ...DefaultLoggedUser,
                    Email: message.user.email,
                    uid: message.user.uid
                }
                console.log(user)
                store.dispatch(setLoggedUser(user))
                setIsLoggin(false)
                navigate('/App')

            }
            ).catch((error) => {
                console.log(error)
                setIsLoggin(false)
                setErro('Email ou Senha incorretos')
                setTimeout(() => {
                    setErro('')
                }, 3000);

                //Firebase: Error (auth/user-not-found).
                //Firebase: Error (auth/wrong-password).
                //"auth/invalid-email": This error occurs when the provided email address is not valid.
                //"auth/user-disabled": This error occurs when the user account has been disabled by an administrator.
                //"auth/user-not-found": This error occurs when there is no user record corresponding to the provided email address.
                //"auth/wrong-password": This error occurs when the provided password is incorrect.
                //"auth/too-many-requests": This error occurs when the user has attempted to sign in too many times in a short period.
                //"auth/network-request-failed": This error occurs when there is a problem with the network connection between the client and the Firebase project.
                //"auth/internal-error": This error occurs when there is an unexpected error in the Firebase project.
            })
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {Erro && <p className='Erro'>{Erro}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email:</label>
                <input
                    type="Email"
                    id="Email"
                    value={Email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="Password">Senha:</label>
                <input
                    type="Password"
                    id="Password"
                    value={Password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">
                    {IsLogging ? 'Logando' : 'Entrar'}
                </button>
            </form>

        </div>
    );
}

export default Login;
