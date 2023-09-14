import { atom } from "recoil";
export const startNodeState = atom({
  key: "startNodeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
