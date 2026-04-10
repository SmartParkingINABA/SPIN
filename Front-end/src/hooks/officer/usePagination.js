import { useState } from "react";

export const usePagination = (initial = {}) => {
  const [pagination, setPagination] = useState({
    page: initial.page || 1,
    limit: initial.limit || 10,
    total: initial.total || 0,
  });

  return {
    pagination,
    setPagination,
  };
};
