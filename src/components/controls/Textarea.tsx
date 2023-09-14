import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea(props: ITextInputProps) {
  const {} = props;
  return (
    <div className="flex p-2 border-gray-200 border-2 bg-white rounded-lg">
      <textarea
        {...props}
        rows={4}
        className="text-FontGray w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
      />
    </div>
  );
}
