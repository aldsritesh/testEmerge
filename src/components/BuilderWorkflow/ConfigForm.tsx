import React, { useContext } from "react";
import { BuilderContext, useDrawer } from "react-flow-builder";
import { Form, Button, Input } from "antd";

const ConfigForm: React.FC = () => {
  const { selectedNode: node }: any = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-start h-[85vh] overflow-y-scroll scrollbar-hide">
        <div className="w-full">
          <Form form={form} initialValues={node.data || { name: node.name }}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>
        </div>

        <div className="flex justify-end items-end  py-2   w-full">
          <button
            onClick={cancel}
            className="border-2 mr-5 border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-OrangeBuilder rounded-md flex justify-center items-center px-8 py-2 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
