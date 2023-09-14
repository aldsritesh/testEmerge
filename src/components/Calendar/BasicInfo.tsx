// import { useContext, useEffect, useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import AddIcon from "@mui/icons-material/Add";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import CountrySelect from "../controls/CountrySelect";
// import { IContactData } from "../Interfaces";
// import axios from "axios";
// import TagSelect from "../controls/TagSelect";
// import LeadSourceSelect from "../controls/LeadSourceSelect";
// import { useRouter } from "next/router";
// import { BiMessageDetail } from "react-icons/bi";
// import { GlobalContext } from "@/layouts/GlobalLayout";
// import { baseUrl, locationID, token } from "@/config/APIConstants";

// const BasicInfo = ({ data }: any) => {
//   // console.log("hello", data)

//   const ctx: any = useContext(GlobalContext);
//   const router = useRouter();
//   const [tabIndex, setTabIndex] = useState(0);
//   const [fullName, setFullName] = useState("");
//   const [owner, setOwner] = useState<any>(null);
//   const [emailAddress, setEmailAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [contactType, setContactType] = useState("");
//   const [tags, setTags] = useState<any>(null);
//   const [leadSources, setLeadSources] = useState<any>(null);
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [ssn, setSsn] = useState("");
//   const [dateOfInjury, setDateOfInjury] = useState("");
//   const [status, setStatus] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");
//   const [region, setRegion] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [country, setCountry] = useState("");

//   const [prevFullName, setPrevFullName] = useState("");
//   const [prevOwner, setPrevOwner] = useState<any>(null);
//   const [prevEmailAddress, setPrevEmailAddress] = useState(emailAddress);
//   const [prevPhoneNumber, setPrevPhoneNumber] = useState("");
//   const [prevContactType, setPrevContactType] = useState("");
//   const [prevTags, setPrevTags] = useState("");
//   const [prevLeadSources, setPrevLeadSources] = useState("");
//   const [prevDateOfBirth, setPrevDateOfBirth] = useState("");
//   const [prevSsn, setPrevSsn] = useState("");
//   const [prevDateOfInjury, setPrevDateOfInjury] = useState("");
//   const [prevStatus, setPrevStatus] = useState("");
//   const [prevStreet, setPrevStreet] = useState("");
//   const [prevCity, setPrevCity] = useState("");
//   const [prevRegion, setPrevRegion] = useState("");
//   const [prevPostalCode, setPrevPostalCode] = useState("");
//   const [prevCountry, setPrevCountry] = useState("");

//   const addedOnDateFormat = () => {
//     let date = new Date("2023-05-31");

//     let day = date.getDate();
//     let month = date.toLocaleString("default", { month: "long" });
//     let year = date.getFullYear();

//     let newDate = `${day} ${month} ${year}`;
//     return newDate;
//   };

//   useEffect(() => {
//     console.log(dateOfBirth);
//   }, [dateOfBirth]);

//   const updateFullName = () => {
//     if (fullName === prevFullName) return;
//     const update = async () => {
//       const token = process.env.NEXT_PUBLIC_API_TOKEN;

//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/full-name`,
//           {
//             fullName: fullName,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevFullName(fullName);
//   };

//   const updateEmailAddress = () => {
//     if (emailAddress === prevEmailAddress) return;
//     const update = async () => {
//       const token = process.env.NEXT_PUBLIC_API_TOKEN;

//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/email-address`,
//           {
//             emailAddress: emailAddress,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevEmailAddress(emailAddress);
//   };

//   const updatePhoneNumber = () => {
//     if (phoneNumber === prevPhoneNumber) return;
//     const update = async () => {
//       const token = process.env.NEXT_PUBLIC_API_TOKEN;

//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/phone-number`,
//           {
//             phoneNumber: phoneNumber,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevPhoneNumber(phoneNumber);
//   };

//   const updateOwner = () => {
//     if (owner.id === prevOwner.id) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/owner-user-id`,
//           {
//             ownerUserID: owner.id,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setOwner(prevOwner);
//   };

//   const addNewTag = (content: string): boolean => {
//     const add = async () => {
//       const token = process.env.NEXT_PUBLIC_API_TOKEN;

//       const tagResult = await axios.post(
//         `${baseUrl}tags`,
//         {
//           locationID: locationID,
//           content: content,
//           tagType: "CONTACT",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       await axios.post(
//         `${baseUrl}contacts/${data?.contact?.id}/tags`,
//         {
//           contactID: data?.contact?.id,
//           tagID: tagResult.data?.tagID,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setTags([
//         ...tags,
//         {
//           tagID: tagResult.data?.tagID,
//           contactID: data?.contact?.id,
//           content: content,
//         },
//       ]);
//     };

//     add();

//     return true;
//   };

//   const addExistingTag = (tagID: string) => {
//     const add = async () => {
//       console.log("adding existing tag", tagID);
//       await axios.post(
//         `${baseUrl}contacts/${data?.contact?.id}/tags`,
//         {
//           tagID: tagID,
//           contactID: data?.contact?.id,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     };

//     add();
//   };

//   const removeTag = (tagID: string) => {
//     const remove = async () => {
//       await axios.delete(
//         `${baseUrl}contacts/${data?.contact?.id}/tags/${tagID}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     };

//     remove();
//   };

//   const addNewLeadSource = (content: string): boolean => {
//     const add = async () => {
//       const leadSourceResult = await axios.post(
//         `${baseUrl}lead-sources`,
//         {
//           locationID: locationID,
//           content: content,
//           color: "CONTACT",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       await axios.post(
//         `${baseUrl}contacts/${data?.contact?.id}/lead-sources`,
//         {
//           contactID: data?.contact?.id,
//           leadSourceID: leadSourceResult.data?.leadSourceID,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setLeadSources([
//         ...leadSources,
//         {
//           leadSourceID: leadSourceResult.data?.leadSourceID,
//           contactID: data?.contact?.id,
//           content: content,
//         },
//       ]);
//     };

//     add();

//     return true;
//   };

//   const addExistingLeadSource = (leadSourceID: string) => {
//     const add = async () => {
//       console.log("adding existing leadSource", leadSourceID);
//       await axios.post(
//         `${baseUrl}contacts/${data?.contact?.id}/lead-sources`,
//         {
//           leadSourceID: leadSourceID,
//           contactID: data?.contact?.id,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     };

//     add();
//   };

//   const removeLeadSource = (leadSourceID: string) => {
//     const remove = async () => {
//       await axios.delete(
//         `${baseUrl}contacts/${data?.contact?.id}/lead-sources/${leadSourceID}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     };

//     remove();
//   };

//   const updateStatus = () => {
//     if (status === prevStatus) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/status`,
//           {
//             status: status,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevStatus(status);
//   };

//   const updateContactType = () => {
//     if (contactType === prevContactType) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/contact-type`,
//           {
//             contactType: contactType,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevContactType(contactType);
//   };

//   const updateDateOfBirth = () => {
//     const dateOfBirthVal = dateOfBirth === "" ? "0001-01-01" : dateOfBirth;
//     if (dateOfBirth === prevDateOfBirth) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/profile/date-of-birth`,
//           {
//             dateOfBirth: dateOfBirthVal,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevDateOfBirth(dateOfBirth);
//   };

//   const updateSsn = () => {
//     if (ssn === prevSsn) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/profile/ssn`,
//           {
//             ssn: ssn,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevSsn(ssn);
//   };

//   const updateDateOfInjury = () => {
//     const dateOfInjuryVal = dateOfInjury === "" ? "0001-01-01" : dateOfInjury;
//     if (dateOfInjury === prevDateOfInjury) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/profile/date-of-injury`,
//           {
//             dateOfInjury: dateOfInjuryVal,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevDateOfInjury(dateOfInjury);
//   };

//   const updateStreet = () => {
//     if (street === prevStreet) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/address/street`,
//           {
//             street: street,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevStreet(street);
//   };

//   const updateCity = () => {
//     if (city === prevCity) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/address/city`,
//           {
//             city: city,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevCity(city);
//   };

//   const updateRegion = () => {
//     if (region === prevRegion) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/address/region`,
//           {
//             region: region,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevRegion(region);
//   };

//   const updatePostalCode = () => {
//     if (postalCode === prevPostalCode) return;
//     const update = async () => {
//       await axios
//         .put(
//           `${baseUrl}contacts/${data?.contact?.id}/address/postal-code`,
//           {
//             postalCode: postalCode,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         )
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     update();
//     setPrevPostalCode(postalCode);
//   };

//   return (
//     <div className="h-full">
//       <div className="w-full  grid grid-cols-2 mt-2">
//         {["Leads info", "Address info"].map((item, index) => (
//           <button
//             key={index}
//             className={`text-center inline-block p-3 ${
//               tabIndex === index
//                 ? "border-b-[3px] border-b-black font-semibold"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setTabIndex(index)}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//       {(tabIndex === 0 && (
//         <div className="mx-10 mt-10 pb-10 w-[80%] overflow-y-scroll scrollbar-hide">
//           <div className="grid space-y-2">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Full Name
//             </span>
//             <input
//               onBlur={() => {
//                 updateFullName();
//               }}
//               onChange={(e) => setFullName(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={fullName}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Email
//             </span>
//             <input
//               onBlur={() => {
//                 updateEmailAddress();
//               }}
//               onChange={(e) => setEmailAddress(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={emailAddress}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Phone
//             </span>
//             <input
//               onBlur={() => {
//                 updatePhoneNumber();
//               }}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={phoneNumber}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Date Of Birth
//             </span>
//             <input
//               onBlur={() => {
//                 updateDateOfBirth();
//               }}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               type="date"
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={dateOfBirth}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Social Secruity Number
//             </span>
//             <input
//               onBlur={() => {
//                 updateSsn();
//               }}
//               onChange={(e) => setSsn(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={ssn}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Date Of Injury
//             </span>
//             <input
//               onBlur={() => {
//                 updateDateOfInjury();
//               }}
//               onChange={(e) => setDateOfInjury(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   (e.target as HTMLInputElement).blur();
//                 }
//               }}
//               type="date"
//               className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//               value={dateOfInjury}
//             />
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Tags
//             </span>
//             {/* <TagSelect
//                   tags={tags}
//                   setTags={setTags}
//                   addNewTag={addNewTag}
//                   addExistingTag={addExistingTag}
//                   removeTag={removeTag}
//                   className={
//                     "py-2 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-10"
//                   }
//                 /> */}
//           </div>
//           <div className="grid space-y-2 mt-4">
//             <span className="font-main tracking-wide font-light text-gray-700">
//               Lead Source
//             </span>
//             {/* <LeadSourceSelect
//                   leadSources={leadSources}
//                   setLeadSources={setLeadSources}
//                   addNewLeadSource={addNewLeadSource}
//                   addExistingLeadSource={addExistingLeadSource}
//                   removeLeadSource={removeLeadSource}
//                   className={
//                     "py-2 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-10"
//                   }
//                 /> */}
//           </div>
//         </div>
//       )) ||
//         (tabIndex === 1 && (
//           <div className="mx-10 mt-10 pb-10 w-[80%]  overflow-y-scroll scrollbar-hide">
//             <div className="grid space-y-2">
//               <span className="font-main  tracking-wide font-light text-gray-700">
//                 Street Address
//               </span>
//               <input
//                 onBlur={() => {
//                   updateStreet();
//                 }}
//                 onChange={(e) => setStreet(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     (e.target as HTMLInputElement).blur();
//                   }
//                 }}
//                 className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//                 value={street}
//               />
//             </div>
//             <div className="grid space-y-2 mt-4">
//               <span className="font-main tracking-wide font-light text-gray-700">
//                 City
//               </span>
//               <input
//                 onBlur={() => {
//                   updateCity();
//                 }}
//                 onChange={(e) => setCity(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     (e.target as HTMLInputElement).blur();
//                   }
//                 }}
//                 className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//                 value={city}
//               />
//             </div>
//             <div className="grid space-y-2 mt-4">
//               <span className="font-main tracking-wide font-light text-gray-700">
//                 Country
//               </span>
//               <CountrySelect country={country} setCountry={setCountry} />
//             </div>
//             <div className="grid space-y-2 mt-4">
//               <span className="font-main tracking-wide font-light text-gray-700">
//                 State
//               </span>
//               <input
//                 onBlur={() => {
//                   updateRegion();
//                 }}
//                 onChange={(e) => setRegion(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     (e.target as HTMLInputElement).blur();
//                   }
//                 }}
//                 className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//                 value={region}
//               />
//             </div>
//             <div className="grid space-y-2 mt-4">
//               <span className="font-main tracking-wide font-light text-gray-700">
//                 Postal Code
//               </span>
//               <input
//                 onBlur={() => {
//                   updatePostalCode();
//                 }}
//                 onChange={(e) => setPostalCode(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     (e.target as HTMLInputElement).blur();
//                   }
//                 }}
//                 className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
//                 value={postalCode}
//               />
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BasicInfo;

import React, { useState, useContext, useCallback } from "react";
import GenderSelect from "../controls/GenderSelect";
import CountrySelect from "../controls/CountrySelect";
import { EContactType } from "../Interfaces";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { BsCashCoin, BsFillPencilFill } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";
import { SingleContactContext } from "@/pages/contact/[id]";
import Order from "../BuilderWorkflow/Components/Order";
import { MdOutlineAttachment, MdPayment } from "react-icons/md";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

export default function BasicInfo() {
  const ctx: any = useContext(SingleContactContext);
  const [billingExpanded, setBillingExpanded] = useState(false);
  const [additionalExpanded, setAdditionalExpanded] = useState(false);
  const [icdCodesExpanded, setIcdCodesExpanded] = useState(false);
  const [dealsExpanded, setdealsExpanded] = useState(false);
  const [financialsExpanded, setFinancialsExpanded] = useState(false);
  const [attachmentExpanded, setAttachmentExpanded] = useState(false);
  const [attachments, setAttachments] = useState<any>([]);
  const [formValues, setFormValues] = useState<any>({
    image: null,
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormValues({
        ...formValues,
        file: acceptedFiles[0],
      });
      setAttachments([...attachments, acceptedFiles[0]]);
    },
    [formValues, setFormValues]
  );

  console.log(attachments);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "file/*": [] },
    multiple: false,
  });
  const [icdCodes, setIcdCodes] = useState<any[]>([
    "E66",
    "E78.2",
    "I10",
    "K21.9",
    "K2",
    "M17.11",
    "M17.12",
    "M17.2",
    "M23.0",
    "M23.1",
    "M23.2",
    "M25.521",
    "M25.522",
    "M25.523",
    "M54.5",
    "M54.6",
    "M54.9",
    "M62.838",
    "M62.839",
    "M65.4",
  ]);
  const [insurances, setInsurances] = useState<any[]>([
    {
      name: "United Health Care Medicare",
      logo: "https://logosandtypes.com/wp-content/uploads/2020/08/United-Healthcare.png",
      address: "PO BOX 31362 SALT LAKE CITY, UT 84131",
      startDate: "5/23",
      endDate: "5/24",
      deductible: "$1500",
      coPay: "$35",
      coInsurance: "80/20",
    },
    {
      name: "Blue Cross Blue Shield",
      logo: "https://media2.sevendaysvt.com/sevendaysvt/imager/u/original/17975914/economy1-5.jpg",
      address: "225 North Michigan Ave. Chicago, IL 60601",
      startDate: "1/22",
      endDate: "3/23",
      deductible: "$5000",
      coPay: "$25",
      coInsurance: "80/20",
    },
  ]);
  const [data, setData] = useState({
    contact: {
      id: "",
      ownerUserID: null,
      pipelineID: null,
      pipelineStageID: null,
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      addedOn: "",
      contactType: EContactType.LEAD,
      tags: [],
      leadSources: [],
    },
    contactProfile: {
      contactID: "",
      dateOfBirth: "",
      dateOfInjury: "",
      ssn: "",
    },
    contactAddress: {
      contactID: "",
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  });
  const [country, setCountry] = useState(data.contactAddress.country);
  return (
    <div className="w-full px-4 bg-white h-auto">
      <div className="flex pb-12 pt-8">
        <div className="w-1/2">
          <div className="px-2">
            <div>
              <h3 className="text-gray-600 pb-4 font-semibold md:text-xl">
                Patient Info
              </h3>
            </div>

            <div>
              <div>
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Full Name
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="fullName"
                />
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm ">
                    Email
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="Email"
                />
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Date of Birth
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="dob"
                  type="date"
                />
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Social Security Number
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="dob"
                  type="text"
                />
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Date of Injury
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="dateOfInjury"
                  type="date"
                />
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Date of Injury
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="dateOfInjury"
                  type="date"
                />
              </div>
              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Owner
                  </span>
                </div>
                <select className="select select-bordered w-full h-8 ">
                  <option disabled selected>
                    Owner
                  </option>
                  <option>Corey Smith</option>
                  <option>Corey Smith</option>
                </select>
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Gender
                  </span>
                </div>
                <select className="select select-bordered w-full h-8 ">
                  <option disabled selected>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Status
                  </span>
                </div>
                <select className="select select-bordered w-full h-8 ">
                  <option>New Lead - Appointments</option>
                  <option>New Lead - Appointments</option>
                  <option>New Lead - Appointments</option>
                  <option>New Lead - Appointments</option>
                </select>
              </div>

              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Tags
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="tags"
                  type="text"
                />
              </div>
              <div className="pt-2">
                <div>
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Lead Source
                  </span>
                </div>
                <input
                  className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                  name="leadSource"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-l-2 border-l-gray-200">
          <div className="px-2">
            {/* Additional Info */}
            <div className="h-full overflow-y-scroll pb-2 w-full  scrollbar-hide">
              <div className=" font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                <Accordion
                  sx={{
                    boxShadow: "none",
                    "&:before": {
                      backgroundColor: "transparent !important",
                    },
                  }}
                  expanded={additionalExpanded}
                  onChange={(event, isExpanded) => {
                    setAdditionalExpanded(isExpanded);
                  }}
                >
                  <AccordionSummary
                    className="z-50"
                    expandIcon={
                      <span className="flex items-center ml-auto pt-1">
                        <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                      </span>
                    }
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        <div className="font-semibold">Additional Info</div>
                      </div>
                      <div className="flex items-center">
                        <span className="font-light text-sm text-gray-400 pr-2">
                          {additionalExpanded ? "Close" : "View"}
                        </span>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="font-main tracking-wide">
                      <div>
                        <div>
                          <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                            Street Address
                          </span>
                        </div>
                        <input
                          className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                          name="streetAddress"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                            City
                          </span>
                        </div>
                        <input
                          className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                          name="city"
                        />
                      </div>
                      <div className="pt-2">
                        <div>
                          <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                            Country
                          </span>
                        </div>
                        <CountrySelect
                          country={country}
                          setCountry={setCountry}
                        />
                      </div>
                      <div>
                        <div>
                          <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                            State
                          </span>
                        </div>
                        <input
                          className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                          name="state"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                            Postal Code
                          </span>
                        </div>
                        <input
                          className="font-main tracking-wide text-black px-3 border border-gray-300 rounded-lg shadow-sm w-full h-10"
                          name="postalCode"
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            {/* Additional Info */}

            <div>
              <div className="h-full overflow-y-scroll pb-2 w-full  scrollbar-hide">
                <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        backgroundColor: "transparent !important",
                      },
                    }}
                    expanded={billingExpanded}
                    onChange={(event, isExpanded) => {
                      setBillingExpanded(isExpanded);
                    }}
                  >
                    <AccordionSummary
                      className="z-50"
                      expandIcon={
                        <span className="flex items-center ml-auto pt-1">
                          <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                        </span>
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">Billing</div>
                        </div>
                        <div className="flex items-center">
                          <span className="font-light text-sm text-gray-400 pr-2">
                            {billingExpanded ? "Close" : "View"}
                          </span>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="font-main tracking-wide">
                        {insurances.map((insurance, index) => {
                          return (
                            <div
                              className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm"
                              key={index}
                            >
                              <div className="font-semibold">
                                {index === 0 ? (
                                  <span>Insurance - Primary</span>
                                ) : index === 1 ? (
                                  <span>Insurance - Secondary</span>
                                ) : (
                                  <span>Insurance - Others</span>
                                )}
                              </div>
                              <div className="mt-4">
                                <div className="flex space-x-4 text-sm">
                                  <img
                                    className="w-14 h-14 rounded-full p-0.5 object-contain border"
                                    src={insurance.logo}
                                    alt="Rounded avatar"
                                  />
                                  <div className="flex flex-col text-lg">
                                    <span>{insurance.name}</span>
                                    <span className="text-sm">
                                      {insurance.address}
                                    </span>
                                  </div>
                                </div>
                                <div className="grid grid-cols-5 mt-4">
                                  <div className="grid justify-items-center space-y-2">
                                    <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                      {insurance.startDate}
                                    </div>
                                    <span className="text-[11px]">
                                      Start Date
                                    </span>
                                  </div>
                                  <div className="grid justify-items-center space-y-2">
                                    <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                      {insurance.endDate}
                                    </div>
                                    <span className="text-[11px]">
                                      End Date
                                    </span>
                                  </div>
                                  <div className="grid justify-items-center space-y-2">
                                    <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                      {insurance.deductible}
                                    </div>
                                    <span className="text-[11px]">
                                      Deductible
                                    </span>
                                  </div>
                                  <div className="grid justify-items-center space-y-2">
                                    <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                      {insurance.coPay}
                                    </div>
                                    <span className="text-[11px]">Co-Pay</span>
                                  </div>
                                  <div className="grid justify-items-center space-y-2">
                                    <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                      {insurance.coInsurance}
                                    </div>
                                    <span className="text-[11px]">
                                      Co-Insurance
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div className="my-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                          <div className="font-semibold">
                            Cash Pay - Out Of Pocket
                          </div>
                          <div className="mt-4">
                            <div className="flex space-x-4 text-sm">
                              <div className="w-14 h-14 rounded-full object-contain border">
                                <BsCashCoin className="text-gray-600 w-full h-full p-3" />
                              </div>
                              <div className="flex flex-col text-lg">
                                <span>Cash Pay</span>
                                <span className="text-sm">Out Of Pocket</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-5 mt-4">
                              <div className="grid justify-items-center space-y-2">
                                <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                  1/22
                                </div>
                                <span className="text-[11px]">Start Date</span>
                              </div>
                              <div className="grid justify-items-center space-y-2">
                                <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                  12/23
                                </div>
                                <span className="text-[11px]">End Date</span>
                              </div>
                              <div className="grid justify-items-center space-y-2">
                                <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                  —
                                </div>
                                <span className="text-[11px]">Deductible</span>
                              </div>
                              <div className="grid justify-items-center space-y-2">
                                <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                  —
                                </div>
                                <span className="text-[11px]">Co-Pay</span>
                              </div>
                              <div className="grid justify-items-center space-y-2">
                                <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                                  —
                                </div>
                                <span className="text-[11px]">
                                  Co-Insurance
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mt-4 grid items-center">
                          <button
                            type="button"
                            // onClick={() => ctx.setOpenBillingFieldModel(true)}
                            className="grid content-center text-black bg-white font-medium rounded-lg font-main py-2.5 mt-4 border border-gray-100 shadow-sm items-center justify-items-center"
                          >
                            <div className="flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#263238"
                                className="w-5 h-5 mr-2 mt-0.5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              Add Payment
                            </div>
                          </button>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        backgroundColor: "transparent !important",
                      },
                    }}
                    expanded={dealsExpanded}
                    onChange={(event, isExpanded) => {
                      setdealsExpanded(isExpanded);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span className="flex items-center ml-auto pt-2.5">
                          <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                        </span>
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">Orders</div>
                          <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                            <AddIcon fontSize="medium" className="p-0.5" />
                          </button>
                          <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                            <BsFillPencilFill className="ml-1 p-0.5" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <span className="font-light text-sm text-gray-400 pr-2">
                            {dealsExpanded ? "Close" : "View"}
                          </span>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Order />
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        backgroundColor: "transparent !important",
                      },
                    }}
                    expanded={icdCodesExpanded}
                    onChange={(event, isExpanded) => {
                      setIcdCodesExpanded(isExpanded);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span className="flex items-center ml-auto pt-1">
                          <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                        </span>
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">ICD Codes</div>
                          <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                            <AddIcon fontSize="medium" className="p-0.5" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <span className="font-light text-sm text-gray-400 pr-2">
                            {icdCodesExpanded ? "Close" : "View"}
                          </span>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-wrap -mt-2">
                        {icdCodes.map((icdCode, icdCodeIndex) => (
                          <div
                            className="w-fit m-2 cursor-pointer rounded-2xl bg-blue-50 text-blue-500 shadow-none p-1.5 px-2.5 text-sm text-center font-semibold"
                            key={icdCodeIndex}
                          >
                            {icdCode}
                          </div>
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        backgroundColor: "transparent !important",
                      },
                    }}
                    expanded={financialsExpanded}
                    onChange={(event, isExpanded) => {
                      setFinancialsExpanded(isExpanded);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span className="flex items-center ml-auto pt-2.5">
                          <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                        </span>
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">Financials</div>
                          <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                            <MdPayment className="ml-1 p-0.5" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <span className="font-light text-sm text-gray-400 pr-2">
                            {financialsExpanded ? "Close" : "View"}
                          </span>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                        <div className="flex flex-col space-y-4">
                          <span className="font-semibold align-middle">
                            Charges
                          </span>

                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                              <thead className="text-xs text-gray-700 uppercase font-main">
                                <tr className="border-b">
                                  <th scope="col" className="px-2 py-3">
                                    Product
                                  </th>
                                  <th scope="col" className="px-2 py-3">
                                    Date
                                  </th>
                                  <th scope="col" className="px-2 py-3">
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="font-semibold">
                                <tr className="bg-white">
                                  <th
                                    scope="row"
                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    99213
                                  </th>
                                  <td className="px-2 py-4">05/03/2023</td>
                                  <td className="px-2 py-4">$3,439</td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <th
                                    scope="row"
                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    97110
                                  </th>
                                  <td className="px-2 py-4">05/03/2023</td>
                                  <td className="px-2 py-4">$1,000</td>
                                </tr>
                                <tr className="bg-white">
                                  <th
                                    scope="row"
                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    99413
                                  </th>
                                  <td className="px-2 py-4">07/03/2023</td>
                                  <td className="px-2 py-4">$359</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        backgroundColor: "transparent !important",
                      },
                    }}
                    expanded={attachmentExpanded}
                    onChange={(event, isExpanded) => {
                      setAttachmentExpanded(isExpanded);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span className="flex items-center ml-auto pt-2.5">
                          <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                        </span>
                      }
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">Attachment </div>
                          <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                            <MdOutlineAttachment className="ml-1 p-0.5" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <span className="font-light text-sm text-gray-400 pr-2">
                            {attachmentExpanded ? "Close" : "View"}
                          </span>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-4 rounded-lg border border-gray-100 p-2 shadow-sm">
                        <button
                          {...getRootProps()}
                          // onClick={() => ctx.setOpenFieldModel(true)}
                          className="mb-5 flex flex-wrap justify-center py-3 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400 w-full"
                        >
                          <AiOutlinePlus size={22} />
                          <p className="font-bold text-gray-500 pl-1">
                            Upload Document
                          </p>
                        </button>

                        {attachments.length > 0 && (
                          <>
                            {attachments.map((item: any, index: number) => (
                              <div
                                key={index}
                                className="flex   items-center   py-1 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400"
                              >
                                <div className="w-[10%]">
                                  <AiOutlineFile className="font-bold text-gray-600 h-6 w-6" />
                                </div>
                                <div className="md:pl-3 w-[90%]">
                                  <p className="line-clamp-1 font-medium text-gray-500">
                                    {item?.name}
                                  </p>
                                  <p className="text-sm">
                                    {(item?.size / 1024).toFixed(3) + "KB"}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
