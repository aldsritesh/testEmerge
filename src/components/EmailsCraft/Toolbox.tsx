import React, { useContext } from "react";
import { CraftContext } from "@/pages/builder/website/craft";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import EmailElementToolbox from "./components/Toolboxes/ElementToolbox";
import EmailPrebuiltToolbox from "./components/Toolboxes/PrebuiltToolbox";

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
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    // "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Toolbox = ({ setElemSelect }: any) => {
  const [tabValue, setTabValue] = React.useState(0);
  // const { tabValue, setTabValue } = useContext(CraftContext);

  const { tools, setTools } = useContext(CraftContext);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    // console.log("label changed");
  };

  return (
    <div className="pt-1">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            px: 2,
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { backgroundColor: "black" },
            }}
            // aria-label="basic tabs example"
            className="bg-[#eeeef1] rounded-lg    p-[1px] border-none"
          >
            <Tab
              label="Prebuilt"
              {...a11yProps(1)}
              style={{
                backgroundColor: tabValue === 0 ? "white" : "transparent",
                color: "black",
              }}
              className={`w-1/2 bg-transparent   px-4 py-2 text-center  text-black font-medium btn border-none capitalize hover:bg-white `}
            />
            <Tab
              label="Elements"
              {...a11yProps(0)}
              style={{
                backgroundColor: tabValue === 1 ? "white" : "transparent",
                color: "black",
              }}
              className={`w-1/2 bg-transparent  px-4 py-2 text-center   text-black font-medium btn border-none capitalize hover:bg-white`}
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={tabValue} index={0}>
          <EmailPrebuiltToolbox />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <EmailElementToolbox />
        </CustomTabPanel>
      </Box>
    </div>
  );
};
