import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import TextInput from "../../Components/TextInput";
import Select from "react-select";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import LocationModal from "./LocationModal";

const locationData = [
  {
    location: {
      name: "High Level",
      address: "2179 Oakmont way",
      id: "k354tf485220-gh",
    },
    priority: 1,
    agency: "Universal agency Inc",
    agents: [
      {
        name: "Crystal Onwuteaka",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
      {
        name: "Christan Rouche",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
      {
        name: "Tyler Lockwood",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
      {
        name: "Austin Garner",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
    ],
    status: "Calendar: HL Daily Demo",
  },

  {
    location: {
      name: "Chase Sandbox",
      address: "555 Chase st",
      id: "nft354tf485698-gh",
    },
    priority: 1,
    agency: "Warner Bros Inc",
    agents: [
      {
        name: "Chase Buckner",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
      {
        name: "Monica Geller",
        image: require("@/../public/images/avatar/yellowdog.jpg"),
      },
    ],
    status: "Calendar: Basic Call Demo",
  },
];

const agents = [
  {
    value: "Crystal Onwuteaka",
    label: "Crystal Onwuteaka",
  },
  {
    value: "Christan Rouche",
    label: "Christan Rouche",
  },
  {
    value: "Tyler Lockwood",
    label: "Tyler Lockwood",
  },
  {
    value: "Austin Garner",
    label: "Austin Garner",
  },
  {
    value: "Chase Buckner",
    label: "Chase Buckner",
  },
  {
    value: "Monica Geller",
    label: "Monica Geller",
  },
];

export default function Main() {
  const [searchAddress, setSearchAddress] = useState("");
  const [searchAgency, setSearchAgency] = useState("");
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [locations, setLocations] = useState(locationData);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    setLocations(
      locationData.filter((item) => {
        const i = item.agents.map((agent) =>
          agent.name.toLowerCase().includes(selectedOption.value.toLowerCase())
        );
        return i.length > 0 ? item : null;
      })
    );
  };

  useEffect(() => {
    if (searchAgency == "") {
      setLocations(locationData);
      return;
    }
    setLocations(
      locationData.filter((item) =>
        item.agency.toLowerCase().includes(searchAgency)
      )
    );
  }, [searchAgency]);

  useEffect(() => {
    if (searchAddress == "") {
      setLocations(locationData);
      return;
    }
    setLocations(
      locationData.filter(
        (item) =>
          item.location.address.toLowerCase().includes(searchAddress) ||
          item.location.name.toLowerCase().includes(searchAddress) ||
          item.location?.id.toLowerCase().includes(searchAddress)
      )
    );
  }, [searchAddress]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && (
        <ConversationModalDerived
          visibility={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <LocationModal onClose={() => setIsModalOpen(false)} />
        </ConversationModalDerived>
      )}

      <div className="flex justify-between flex-wrap items-center border-b border-gray-300 pb-4 px-4 pt-2">
        <h1 className="text-lg font-medium">Locations</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-newBlue px-3 py-1.5 rounded-md w-36 flex justify-center items-center"
        >
          <AiOutlinePlus className="text-white mr-1" />
          <span className="text-white text-sm">Add Locations</span>
        </button>
      </div>

      <div className="flex justify-between w-1/2 px-3">
        <div className="w-[49%] mt-2">
          <TextInput
            placeholder="Search Agency"
            value={searchAddress}
            onChange={({ target: { value } }) => setSearchAddress(value)}
          />
        </div>

        <div className="w-[49%] mt-2">
          <TextInput
            placeholder="Search Location"
            value={searchAgency}
            onChange={({ target: { value } }) => setSearchAgency(value)}
          />
        </div>

        {/* <div>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={agents}
            placeholder="Select Template"
          />
        </div> */}
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <p>Location name & address</p>
              </th>
              <th>
                <p>Priority</p>
              </th>
              <th>
                <p>Agency</p>
              </th>
              <th>Agents</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((item, index) => (
              <tr key={index}>
                <td>
                  <h6 className="font-medium text-black text-sm">
                    {item.location.name}
                  </h6>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.location.address}
                  </p>
                  <p className="text-xs text-gray-500">{item.location?.id}</p>
                </td>
                <td>{item.priority}</td>
                <td className="text-sm">{item.agency}</td>
                <td>
                  {item.agents.map((agent, index) => (
                    <div key={index} className="flex gap-1 items-center mb-3">
                      <div className="relative h-8 w-8 rounded-full">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          className="rounded-full h-8 w-8"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="font-medium text-sm">{agent.name}</p>
                    </div>
                  ))}
                </td>
                <td>
                  <span className="text-xs bg-[#dfe9ff] text-newBlue py-1 px-2 rounded-xl">
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn bg-transparent hover:bg-transparent hover:border-none text-black border-none btn-sm">
                      <AiOutlineEdit />
                    </button>
                    <button className="btn bg-transparent hover:bg-transparent hover:border-none text-black border-none btn-sm">
                      <RiDeleteBin5Line className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
