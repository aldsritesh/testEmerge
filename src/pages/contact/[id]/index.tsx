import Profile from "@/components/chat/Profile";
import ChatSidebar from "@/components/chat/Sidebar";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { useContext, createContext, useMemo, useCallback } from "react";
import Center from "@/components/contacts/Center";
import RightSidebar from "@/components/contacts/RightSidebar";
import LeftSidebar from "@/components/contacts/LeftSidebar";
import { GetServerSidePropsContext } from "next";
import { EContactType, IContactData } from "@/components/Interfaces";
import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { baseUrl } from "@/config/APIConstants";
import ModalDerived from "@/components/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {
  AiOutlineCalendar,
  AiOutlineClose,
  AiOutlineFile,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FiChevronDown, FiFolderMinus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaFolderMinus } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { GoPlus } from "react-icons/go";
import { Editor } from "@craftjs/core";
import FormContainer from "@/components/FormCraft/Container";
import Container from "@/components/Craft/widgets/Container";
import { Text } from "@/components/Craft/widgets/Text/Text";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { CheckboxInputElement } from "@/components/FormCraft/widgets/CheckboxElement";
import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "@/components/FormCraft/widgets/Attachment";
import { DatePickerElement } from "@/components/FormCraft/widgets/DatePicker";
import { CPTSelectElement } from "@/components/FormCraft/widgets/CPTSelect";
import PreviewSet from "@/components/FormCraft/PreviewSet";
import { useAuthentication } from "@/controllers/auth";
import { CiCalendar } from "react-icons/ci";
import { InputLabel, MenuItem, Select } from "@mui/material";
import preview from "@/pages/builder/emails/preview";

export const chatDataItems = [
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Ted Mosby",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "tedmosby@gmail.com",
    phone: "+919929607416",
  },
];

export const SingleContactContext = createContext({
  openFieldModel: false,
  setOpenFieldModel: (item: boolean) => {},
  openOrderFieldModel: false,
  setOpenOrderFieldModel: (item: boolean) => {},
});

export default function Chat() {
  const [openFieldModel, setOpenFieldModel] = useState<any>(false);
  const [openOrderFieldModel, setOpenOrderFieldModel] = useState<any>(false);
  const [startDate, setStartDate] = useState<any>(new Date());
  // const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [filterDates, setFilterDates] = useState<any>([]);
  const [openBillingFieldModel, setOpenBillingFieldModel] =
    useState<any>(false);
  const [selected, setSelected] = useState(true);
  const handleTab = (index: any) => {
    setSelected(!selected);
  };

  const value = {
    openFieldModel,
    openOrderFieldModel,
    openBillingFieldModel,
    setOpenFieldModel,
    setOpenOrderFieldModel,
    setOpenBillingFieldModel,
  };

  const router = useRouter();
  const [data, setData] = useState<IContactData>({
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

  const foldersData = [
    {
      id: 1,
      name: "Company Info",
      modified: "07/05/2023",
      owner: "Annette Black",
    },

    {
      id: 2,
      name: "Important Note",
      modified: "07/05/2023",
      owner: "Annette Black",
    },
    {
      id: 3,
      name: "Client Meeting Note",
      modified: "07/05/2023",
      owner: "Annette Black",
    },
    {
      id: 4,
      name: "Standard Meeting Note",
      modified: "07/05/2023",
      owner: "Annette Black",
    },
  ];
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = router?.query;
        axios
          .get(`${baseUrl}contacts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contact: response.data.contact,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(`${baseUrl}contacts/${id}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contactProfile: response.data.contactProfile,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get(`${baseUrl}contacts/${id}/address`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setData((prevData) => {
              return {
                ...prevData,
                contactAddress: response.data.contactAddress,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    };

    if (router.isReady) fetchData();
  }, [router.isReady]);
  const [showConversation, setShowConversation] = useState(false);
  const [conversationModeIndex, setConversationModeIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: location?.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }) => {
        // console.log("pppgpgpgpg", data);
        setChatData(data.contacts);
        if (data.contacts.length > 0) {
          setChatToOpen(data.contacts[0]);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const [chatData, setChatData] = useState(chatDataItems);
  const [chatToOpen, setChatToOpen] = useState<any>(chatData[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Contacts |");

  const [chatIsSelected, setChatIsSelected] = useState(false);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString == "") {
      setChatData(chatData);
      return;
    }

    setChatData(
      chatData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString)
      )
    );
  }, [searchString, chatData]);
  const [attachments, setAttachments] = useState<any>([]);

  const [formData, setFormData] = useState<any>({
    image: null,
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFormData({ ...formData, file: acceptedFiles[0] });
    },
    [formData, setFormData]
  );

  //  create new order validation 
  

   const [OrderFormValues, setOrderformValues] = useState<any>({
     serviceGroup:" ",
     serviceCode: ""
  });
   const [BillingFormValues, setBillingformValues] = useState<any>({
    selectInsurence:'',
  });

  const orderHandleChange=(e:any)=>{
    const {name ,value}=e.target ;
    setOrderformValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  const billingHandleChange=(e:any)=>{
    const {name ,value}=e.target ;
    setBillingformValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  // const onDrop = useCallback(
  //   (acceptedFiles: File[]) => {
  //     setFormData({ ...formData   , file: acceptedFiles[0] });
  //   },
  //   [formData, setFormData]
  // );
  console.log("data ", formData);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "file/*": [] },
    multiple: false,
  });
  return (
    <>
      <SingleContactContext.Provider value={value}>
        <>
          <div className="lg:h-full w-full bg-mainBg overflow-hidden relative pb-2">
            <div
              className={` w-full lg:h-full flex flex-wrap overflow-x-hidden overflow-hidden`}
            >
              <div
                className={` ${
                  showProfile ? "hidden lg:block" : "block lg:block"
                } w-full lg:w-[74%] bg-white`}
              >
                <div className="flex flex-wrap justify-between">
                  <div
                    className={`${
                      chatIsSelected ? "hidden lg:block" : "block lg:block"
                    } w-full lg:w-[30%] border-r-[1px] border-b-gray-300`}
                  >
                    <LeftSidebar
                      setShowConversation={setShowConversation}
                      setConversationModeIndex={setConversationModeIndex}
                      data={data}
                    />
                  </div>

                  <div
                    className={`${
                      chatIsSelected ? "block lg:block" : "hidden lg:block"
                    } w-full lg:w-[70%] border-r-[1px] border-gray-300 bg-mainBg`}
                  >
                    <Editor
                      enabled={false}
                      resolver={{
                        CPTSelectElement,
                        // FormDataString,
                        FormContainer,
                        Container,
                        Text,
                        TextInputElement,
                        Grid,
                        GridTop,
                        TextAreaElement,
                        RadioInputElement,
                        CheckboxInputElement,
                        Button,
                        ButtonText,
                        SelectBoxInputElement,
                        Link,
                        LinkText,
                        AttachmentElement,
                        DatePickerElement,
                      }}
                    >
                      <Center
                        data={data}
                        showConversation={showConversation}
                        setShowConversation={setShowConversation}
                        conversationModeIndex={conversationModeIndex}
                        setConversationModeIndex={setConversationModeIndex}
                      />
                      {/* <PreviewSet /> */}
                    </Editor>
                  </div>
                </div>
              </div>

              <div
                className={` ${
                  showProfile ? "block lg:block" : "hidden lg:block"
                } w-full lg:w-[26%] h-full bg-white `}
              >
                <RightSidebar />
              </div>
              {/* <div className="w-full md:w-[22%] h-full pt-2 pb-1">
          <ChatSidebar
            chatData={chatData}
            onSelect={(chat) => {
              setChatToOpen(chat);
              setIsChatOpen(true);
              setChatIsSelected(true);
            }}
            selectedChat={chatToOpen}
          />
        </div>
        <div className="w-full md:w-[56%] h-full bg-white pt-6 2xl:pt-0 md:border-r md:border-r-gray-300">
          <ChatBody
            chat={chatToOpen}
            chatOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            onProfileToggle={() => setShowProfile(!showProfile)}
            chatSelected={chatIsSelected}
          />
        </div> */}
            </div>
          </div>
          {/* Order Model popup start*/}
          <ModalDerived
            visibility={openOrderFieldModel}
            onClose={() => {
              setOpenOrderFieldModel(false);
            }}
          >
            <div className=" bg-[#FFFFFF] rounded-lg  w-[30vw]  ">
             
                <div className="border-b-[1px] px-5 py-3 2xl:py-0  mb-2">
                  <div className="h-[8vh] flex justify-between items-center">
                    <div>
                      <p className="text-[#1F2229] font-medium text-base md:text-lg text-start">
                        Create New Order
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setOpenOrderFieldModel(false);
                      }}
                    >
                      <AiOutlineClose className="text-gray-800 h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="px-8">
                  <div className="pt-3  flex flex-col">
                  <InputLabel id="demo-simple-select-label my-3"className="text-[#000000] mb-1">
                      Service Group
                    </InputLabel>
                    <Select
                    name="serviceGroup"
                    value={OrderFormValues.serviceGroup}
                    onChange={orderHandleChange}
                    className="w-full  rounded-lg overflow-hidden h-12 border-[#E2E2E2]  "
                  >
                      <MenuItem value={10}>X-RAY Spine</MenuItem>
                      <MenuItem value={20}>X-RAY Spine</MenuItem>
                      <MenuItem value={30}>X-RAY Spine</MenuItem>
                    </Select>
                    
                  </div>

                  <div className="pt-3">
                  <InputLabel id="demo-simple-select-label my-3"className="text-[#000000] mb-1">
                  Service Code
                    </InputLabel>
                    <Select 
                     name="serviceCode"
                     value={OrderFormValues.serviceCode}
                     onChange={orderHandleChange}
                     className="w-full  rounded-lg overflow-hidden h-12 border-[#E2E2E2]  "
                     >
                
                      <MenuItem value={10}>(71020) Chest PA Lateral</MenuItem>
                      <MenuItem value={20}>(71020) Chest PA Lateral</MenuItem>
                      <MenuItem value={30}>(71020) Chest PA Lateral</MenuItem>
                      <MenuItem value={40}>(71020) Chest PA Lateral</MenuItem>
                      <MenuItem value={50}>(71020) Chest PA Lateral</MenuItem>
                    </Select>
                  </div>

                  <div className="pt-3">
                    <label className="mb-1">Service </label>
                    <input
                      className="font-main tracking-wide py-1 h-12 px-3 border focus:outline-none border-gray-300 rounded-lg shadow-sm w-full "
                      type="text"
                      name="noteTitle"
                    />
                  </div>

                  <div className="pt-3">
                    <label className="mb-1">Description </label>
                    <textarea
                      className="focus:outline-none textarea textarea-bordered h-24 w-full"
                    ></textarea>
                  </div>

                  <div className=" flex justify-end items-center py-4 gap-2">
                    <button
                      onClick={() => {
                        setOpenOrderFieldModel(false);
                      }}
                      className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md  "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {

                        setOpenOrderFieldModel(false);
                      }}
                      className="text-sm flex justify-start items-center bg-[#0F66CF] py-2 px-9 text-white rounded-md "
                    >
                      Save
                    </button>
                  </div>
                </div>
            
            </div>
          </ModalDerived>
          {/* Order Model popup end*/}

          {/* Order Model popup start*/}
          <ModalDerived
            visibility={openFieldModel}
            onClose={() => {
              setOpenFieldModel(false);
            }}
          >
            <div className=" bg-white rounded-lg overflow-y-auto w-full scrollbar-hide ">
              <div className=" pt-5 pb-3 w-screen md:w-[110vh]">
                <div className="border-b-[1px] pb-4 px-5">
                  <div className="h-[8vh] flex justify-between items-start  ">
                    <div>
                      <p className="text-gray-800 font-medium md:text-lg text-center">
                        Select File
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setOpenFieldModel(false);
                      }}
                    >
                      <AiOutlineClose className="text-gray-800 h-6 w-6" />
                    </button>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={
                        selected == true
                          ? ` font-bold border-b-[2px] border-b-black cursor-pointer`
                          : ` text-gray-400 cursor-pointer `
                      }
                      onClick={() => handleTab(true)}
                    >
                      <p className="text-center">Upload File</p>
                    </div>

                    <div className="pl-5">
                      <div
                        className={
                          selected == false
                            ? ` font-bold border-b-[2px] border-b-black cursor-pointer`
                            : ` text-gray-400 cursor-pointer `
                        }
                        onClick={() => handleTab(true)}
                      >
                        <p className="text-center">File & Folders</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5">
                  {selected == true ? (
                    <div className=" h-[65vh]">
                      <input {...getInputProps()} />
                      <div
                        {...getRootProps()}
                        className=" w-full h-[40vh] border border-dasheds my-2  flex justify-center items-center "
                      >
                        <div>
                          <div>
                            {formData.file ? (
                              <div className="  flex items-center justify-center relative">
                                <div {...getRootProps()}>
                                  <h1 className="text-black text-lg  ">
                                    {formData.file.name}
                                  </h1>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center m-auto ">
                                  <AiOutlineFileAdd className="h-10 w-10" />
                                </div>
                                <p className="font-bold text-black text-center">
                                  Select a file to Upload
                                </p>
                                <input {...getInputProps()} />
                                <p className="text-gray-300 text-center">
                                  or drag & drop it here
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="relative" {...getRootProps()}>
                        <p className="pb-1 font-bold text-sm">
                          Upload from URL
                        </p>
                        <input className="w-full h-12 rounded-md border border-gray-200 px-2" />

                        <div className="absolute bottom-[0.45rem] right-2">
                          <button className="border border-orange-400 px-6 text-orange-400 py-1  rounded-md">
                            Upload
                          </button>
                        </div>
                      </div>

                      <div className="absolute right-4 bottom-3 flex justify-end items-center pt-4">
                        <button
                          onClick={() => {
                            setOpenFieldModel(false);
                          }}
                          className="mr-3 px-3 py-2 text-orange-500"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setOpenFieldModel(false);
                          }}
                          className="px-4 py-1 bg-orange-500 text-white rounded-md"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className=" w-full h-[65vh] mt-2 ">
                      {/* <div>File and Folders</div> */}

                      <div className="flex items-center">
                        <div className="mb-2 w-[250px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                          <input
                            placeholder="Search files"
                            className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                          />
                        </div>

                        <div className="dropdown dropdown-bottom mr-1">
                          <label
                            tabIndex={0}
                            className="border-[1px] border-gray-200 ml-2 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
                          >
                            <span className="flex items-center text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                              <CgProfile size={16} />{" "}
                              <span className="pl-2">All Owner</span>
                            </span>
                            <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                          >
                            <li>
                              <a>Item 1</a>
                            </li>
                            <li>
                              <a>Item 2</a>
                            </li>
                          </ul>
                        </div>

                        <div className="dropdown dropdown-bottom mr-1">
                          <label
                            tabIndex={0}
                            className="border-[1px] border-gray-200  py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
                          >
                            <span className="flex items-center text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                              <AiOutlineCalendar size={16} />
                              <span className="pl-2">Date Upload</span>
                            </span>
                            <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                          >
                            <li>
                              <a>Item 1</a>
                            </li>
                            <li>
                              <a>Item 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 overflow-y-scroll">
                        <table className="w-full ">
                          <thead>
                            <tr>
                              <th className="w-[40%] font-bold text-start">
                                Name
                              </th>
                              <th className="w-[30%] font-bold text-start">
                                Modified
                              </th>
                              <th className="w-[30%] font-bold text-start">
                                Owner
                              </th>
                            </tr>
                          </thead>

                          {/* <div> */}

                          <tbody>
                            {foldersData.map((item: any, index: any) => (
                              <tr
                                key={index}
                                className="border-b border-b-gray-300 overflow-y-auto "
                              >
                                <td className="w-[50%] flex items-center text-start py-2">
                                  <div>
                                    <FaFolderMinus
                                      size={28}
                                      className="text-blue-500"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm pl-2 font-bold whitespace-nowrap">
                                      {item.name}
                                    </p>
                                  </div>
                                </td>
                                <td className="w-[25%] text-start py-2">
                                  {item.modified}
                                </td>
                                <td className="w-[25%] text-start py-2">
                                  {item.owner}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <div className="absolute right-4 bottom-3 flex justify-end items-center pt-4">
                          <button
                            onClick={() => setOpenFieldModel(false)}
                            className="mr-3 px-3 py-2 text-orange-500"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => setOpenFieldModel(false)}
                            className="px-4 py-1 bg-orange-500 text-white rounded-md"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ModalDerived>
          {/* Order Model popup end*/}

          {/* Order Billing popup start*/}
          <ModalDerived
            visibility={openBillingFieldModel}
            onClose={() => {
              setOpenBillingFieldModel(false);
            }}
          >
            <div className=" bg-[#ffffff] rounded-lg  w-[30vw] ">
                <div className="border-b-[1px]   px-6 2xl:px-14 2xl:py-6 py-3">
                  <div className=" flex justify-between items-start  ">
                    <div>
                      <p className="text-[#1F2229] font-medium md:text-lg text-center">
                        Billing
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setOpenBillingFieldModel(false);
                      }}
                    >
                      <AiOutlineClose className="text-[#1F2229] h-6 w-6" />
                    </button>
                  </div>
                </div>
                      <hr />
                <div>
                  <div className="flex flex-wrap px-6 2xl:px-14 mt-1 2xl:mt-4">
                    <div className="pt-2 w-full">
                    <InputLabel id="demo-simple-select-label my-3" className="text-[#000000] mb-1">
                        Insurance Select
                    </InputLabel>
                      <Select 
                     name="selectInsurence"
                     value={BillingFormValues.selectInsurence}
                     onChange={billingHandleChange}
                     className="w-full  rounded-lg overflow-hidden h-12 border-[#E2E2E2]  "
                      >
                      
                        <MenuItem value={10}>X-RAY Spine</MenuItem> value={10}
                        <MenuItem value={20}>X-RAY Spine</MenuItem>
                        <MenuItem value={30}>X-RAY Spine</MenuItem>
                        <MenuItem value={40}>X-RAY Spine</MenuItem>
                        <MenuItem value={50}>X-RAY Spine</MenuItem>
                      </Select>
                    </div>
                    <div className="flex w-full gap-3">
                    <div className=" pt-2 w-1/2 relative">
                      
                        <label className="pb-2 mb-1">Start Date</label>
                        {/* <DatePicker  
                        selected={selectedDate}                        
                           onSelect={(e: any) => {
                            console.log("eeeeeeeeeee" , e)
                            setSelectedDate(e)}} //when day is clicked

                          onChange={(e: any) => {
                            console.log("eeeeeeeeeee" , e)
                            setSelectedDate(e);
                          }}
                          filterDate={(date: any) => {
                            return filterDates.includes(
                              moment(date).format("YYYY-MM-DD")
                            );
                          }}
                          placeholderText={selectedDate}
                          minDate={new Date()}
                        /> */}
                        <DatePicker  selected={startDate} dateFormat="dd/MM/yyyy" onChange={(date:any) => setStartDate(date)} />
                        <div className="absolute top-11 right-6">
                        <CiCalendar fontSize={24} color="#958F8F"/>
                      </div>
                
                    </div>
                    <div className="w-1/2 pt-2 relative">
                      <label className="mb-1">End Date</label>
                      <DatePicker  selected={endDate} dateFormat="dd/MM/yyyy" onChange={(date:any) => setEndDate(date)} />
                        <div className="absolute top-11 right-6">
                        <CiCalendar fontSize={24} color="#958F8F"/>
                      </div>
                        
                    </div>
                    </div>
                    <div className="pt-2 w-full">
                      <div className="">
                        <label className="mb-1">Deductable </label>
                        <input
                          className="font-main tracking-wide py-1 h-12 px-3 border focus:outline-none border-gray-300 rounded-lg shadow-sm w-full "                      type="number"
                          name="noteTitle"
                        />
                      </div>
                    </div>
                    <div className="pt-2 w-full">
                      <label  className="mb-1">Co-Pay </label>
                      <input
                      className="font-main tracking-wide py-1 h-12 px-3 border focus:outline-none border-gray-300 rounded-lg shadow-sm w-full "                      type="number"
                        name="noteTitle"
                      />
                    </div>
                    <div className=" pt-2 w-full">
                      <div className="">
                        <label  className="mb-1"> Co-Insurance </label>
                        <input
                          className="font-main tracking-wide py-1 h-12 px-3 border focus:outline-none border-gray-300 rounded-lg shadow-sm w-full "                      type="number"
                          name="noteTitle"
                        />  
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full gap-3 justify-end py-6 px-4 2xl:px-14  my-1 2xl:my-5">
                    <button
                      onClick={() => {
                        setOpenOrderFieldModel(false);
                      }}
                      className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-9 rounded-md  "                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setOpenOrderFieldModel(false);
                      }}
                      className="text-sm flex justify-start items-center bg-[#0F66CF] py-2 px-9 text-white rounded-md ">
                      Save
                    </button>
                  </div>
                </div>
             
            </div>
          </ModalDerived>
          {/* Billing Model popup end*/}
        </>
      </SingleContactContext.Provider>
    </>
  );
}
