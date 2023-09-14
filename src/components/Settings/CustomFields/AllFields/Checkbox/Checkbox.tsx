import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React from "react";

export default function Checkboxx() {
  return (
    <div className="p-2">
      <div className=" bg-white mt-2">
        <FormControlLabel
          className="rounded-md"
          control={<Checkbox />}
          label="Checkbox"
        />
      </div>
    </div>
  );
}
