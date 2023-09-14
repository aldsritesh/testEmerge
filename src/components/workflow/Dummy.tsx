import React, { useState } from "react";

export default function Dummy() {
  function RenderActionData({
    currentIndex,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <div>
        <div>{actionComponents[currentIndex].comp}</div>
        <div>{actionComponents[currentIndex].title}</div>
        <button onClick={() => handleAddMore(currentIndex)}>add more</button>
      </div>
    );
  }

  const handleAddMore = (currentIndex: number) => {
    if (newData == 0) {
      setActionComponents([
        {
          comp: `id${currentIndex + 100}`,
          title: `title${currentIndex + 100}`,
        },
      ]);
    } else {
      setActionComponents([
        ...actionComponents,
        { comp: `id${currentIndex}`, title: `title${currentIndex + 100}` },
      ]);
    }
    setNewData(newData + 1);
  };

  const [newData, setNewData] = useState(0);
  const [actionComponents, setActionComponents] = useState([
    { comp: "id1", title: `title + 1` },
  ]);
  const [title, setTitle] = useState("");

  return (
    <div className="relative scrollbar-hide h-[82%] pb-20 bg-gradient-to-br from-gray-200 to-transparent bg-repeat bg-cover bg-opacity-50 bg-dots overflow-y-scroll">
      {actionComponents.map((item, index) => (
        <div key={index}>
          <RenderActionData currentIndex={index} title={title} />
        </div>
      ))}
    </div>
  );
}
