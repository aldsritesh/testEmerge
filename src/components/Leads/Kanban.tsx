import React from "react";

import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/board";
import { IContactData } from "../Interfaces";

interface IProps {
  data: IContactData[];
  setData: (data: IContactData[]) => void;
  pipelineID: string;
}

export default function App({ data, setData, pipelineID }: IProps) {
  return (
    <div className="overflow-y-hidden h-screen bg-white">
      <Board initial={data} setInitial={setData} pipelineID={pipelineID} withScrollableColumns />
    </div>
  );
}
