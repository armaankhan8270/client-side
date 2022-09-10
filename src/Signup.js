import React from "react";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [passwordmsg, setpasswordmsg] = useState("");

  const Postdata = async () => {
    const userdata = { name, email, phone, password, cpassword };
    await axios
      .post("http://localhost:3000/post", userdata)
      .then((r) => alert(r))
      .catch((e) => alert(e));
  };

  return (
    <>
      <div className="home text-black capitalize grid justify-center text-whie">
        <div className="bg-black w-[450px] rounded h-[900px] mt-[91px] ">
          <div className=" w-[314px] capitalize  border-[#333333] rounded-lg h-[578px] m-[64px]">
            <h1 className="text-3xl text-white pt-1 h-9"> Sign In</h1>
            <form
              onSubmit={(e) => {
                if (password !== cpassword) {
                  setpasswordmsg("password doesn't match or less than 8 ");
                } else if (!(password > 8)) {
                  alert("bsdk");
                  setpasswordmsg("bsdk");
                } else {
                  Postdata();
                  setpasswordmsg("");
                  console.log(e);
                }
                e.preventDefault();
              }}
            >
              <input
                type="text"
                className="mt-[28px] text-sm pl-4  h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="name"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="text"
                className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="username"
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <input
                type="number"
                className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="phone"
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <input
                type="password"
                className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
              <p className="text-rose-700 ">{passwordmsg}</p>
              <input
                type="password"
                className="mt-[28px] text-sm pl-4 h-12 rounded bg-white w-[310px] outline-none shadow-lg"
                placeholder="Confirm Password"
                onChange={(e) => setcpassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#e50914] w-full h-12 mt-10 rounded"
              >
                Sign up
              </button>
            </form>
            <div className="text-sm mt-3">
              <p className="text-gray-600 ">
                {" "}
                <input type="checkbox" name="" id="" /> Remember me
              </p>
              <p className="ml-[220px] -mt-5 text-gray-600">Needhelp</p>
            </div>
          </div>
          <div className=" w-[314px] border- -mt-[64px] h-[182px] m-[64px]">
            <p className="pt-[100px] text-gray-700 text-[17px]">
              New To Ntflix?{" "}
              <span className="text-white font-bold pl-3">Sign in Now</span>
            </p>
            <p className="text-[13px] text-gray-500 pt-3">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
