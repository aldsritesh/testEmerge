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
import { MenuItem, Select } from "@mui/material";
import GenderSelect from "../controls/GenderSelect";
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
  const genderUserToGender = (genderUserID: any) => {
    if (!genderUserID)
      return {
        id: "",
        fullName: "",
        emailAddress: "",
      };
    const genderUser = ctx.users.find((user: any) => {
      return user.id === genderUserID;
    });
    if (!genderUser)
      return {
        id: "",
        fullName: "",
        emailAddress: "",
      };
    return genderUser;
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
  const [gender, setGender] = useState(
    genderUserToGender(data.contact.ownerUserID)
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
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    setFullName(data.contact.fullName);
    setOwner(ownerUserToOwner(data.contact.ownerUserID));
    setGender(ownerUserToOwner(data.contact.ownerUserID));
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

  const updateGender = (newGender: any) => {
    if (newGender === gender || !data.contact.id) return;
    const update = async () => {
      await axios
        .put(
          `localhost:3000/contacts/${data.contact.id}/owner-user-id`,
          {
            ownerUserID: newGender.id,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setOwner(newGender);
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
        <div className="back-to flex ml-4 mt-4">
          <button
            className="bg-white hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm"
            onClick={() => {
              router.push("/contact");
            }}
          >
            <KeyboardArrowLeft fontSize="medium" className="m-1 mb-1" />
          </button>
          <div className="font-main font-medium text-black mt-1 mx-3">
            Back to contacts
          </div>
        </div>
        <div className="flex flex-col items-center mt-1">
          <Avatar
            sx={{
              bgcolor: "#1066cf",
              width: 60,
              height: 60,
            }}
            src="/images/avatar/yellowdog.jpg"
          />
          <span className="text-2xl font-main font-semibold text-black my-3">
            {fullName}
          </span>
          {/* <a
            href="#"
            className="google-link flex items-center space-x-1.5 mt-1"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
              className="w-3.5 h-3.5"
            />
            <span className="text-s font-main font-normal text-light-grey">
              Google
            </span>
          </a> */}
          {/* <div className="flex flex-nowrap items-center space-x-4 mt-1">
            <div className="log-button grid justify-items-center">
              <button
                className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9 text-center justify-center flex items-center"
                onClick={() => {
                  setConversationModeIndex(0);
                  setShowConversation(true);
                }}
              >
                <BiMessageDetail fontSize="medium" className="w-5 h-5 mt-0.5" />
              </button>
              <span className="m-1 text-sm font-main font-normal text-gray-600">
                SMS
              </span>
            </div>
            <div className="log-button grid justify-items-center">
              <button
                className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9"
                onClick={() => {
                  setConversationModeIndex(1);
                  setShowConversation(true);
                }}
              >
                <MailOutlineIcon fontSize="medium" className="p-0.5" />
              </button>

              <span className="m-1 text-sm font-main font-normal text-gray-600">
                Email
              </span>
            </div>
            <div className="log-button grid justify-items-center">
              <button
                className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9"
                onClick={() => {
                  ctx.setDialerNumber(phoneNumber);
                  ctx.setShowDialer(true);
                }}
              >
                <CallOutlinedIcon fontSize="medium" className="p-0.5" />
              </button>
              <span className="m-1 text-sm font-main font-normal text-gray-600">
                Call
              </span>
            </div>
            <div className="log-button grid justify-items-center">
              <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-9 h-9">
                <MoreHorizOutlinedIcon fontSize="medium" className="p-0.5" />
              </button>
              <span className="m-1 text-sm font-main font-normal text-gray-600">
                More
              </span>
            </div>
          </div> */}
          {data.contact.contactType === "LEAD" && (
            <div>
              <button
                type="button"
                className="text-white bg-[#1066cf] hover:bg-primary-hover focus:ring-1 focus:ring-primary font-medium rounded-lg font-main text-sm focus:outline-none  px-8 py-2"
              >
                Convert lead to patient
              </button>
            </div>
          )}
          <div className="flex flex-nowrap items-center">
            <span className="text-green-400 text-3xl text-bold mt-0.5 mr-0.5">
              •
            </span>
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
          <div className="w-full grid grid-cols-2 mt-1 mb-3">
            {["Leads info", "Address info"].map((item, index) => (
              <button
                key={index}
                className={`text-center inline-block p-3 ${
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
            <div className="xl:m-[2%] 2xl:m-[5%] w-[80%] pb-[20%] 2xl:pb-24">
              <div className="grid ">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
                  list="name"
                />
                <datalist id="name">
                  <option value="Arial"> Arial</option>
                  <option value="John"> John</option>
                  <option value="Roy"> Roy</option>
                </datalist>
              </div>
              <div className="grid  mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="grid  mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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

              <div className="grid  mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                  Gender
                </span>
                <div>
                  <GenderSelect
                    gender={owner}
                    setGender={(newGender: any) => {
                      if (newGender) updateGender(newGender);
                    }}
                    className={
                      "py-1 p-1 flex font-main tracking-wide text-black bg-white px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-[2.5rem]"
                    }
                  />
                </div>
              </div>
              <div className="grid   mt-1">
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
                <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
              <div className="m-[5%] w-[80%]">
                <div className="grid  ">
                  <span className="font-main  tracking-wide font-light text-gray-700">
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
                <div className="grid   mt-1">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
                <div className="grid mt-1">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
                    Country
                  </span>
                  <CountrySelect country={country} setCountry={setCountry} />
                </div>
                <div className="grid mt-1">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
                <div className="grid mt-1">
                  <span className="font-main tracking-wide font-light text-gray-700 text-sm">
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
