import React from "react";

interface Props {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, pageSize, totalCount, onPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <nav aria-label="Pagination" style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
      <button onClick={() => onPageChange(1)} disabled={!canPrev} aria-label="First page">
        {"<<"}
      </button>
      <button onClick={() => onPageChange(page - 1)} disabled={!canPrev} aria-label="Previous page">
        {"<"}
      </button>

      <span>Page {page} of {totalPages}</span>

      <button onClick={() => onPageChange(page + 1)} disabled={!canNext} aria-label="Next page">
        {">"}
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={!canNext} aria-label="Last page">
        {">>"}
      </button>
    </nav>
  );
};
