import SettingsSidebar from "@/components/Conversations/Settings/Sidebar/SettingsSidebar";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full lg:w-[20%] border-r-[1px]   bg-white    ">
          <SettingsSidebar />
        </div>
        <div className="w-full lg:w-[80%]  bg-white h-[100vh] scrollbar-hide  ">
          <p> okm </p>
        </div>
      </div>
    </>
  );
}
