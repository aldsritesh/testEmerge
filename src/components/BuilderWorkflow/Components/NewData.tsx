import React, { useContext, useState } from "react";
import { BuilderContext, NodeContext, useDrawer } from "react-flow-builder";
import { Form, Button, Input } from "antd";

const ConfigForm: React.FC = () => {
  const { selectedNode: node }: any = useContext(BuilderContext);
  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const [selectedData, setSelectedData] = useState<any>("");
  const [otherData, setOtherData] = useState<any>("bye");

  const handleSubmit = async () => {
    try {
      const values = { name: selectedData, other: otherData };

      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();

      save?.(values, !!error);
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     const values = await form.validateFields();
  //         values = { ...values, lid: leadId };

  //     console.log(values, selectedData);

  //     // Update the node's data property with the selectedData
  //     node.data = { name: selectedData };

  //     save?.(values);
  //   } catch (error) {
  //     const values = form.getFieldsValue();
  //     console.log("okay", values);

  //     // Update the node's data property with the selectedData
  //     node.data = { name: selectedData };

  //     save?.(values, !!error);
  //   }
  // };

  return (
    <div>
      <Form form={form}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>

      <div className="flex justify-end items-end">
        <button
          onClick={cancel}
          className="text-xs md:text-sm mx-3  text-dark border-[1px] border-FontGray px-5 py-2 rounded-md"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="mr-3 text-xs md:text-sm text-gray-300 font-medium bg-secondary px-5 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ConfigForm;
