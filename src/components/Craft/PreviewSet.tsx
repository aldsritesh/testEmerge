import { useContext, useEffect, useState } from "react";
import { Element, Frame, useEditor } from "@craftjs/core";
import lz from "lzutf8";
import { useRouter } from "next/router";
import { CraftContext } from "@/pages/builder/website/craft";
import Container from "../Craft/widgets/Container";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRecoilState, useRecoilValue } from "recoil";
import { formDataState } from "@/atoms/formData";
import ModalDerived from "../Modal";
import { openModal } from "@/atoms/openModal";
import { previewDataState } from "@/atoms/webPreviewAtom";
// import { DatePicker } from "@mui/lab";

export default function PreviewSet() {
  const { draggedComponent, selected, actions, query, enabled } = useEditor(
    (state, query) => {
      //@ts-ignore
      const [currentNodeId] = state.events.selected;
      let selected;
      // console.log("state", state);

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
  const [json, setJson] = useState("");
  const data = useRecoilValue(previewDataState);
  console.log(data);
  const [formString, setFormString] = useState("");

  useEffect(() => {
    // axios
    //   .get(`${baseUrl}forms/${router?.query.id}`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then(({ data }: any) => {
    //     setFormString(data.form.data);
    //     console.log("templates", data.form.data);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
    const stateToLoad = localStorage.getItem("previewData");

    if (stateToLoad) {
      const json = lz.decompress(lz.decodeBase64(stateToLoad));
      if (json) actions?.deserialize(json);
      setJson(json);
    }

    // setFormString(
    //   ""
    // );
  }, [actions, formString]);
  const { device } = useContext(CraftContext);
  const tbStyles = {
    backgroundColor: "#f6f6fc",
    borderColor: "#d9d6d6",
    fontWeight: "5px",
  };
  const [openResModal, setOpenResModal] = useRecoilState(openModal);
  // console.log("FormsParticular:::::", openModal);
  return (
    <>
      <ModalDerived
        visibility={openResModal}
        onClose={() => {
          setOpenResModal(false);
        }}
      >
        <div className="py-4 px-6 font-bold">
          Congrats Form Submitted Successfully!!!!
        </div>
      </ModalDerived>
      <div className={`flex h-full justify-center`}>
        <div className="w-[80%] h-auto  scrollbar-hide pb-40 px-16">
          <div className="bg-white p-2 h-auto">
            <Frame data={json}>
              <Element is={Container} canvas>
                ...
              </Element>
            </Frame>
          </div>
        </div>
      </div>
    </>
  );
}
