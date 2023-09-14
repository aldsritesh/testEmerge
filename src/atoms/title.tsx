import { atom } from "recoil";
export const titleState = atom({
  key: "titleState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
