import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function DropdownSingle() {
  return (
    <div className="p-2">
      <div>
        <p className="text-sm">Select</p>
      </div>
      <div className=" bg-white mt-2">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          className="w-full h-full "
          // onChange={handleChange}
        >
          <MenuItem value={10}>Select</MenuItem>
          <MenuItem value={20}>Option 1</MenuItem>
          <MenuItem value={30}>Option 2</MenuItem>
        </Select>
      </div>
    </div>
  );
}
