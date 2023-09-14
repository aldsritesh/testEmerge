import { userState } from "@/atoms/user";
import { baseUrl, userLocalStorageToken } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

const LoginPage = () => {
  // token;
  const [errors, setErrors] = useState<any>({});
  const { LoginUser } = useAuthentication();

  const [isReady, setIsReady] = useState(true);
  const [storedUserId, setStoredUserId] = useState("");
  const [formValues, setFormValues] = useState<any>({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useRecoilState<any>(userState);
  const router = useRouter();
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };

  const { setUserToken } = useAuthentication();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors: any = {};

    if (!formValues.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formValues.password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    //user login
    axios
      .post(
        `${baseUrl}login`,
        {
          emailAddress: formValues.email,
          password: formValues.password,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      )
      .then((data) => {
        console.log(data);
        setUserToken(data?.data?.token);
        setStoredUserId(data?.data?.userID);
        localStorage.setItem("userID", data?.data?.userID);
        // LoginUser(data);
        router.push("/");
      });
    //get user
    // axios
    //   .get(`${baseUrl}users/9b36de41-f652-4bf2-ba38-7a96103f09a3`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // setUserData(data);
    //     // router.push("/");
    //   })
    //   .catch((err) => console.log(err));
    // axios.get(`${baseUrl}`)
    // LoginUser(token);

    setFormValues({
      email: "",
      password: "",
    });
    setErrors({});
  };
  // setUserToken(token);
  console.log("info", storedUserId);
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-80 h-96 bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl text-[#1F2228] font-semibold">
          Login to continue
        </h1>
        <p className="text-[#4B5563] font-medium text-sm">
          Enter Details to access your data
        </p>
        <div>
          <form
            className="flex flex-col items-center justify-center gap-3"
            onSubmit={(e: any) => handleSubmit(e)}
          >
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formValues?.email}
                onChange={handleChange}
                className="border-2 rounded-lg w-full p-2 outline-none"
              />
              {errors.email && (
                <span className="mb-5 error text-red-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues?.password}
                onChange={handleChange}
                className="border-2 rounded-lg w-full p-2 outline-none"
              />
              {errors.password && (
                <span className="mb-5 error text-sm text-red-500 ">
                  {errors.password}
                </span>
              )}
            </div>
            <button
              className="bg-[#FF7043] rounded-lg text-white px-28 py-3 font-semibold w-full"
              onSubmit={(e: any) => handleSubmit(e)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
