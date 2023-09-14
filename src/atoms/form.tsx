import { atom } from "recoil";
export const formState = atom({
  key: "formState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
