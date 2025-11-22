import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//custom modules
import { siteUrl } from "../../utils/constants";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  // Navigation
  const navigate = useNavigate();
  // reducers for api calls from redux store
  const dispatch = useDispatch();
  const { isLoading, errorMessage, successMessage } = useSelector((state) => state.auth);
  // States
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // Functions
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // Checks the name of each input and set its value e.g name: (value of state.email)
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItem: "center",
  };

  //Use effects
  useEffect(() => {
    if(errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate("/") // Navigates to home after login successful
    }
  }, [dispatch, errorMessage, successMessage])

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#cdcae9]">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          {/* Logo image */}
          <div className="h-[70px] flex flex-col justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src={`${siteUrl}/images/logo.png`}
                alt="Shop logo"
              />
            </div>
            <p className="text-sm w-20 text-slate-400">Admin Login</p>
          </div>
          {/* Begining of Admin Login form */}
          <form onSubmit={submitForm}>
            {/* Email */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={inputHandle}
                value={state.email}
                required
              />
            </div>
            {/* Password */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={inputHandle}
                value={state.password}
                required
              />
            </div>
            {/* Login button */}
            <button
              disabled={isLoading ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 cursor-pointer hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {isLoading ? (
                <PropagateLoader 
                color="#fff"
                cssOverride={overrideStyle} 
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
          {/* End of Admin Login form */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
