/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame, useEditor } from "@craftjs/core";
import { SettingsPanel } from "./Settings";
import { TextInputElement } from "./widgets/TextInput";
import Container from "../Craft/widgets/Container";
import { Text } from "../Craft/widgets/Text/Text";
import { SelectBoxInputElement } from "./widgets/SelectInputElement";
import { AttachmentElement } from "./widgets/Attachment";
import { TextAreaElement } from "./widgets/TextareaElement";
import { RadioInputElement } from "./widgets/RadioElement";
import lz from "lzutf8";
import { useRouter } from "next/router";
import { Button } from "../Craft/widgets/Button";
import Image from "next/image";
import { TfiHandDrag } from "react-icons/tfi";
import { CraftContext } from "@/pages/builder/form/craft";
import { contactID } from "@/config/APIConstants";
// import { DatePicker } from "@mui/lab";

export default function Main() {
  // const { actions, query, enabled } = useEditor((state) => ({
  //   enabled: state.options.enabled,
  // }));

  const { draggedComponent, selected, actions, query, enabled } = useEditor(
    (state, query) => {
      //@ts-ignore
      const [currentNodeId] = state.events.selected;
      let selected;
      // console.log("stateText", state);

      if (currentNodeId) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings:
            state.nodes[currentNodeId].related &&
            state.nodes[currentNodeId].related.settings,
          isDeletable: query.node(currentNodeId).isDeletable(),
        };
      }

      return {
        selected,
        draggedComponent: state?.nodes?.ROOT?.data?.nodes?.length,
        enabled: state.options.enabled,
      };
    }
  );
  // const [enabled, setEnabled] = useState(true);
  const [json, setJson] = useState("");
  const { preview, setPreview } = useContext(CraftContext);
  const router = useRouter();
  const formRef = useRef(null);
  // console.log("mainqueryloadeddrom ==> ", router.query);

  // Load save state from server on page load
  useEffect(() => {
    const stateToLoad = router?.query as any;
    // console.log("stateload: ===> ", stateToLoad);
    if (stateToLoad.loadfrom) {
      const json = lz.decompress(lz.decodeBase64(stateToLoad.loadfrom));
      setJson(json);
      // console.log(json);
      actions.deserialize(json);
    }
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement: HTMLFormElement | null = formRef.current; // Get the form element from the ref
    if (!formElement) return; // Check if the form element exists

    const formData: any = new FormData(formElement);
    const data: Record<string, string> = {}; // Define the type of data explicitly

    formData.forEach((value: string, key: string) => {
      // contactID = contactID;
      data[key] = value;
    });

    console.log("Form Data:", data);
    // Now you can do any further processing or submit the data to the server here.
  };
  // actions.deserialize(json);
  const { device } = useContext(CraftContext);
  const tbStyles = {
    backgroundColor: "#f6f6fc",
    borderColor: "#d9d6d6",
    fontWeight: "5px",
  };
  console.log("draggedComponent::::", draggedComponent);
  // console.log("router===>", router.query?.loadfrom ? true : false);
  return (
    <div
      className={`flex h-full ${
        !preview ? "justify-between" : "justify-center"
      }`}
    >
      <div className={` ${!preview ? "w-[20%]" : "hidden"}  pr-2 h-screen`}>
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <SettingsPanel />
        </div>
      </div>
      <div className="w-[60%] h-full overflow-y-scroll scrollbar-hide pb-40 px-16">
        <div className="bg-white h-screen p-2">
          {!draggedComponent ? (
            <div className=" absolute left-[45%] top-[50%] flex flex-col justify-around items-center font-bold">
              <div> Drag And Drop Here</div>
              <button className="mt-2 text-center bg-gray-200 px-2 py-1 rounded-lg text-gray-800 font-semibold">
                Need Help!
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="h-screen">
            <form ref={formRef} onSubmit={handleSubmit}>
              <Frame json={json}>
                <Element is={Container} canvas>
                  &nbsp;
                </Element>
              </Frame>
            </form>
          </div>
        </div>
      </div>
      <div className={`${!preview ? "w-[20%]" : "hidden"} pr-2 h-screen`}>
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll scrollbar-hide">
          <Toolbox />
        </div>
      </div>
    </div>
  );
}
