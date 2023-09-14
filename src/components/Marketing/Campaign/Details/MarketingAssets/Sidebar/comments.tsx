import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { RxPaperPlane } from "react-icons/rx";

export default function Comments() {
  const [comments, setComments] = useState<any>([
    {
      id: "1",
      img: require("../../../../../../../public/images/avatar/blackdog.jpg"),
      name: "John Kyue",
      duration: new Date(),
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elite. Adipisci  ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae",
    },
    {
      id: "1",
      img: require("../../../../../../../public/images/avatar/blackdog.jpg"),
      name: "John Kyue",
      duration: new Date(),
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elite. Adipisci  ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae",
    },
    {
      id: "1",
      img: require("../../../../../../../public/images/avatar/blackdog.jpg"),
      name: "John Kyue",
      duration: new Date(),
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elite. Adipisci  ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae",
    },
  ]);

  const [comment, setComment] = useState();
  const handleAddComment = () => {
    setComments([
      ...comments,
      {
        id: comments?.length + 1,
        img: require("../../../../../../../public/images/avatar/blackdog.jpg"),
        name: "John Kyue",
        duration: new Date(),
        message: comment,
      },
    ]);
  };

  return (
    <div>
      {" "}
      <section className="border-b-[1px] border-r-[1px] border-l-[1px] flex justify-between flex-col">
        <div className="px-4 flex justify-start items-center">
          <p className="text-base font-semibold text-gray-700 capitalize  pt-4 pb-2">
            Campaign Info
          </p>
          <button className="rounded-full  h-6 w-6 flex justify-center items-center text-slate-400 border text-[12px] p-0.5 mt-2.5 ml-1">
            {comments?.length}
          </button>
        </div>

        <div className="px-4 pt-4 pb-0 h-[60vh] bg-white scrollbar-hide overflow-y-scroll overflow-x-hidden">
          {comments.reverse().map((item: any, index: number) => (
            <div key={index} className="flex flex-col pb-3">
              <div className="w-full flex items-center justify-between">
                <div className=" flex items-center justify-start">
                  <Image
                    className="w-7 rounded-full mr-2 mb-1 text-slate-500 "
                    src={item?.img}
                    alt=""
                  />

                  <p className="ml-1 mb-1 text-center font-medium font-noto text-sm text-gray-700">
                    {item.name}
                  </p>
                </div>

                <p className="ml-1 mb-1 text-center font-medium font-noto text-sm text-gray-500">
                  {moment(item.duration).format("dd  mm yy")}
                </p>
              </div>
              <p className="w-full mb-1 font-medium font-noto text-[12px] text-[#969494] py-2">
                {item.message}
              </p>
            </div>
          ))}
        </div>

        <div className="py-3 border-t-[1px] flex justify-center relative ">
          <input
            className=" focus:outline-0 w-full px-3 pb-4 placeholder:text-[#969494] text-sm"
            type="text"
            placeholder=" write comment"
            onChange={(e: any) => setComment(e.target.value)}
            name="comment"
            value={comment}
          />
          <div
            className="absolute top-4 right-0 cursor-pointer bg-white px-2"
            onClick={handleAddComment}
          >
            <RxPaperPlane className="text-gray-500" />
          </div>
        </div>
      </section>
    </div>
  );
}
