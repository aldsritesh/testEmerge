
import { MenuItem, Select } from "@mui/material";
import * as React from 'react';


export default function DashBoardSelect({name , onChange ,value,optionData}:any) {


  return (
    
    <Select
    name={name}
    value={value}
    onChange={onChange}
    className="rounded-md text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
  >
    {optionData.map((item:any , index:number)=> (
    <MenuItem key={index} value={item}>{item}</MenuItem>
    ))}
 
  </Select>



  )
}



