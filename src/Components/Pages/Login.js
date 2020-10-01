import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import AuthService from '../../Services/user.service';


const Login = () => {
    const history = useHistory();
    const loginToApp = () => {
        history.push('/home');
    }
    
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const onChangeUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(password, userName)
            .then((response) => {
                loginToApp()
            },
                (error) => {
                    return error
                })
    };

    return (
        <div className='login-main-container'>
            <div className='dummy-div'></div>
            <h1 className='login-title'>Login to Chuck-in app now!</h1>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src={require('../../img/chuckNorris.jpg')} className="brand_logo" alt="Logo"></img>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control input_user"
                                        placeholder="username"
                                        value={userName}
                                        onChange={onChangeUsername}></input>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control input_pass"
                                        placeholder="password"
                                        value={password}
                                        onChange={onChangePassword}></input>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button
                                        type="button"
                                        name="button"
                                        className="btn login_btn"
                                        onClick={handleLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login


// const loginUser = () => {
//     fetch('/users/login', {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(userData)
//     }).then(response => {
//         return response.json();
//     }).then(response => {
//         loginToApp()
//         setUserData({ password: '', userName: '' })
//         // setLoggedInUserData(response)
//         responseData = response;
//         console.log(userData)
//         console.log(response)
//         console.log(responseData)
//     }).then(() => console.log(responseData))
// }

// async function loginUser() {
//     try {
//         // const url = 'https://hackathon-back.herokuapp.com'; + ${url}
//         const fetchResponse = await fetch(`/users/login`, {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(userData)
//         });
//         const data = await fetchResponse.json();
//         // if (userData.userName === '') {
//         //     alert('Please provide username');
//         //     return false;
//         // }
//         // if (userData.password === '') {
//         //     alert('Please provide password');
//         //     return false;
//         // }
//         setUserData({ password: '', userName: '' })
//         responseData = data;
//         console.log(userData);
//         console.log(data);
//         console.log(responseData);

//         loginToApp();
//         return data;
//     }
//     catch (error) {
//         return error;
//     }
// }