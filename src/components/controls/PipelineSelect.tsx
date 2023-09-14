import { useState, createRef, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/APIConstants";
import { IPipeline, IStage } from "../Leads/Interfaces";
import { useAuthentication } from "@/controllers/auth";

interface IPipelineSelectProps {
  pipeline: any;
  setPipeline: (pipeline: any) => void;
  className: string;
}

export default function PipelineSelect({
  pipeline,
  setPipeline,
  className,
}: IPipelineSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const { location, token }: any = useAuthentication();
  const inputRef = createRef<HTMLInputElement>();

  const [pipelineList, setPipelineList] = useState<IPipeline[]>([]);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const getPipelineList = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}pipelines/location/${location?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPipelineList(res.data.pipelines);
        if (res.data.pipelines.length > 0 && pipeline.id === "") {
          setPipeline({
            ...res.data.pipelines[0].stages[0],
            pipelineID: res.data.pipelines[0].id,
          });
          setTextValue(res.data.pipelines[0].stages[0].name);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPipelineList();
  }, []);

  const addPipeline = (stage: IStage) => {
    setPipeline(stage);
    setTextValue(stage.name);
    setIsListBoxActive(false);
  };

  return (
    <div>
      <select
        className={`flex flex-wrap ${className}`}
        onChange={(e) => {
          for (let i = 0; i < pipelineList.length; i++) {
            for (let j = 0; j < pipelineList[i].stages.length; j++) {
              if (pipelineList[i].stages[j].id === e.target.value) {
                setPipeline({
                  ...pipelineList[i].stages[j],
                  pipelineID: pipelineList[i].id,
                });
              }
            }
          }
        }}
        value={pipeline.id}
      >
        {pipelineList.map((pipeline: IPipeline) => {
          return pipeline.stages.map((stage: IStage) => {
            return (
              <option key={stage.id} value={stage.id}>
                {stage.name + " - " + pipeline.name}
              </option>
            );
          });
        })}
      </select>
    </div>
  );
}
