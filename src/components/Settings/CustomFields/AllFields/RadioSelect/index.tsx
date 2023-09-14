import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React from "react";

export default function RadioSelect() {
  return (
    <div className=" p-2">
      <div className=" bg-white">
        <FormControlLabel control={<Checkbox />} label="Radio" />
      </div>
    </div>
  );
}
