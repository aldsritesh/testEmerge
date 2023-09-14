import { useContext, useEffect, useState } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame, useEditor } from "@craftjs/core";
import lz from "lzutf8";
import { useRouter } from "next/router";
import { CraftContext } from "@/pages/builder/form/craft";
import Container from "../Craft/widgets/Container";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { useRecoilState } from "recoil";
import { formDataState } from "@/atoms/formData";
import ModalDerived from "../Modal";
import { openModal } from "@/atoms/openModal";
import { useAuthentication } from "@/controllers/auth";
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
  const [formString, setFormString] = useState("");
  const { preview, setPreview } = useContext(CraftContext);
  const { location, token }: any = useAuthentication();

  const { previewEnabled, setPreviewEnabled } = useContext(CraftContext);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith("/builder")) {
      axios
        .get(`${baseUrl}forms/${router?.query.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }: any) => {
          setFormString(data.form.data);
          console.log("templates", data.form.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
      const stateToLoad = formString;
      if (stateToLoad) {
        const json = lz.decompress(lz.decodeBase64(stateToLoad));
        setJson(json);
        actions?.deserialize(json);
      }
    } else {
      setFormString(
        "eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWhlaWdodCI6NDAwLCJ3aWR0aCI6MCzHVCJjb3ZlciIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudMQbb3JkZXJSYWRpdXMiOjEwyBJDb2xvctcuV8lobWFyZ2luVG9wyw5Cb3R0b23LEUxlZnTLD1LmALIwLCJwYWRkaW5nxT81yQ/IQMoSxkHKEMdCNegAkFTmAO7GDS1zb2xpZCIsInNoYWRvdyI6xwktbm9uZckX9gDfY2hpbGRyZW4iOiLCoOQBeGRpc3BsYXnxAZMsImN1c+UApnt9LCJoaWRkxDVmYWxzZSwibm9kZXMiOlsia3BsRlZNTWdYdyIsIlNYZkhUcENSU08iLCJLMjhuOWl1cy0yIiwibk9UNEx3cWpORyJdLCJsaW5rZWROxkR7fX0szEf6Ai9UZXh0SW5wdXRFbGVt5ADO7QI25wCa6QI3dmFsdcQ2IiwidMg5UMgdbsZSZnVsbMVdLCJwbGFjZWhvbGRl5AE0RnVsbCDHGucCacRFxHL/AmnqAmnpAbzoAYkjZDlkNmQ28AJkMf4CZDE2/wJl7gJlOPECZcoSxkHkAwHuAmbqAxP/Amf/AmfsAQvpASbIICNmZmbnAYztAWHxAoPxAefuAorHYzrmBF35AprxAmciZGVtb1/HfzhOdFBRdFA5OFAi5AJ/yw/6An9Gb3Jt/wSy7wSy/wSw/wJH/wSw/wSw/wSw/wJLxT/rAinIQcsTyUP/Akz/Akz/AkzlA3P/BKPwAhntBJT4BLk1UUEyWkY2STZk9gSSyyD+BJL+BIbxAu8sImZvbnRTaXplIjoxNywibW9iaWxlRsoUNiwidW5kZXJsaW5lyVBib2zkAijEOy1zZW1pxRAsIml0YWxpY8kmYWxpZ27lAzM6ImzkAZ/lANllSOcCjzEuNcZ+yEptYWlu5wOTQ2Fz5ADRbm9ybWFsLWPEDv8CpP8CpP8CpPoCpC01/wKl7gKl8gKk/wKjxRH/AqL/AqLxAOB0YWfnAhJw5wF0VGhyb3VnaOkBm2PHOCM0YjU1NjP2BPb4AtHrBJ//BPDvAsXrB5H/B1f/B1f/B1fwB1dpcnN09gdYxBr/B1n/Am7/B1n/B1n/B1n/B1n/B1n/BQ3/Amv/Amv/B1npBGrqAWL/B1r/B1r/Amr4B1pjMFdJLW0zREdf5Qdayw//B1r/B1r/B1r/B1r/BLb/BLb/BLb/B1r/B1r/B1r/Ak3/Ak3/B1r/B1rxAhntC+H4B1pPNEtfam94VnRj9gdayyD/B1r/B1rwAvD/B1v/B1v/B1v/B1v/B1v/B1v/AqX/AqX/AqX/B1v/B1v/B1v/B1v/AqP/AqP/B1v/B1v/B1vEX+0Er/8E8e8CxusO3/8HW/8HW/8HW+8HW2xh9wdaTGH/B1n/Amz/B1n/B1n/B1n/B1n/B1n/B1n/Amn/Amn/B1nqB1nqAWH/B1j/B1j/Amf4B1g3NXJqWms0eVhq5QdYyw//B1j/B1j/B1j/B1j/BLP/BLP/BLP/B1j/B1j/B1j/Akz/Akz/B1j/B1jxAhntEyz4B1hVVmNmUFBQeE5G9gdYyyD/B1j/B1jvAu//B1f/B1f/B1f/B1f/B1f/B1f/AqT/AqT/AqT/B1f/B1f/B1f/B1f/AqL/AqL/B1f/B1f/B1fEX+0Erv8E8O8CxesWKfoCxUJ1dHRvbv4Cx+0CCiMzMTM2NDH/Agb/BvL/BKb/AgH/AgH/BvH/BKX/AgP2AgNz5QO+ImJ05QNSxlZzdWJtacQd5wQGU8UQIOcBcfkHJfECHMkx/wcI/wIYxRF7ImLFTuUCcDoicWhzcHZNSGRVNeUHCcsP/wIxxkH7Bwb3AMb8AujrAq/6BbluY0tuUXd4THhl9gW5yyD/Bbn/Bbn1AbPrBb3kCZj/Bb3/Bb3/Bb3/Bb3/Bb3/Bb3/Bb3/Bb3/A7v/A7v/A7v/Bbz/A7n/A7n/BbzyBbz/BaruAsLrA0D/A5LtArZ9"
      );
      const stateToLoad = formString;
      if (stateToLoad) {
        const json = lz.decompress(lz.decodeBase64(stateToLoad));
        setJson(json);
        actions?.deserialize(json);
      }
    }
  }, [actions, formString, router.pathname]);
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
        <div className="w-[60%] h-[100vh] overflow-y-scroll  scrollbar-hide pb-40 px-16">
          <div className="bg-white p-2 h-auto">
            {/* <form
              onSubmit={(e: any) => {
                alert("wait");
                console.log("formBuilderState", e.target.elements.value);
              }}
            > */}
            <Frame data={json}>
              <Element is={Container} canvas>
                ...
              </Element>
            </Frame>
            {/* <button className="absolute top-5 left-5">Clear</button> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}
