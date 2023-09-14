import { useState, createRef, useEffect } from "react";
import { Pill } from "../UI/Pill";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { FiChevronDown } from "react-icons/fi";
import { useAuthentication } from "@/controllers/auth";

interface anySelectProps {
  contacts: any;
  setContacts: (contacts: any) => void;
  className: string;
}

export default function ContactSelect({
  contacts,
  setContacts,
  className,
}: anySelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();
  const { location, token }: any = useAuthentication();

  const [contactList, setContactList] = useState<any>([]);
  const [textValue, setTextValue] = useState("");
  useEffect(() => {
    axios
      .post(
        `${baseUrl}contacts/filter`,
        {
          locationID: location?.id,
          filters: {
            fullName: {
              value: "",
              operator: "CONTAINS",
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setContactList(response.data.contacts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addContact = (contact: any) => {
    setContacts([contact]);
    setTextValue("");
    setIsListBoxActive(false);
  };

  const removeContactFn = (contact: any) => {
    setContacts(contacts.filter((t: any) => t.id !== contact.id));
  };

  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 1;
    if (bottom) {
      const reqBody = {
        locationID: location?.id,
        filters: {
          fullName: {
            value: textValue,
            operator: "CONTAINS",
          },
        },
      } as {
        locationID: string;
        filters: { fullName: { value: string; operator: string } };
        lastContactID?: string;
      };

      if (contactList.length > 0) {
        reqBody["lastContactID"] = contactList[contactList.length - 1].id;
      }

      axios
        .post(`${baseUrl}contacts/filter`, reqBody, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setContactList((prev: any) => [...prev, ...response.data.contacts]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {}, [contactList]);

  return (
    <div>
      <div
        className={`flex flex-wrap ${className}`}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {contacts.map((option: any, index: number) => (
          <Pill
            key={index}
            bgColor={"blue-100"}
            textColor={"blue-800"}
            showRemoveButton={true}
            onClick={() => removeContactFn(option)}
            value={option.fullName}
          />
        ))}
        <input
          ref={inputRef}
          onFocus={() => {
            setIsTextBoxActive(true);
          }}
          placeholder="Select a contact"
          onBlur={() => setIsTextBoxActive(false)}
          className={`outline-none w-wrap`}
          onChange={(e) => {
            setTextValue(e.target.value);
            axios
              .post(
                `${baseUrl}contacts/filter`,
                {
                  locationID: location?.id,
                  filters: {
                    fullName: {
                      value: e.target.value,
                      operator: "CONTAINS",
                    },
                  },
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((response) => {
                setContactList(response.data.contacts);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          value={textValue}
        />
        {/* <span className="font-semibold text-sm ">Select a Contact</span>
        <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" /> */}
      </div>
      {isTextBoxActive || isListBoxActive ? (
        <div
          onScroll={handleScroll}
          className="cursor-default border border-gray-400 shadow-sm max-h-32 overflow-y-scroll "
          onMouseEnter={() => setIsListBoxActive(true)}
          onMouseLeave={() => setIsListBoxActive(false)}
        >
          {contactList.map(
            (option: any, index: any) =>
              !contacts.some((element: any) => {
                return element.fullName === option.fullName;
              }) &&
              option.fullName
                .toLowerCase()
                .includes(textValue.toLowerCase()) && (
                <div
                  key={index}
                  className="cursor-default w-full flex flex-col hover:bg-gray-200 px-2 p-1 "
                  onClick={() => addContact(option)}
                >
                  <span className="cursor-default break-all">
                    {option.fullName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {option.emailAddress ? `${option.emailAddress}` : ""}
                  </span>
                </div>
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
