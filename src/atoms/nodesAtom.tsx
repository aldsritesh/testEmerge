import { atom } from "recoil";
export const nodesAtom = atom({
  key: "nodesAtom", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
