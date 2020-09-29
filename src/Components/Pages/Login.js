import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [ userData, setUserData] = useState({ username: '', password: '' });

    const handleusername = (e) => {
        setUserData({ username: e.target.value, password: userData.password });
        console.log(userData.username)
    }

    const handlePassword = (e) => {
        setUserData({ username: userData.username, password: e.target.value });
        console.log(userData.password)
    }

    async function loginUser() {
        try {
            const url = 'https://hackathon-back.herokuapp.com/';
            const fetchResponse = await fetch(`${url}/login`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await fetchResponse.json();
            setUserData({ username: '', password: '' })
            console.log('Login success');
            return data;
        } catch(error) {
            return error;
        }
    }

    return (
        <div className='login-main-container'>
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
                                    value={userData.username}
                                    onChange={handleusername}></input>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input 
                                    type="password" 
                                    className="form-control input_pass" 
                                    placeholder="password"
                                    value={userData.password}
                                    onChange={handlePassword}></input>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button 
                                    type="button" 
                                    name="button" 
                                    className="btn login_btn"
                                    onClick={loginUser}>Login</button>
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
