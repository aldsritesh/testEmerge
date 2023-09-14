import { useState, createRef, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRecoilState } from "recoil";
import { formDataState } from "@/atoms/formData";
import { useRouter } from "next/router";
import { useAuthentication } from "@/controllers/auth";

interface anySelectProps {
  cptCodes: any;
  setCPTCodes: (cptCodes: any) => void;
  className: string;
  maxLimit: number;
}

export default function CPTCodeSelect({
  cptCodes,
  setCPTCodes,
  className,
  maxLimit,
}: anySelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();
  const [cptCodeList, setCPTList] = useState<any>([]);
  const { location, token }: any = useAuthentication();
  const [textValue, setTextValue] = useState("");
  const [formBuilderState, setFormBuilderState] =
    useRecoilState<any>(formDataState);

  const router = useRouter();

  const { id } = router?.query;

  function PostCptCode(cptCode: any) {
    axios
      .post(
        `${baseUrl}contacts/${id}/cpt-codes/${cptCode.code}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}data/cpt-codes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCPTList(response.data.cptCodes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCPTCode = (cptCode: any) => {
    PostCptCode(cptCode);

    setCPTCodes([cptCode]);
    setTextValue("");
    setIsListBoxActive(false);
  };

  const removeCPTFn = (cptCode: any) => {
    setCPTCodes(
      cptCodes.filter((t: any) => {
        // console.log("yes t.code", t.code);
        // console.log("yes cptCode.code", cptCode.code);
        t.code !== cptCode.code;
      })
    );
  };

  const handlechange = (e: any) => {
    const { name, value } = e.target;
    // const date: any = moment().format("DD-MM-YYYY-hh:mm:ss");
    // console.log(date, [name + " " + date]);
    setFormBuilderState((prevValues: any) => ({
      ...prevValues,
      cptCode: e.target.value,
    }));
  };

  function Pill({ value, onClick, showRemoveButton, textColor, bgColor }: any) {
    return (
      <div
        onClick={onClick}
        className={`flex justify-center items-center cursor-pointer px-2.5 mx-2 uppercase font-bold text-[10px] rounded-full shadow-sm bg-${bgColor} text-${textColor} whitespace-nowrap`}
        key={value}
      >
        {value}
        {showRemoveButton && <span className="ml-2">x</span>}
      </div>
    );
  }

  return (
    <div>
      <div
        className={`flex flex-wrap ${className} items-center justify-center`}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {cptCodes.map((option: any, index: number) => (
          <Pill
            key={index}
            bgColor={"blue-100"}
            textColor={"blue-800"}
            showRemoveButton={true}
            onClick={() => removeCPTFn(option)}
            value={option.code}
          />
        ))}
        <input
          ref={inputRef}
          onFocus={() => {
            setIsTextBoxActive(true);
          }}
          onBlur={() => {
            setIsTextBoxActive(false);
            setTextValue("");
          }}
          className={`outline-none w-10`}
          onChange={(e) => {
            setTextValue(e.target.value);
            handlechange(e);
          }}
          value={textValue}
        />
      </div>
      {isTextBoxActive || isListBoxActive ? (
        <div
          className="cursor-default border border-gray-200 shadow-sm max-h-32 overflow-y-scroll"
          onMouseEnter={() => setIsListBoxActive(true)}
          onMouseLeave={() => setIsListBoxActive(false)}
        >
          {cptCodeList.map(
            (option: any, index: any) =>
              !cptCodes.some((element: any) => {
                return element.code === option.code;
              }) &&
              option.code.toLowerCase().includes(textValue.toLowerCase()) && (
                <div
                  key={index}
                  className="cursor-default w-full hover:bg-gray-200 px-1 p-1 flex flex-col"
                  onClick={() => addCPTCode(option)}
                >
                  <span className="cursor-default break-all">
                    {option.code}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {option.description}
                  </span>
                </div>
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
