import React, { createContext, useState } from "react";
import { memo } from "react";
import { useRouter } from "next/router";
import TopNavigation from "./TopNavigation";

interface IConversationLayoutProps {
  children: React.ReactNode;
}

export const ConversationContext = createContext({
  title: "en",
  setTitle: (string: string) => {},
  open: true,
  setOpen: (boolean: boolean) => {},
});

export default memo(function ConversationLayout({
  children,
}: IConversationLayoutProps) {
  const [title, setTitle] = useState("Dashboard");
  const [open, setOpen] = useState(true);
  const value: any = { title, setTitle, open, setOpen };
  const router = useRouter();
  return (
    <>
      <ConversationContext.Provider value={value}>
        <TopNavigation />
        {children}
      </ConversationContext.Provider>
    </>
  );
});
