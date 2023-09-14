import { atom } from "recoil";
export const modalItemState = atom({
  key: "modalItemState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
