import { InputHTMLAttributes, ReactNode, useState } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  righticon?: ReactNode;
  isTextArea?: boolean;
  defaultRows?: number;
  bg?: string;
}

export default function TextInput(props: ITextInputProps) {
  const {
    righticon,
    isTextArea = false,
    value,
    defaultRows = 5,
    bg = "#ffffff",
  } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex ${
        !isTextArea && "items-center"
      } px-2 py-2  border border-gray-300  rounded-md ${
        isActive ? "outline-[1px] outline-blue-400" : ""
      }`}
      style={{
        backgroundColor: bg,
      }}
    >
      {!isTextArea ? (
        <input
          {...props}
          className="w-full bg-transparent focus:outline-none outline-none border-none pl-2 font-fontSource font-medium text-sm"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      ) : (
        // @ts-ignore
        <textarea
          {...props}
          rows={defaultRows}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className="w-full bg-transparent  focus:outline-none outline-none border-none pl-2 font-fontSource font-medium text-sm"
        ></textarea>
      )}
      {righticon}
    </div>
  );
}
