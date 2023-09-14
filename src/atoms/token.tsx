import { atom } from "recoil";
export const tokenState = atom({
  key: "tokenState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
