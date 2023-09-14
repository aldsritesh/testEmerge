import { atom } from "recoil";
export const itemState = atom({
  key: "itemState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
