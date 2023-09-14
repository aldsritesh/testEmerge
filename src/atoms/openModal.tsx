import { atom } from "recoil";
export const openModal = atom({
  key: "openModal", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
