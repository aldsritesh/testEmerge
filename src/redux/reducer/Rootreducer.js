import { combineReducers } from "redux";
import BoxWidthReducer from "./Boxsizereducer";

const rootReducer = combineReducers({
        WidthObj : BoxWidthReducer,
       
       
});

export default rootReducer;