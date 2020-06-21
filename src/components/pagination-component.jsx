import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={pageAttributes.pageSize}
        defaultValue={8}
        onChange={(event) => pageChange(event, null, event.target.value)}
      >
        <MenuItem value={6}> 6/page </MenuItem>
        <MenuItem value={8}> 8/page </MenuItem>
        <MenuItem value={12}> 12/page </MenuItem>
      </Select>
    </div>
  );
}
