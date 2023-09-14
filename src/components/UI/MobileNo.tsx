import React from "react";
// import MuiPhoneNumber from 'material-ui-phone-number'

import { Box, TextField, Theme, createStyles, makeStyles } from "@mui/material";

import PhoneInput from "react-phone-input-2";

const Input = (props: any) => {
  return (
    <Box className="  mt-2 mb-3" pr={1} pl={1}>
      <Box>
        <PhoneInput
          specialLabel={""}
          country={"us"}
          inputStyle={{
            borderColor: props.touched && props.error && "red",
          }}
          {...props}
        />
        {props.touched && props.error && (
          <p
            style={{ color: "red" }}
            className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"
          >
            {props.error}
          </p>
        )}
      </Box>
    </Box>
  );
};

const MobileNo = (props: any) => {
  return (
    <Input
      label={"Mobile Phone"}
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default MobileNo;
