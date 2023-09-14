import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TextInput from "../../Components/TextInput";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { CnvContext } from "@/pages/conversations";
import { PlusIcon } from "@heroicons/react/24/solid";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import AddFaq from "../../Settings/Location/AddFaq";

const faqsData = [
  {
    question: "What is the work hour for your location?",
    answer: "We are online from 9am - 5pm CDT.",
  },
];

export default function FAQs() {
  const [faqs, setFaqs] = useState(faqsData);
  const [searchString, setSearchString] = useState("");
  const { setMessageText } = useContext(CnvContext);

  useEffect(() => {
    if (searchString == "") {
      setFaqs(faqsData);
      return;
    }

    setFaqs(
      faqsData.filter((item: any) =>
        item.question.toLowerCase().includes(searchString)
      )
    );
  }, [searchString]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        const index = parseInt(event.key);
        if (!isNaN(index) && index >= 0 && index < faqs.length) {
          const item = faqs[index];
          navigator.clipboard.writeText(item.answer);
          setMessageText(item.answer);
          alert("Text copied.");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [faqs]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {isModalOpen && (
        <ConversationModalDerived
          visibility={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <AddFaq
            onClose={() => setIsModalOpen(false)}
            handleChange={(item: any) => {
              setFaqs((faqs) => [...faqs, ...item]);
              setIsModalOpen(false);
            }}
          />
        </ConversationModalDerived>
      )}
      <div className="px-2 py-2 bg-[#e2e3e8] flex flex-warp justify-between items-center">
        <h3 className="font-medium text-sm text-black w-[65%]">
          FAQs (Default Eliza)
        </h3>
        <TextInput
          righticon={<AiOutlineSearch className="text-xl" />}
          placeholder="Search FAQs"
          bg="#f8fafb"
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
        />
      </div>
      <div className="flex justify-end items-end pt-3 pr-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex justify-start items-center"
        >
          <PlusIcon className="h-4 w-4" />
          <span className="font-semibold text-sm"> Add FAQ </span>
        </button>
      </div>
      <div className="mt-5 px-4 overflow-y-scroll h-[73vh] scrollbar-hide">
        {faqs.map((item, index) => (
          <div className="px-2 py-2 bg-[#f2f3f6] mb-2 rounded-lg" key={index}>
            <div className="font-semibold italic text-sm">{item.question}</div>
            <div className="mt-3 flex gap-2 items-center">
              <div
                className="flex justify-center flex-col items-center"
                onClick={() => {
                  navigator.clipboard.writeText(item.answer);
                  setMessageText(item.answer);
                  alert("Text copied.");
                }}
              >
                <HiOutlineClipboardCopy
                  className="text-xl"
                  data-index={index}
                />
                <kbd className="text-xs mt-2 bg-gray-200 p-0.5">
                  Ctrl + {index}
                </kbd>
              </div>
              <div className="text-xs font-medium">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
