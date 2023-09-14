import React from "react";
import WorkflowData from "@/components/BuilderWorkflow/WorkflowData";
import { useRouter } from "next/router";

export default function NewWorkflow() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <WorkflowData id={id} />
    </>
  );
}
