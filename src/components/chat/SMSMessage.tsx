import { emojis } from "@/config/emojis";
import {
  AtSymbolIcon,
  CalendarDaysIcon,
  ClipboardDocumentIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  LinkIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SMSMessage = ({ handleChange, onClose }: any) => {
  //textarea data
  const [content, setContent] = useState("");
  const handleInputChange = (event: any) => {
    setContent(event.target.value);
  };

  //active Button
  const [activeData, setActiveData] = useState("");

  //link
  const [linkInputVisible, setLinkInputVisible] = useState(false);
  const [linkInputValue, setLinkInputValue] = useState("");
  const handleLinkInputChange = (event: any) => {
    setLinkInputValue(event.target.value);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (linkInputValue) {
        const linkTag = `<a href="${linkInputValue}">${linkInputValue}</a>`;
        const newContent = content + linkTag + " ";
        setContent(newContent);
      }
      setLinkInputVisible(false);
      setLinkInputValue("");
      setActiveData("");
    }
  };

  //emoji
  const [emojiVisible, setEmojiVisible] = useState(false);
  const handleInsertEmoji = (emoji: any) => {
    const newContent = content + emoji;
    setContent(newContent);
  };

  //emoji search
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const filteredEmojis = emojis.filter((emoji) => {
    const { emoji: emojiText, name, category, subcategory } = emoji;
    const searchTerms = [emojiText, name, category, subcategory].map((term) =>
      term.toLowerCase()
    );
    return searchTerms.some((term) => term.includes(searchQuery.toLowerCase()));
  });

  //tag
  const [tagVisible, setTagVisible] = useState(false);
  const [tagInputValue, setTagInputValue] = useState("");
  const handleInsertTag = () => {
    setTagVisible(true);
  };

  const handleTagInputChange = (event: any) => {
    setTagInputValue(event.target.value);
  };

  const handleTagInputSave = (event: any) => {
    if (event.key === "Enter") {
      const tags = tagInputValue
        .split(",")
        .map((tag: string) => `#${tag.trim()}`);
      const newContent = content + " " + tags.join(" ") + " ";
      setContent(newContent);
      setTagVisible(false);
      setTagInputValue("");
    }
  };

  return (
    <div>
      <div className="bg-white w-full px-5 pt-2">
        <div className="w-full relative ">
          <textarea
            value={content.replace(/<\/?[^>]+(>|$)/g, "")} // Remove HTML tags
            onChange={handleInputChange}
            rows={5}
            className="text-sm text-dark pr-10 scrollbar-hide p-3 w-full border-2 border-[#3486E2] rounded-md focus:border-[#3486E2]   focus:outline-none  "
          ></textarea>
          <div className="absolute right-3 top-3">
            <div className="flex flex-col justify-between items-center   ">
              <button
                className="mb-2.5"
                onClick={() => {
                  setActiveData("tag");
                  setTagVisible(!tagVisible);
                }}
              >
                <TagIcon
                  className={` ${
                    activeData == "tag" ? "text-blue-500" : "text-gray-500"
                  } h-5 w-5`}
                />
              </button>
              <button
                onClick={() => {
                  setActiveData("link");
                  setLinkInputVisible(!linkInputVisible);
                }}
                className="mb-2.5"
              >
                <LinkIcon
                  className={` ${
                    activeData == "link" ? "text-blue-500" : "text-gray-500"
                  } h-5 w-5`}
                />
              </button>
              <button
                onClick={() => {
                  setActiveData("emoji");
                  setEmojiVisible(!emojiVisible);
                }}
                className="mb-2"
              >
                <FaceSmileIcon
                  className={` ${
                    activeData == "emoji" ? "text-blue-500" : "text-gray-500"
                  } h-5 w-5`}
                />
              </button>
            </div>
          </div>

          {tagVisible && (
            <div className="absolute   top-3 bg-gray-100 p-3 rounded-md right-10 ">
              <div className="flex justify-between items-center mb-1">
                <label className="w-full text-base text-dark font-semibold uppercase">
                  Enter Tags** :
                </label>
                <button
                  onClick={() => {
                    setTagVisible(false);
                    setActiveData("");
                  }}
                >
                  <XMarkIcon className="h-5 w-5 text-dark" />
                </button>
              </div>
              <input
                type="text"
                value={tagInputValue}
                onChange={handleTagInputChange}
                onKeyDown={handleTagInputSave}
                placeholder="separate by comma"
                className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
              />
            </div>
          )}

          {linkInputVisible && (
            <div className="absolute   top-3 bg-gray-100 p-3 rounded-md right-10 ">
              <div className="flex justify-between items-center mb-1">
                <label className="w-full text-base text-dark font-semibold uppercase">
                  URL** :
                </label>
                <button
                  onClick={() => {
                    setLinkInputVisible(false);
                    setActiveData("");
                  }}
                >
                  <XMarkIcon className="h-5 w-5 text-dark" />
                </button>
              </div>
              <input
                type="url"
                value={linkInputValue}
                onChange={handleLinkInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter the URL"
                className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
              />
            </div>
          )}

          {emojiVisible && (
            <div className="absolute w-[40%]  top-[-45%] rounded-lg bg-gray-100 p-3  right-10">
              <div className="flex justify-between items-center mb-1 pt-2">
                <input
                  type="url"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search Emoji"
                  className="mr-5 px-1  pt-1 pb-0.5 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-b-[1px] border-gray-400 text-space focus:outline-none  focus:border-b-[1px] focus:border-gray-300 text-black "
                />
                <button
                  onClick={() => {
                    setEmojiVisible(false);
                    setActiveData("");
                  }}
                >
                  <XMarkIcon className="h-5 w-5 text-dark" />
                </button>
              </div>
              <div className="h-[20vh] overflow-y-scroll scrollbar-hide">
                <div className="flex flex-wrap  items-center mb-1 ">
                  {filteredEmojis.map((item: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => handleInsertEmoji(item?.emoji)}
                      className="w-2/12 cursor-pointer"
                    >
                      <p className="text-gray-600 font-semibold text-base pb-3 pt-3 leading-5">
                        {item?.emoji}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-between items-center mt-2 mb-2 px-2">
          <div className="flex flex-wrap justify-between items-center">
            <ClipboardDocumentIcon className="h-6 w-6 text-gray-600" />
            <CurrencyDollarIcon className="h-6 w-6 text-blue-500 ml-4" />
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <button
              onClick={() => setContent("")}
              className="border-gray-400 border-[1px] px-6 py-1.5 rounded-md"
            >
              Clear
            </button>
            <button
              onClick={() => handleChange(content)}
              className="ml-4 bg-greenShade px-3 py-1.5 rounded-md flex justify-between items-center"
            >
              <span className="text-white border-r-[1px] border-white pr-2 mr-2 text-base">
                Send Now
              </span>
              <AtSymbolIcon className="text-white h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* <div
        style={{ whiteSpace: "pre-line" }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div> */}
    </div>
  );
};

export default SMSMessage;

{
  /* <button onClick={() => handleInsertTag("h1")}>Heading 1</button>
      <button onClick={() => handleInsertTag("h2")}>Heading 2</button>
      <button onClick={() => handleInsertTag("h3")}>Heading 3</button>
      <button onClick={() => handleInsertTag("p")}>Paragraph</button>
      <button onClick={() => handleInsertTag("ul")}>Unordered List</button>
      <button onClick={() => handleInsertTag("ol")}>Ordered List</button>
      <button onClick={() => setContent(content + "**bold text**")}>
        Bold
      </button>
      <button onClick={() => setContent(content + "*italic text*")}>
        Italic
      </button>
      <button onClick={() => setContent(content + "🙂")}>Emoji</button> */
}

{
  /* <div style={{ marginTop: "10px" }}>
        <h3>Editor:</h3>
        <textarea
          value={content.replace(/<\/?[^>]+(>|$)/g, "")} // Remove HTML tags
          onChange={handleInputChange}
          style={{
            border: "1px solid #ccc",
            minHeight: "100px",
            padding: "10px",
            width: "100%",
          }}
        ></textarea>
      </div> */
}
