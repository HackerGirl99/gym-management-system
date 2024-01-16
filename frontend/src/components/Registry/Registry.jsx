import React from "react";

function Registry() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="text-6xl font-bold mt-20 ">
          <span class="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Welcome to UOV GYM
          </span>{" "}
        </div>
        <h2 className="text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 ">
          Stay Fit, Stay Healthy...!
        </h2>
      </div>
   
        <div className="flex flex-wrap gap-4 p-6 mb-14 mt-8 justify-center">
          <div className="pr-4 pl-4">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 ">
              Enter to GYM
            </h3>

            <div class="bg-gray-100 p-4 rounded-lg">
              <div class="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  for="username"
                  class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Enter User ID
                </label>
              </div>
            </div>
          </div>

          <div className="pl-4 pr-4">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 ">
              Leave from GYM
            </h3>

            <div class="bg-gray-100 p-4 rounded-lg">
              <div class="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="peer bg-transparent h-10 w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  for="username"
                  class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Enter User ID
                </label>
              </div>
            </div>
          </div>
          
        </div>
     <div className="mt-32"></div>
    </>
  );
  }

export default Registry;
