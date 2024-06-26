import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";
import toast from "react-hot-toast";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { loading, login } = useLogin();
  const handlepass = (e) => {
    setpassword(e.target.value);
  };
  const handleuser = (e) => {
    setusername(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    toast.success("logged in successfully");
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login <span className="text-blue-500">ChatterEase</span>
        </h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              onChange={handleuser}
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
              onChange={handlepass}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block text-white"
          >
            {"Don't"} have an account
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 hover:bg-blue-900"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//starter code
// return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//         <h1 className="text-3xl font-semibold text-center text-white">
//           Login <span className="text-blue-500">Chatapp</span>
//         </h1>
//         <form>
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
//             <label className="label">
//               <span className="text-base label-text text-white">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block text-white"
//           >
//             {"Don't"} have an account
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 hover:bg-blue-900">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
