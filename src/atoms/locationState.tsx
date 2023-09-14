import { atom } from "recoil";
export const locationState = atom({
  key: "locationState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
