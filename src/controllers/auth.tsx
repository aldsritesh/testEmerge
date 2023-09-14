import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import axios from "@/utils/axios";
// import { userState } from "@/atom/user";
import { baseUrl, userID, userLocalStorageToken } from "@/config/APIConstants";
import { tokenState } from "@/atoms/token";
import { userState } from "@/atoms/user";
import { locationState } from "@/atoms/locationState";
import { useRouter } from "next/router";
export const useAuthentication = () => {
  const router = useRouter();
  const [token, setToken] = useRecoilState<any>(tokenState);
  const [user, setUser] = useRecoilState<any>(userState);
  const [location, setLocation] = useRecoilState(locationState);
  const [isTokenReady, setIsTokenReady] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [localStatus, setLocalStatus] = useState(false);
  const getUser = async (token: string) => {
    if (token) {
      axios
        .get(`${baseUrl}users/${userID}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          // console.log("userData{}{}{}{}{", data);
          setUser(data);
        })
        .catch((e) => console.log(e));
    }
  };

  const checkIfUserLoggedIn = async () => {
    const token: any = localStorage.getItem(userLocalStorageToken);

    setIsTokenReady(false);
    if (token) {
      // console.log("bye");
      setToken(token);
      setLocalStatus(true);
      setIsTokenReady(true);
      setIsTokenValid(true);
      // getUser(token)
      //   .then((res) => {
      //     // console.log("Customer fetched: ", res?.full_name);
      //     setToken(token);
      //     setLocalStatus(true);
      //     setIsTokenReady(true);
      //     setIsTokenValid(true);
      //   })
      //   .catch((err) => {
      //     // console.log("Customer fetched. error");
      //     setToken(null);
      //     clearToken();
      //     setIsTokenReady(true);
      //     setIsTokenValid(false);
      //     setLocalStatus(true);
      //   });
    } else {
      // console.log("clear token");
      setLocalStatus(true);
      setIsTokenReady(true);
      clearToken();
    }
  };

  // Set recoil token + local storage
  const setUserToken = async (token: any) => {
    setIsTokenReady(false);
    setToken(token);
    localStorage.setItem(userLocalStorageToken, token);
    setIsTokenValid(true);
    setIsTokenReady(true);
  };

  // console.log("setToken", token);
  // console.log("ok1", token);

  const clearToken = async () => {
    setIsTokenReady(false);
    setToken(null);
    localStorage.removeItem(userLocalStorageToken);
    setIsTokenReady(true);
    setIsTokenValid(false);
    router.push("/loginPage");

    // setUser(null);
  };

  const LoginUser = async (values: any) => {
    // try {
    //   const { data } = await axios.post(customerLogin, {
    //     email: values.email,
    //     password: values.password,
    //   });
    //   await setUserToken(data.access.toString());
    //   await getUser(data.access);
    //   return data;
    // } catch (error: any) {
    //   throw error;
    // }

    await setUserToken(values.toString());
    await getUser(values);
  };

  return {
    user,
    setUserToken,
    location,
    setLocation,
    getUser,
    localStatus,
    checkIfUserLoggedIn,
    clearToken,
    token,
    isTokenReady,
    // RegisterUser,
    LoginUser,
    // verifyCustomer,
    // updatePassengerDetails,
  };
};
