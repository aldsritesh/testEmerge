import { atom } from "recoil";
export const nameTrigger = atom({
  key: "nameTrigger", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
