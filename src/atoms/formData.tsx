import { contactID } from "@/config/APIConstants";
import { atom } from "recoil";
export const formDataState = atom({
  key: "formDataState", // unique ID (with respect to other atoms/selectors)
  default: {  }, // default value (aka initial value)
});
