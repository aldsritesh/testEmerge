import { BoxWidthId } from "./Confige";

export const setSelectedBoxWidth = ( selectedWid) => dispatch =>{
    return new Promise((resolve , rejected)=>{
        dispatch(
            {type:BoxWidthId , selectedWid }
        );
        resolve();
    })
}