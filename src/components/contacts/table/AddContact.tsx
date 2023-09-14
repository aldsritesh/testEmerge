/* eslint-disable react-hooks/exhaustive-deps */
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, {
  useState,
  MouseEventHandler,
  useCallback,
  useEffect,
} from "react";
import MobileNo from "../../UI/MobileNo";
import {
  IAddContactData,
  EContactType,
  IContactTag,
  IContactLeadSource,
  IOwner,
} from "../../Interfaces";
import TagSelect from "@/components/controls/TagSelect";
import LeadSourceSelect from "@/components/controls/LeadSourceSelect";
import OwnerSelect from "@/components/controls/OwnerSelect";
import PipelineSelect from "@/components/controls/PipelineSelect";

interface IAddContactProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  onSave: (data: IAddContactData) => Promise<boolean>;
}

export default function AddContact({
  visibility,
  onClose,
  onSave,
}: IAddContactProps) {
  const [tags, setTags] = useState<IContactTag[]>([]);
  const [owner, setOwner] = useState<any>({
    id: "",
    fullName: "",
  });
  const [pipeline, setPipeline] = useState<any>({
    id: "",
    name: "",
    pipelineID: "",
  });
  const [leadSources, setLeadSources] = useState<IContactLeadSource[]>([]);
  const [formData, setFormData] = useState<IAddContactData>({
    ownerUserID: null,
    pipelineID: null,
    pipelineStageID: null,
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    contactType: EContactType.LEAD,
    leadSources: leadSources,
    tags: tags,
  });
  const [errors, setErrors] = useState<any>({});
  // console.log(owner)
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "fullName") {
      setFormData((prevValues: any) => ({
        ...prevValues,
        fullName: value,
      }));
      if (formData.fullName.trim()) {
        setErrors({ ...errors, fullName: "" });
      }
    } else if (name === "emailAddress") {
      setFormData((prevValues: any) => ({
        ...prevValues,
        emailAddress: value,
      }));
      if (formData.emailAddress.trim()) {
        setErrors({ ...errors, emailAddress: "" });
      }
    } else if (name === "phoneNumber") {
      setFormData((prevValues: any) => ({
        ...prevValues,
        phoneNumber: value,
      }));
      if (formData.phoneNumber.trim()) {
        setErrors({ ...errors, phoneNumber: "" });
      }
    }
  };

  const handleLeadSourcesUpdate = useCallback(() => {
    if (leadSources.length > 0) {
      setErrors({ ...errors, leadSource: "" });
    }
    setFormData((prevValues: any) => ({
      ...prevValues,
      leadSources: leadSources,
    }));
  }, [leadSources]);

  const handleOwnerUpdate = useCallback(() => {
    if (owner.id.trim()) {
      setErrors({ ...errors, owner: "" });
    }
    setFormData((prevValues: any) => ({
      ...prevValues,
      ownerUserID: owner.id === "" ? null : owner.id,
    }));
  }, [owner]);

  const handleTagUpdate = useCallback(() => {
    setFormData((prevValues: any) => ({
      ...prevValues,
      tags: tags,
    }));
  }, [tags]);

  useEffect(() => {
    handleLeadSourcesUpdate();
  }, [handleLeadSourcesUpdate]);

  useEffect(() => {
    handleOwnerUpdate();
  }, [handleOwnerUpdate]);

  useEffect(() => {
    handleTagUpdate();
  }, [handleTagUpdate]);

  const resetForm = () => {
    setTags([]);
    setLeadSources([]);
    setOwner({
      id: "",
      fullName: "",
    });
    setPipeline({
      id: "",
      name: "",
      pipelineID: "",
    });
    setFormData({
      ownerUserID: null,
      pipelineID: null,
      pipelineStageID: null,
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      contactType: EContactType.LEAD,
      leadSources: [],
      tags: [],
    });
    setErrors({});
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormData((prevValues: any) => ({
      ...prevValues,
      leadSources: leadSources,
      tags: tags,
      ownerUserID: owner ? (owner.id === "" ? null : owner.id) : null,
      pipelineID: pipeline
        ? pipeline.pipelineID === ""
          ? null
          : pipeline.pipelineID
        : null,
      pipelineStageID: pipeline
        ? pipeline.id === ""
          ? null
          : pipeline.id
        : null,
    }));

    const validationErrors: any = {};
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Enter your full name";
    }
    if (!formData.emailAddress.trim()) {
      validationErrors.emailAddress = "Enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      validationErrors.emailAddress = "Enter a valid email";
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Enter your phone number";
    } else if (
      !/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
        formData.phoneNumber
      )
    ) {
      validationErrors.phoneNumber = "Enter a valid phone number";
    }
    if (!owner.id.trim()) {
      validationErrors.owner = "Select an owner";
    }
    if (formData.leadSources.length === 0) {
      validationErrors.leadSource = "Select a source";
    }
    if (!pipeline.id.trim()) {
      validationErrors.status = "Select a status";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const isSuccessful = await onSave(formData);
    if (isSuccessful) {
      resetForm();
      onClose(e);
    }
  };

  const [isPhoneNumberFieldActive, setIsPhoneNumberFieldActive] =
    useState(false);

  return (
    <div>
      <div
        className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          visibility
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div className="absolute h-full w-full z-40   " onClick={onClose}></div>
        <div className="bg-white w-full md:w-[80%] lg:w-[50%] absolute right-0  h-full z-50 ">
          <div className="flex justify-between items-center   px-4 md:px-4 pt-4 pb-2  border-b-gray-200 border-b  ">
            <h3 className="font-semibold  text-2xl">Add Contact</h3>

            <div onClick={onClose}>
              <XMarkIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="px-3  pt-5 h-[95vh] overflow-y-scroll scrollbar-hide pb-5">
            <form className="flex flex-wrap justify-start items-start">
              <div
                className={`px-2 flex flex-col justify-start items-start w-full mb-3`}
              >
                <p className="font-semibold text-gray-800 mb-2">Full Name</p>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">
                  Contact Owner
                </p>
                <OwnerSelect
                  owner={owner}
                  setOwner={setOwner}
                  className={
                    "placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none text-black "
                  }
                />
                {errors.owner && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.owner}
                  </p>
                )}
              </div>
              <div className="w-full px-2 mb-5 ">
                <p className="font-semibold text-gray-800 mb-2">
                  Email Address
                </p>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
                />
                {errors.emailAddress && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              <div className="w-full mb-2 px-2">
                <p className="font-semibold text-gray-800 mb-2">Phone Number</p>
                <div
                  className={`flex placeholder:font-semibold  placeholder:text-[#3d3c3c] rounded-md mb-2 text-sm font-medium bg-transparent  w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none ${
                    isPhoneNumberFieldActive
                      ? "bg-[#F6F7FA] border-[#dbd9d9]"
                      : ""
                  } text-black`}
                >
                  <span
                    className={`py-3 px-2 ${
                      isPhoneNumberFieldActive ? "bg-[#F6F7FA]" : ""
                    }`}
                  >
                    +1
                  </span>
                  <input
                    onFocus={() => setIsPhoneNumberFieldActive(true)}
                    onBlur={() => setIsPhoneNumberFieldActive(false)}
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="py-3 w-full outline-none focus:bg-[#F6F7FA]"
                  />
                </div>

                {errors.phoneNumber && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-5 ">
                <p className="font-semibold text-gray-800 mb-2">Status</p>
                <PipelineSelect
                  pipeline={pipeline}
                  setPipeline={setPipeline}
                  className={
                    "placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none text-black "
                  }
                />
                {errors.status && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.status}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Lead Source</p>
                <LeadSourceSelect
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black min-h-12"
                  leadSources={leadSources}
                  setLeadSources={setLeadSources}
                  addNewLeadSource={(content: string): boolean => {
                    return false;
                  }}
                  addExistingLeadSource={(leadSourceID: string) => {}}
                  removeLeadSource={(leadSourceID: string) => {}}
                />
                {errors.leadSource && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.leadSource}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-3">
                <p className="font-semibold text-gray-800 mb-2">Tags</p>
                <TagSelect
                  className="placeholder:font-semibold  placeholder:text-[#3d3c3c] px-2 rounded-md mb-2 py-3 text-sm font-medium bg-transparent focus:bg-[#F6F7FA] w-full  border-[1px] border-[#dbd9d9] text-space focus:outline-none   focus:border-[#dbd9d9] text-black min-h-12"
                  tags={tags}
                  setTags={setTags}
                  addNewTag={(content: string): boolean => {
                    return false;
                  }}
                  addExistingTag={(tagID: string) => {}}
                  removeTag={(tagID: string) => {}}
                />
                {errors.tags && (
                  <p className="text-sm text-red-500 mb-2 mt-1">
                    {errors.tags}
                  </p>
                )}
              </div>

              <div className="w-full flex justify-between items-center px-4 md:px-4 pt-4 pb-2 border-gray-200 border-t mt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    resetForm();
                    onClose(e);
                  }}
                  className="font-semibold text-gray-800 mb-2 text-lg"
                >
                  Cancel
                </button>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mr-4 font-semibold text-gray-800 mb-2 border-2 border-gray-200 rounded-md py-1.5 px-3"
                  >
                    Create and add another
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="font-semibold   mb-2 bg-secondary rounded-md py-1.5 px-6 text-white"
                  >
                    Create lead
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
