
export function Pill({ value, onClick, showRemoveButton, textColor, bgColor }: any) {
    return (
        <div onClick={onClick} className={`flex justify-center items-center cursor-pointer px-2.5 py-1 m-1 mx-2 uppercase font-bold text-[10px] rounded-full shadow-sm bg-${bgColor} text-${textColor} whitespace-nowrap`}
            key={value}>
            {value}
            {showRemoveButton && <span className="ml-2">x</span>}
        </div>
    );
};