import React from "react";

import ElementContent from "./Content";
import ElementRow from "./Row";
import ElementSection from "./Section";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    // "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const ElementSectionToolbox = () => {
  const [value, setValue] = React.useState(0);
  //   console.log(section);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    // <div className=" ">
    //   <div className="p-4">
    //     <div className={`p-[2px] flex  bg-[#eeeef1]  rounded-md`}>
    //       <button
    //         className={`w-1/3 bg-transparent  px-4 py-2 text-center ${
    //           section === "Content" && "bg-white rounded-md shadow-md"
    //         }  text-black font-medium btn border-none capitalize hover:bg-white`}
    //         onClick={() => setSection("Content")}
    //       >
    //         Content
    //       </button>
    //       <button
    //         className={`w-1/3 bg-transparent  px-4 py-2 text-center ${
    //           section === "Rows" && "bg-white rounded-md shadow-md"
    //         }  text-black font-medium btn border-none capitalize hover:bg-white`}
    //         onClick={() => setSection("Rows")}
    //       >
    //         Rows
    //       </button>
    //       <button
    //         className={`w-1/3 bg-transparent  px-4 py-2 text-center ${
    //           section === "section" && "bg-white rounded-md shadow-md"
    //         }  text-black font-medium btn border-none capitalize hover:bg-white`}
    //         onClick={() => setSection("Section")}
    //       >
    //         Section
    //       </button>
    //     </div>
    //   </div>
    //   {section === "Content" && <ElementContent />}
    //   {section === "Rows" && <ElementRow />}
    //   {section === "Section" && <ElementSection />}
    // </div>

    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          // aria-label="basic tabs example"
          className="bg-[#eeeef1] rounded-lg p-[1px] border-none"
        >
          <Tab
            label="Sections"
            {...a11yProps(0)}
            style={{
              backgroundColor: value === 0 ? "white" : "transparent",
            }}
            className={`w-1/3 bg-transparent   px-4 py-2 text-center  text-black font-medium btn border-none capitalize hover:bg-white `}
          />
          <Tab
            label="Row"
            {...a11yProps(1)}
            style={{
              backgroundColor: value === 1 ? "white" : "transparent",
            }}
            className={`w-1/3 bg-transparent  px-4 py-2 text-center   text-black font-medium btn border-none capitalize hover:bg-white`}
          />
          <Tab
            label="Content"
            {...a11yProps(2)}
            style={{
              backgroundColor: value === 2 ? "white" : "transparent",
            }}
            className={`w-1/3 bg-transparent  px-4 py-2 text-center  text-black font-medium btn border-none capitalize hover:bg-white`}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ElementSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ElementRow />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ElementContent />
      </CustomTabPanel>
    </Box>
  );
};
