import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons'
import { GoogleLogin } from '@react-oauth/google'
import decodeJwtResponse from 'jwt-decode'

import { client } from '../sanityClient'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className="relative h-full w-full">
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
                <div className="absolute flex justify-center items-center flex-col top-0 bottom-0 left-0 right-0 bg-blackOverlay " >
                    <div className="p-5"><img src={logo} width="130px" alt='logo' /></div>
                    <div className="  ">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                localStorage.setItem('user', JSON.stringify(credentialResponse))
                                const { name, picture } = decodeJwtResponse(credentialResponse.credential);
                                const doc = {
                                    _id: credentialResponse.clientId,
                                    _type: "user",
                                    userName: name,
                                    image: picture
                                }
                                client.createIfNotExists(doc).then((res) => {
                                    navigate('/', { replace: true })
                                })

                            }}
                            onError={() => {
                                console.log('Login Failed');
                                //redirect
                            }}
                        // useOneTap
                        />;
                        {/* <button className="w-10 h-5 bg-white" onClick={() => login()} >Google</button> */}
                    </div>
                </div>

            </div >
        </div>



    )
}

export default Login