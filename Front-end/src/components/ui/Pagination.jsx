export default function Pagination({ pagination, setPagination }) {
  const { page, limit, total } = pagination;
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    if (page > 1) {
      setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  return (
    <div className="flex gap-4 items-center mt-4 text-[#D3CBD1]">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 bg-[#FFEC78] text-[#130F40] rounded disabled:opacity-50"
      >
        Prev
      </button>
      <p>
        Page {page} of {totalPages}
      </p>
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 bg-[#FFEC78] text-[#130F40] rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
