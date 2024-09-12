import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authProfile } from "../../redux/reducers/userSlice";



export const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  localStorage.setItem("acc_token", user?.access_token);

  const handleLogin = (e) => {
    e.preventDefault()
    if (email.length === 0 || password.length === 0) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(authProfile({ email, password }));
  };
  useEffect(() => {
   if(status === 'success'){
    location.href = '/'
   }
  }, [user]
  )


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img
              className="w-[700px]"
              src="https://1password.com/img/contentful/beginners-two-factor.59ac23f159ded7369e13891b63ab0e65.svg"
              alt="user auth"
            />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={handleLogin}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign In
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
