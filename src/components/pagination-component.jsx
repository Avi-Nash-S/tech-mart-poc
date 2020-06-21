import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationComponent({ pageAttributes, pageChange }) {
  return (
    <div className="footer-pagination">
      <Pagination
        count={Math.round(
          parseInt(pageAttributes.totalProducts || 60) / pageAttributes.pageSize
        )}
        variant="outlined"
        shape="rounded"
        onChange={pageChange}
        page={pageAttributes.pageNumber}
      />
    </div>
  );
}
