import { atom } from "recoil";
export const offCanvasOpenState = atom({
  key: "offCanvasOpenState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
