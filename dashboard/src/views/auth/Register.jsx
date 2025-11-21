import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#cdcae9]">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          {/* Registration form */}
          <form>
            {/* Name */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
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
                required
              />
            </div>
            {/* Consent checkbox */}
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I agree to privacy policy & terms</label>
            </div>
            {/* Sign up button */}
            <button className="bg-slate-800 w-full hover:shadow-blue-300/50 cursor-pointer hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Sign Up
            </button>
            {/* Already have an account */}
            <div className="flex items-center gap-3 justify-center">
              <p>
                Already have an account?
                {" "}
                <Link className="font-bold" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
