import { atom } from "recoil";
export const titleTrigger = atom({
  key: "titleTrigger", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
