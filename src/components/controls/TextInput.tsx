import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  lefticon?: ReactNode;
  isTextArea?: boolean;
  defaultRows?: number;
}

export default function TextInput(props: ITextInputProps) {
  const { lefticon, isTextArea = false, value, defaultRows = 5 } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex ${
        !isTextArea && "items-center"
      } shadow px-2 py-2 border-gray-200 border-[1px]  rounded-md ${
        isActive ? "bg-white outline-[1px] outline-blue-400" : "bg-white"
      }`}
    >
      {lefticon}
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
    </div>
  );
}
