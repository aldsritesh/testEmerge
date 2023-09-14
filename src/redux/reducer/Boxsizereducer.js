import _ from "lodash";
import { BoxWidthId } from "../action/Confige";

const initialState ={
    selectedWId : '',
    components: [],
    previewing: false,
    currentIndex: -1,
    currentBreakpoint: 'lg',
    save: false
    
};

export default function BoxWidthReducer(state = initialState , action){
    const duplicateState = _.cloneDeep(state);
    switch(action.type){
        case BoxWidthId : 
        return{
            ...state,
            selectedWId  : action.selectedWid
            
        }
        case 'COMPONENT_CHANGED':
            duplicateState.components = action.payload;
            return duplicateState;
        case 'PREVIEW_CHANGED':
            duplicateState.previewing = action.payload;
            return duplicateState;
        case 'CURRENT_SELECTED_INDEX':
            duplicateState.currentIndex = action.payload;
            return duplicateState;
        case 'BREAKPOINT_CHANGED':
            duplicateState.currentBreakpoint = action.payload;
            return duplicateState;
        case 'SAVE_CHANGED':
            duplicateState.save = action.payload;
            return duplicateState;
        default :
        return state
    }
}