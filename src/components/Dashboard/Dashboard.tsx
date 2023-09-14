import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { dashboardDataState } from "@/atoms/dashboardData";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { baseUrl, userID } from "@/config/APIConstants";
import useId from "@mui/material/utils/useId";
import { useAuthentication } from "@/controllers/auth";

export default function Dashboard() {
  const [formValues, setFormValues] = useState<any>({
    dashboardName: "",
    user: "",
    userAssigned: [userID],
  });

  const [dashboardData, setDashboardData] = useRecoilState(dashboardDataState);
  const router = useRouter();
  const [isRadioChecked, setRadioChecked] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChangeAssign = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setFormValues((prevValues: any) => ({
      ...prevValues,
      userAssigned: [userID, ...selectedValues],
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (value == "Specific") {
      setRadioChecked(true);
    } else {
      setRadioChecked(false);
    }

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors: any = {};

    if (!formValues.dashboardName) {
      validationErrors.dashboardName = "Required";
    }

    if (!formValues.user) {
      validationErrors.user = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      dashboardName: "",
    });
    setDashboardData(formValues);

    setErrors({});

    router.push("/builder/dashboard/template");
  };

  // React-Select
  const animatedComponents = makeAnimated();
  const { location, token }: any = useAuthentication();
  const [users, setUsers] = useState<any>([]);
  // console.log("location on dashboard create page", location?.id);

  useEffect(() => {
    if (location != null) {
      axios
        .get(`${baseUrl}users/location/${location?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("token", token);
          setUsers(res);
          // console.log("response", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location, token]);

  const options = users?.data?.users?.map((item: any) => ({
    value: item.id,
    label: item.fullName,
  }));

  return (
    <div>
      <div className="w-full   flex ">
        <div className="h-[90vh]">
          <Sidebar value={0} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between w-full"
        >
          <div className="px-10 pt-10">
            <p className="text-2xl font-semibold">Dashboard Information</p>
            <div className="pt-7 space-y-8">
              {/* Dashboard Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#4B5563] text-sm">
                  Dashboard Name
                </label>
                <input
                  type="text"
                  className="border rounded-md outline-none px-2 py-1 w-96"
                  placeholder="Dashboard Name"
                  name="dashboardName"
                  value={formValues?.name}
                  onChange={handleChange}
                />
                {errors.dashboardName && (
                  <div className="  error text-red-500 ">
                    {errors.dashboardName}
                  </div>
                )}
              </div>

              {/* Who can see this --- Radio buttons */}
              <div>
                <div>
                  <p className="font-semibold text-[#4B5563] text-sm">
                    Who can see this dashboard?
                  </p>
                  <div className="space-y-3 pt-3">
                    <div className="form-control w-fit">
                      <label className=" cursor-pointer flex items-center gap-3">
                        <input
                          type="radio"
                          name="user"
                          className="radio checked:bg-blue-500"
                          value="OnlyMe"
                          onChange={handleChange}
                        />
                        <span className="label-text">Only Me</span>
                      </label>
                    </div>
                    <div className="form-control w-fit">
                      <label className=" cursor-pointer  flex items-center gap-3">
                        <input
                          type="radio"
                          name="user"
                          className="radio checked:bg-blue-500"
                          value="everyone"
                          onChange={handleChange}
                        />
                        <span className="label-text">Everyone</span>
                      </label>
                    </div>
                    <div className="form-control w-fit">
                      <label className=" cursor-pointer  flex items-center gap-3">
                        <input
                          type="radio"
                          name="user"
                          className="radio checked:bg-blue-500"
                          onChange={handleChange}
                          value="Specific"
                        />
                        <span className="label-text">
                          Specific User ,Team or Role
                        </span>
                      </label>
                    </div>
                    {isRadioChecked && (
                      <div className="w-96">
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={options}
                          onChange={(e: any) => handleChangeAssign(e)}
                          theme={(theme) => ({ ...theme, borderRadius: 6 })}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {errors.user && (
                  <div className="  error text-red-500 ">{errors.user}</div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-grey/20 py-5 px-12 flex items-center justify-end gap-2">
            <button
              onClick={() => router.push("/builder")}
              type="button"
              className="bg-secondary rounded-md  px-5 py-2 text-white"
            >
              Cancel
            </button>
            <button
              className="bg-newBlue rounded-md px-5 py-2 text-white"
              onSubmit={handleSubmit}
            >
              Next
            </button>

            {/* <button type='button' className='btn-gray'>Next</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
