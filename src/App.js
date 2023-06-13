import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login'
import Home from './container/Home'

const App = () => {
    console.log(process.env.REACT_APP_SANITY_API_TOKEN)
    console.log(process.env.REACT_APP_SANITY_API_TOKEN)
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN} >
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </GoogleOAuthProvider>
    )
}

export default App