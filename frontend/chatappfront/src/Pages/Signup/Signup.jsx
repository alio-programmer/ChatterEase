import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

const Signup = () => {
  const [input, setinput] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-[500px] mx-auto">
      <div className="w-full p-6 bg-gray-400 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatterEase</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
              value={input.fullname}
              onChange={(e) => {
                setinput({ ...input, fullname: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e) => setinput({ ...input, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={input.email}
              onChange={(e) => setinput({ ...input, email: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered h-10 w-full"
              value={input.password}
              onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered h-10 w-full"
              value={input.confirmpassword}
              onChange={(e) =>
                setinput({ ...input, confirmpassword: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Gender</span>
            </label>
            <select
              value={input.gender}
              onChange={(e) => setinput({ ...input, gender: e.target.value })}
              id="gender"
              className="w-full h-10 rounded-lg bg-gray-800"
            >
              <option value=" ">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block text-white"
          >
            Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-blue-900">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import React from "react";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-[500px] mx-auto">
//       <div className="w-full p-6 bg-gray-400 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500">ChatterEase</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Fullname</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Fullname"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Email</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Email"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text text-white">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text text-white">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Gender</span>
//             </label>
//             <select id="gender" className="w-full h-10 rounded-lg bg-gray-800">
//               <option>Select...</option>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block text-white"
//           >
//             Already have an account? Login
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 hover:bg-blue-900">
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
