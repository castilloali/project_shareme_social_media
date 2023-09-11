import React from 'react'
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ShareVideo from "../assets/share.mp4";
import Logo from "../assets/logo.png";



const Login = () => {
    return (
      <div className="flex justify-start items-center flex-col h-screan">
        <div className="relative w-full h-full ">
          <video
            src={ShareVideo}
            type="video/mp4"
            loop
            autoPlay
            muted
            controls={false}
            // sx={{ width: "100%", height: "100%" , object: "cover" }}
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    );
}

export default Login
