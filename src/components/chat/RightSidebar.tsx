import { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CountrySelect from "../controls/CountrySelect";
import { IContactData } from "../Interfaces";
import axios from "axios";
import TagSelect from "../controls/TagSelect";
import LeadSourceSelect from "../controls/LeadSourceSelect";
import { useRouter } from "next/router";
import { BiMessageDetail } from "react-icons/bi";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { baseUrl } from "@/config/APIConstants";
import OwnerSelect from "@/components/controls/OwnerSelect";
import PipelineSelect from "@/components/controls/PipelineSelect";
import moment from "moment-timezone";
import { useAuthentication } from "@/controllers/auth";

interface IProps {
  data: IContactData;
  setConversationModeIndex: (index: number) => void;
  setShowConversation: (show: boolean) => void;
}

export default function LeftSidebar({
  data,
  setConversationModeIndex,
  setShowConversation,
}: IProps) {
  const { location, token }: any = useAuthentication();
  const ctx: any = useContext(GlobalContext);
  const router = useRouter();

  const ownerUserToOwner = (ownerUserID: any) => {
    if (!ownerUserID)
      return {
        id: "",
        fullName: "",
        emailAddress: "",
      };
    const ownerUser = ctx.users.find((user: any) => {
      return user.id === ownerUserID;
    });
    if (!ownerUser)
      return {
        id: "",
        fullName: "",
        emailAddress: "",
      };
    return ownerUser;
  };

  const pipelineIDToPipeline = (pipelineID: any, pipelineStageID: any) => {
    if (!pipelineID || !pipelineStageID)
      return {
        id: "",
        name: "",
        pipelineID: "",
      };

    const pipeline = ctx.pipelines.find((pipeline: any) => {
      return pipeline.id === pipelineID;
    });
    if (!pipeline)
      return {
        id: "",
        name: "",
        pipelineID: "",
      };

    const pipelineStage = pipeline.stages.find((stage: any) => {
      return stage.id === pipelineStageID;
    });

    if (!pipelineStage)
      return {
        id: "",
        name: "",
        pipelineID: "",
      };

    return {
      id: pipelineStage.id,
      name: pipelineStage.name,
      pipelineID: pipeline.id,
    };
  };

  const tagIDsToTags = (tagIDs: any) => {
    if (!tagIDs) return [];
    const tags = ctx.tags.filter((tag: any) => {
      return tagIDs.includes(tag.id);
    });

    for (let i = 0; i < tags.length; i++) {
      tags[i].tagID = tags[i].id;
    }
    return tags;
  };

  const leadSourceIDsToLeadSources = (leadSourceIDs: any) => {
    if (!leadSourceIDs) return [];
    const leadSources = ctx.leadSources.filter((leadSource: any) => {
      return leadSourceIDs.includes(leadSource.id);
    });

    for (let i = 0; i < leadSources.length; i++) {
      leadSources[i].leadSourceID = leadSources[i].id;
    }

    return leadSources;
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [fullName, setFullName] = useState(data.contact.fullName);
  const [owner, setOwner] = useState(
    ownerUserToOwner(data.contact.ownerUserID)
  );
  const [emailAddress, setEmailAddress] = useState(data.contact.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(data.contact.phoneNumber);
  const [contactType, setContactType] = useState(data.contact.contactType);
  const [tags, setTags] = useState(tagIDsToTags(data.contact.tags));
  const [leadSources, setLeadSources] = useState(
    leadSourceIDsToLeadSources(data.contact.leadSources)
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    data.contactProfile.dateOfBirth
  );
  const [pipeline, setPipeline] = useState<any>({
    id: "",
    name: "",
    pipelineID: "",
  });
  const [ssn, setSsn] = useState(data.contactProfile.ssn);
  const [dateOfInjury, setDateOfInjury] = useState(
    data.contactProfile.dateOfInjury
  );
  const [street, setStreet] = useState(data.contactAddress.street);
  const [city, setCity] = useState(data.contactAddress.city);
  const [region, setRegion] = useState(data.contactAddress.region);
  const [postalCode, setPostalCode] = useState(data.contactAddress.postalCode);
  const [country, setCountry] = useState(data.contactAddress.country);

  const [prevFullName, setPrevFullName] = useState(data.contact.fullName);
  const [prevOwner, setPrevOwner] = useState(
    ownerUserToOwner(data.contact.ownerUserID)
  );
  const [prevEmailAddress, setPrevEmailAddress] = useState(
    data.contact.emailAddress
  );
  const [prevPhoneNumber, setPrevPhoneNumber] = useState(
    data.contact.phoneNumber
  );
  const [prevContactType, setPrevContactType] = useState(
    data.contact.contactType
  );
  const [prevDateOfBirth, setPrevDateOfBirth] = useState(
    data.contactProfile.dateOfBirth
  );
  const [prevSsn, setPrevSsn] = useState(data.contactProfile.ssn);
  const [prevDateOfInjury, setPrevDateOfInjury] = useState(
    data.contactProfile.dateOfInjury
  );
  const [prevStreet, setPrevStreet] = useState(data.contactAddress.street);
  const [prevCity, setPrevCity] = useState(data.contactAddress.city);
  const [prevRegion, setPrevRegion] = useState(data.contactAddress.region);
  const [prevPostalCode, setPrevPostalCode] = useState(
    data.contactAddress.postalCode
  );
  const [prevCountry, setPrevCountry] = useState(data.contactAddress.country);

  useEffect(() => {
    setFullName(data.contact.fullName);
    setOwner(ownerUserToOwner(data.contact.ownerUserID));
    setEmailAddress(data.contact.emailAddress);
    setPhoneNumber(data.contact.phoneNumber);
    setContactType(data.contact.contactType);
    setTags(tagIDsToTags(data.contact.tags));
    setLeadSources(leadSourceIDsToLeadSources(data.contact.leadSources));
    setPipeline(
      pipelineIDToPipeline(
        data.contact.pipelineID,
        data.contact.pipelineStageID
      )
    );
    setDateOfBirth(data.contactProfile.dateOfBirth);
    setSsn(data.contactProfile.ssn);
    setDateOfInjury(data.contactProfile.dateOfInjury);
    setStreet(data.contactAddress.street);
    setCity(data.contactAddress.city);
    setRegion(data.contactAddress.region);
    setPostalCode(data.contactAddress.postalCode);
    setCountry(data.contactAddress.country);

    setPrevFullName(data.contact.fullName);
    setPrevOwner(data.contact.ownerUserID);
    setPrevEmailAddress(data.contact.emailAddress);
    setPrevPhoneNumber(data.contact.phoneNumber);
    setPrevContactType(data.contact.contactType);
    setPrevDateOfBirth(data.contactProfile.dateOfBirth);
    setPrevSsn(data.contactProfile.ssn);
    setPrevDateOfInjury(data.contactProfile.dateOfInjury);
    setPrevStreet(data.contactAddress.street);
    setPrevCity(data.contactAddress.city);
    setPrevRegion(data.contactAddress.region);
    setPrevPostalCode(data.contactAddress.postalCode);
    setPrevCountry(data.contactAddress.country);
  }, [data]);

  const addedOnDateFormat = () => {
    let date = new Date("2023-05-31");

    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();

    let newDate = `${day} ${month} ${year}`;
    return newDate;
  };

  const updateFullName = () => {
    if (fullName === prevFullName) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/full-name`,
          {
            fullName: fullName,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevFullName(fullName);
  };

  const updateEmailAddress = () => {
    if (emailAddress === prevEmailAddress) return;
    const update = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/email-address`,
          {
            emailAddress: emailAddress,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevEmailAddress(emailAddress);
  };

  const updatePhoneNumber = () => {
    if (phoneNumber === prevPhoneNumber) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/phone-number`,
          {
            phoneNumber: phoneNumber,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevPhoneNumber(phoneNumber);
  };

  const updateOwner = (newOwner: any) => {
    if (newOwner === owner || !data.contact.id) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/owner-user-id`,
          {
            ownerUserID: newOwner.id,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setOwner(newOwner);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    update();
  };

  const addNewTag = (content: string): boolean => {
    const add = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      const tagResult = await axios.post(
        `${baseUrl}tags`,
        {
          locationID: location?.id,
          content: content,
          tagType: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.post(
        `${baseUrl}contacts/${data.contact.id}/tags`,
        {
          contactID: data.contact.id,
          tagID: tagResult.data.tagID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTags([
        ...tags,
        {
          tagID: tagResult.data.tagID,
          contactID: data.contact.id,
          content: content,
        },
      ]);
    };

    add();

    return true;
  };

  const addExistingTag = (tagID: string) => {
    const add = async () => {
      console.log("adding existing tag", tagID);
      await axios.post(
        `${baseUrl}contacts/${data.contact.id}/tags`,
        {
          tagID: tagID,
          contactID: data.contact.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    add();
  };

  const removeTag = (tagID: string) => {
    const remove = async () => {
      await axios.delete(
        `${baseUrl}contacts/${data.contact.id}/tags/${tagID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    remove();
  };

  const addNewLeadSource = (content: string): boolean => {
    const add = async () => {
      const leadSourceResult = await axios.post(
        `${baseUrl}lead-sources`,
        {
          locationID: location?.id,
          content: content,
          color: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.post(
        `${baseUrl}contacts/${data.contact.id}/lead-sources`,
        {
          contactID: data.contact.id,
          leadSourceID: leadSourceResult.data.leadSourceID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeadSources([
        ...leadSources,
        {
          leadSourceID: leadSourceResult.data.leadSourceID,
          contactID: data.contact.id,
          content: content,
        },
      ]);
    };

    add();

    return true;
  };

  const addExistingLeadSource = (leadSourceID: string) => {
    const add = async () => {
      console.log("adding existing leadSource", leadSourceID);
      await axios.post(
        `${baseUrl}contacts/${data.contact.id}/lead-sources`,
        {
          leadSourceID: leadSourceID,
          contactID: data.contact.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    add();
  };

  const removeLeadSource = (leadSourceID: string) => {
    const remove = async () => {
      await axios.delete(
        `${baseUrl}contacts/${data.contact.id}/lead-sources/${leadSourceID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeadSources(
        leadSources.filter(
          (leadSource: any) => leadSource.leadSourceID !== leadSourceID
        )
      );
    };

    remove();
  };

  const updateContactType = () => {
    if (contactType === prevContactType) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/contact-type`,
          {
            contactType: contactType,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevContactType(contactType);
  };

  const updateDateOfBirth = () => {
    const dateOfBirthVal = dateOfBirth === "" ? "0001-01-01" : dateOfBirth;
    if (dateOfBirth === prevDateOfBirth) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/profile/date-of-birth`,
          {
            dateOfBirth: dateOfBirthVal,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevDateOfBirth(dateOfBirth);
  };

  const updateSsn = () => {
    if (ssn === prevSsn) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/profile/ssn`,
          {
            ssn: ssn,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevSsn(ssn);
  };

  const updateDateOfInjury = () => {
    const dateOfInjuryVal = dateOfInjury === "" ? "0001-01-01" : dateOfInjury;
    if (dateOfInjury === prevDateOfInjury) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/profile/date-of-injury`,
          {
            dateOfInjury: dateOfInjuryVal,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevDateOfInjury(dateOfInjury);
  };

  const updateStreet = () => {
    if (street === prevStreet) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/address/street`,
          {
            street: street,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevStreet(street);
  };

  const updateCity = () => {
    if (city === prevCity) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/address/city`,
          {
            city: city,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevCity(city);
  };

  const updateRegion = () => {
    if (region === prevRegion) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/address/region`,
          {
            region: region,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevRegion(region);
  };

  const updatePostalCode = () => {
    if (postalCode === prevPostalCode) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data.contact.id}/address/postal-code`,
          {
            postalCode: postalCode,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };
    update();
    setPrevPostalCode(postalCode);
  };

  return (
    <>
      <div className="h-[100vh] overflow-y-scroll pb-[20%] w-full scrollbar-hide">
        <div className="flex flex-col items-center mt-5">
          <Avatar
            sx={{
              bgcolor: "#1066cf",
              width: 60,
              height: 60,
            }}
            src="/images/avatar/yellowdog.jpg"
          />
          <span className="text-2xl font-main font-semibold text-black mt-2">
            {fullName}
          </span>

          <div className="flex items-center ">
            <span className="text-green-400 text-3xl text-bold  mr-0.5">•</span>
            <span className="text-sm font-main font-normal text-gray-600 ml-0.5 tracking-wider">
              {"Added on : " +
                (data.contact.addedOn
                  ? moment
                      .tz(
                        data.contact.addedOn,
                        "YYYY-MM-DDThh:mm:ssZ",
                        "Etc/UTC"
                      )
                      .local()
                      .format("MMM DD, YYYY")
                  : "N/A")}
            </span>
          </div>
          <div className="w-full grid grid-cols-2">
            {["Contact Info", "Address Info"].map((item, index) => (
              <button
                key={index}
                className={`text-center inline-block py-2 ${
                  tabIndex === index
                    ? "border-b-[3px] border-b-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setTabIndex(index)}
              >
                {item}
              </button>
            ))}
          </div>
          {(tabIndex === 0 && (
            <div className="xl:m-[2%] 2xl:m-[5%] px-2 pb-[20%] 2xl:pb-24">
              <div className="grid mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Full Name
                </span>
                <input
                  onBlur={() => {
                    updateFullName();
                  }}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={fullName}
                />
              </div>
              <div className="grid  mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Email
                </span>
                <input
                  onBlur={() => {
                    updateEmailAddress();
                  }}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={emailAddress}
                />
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Phone
                </span>
                <input
                  onBlur={() => {
                    updatePhoneNumber();
                  }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={phoneNumber}
                />
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Date Of Birth
                </span>
                <input
                  onBlur={() => {
                    updateDateOfBirth();
                  }}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  type="date"
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={dateOfBirth}
                />
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Social Secruity Number
                </span>
                <input
                  onBlur={() => {
                    updateSsn();
                  }}
                  onChange={(e) => setSsn(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={ssn}
                />
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Date Of Injury
                </span>
                <input
                  onBlur={() => {
                    updateDateOfInjury();
                  }}
                  onChange={(e) => setDateOfInjury(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  type="date"
                  className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                  value={dateOfInjury}
                />
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Owner
                </span>
                <div>
                  <OwnerSelect
                    owner={owner}
                    setOwner={(newOwner: any) => {
                      if (newOwner) updateOwner(newOwner);
                    }}
                    className={
                      "py-1 p-1 flex font-main tracking-wide text-black bg-white px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-[2.5rem]"
                    }
                  />
                </div>
              </div>
              <div className="grid   mt-1 mb-3">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Status
                </span>
                <div>
                  <PipelineSelect
                    pipeline={pipeline}
                    setPipeline={(newPipeline: any) => {
                      if (
                        !newPipeline ||
                        newPipeline.id === pipeline.id ||
                        !data.contact.id
                      )
                        return;
                      console.log("newPipeline", newPipeline);
                      axios
                        .put(
                          `${baseUrl}contacts/${data.contact.id}/pipeline`,
                          {
                            pipelineID: newPipeline.pipelineID,
                            pipelineStageID: newPipeline.id,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          }
                        )
                        .then((res) => {
                          console.log("res", res);
                          setPipeline(newPipeline);
                        })
                        .catch((err) => {
                          console.log("err", err);
                        });
                    }}
                    className={
                      "py-1 p-1 flex font-main tracking-wide text-black bg-white px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-[2.5rem]"
                    }
                  />
                </div>
              </div>
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Tags
                </span>
                <div>
                  <TagSelect
                    tags={tags}
                    setTags={setTags}
                    addNewTag={addNewTag}
                    addExistingTag={addExistingTag}
                    removeTag={removeTag}
                    className={
                      "py-1 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-[2.5rem]"
                    }
                  />
                </div>
              </div>
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                  Lead Source
                </span>
                <LeadSourceSelect
                  leadSources={leadSources}
                  setLeadSources={setLeadSources}
                  addNewLeadSource={addNewLeadSource}
                  addExistingLeadSource={addExistingLeadSource}
                  removeLeadSource={removeLeadSource}
                  className={
                    "py-1 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-[2.5rem]"
                  }
                />
              </div>
            </div>
          )) ||
            (tabIndex === 1 && (
              <div className="xl:m-[2%] 2xl:m-[5%] px-2 pb-[20%] 2xl:pb-24 ">
                <div className="grid   mt-1 mb-3  ">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                    Street Address
                  </span>
                  <input
                    onBlur={() => {
                      updateStreet();
                    }}
                    onChange={(e) => setStreet(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    value={street}
                  />
                </div>
                <div className="grid   mt-1 mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                    City
                  </span>
                  <input
                    onBlur={() => {
                      updateCity();
                    }}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    value={city}
                  />
                </div>
                <div className="grid   mt-1 mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                    Country
                  </span>
                  <CountrySelect country={country} setCountry={setCountry} />
                </div>
                <div className="grid   mt-1 mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                    State
                  </span>
                  <input
                    onBlur={() => {
                      updateRegion();
                    }}
                    onChange={(e) => setRegion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    value={region}
                  />
                </div>
                <div className="grid   mt-1 mb-3">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm pb-[1px]">
                    Postal Code
                  </span>
                  <input
                    onBlur={() => {
                      updatePostalCode();
                    }}
                    onChange={(e) => setPostalCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                    className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                    value={postalCode}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
