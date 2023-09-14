import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface IDropDownProps {
  btnTitle: string;
  items: any;
  shadowAndRadius: boolean;
}
export default function DropDown({
  btnTitle,
  items,
  shadowAndRadius,
}: IDropDownProps) {
  return (
    <div className="dropdown flex">
      <label
        tabIndex={0}
        className={`bg-white text-sm text-tertiary font-fontSource flex items-center ${
          shadowAndRadius && "shadow-md rounded-lg px-6 py-3 "
        }`}
      >
        {btnTitle}
        <ChevronDownIcon className="w-4 h-4 ml-2 text-tertiary" />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 bg-white shadow rounded-box w-52 z-50 mt-12"
      >
        {items.map((item: any, index: number) => (
          <li key={index}>
            <a className="text-tertiary">{item.item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
