import { IContactTag, ITag } from "../Interfaces";
import { useState, createRef, useEffect } from "react";
import { Pill } from "../UI/Pill";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useAuthentication } from "@/controllers/auth";

interface ITagSelectProps {
  tags: IContactTag[];
  setTags: (tags: IContactTag[]) => void;
  className: string;
  addNewTag: (content: string) => boolean;
  addExistingTag: (tagID: string) => void;
  removeTag: (tagID: string) => void;
}

export default function TagSelect({
  tags,
  setTags,
  className,
  addNewTag,
  addExistingTag,
  removeTag,
}: ITagSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const [tagList, setTagList] = useState<IContactTag[]>([]);
  const { location, token }: any = useAuthentication();
  const [textValue, setTextValue] = useState("");
  const [newTagCreatedCount, setNewTagCreatedCount] = useState(0);
  useEffect(() => {
    const getTags = async () => {
      const tagsFromAPI: IContactTag[] = [];
      try {
        const response = await axios.get(
          `${baseUrl}tags/location/${location?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.tags);
        response.data.tags.map((tag: ITag) => {
          tagsFromAPI.push({
            tagID: tag.id,
            contactID: "-1",
            content: tag.content,
          });
        });
        setTagList(tagsFromAPI);
      } catch (error) {
        console.error(error);
      }
    };

    getTags();
  }, [newTagCreatedCount]);

  const addNewTagFn = () => {
    if (!addNewTag(textValue.toLowerCase())) {
      setTags([
        ...tags,
        {
          tagID: "-1",
          contactID: "-1",
          content: textValue.toLowerCase(),
        },
      ]);
    } else {
      setNewTagCreatedCount(newTagCreatedCount + 1);
    }
    setTextValue("");
    setIsListBoxActive(false);
    console.log(tags);
  };

  const addTag = (tag: IContactTag) => {
    setTags([...tags, tag]);
    setTextValue("");
    setIsListBoxActive(false);
    console.log(tags);
    addExistingTag(tag.tagID);
  };

  const removeTagFn = (tag: IContactTag) => {
    setTags(tags.filter((t) => t.content !== tag.content));
    console.log("TAGS", tags);
    removeTag(tag.tagID);
  };

  return (
    <div>
      <div
        className={`flex flex-wrap ${className}`}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        {tags.map((option: IContactTag, index: number) => (
          <Pill
            key={index}
            bgColor={"blue-100"}
            textColor={"blue-800"}
            showRemoveButton={true}
            onClick={() => removeTagFn(option)}
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
            !tags.some((tag) => tag.content === textValue.toLowerCase()) &&
            !tagList.some((tag) => tag.content === textValue.toLowerCase()) && (
              <div
                className="cursor-default w-full hover:bg-gray-200 px-2 p-1"
                onClick={addNewTagFn}
              >
                <span className="cursor-default">
                  {textValue.toLowerCase()}
                </span>
              </div>
            )}
          {tagList.map(
            (option, index) =>
              !tags.some((element) => {
                return element.content === option.content;
              }) &&
              option.content.includes(textValue.toLowerCase()) && (
                <div
                  key={index}
                  className="cursor-default w-full hover:bg-gray-200 px-2 p-1"
                  onClick={() => addTag(option)}
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
