import { FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from "react";
import HistoryTabData from "./historyTabData";
import ContactSelect from "@/components/Automations/ContactSelect";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

export default function History({ id }: any) {
  const [contacts, setContacts] = useState<any>([]);
  const [selectedContact, setSelectedContact] = useState([]);
  const [notSelectedContact, setNotSelectedContact] = useState([]);

  // if contacts is selected
  const { location, token }: any = useAuthentication();

  useEffect(() => {
    axios
      .get(
        `
      ${baseUrl}workflows/${id}/logs?contactID=${contacts[0]?.id}
      `,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(({ data }: any) => {
        setSelectedContact(data.workflowLogs);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [contacts]);

  // if no contact is selected

  useEffect(() => {
    axios
      .get(`${baseUrl}workflows/${id}/logs`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setNotSelectedContact(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="px-2 lg:px-8 py-5 bg-white">
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
          <div className="w-full lg:w-auto flex justify-between items-center mb-2">
            <div className="dropdown dropdown-bottom mr-1">
              <label
                tabIndex={0}
                className="border-[1px  ] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="font-semibold text-sm ">Last 30 days </span>
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
                tabIndex={1}
                className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="font-semibold text-sm ">Action Types</span>
                <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
              </label>
              <ul
                tabIndex={1}
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
                tabIndex={2}
                className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="font-semibold text-sm ">All Status</span>
                <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
              </label>
              <ul
                tabIndex={2}
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

          <div>
            <ContactSelect
              className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
              contacts={contacts}
              setContacts={setContacts}
            />
          </div>
        </div>

        <HistoryTabData
          sdata={selectedContact ? selectedContact : notSelectedContact}
        />
      </div>
    </div>
  );
}
