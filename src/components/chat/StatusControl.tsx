export default function StatusControl({
  active,
}: {
  active: 1 | 2 | 3 | 4 | 5;
}) {
  return (
    <ul className="w-full flex gap-[2px] mt-2">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <li
          key={index}
          className={`w-[20%] ${
            active >= index + 1 ? "bg-newBlue text-white" : "bg-gray-100"
          } items-center justify-center  flex ${
            index === 0 && "rounded-l-2xl"
          } ${index === 4 && "rounded-r-2xl"} `}
        >
          <p className="text-sm p-1 font-medium">{index + 1}</p>
        </li>
      ))}
    </ul>
  );
}
