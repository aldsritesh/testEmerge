import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const CustomPagination = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  nextPage,
  prevPage,
}: any) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  const handlePrevButtonClick = () => {
    onChangePage(page - 1);
    prevPage();
  };

  const handleNextButtonClick = () => {
    onChangePage(page + 1);
    nextPage();
  };

  const renderPageButton = (pageNumber: number) => (
    <button
      key={pageNumber}
      className={`cursor-pointer w-7 h-8 py-1 ${
        pageNumber === page + 1
          ? "text-red-500 border px-2 py-1 bg-gray-50 rounded-md"
          : ""
      }`}
      onClick={() => onChangePage(pageNumber - 1)}
    >
      {pageNumber}
    </button>
  );

  return (
    <div className="w-full flex justify-end items-end my-1">
      <div className="flex items-center gap-1 w-70 py-1 h-10 text-[#545254] font-semibold">
        <button
          onClick={handlePrevButtonClick}
          disabled={page === 0}
          className={`flex items-center px-3 ${
            page === 0 ? "text-[#ccc1c2] cursor-not-allowed" : ""
          }`}
        >
          <KeyboardArrowLeft /> Prev
        </button>
        <div className="flex justify-between items-center gap-2">
          {renderPageButton(1)}
          {totalPages > 2 && page > 1 && <p className="py-1">...</p>}
          {page === 0 || page === totalPages - 1
            ? null
            : renderPageButton(page + 1)}
          {page < totalPages - 2 && <p className="py-1">...</p>}
          {totalPages > 1 && renderPageButton(totalPages)}
        </div>
        <button
          onClick={handleNextButtonClick}
          disabled={(page + 1) * rowsPerPage >= count}
          className={`flex items-center px-3 ${
            page === totalPages - 1 ? "text-gray-300 cursor-not-allowed" : ""
          }`}
        >
          Next <KeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
