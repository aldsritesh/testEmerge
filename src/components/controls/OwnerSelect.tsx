/* eslint-disable react-hooks/exhaustive-deps */
import { IOwner } from "../Interfaces";
import { useState, createRef, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface IOwnerSelectProps {
  owner: IOwner;
  setOwner: (owner: IOwner) => void;
  className: string;
}

export default function OwnerSelect({
  owner,
  setOwner,
  className,
}: IOwnerSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const [ownerList, setOwnerList] = useState<IOwner[]>([]);
  const { location, token }: any = useAuthentication();
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const getOwnerList = async () => {
      const ownerList: IOwner[] = [];

      try {
        const response = await axios.get(
          `${baseUrl}users/location/${location?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        response.data.users.map((owner: IOwner) => {
          ownerList.push(owner);
        });
        setOwnerList(ownerList);
        if (ownerList.length > 0 && owner.id === "") {
          setOwner(ownerList[0]);
          setTextValue(ownerList[0].fullName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getOwnerList();
  }, []);

  return (
    <div>
      <select
        className={`flex flex-wrap ${className}`}
        onChange={(e) => {
          const owner = ownerList.find((owner) => owner.id === e.target.value);
          if (owner) {
            setOwner(owner);
            setTextValue(owner.fullName);
          }
        }}
        value={owner.id}
      >
        {ownerList.map((owner: IOwner) => {
          return (
            <option key={owner.id} value={owner.id}>
              {owner.fullName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
