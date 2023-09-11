
import React from 'react'
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ShareVideo from "../assets/share.mp4";
import Logo from "../assets/logowhite.png";
// import process from 'process';

const clientid =
  "580236897437-a591js39blf9mhkrl6i3qut4jnq1kvqc.apps.googleusercontent.com";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={ShareVideo}
          type="video/mp4"
          loop
          autoPlay
          muted
          controls={false}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
          <div className="p-5">
            <img src={Logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={clientid}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-5" /> Sign in With Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;






// let  clientid = "580236897437-a591js39blf9mhkrl6i3qut4jnq1kvqc.apps.googleusercontent.com"
// const Login = () => {
//   const responseGoogle = (response) => {
//     console.log(response)
//   }
//     return (
//       <div className="flex justify-start items-center flex-col h-screan">
//         <div className="relative w-full h-full ">
//           <video
//             src={ShareVideo}
//             type="video/mp4"
//             loop
//             autoPlay
//             muted
//             controls={false}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
//             <div className="p-5">
//               <img src={Logo} alt="logo" width="130px" />
//             </div>
//             <div className="shadow-2xl">
//               <GoogleLogin
//                 clientId={clientid}
//                 render={(renderProps) => (
//                   <button
//                     type="button"
//                     className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
//                     onClick={renderProps.onClick}
//                     disabled={renderProps.disabled}
//                   >
//                     <FcGoogle className="mr-5" /> Sign in With Google
//                   </button>
//                 )}
//                 onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 cookiePolicy='single_host_origin'
//                 isSignedIn={true}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Login
