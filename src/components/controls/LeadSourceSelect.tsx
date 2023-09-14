import { IContactLeadSource, ILeadSource } from "../Interfaces";
import { useState, createRef, useEffect } from "react";
import { Pill } from "../UI/Pill";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface ILeadSourceSelectProps {
  leadSources: IContactLeadSource[];
  setLeadSources: (leadSources: IContactLeadSource[]) => void;
  className: string;
  addNewLeadSource: (content: string) => boolean;
  addExistingLeadSource: (leadSourceID: string) => void;
  removeLeadSource: (leadSourceID: string) => void;
}

export default function LeadSourceSelect({
  leadSources,
  setLeadSources,
  className,
  addNewLeadSource,
  addExistingLeadSource,
  removeLeadSource,
}: ILeadSourceSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const { location, token }: any = useAuthentication();
  const inputRef = createRef<HTMLInputElement>();

  const [leadSourceList, setLeadSourceList] = useState<IContactLeadSource[]>(
    []
  );
  const [newLeadSourceCreatedCount, setNewLeadSourceCreatedCount] = useState(0);

  useEffect(() => {
    const getLeadSources = async () => {
      const leadSourcesFromAPI: IContactLeadSource[] = [];

      try {
        const response = await axios.get(
          `${baseUrl}lead-sources/location/${location?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        response.data.leadSources.map((leadSource: ILeadSource) => {
          leadSourcesFromAPI.push({
            leadSourceID: leadSource.id,
            contactID: "-1",
            content: leadSource.content,
          });
        });
        setLeadSourceList(leadSourcesFromAPI);
      } catch (error) {
        console.error(error);
      }
    };

    getLeadSources();
  }, [newLeadSourceCreatedCount]);

  const [textValue, setTextValue] = useState("");

  const addNewLeadSourceFn = () => {
    if (!addNewLeadSource(textValue.toLowerCase())) {
      setLeadSources([
        ...leadSources,
        {
          leadSourceID: "-1",
          contactID: "-1",
          content: textValue.toLowerCase(),
        },
      ]);
    } else {
      setNewLeadSourceCreatedCount(newLeadSourceCreatedCount + 1);
    }
    setTextValue("");
    setIsListBoxActive(false);
  };

  const addLeadSourceFn = (leadSource: IContactLeadSource) => {
    setLeadSources([...leadSources, leadSource]);
    setTextValue("");
    setIsListBoxActive(false);

    addExistingLeadSource(leadSource.leadSourceID);
  };

  const removeLeadSourceFn = (leadSource: IContactLeadSource) => {
    setLeadSources(leadSources.filter((t) => t.content !== leadSource.content));

    removeLeadSource(leadSource.leadSourceID);
  };

  return (
    <div>
      <div
        className={`flex flex-wrap ${className}`}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {leadSources.map((option: IContactLeadSource, index: number) => (
          <Pill
            key={index}
            bgColor={"red-100"}
            textColor={"red-800"}
            showRemoveButton={true}
            onClick={() => removeLeadSourceFn(option)}
            value={option.content}
          />
        ))}
        <input
          ref={inputRef}
          onFocus={() => {
            setIsTextBoxActive(true);
          }}
          onBlur={() => setIsTextBoxActive(false)}
          className={`outline-none w-wrap ${isTextBoxActive ? "" : "h-0"}`}
          onChange={(e) => {
            setTextValue(e.target.value);
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
          {textValue.length > 0 &&
            !leadSources.some(
              (leadSource) => leadSource.content === textValue.toLowerCase()
            ) &&
            !leadSourceList.some(
              (leadSource) => leadSource.content === textValue.toLowerCase()
            ) && (
              <div
                className="cursor-default w-full hover:bg-gray-200 px-2 p-1"
                onClick={addNewLeadSourceFn}
              >
                <span className="cursor-default">
                  {textValue.toLowerCase()}
                </span>
              </div>
            )}
          {leadSourceList.map(
            (option, index) =>
              !leadSources.some(
                (leadSource) => leadSource.content === option.content
              ) &&
              option.content.includes(textValue.toLowerCase()) && (
                <div
                  key={index}
                  className="cursor-default w-full hover:bg-gray-200 px-2 p-1"
                  onClick={() => addLeadSourceFn(option)}
                >
                  <span className="cursor-default break-all">
                    {option.content}
                  </span>
                </div>
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
