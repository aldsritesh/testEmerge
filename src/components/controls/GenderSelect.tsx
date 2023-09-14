/* eslint-disable react-hooks/exhaustive-deps */
import { IGender } from "../Interfaces";
import { useState, createRef, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface IGenderSelectProps {
  gender: IGender;
  setGender: (gender: IGender) => void;
  className: string;
}

export default function GenderSelect({
  gender,
  setGender,
  className,
}: IGenderSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const [genderList, setGenderList] = useState<IGender[]>([]);
  const { location, token }: any = useAuthentication();
  const [textValue, setTextValue] = useState("");

  const genderStatus = [
    {
      id: 0,
      status: "Male",
    },
    {
      id: 0,
      status: "Female",
    },
  ];

  useEffect(() => {
    const getGenderList = async () => {
      const genderList: IGender[] = [];

      try {
        const response = await axios.get(
          `localhost:3000/users/location/${location?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        response.data.users.map((gender: IGender) => {
          genderList.push(gender);
        });
        setGenderList(genderList);
        if (genderList.length > 0 && gender.id === "") {
          setGender(genderList[0]);
          setTextValue(genderList[0].fullName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getGenderList();
  }, []);

  return (
    <div>
      <select
        className={`flex flex-wrap ${className}`}
        onChange={(e) => {
          const gender = genderList.find(
            (gender) => gender.id === e.target.value
          );
          if (gender) {
            setGender(gender);
            setTextValue(gender.fullName);
          }
        }}
        value={gender.id}
      >
        {genderStatus.map((item: any, index: any) => {
          return (
            // <option key={gender.id} value={gender.id}>
            //   {gender.fullName}
            // </option>
            <option key={index}>{item.status}</option>
          );
        })}
      </select>
    </div>
  );
}
