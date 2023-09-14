const makeData = [
  {
    id: "workflow_name", //id is still required when using accessorFn instead of accessorKey
    header: "WORKFLOW NAME",
    size: 200,
    Cell: ({ row }: any) => (
      <div className=" ">
        <p className="font-semibold text-gray-800  text-base">
          {row.original.workflow_name}
        </p>
      </div>
    ),
    enableColumnFilter: true, // could disable just this column's filter
  },
  {
    enableColumnFilter: true, // could disable just this column's filter
    id: "status", //id is still required when using accessorFn instead of accessorKey
    header: "Status",
    size: 150,
    Cell: ({ row }: any) => (
      <button
        className={` ${
          row.original.status == "Inactive"
            ? " border-secondary bg-red-100"
            : row.original.status == "Active"
            ? " border-green-500 bg-green-100"
            : " border-gray-300 bg-gray-100"
        }
                      flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
      >
        <div
          className={`${
            row.original.status == "Inactive"
              ? " bg-secondary"
              : row.original.status == "Active"
              ? " bg-green-500"
              : " bg-gray-500"
          }
        
                      h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
        ></div>
        <span
          className={`${
            row.original.status == "Inactive"
              ? " text-secondary"
              : row.original.status == "Active"
              ? " text-green-500"
              : " text-gray-600"
          }  pr-3  `}
        >
          {" "}
          {row.original.status}
        </span>
      </button>
    ),
  },
  {
    id: "modules", //id is still required when using accessorFn instead of accessorKey
    header: "Modules",
    size: 150,
    Cell: ({ row }: any) => (
      <p className="font-semibold text-gray-800  text-sm">
        {row.original.modules}
      </p>
    ),
    enableColumnFilter: true, // could disable just this column's filter
  },
  {
    id: "total_enrolled", //id is still required when using accessorFn instead of accessorKey
    header: "Total Enrolled",
    size: 150,
    Cell: ({ row }: any) => (
      <p className="font-semibold text-gray-800  text-sm">
        {row.original.total_enrolled}
      </p>
    ),
    enableColumnFilter: true, // could disable just this column's filter
  },
  {
    id: "active_enrolled", //id is still required when using accessorFn instead of accessorKey
    header: "Active Enrolled",
    size: 150,
    Cell: ({ row }: any) => (
      <p className="font-semibold text-gray-800  text-sm">
        {row.original.active_enrolled}
      </p>
    ),
    enableColumnFilter: true, // could disable just this column's filter
  },
  {
    id: "last_activity", //id is still required when using accessorFn instead of accessorKey
    header: "Last Activity",
    size: 150,
    Cell: ({ row }: any) => (
      <div>
        <p className="font-semibold text-gray-800 text-sm">
          {row.original.last_activity.dateTime}
        </p>
        <p className=" text-gray-600 text-xs">
          {row.original.last_activity.by_user}
        </p>
      </div>
    ),
    enableColumnFilter: true, // could disable just this column's filter
  },
];

export default makeData;
