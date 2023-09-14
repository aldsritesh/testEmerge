import React from "react";

import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/board";

export default function App() {
  const data = {
    medium: generateQuoteMap(20),
    large: generateQuoteMap(500),
  };

  return (
    <div className="overflow-y-hidden h-screen bg-white">
      <Board initial={data.medium} withScrollableColumns />
    </div>
  );
}
