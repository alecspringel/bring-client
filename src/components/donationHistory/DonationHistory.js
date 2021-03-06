import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableHead } from "@material-ui/core";
import axios from "axios";
import TablePaginationActions from "../general/table/TablePaginationActions";
import DropdownRow from "./DropdownRow";
import SelectorTextInput from "../general/SelectorTextInput";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  head: {
    backgroundColor: "#f1f1f1",
  },
});

const DonationHistory = () => {
  const classes = useStyles();
  const [donations, setDonations] = useState({ data: [], count: 0 });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = useState({
    typingTimeout: 0,
    search: "",
    field: "_id",
    lastSearch: "", // The last search text that was queried
  });

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchCategory = (option) => {
    setSearch({
      ...search,
      field: option.value,
    });
  };

  const handleSearch = (e) => {
    if (search.typingTimeout) {
      clearTimeout(search.typingTimeout);
    }

    setSearch({
      ...search,
      typingTimeout: setTimeout(function () {
        setSearch({
          ...search,
          search: e.target.value,
        });
      }, 1000),
    });
  };

  useEffect(() => {
    var params = { skip: page * rowsPerPage, limit: rowsPerPage };
    // If a search is in place, send search
    if (search.search !== "") {
      params.search = search.search;
      params.searchField = search.field;
    }
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/resolved";
    axios
      .get(url + endpoint, {
        params,
      })
      .then((res) => {
        // If the user is not on first page and searches,
        // user should be returned to first page
        if (search.search !== search.lastSearch) {
          setPage(0);
        }
        setSearch({ ...search, lastSearch: search.search });
        setDonations({ data: res.data.data, count: res.data.count });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, search.search, search.field]);

  return (
    <div className="content container margin-t20">
      <div className="flex-row" style={{ flexWrap: "wrap" }}>
        <h2
          className="margin-b20 flex-1"
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          Donation History
        </h2>
        <div style={{ width: 350 }}>
          <SelectorTextInput
            selectorWidth="350px"
            placeholder="Search"
            options={[
              { label: "Confirmation #", value: "_id" },
              { label: "First Name", value: "first" },
              { label: "Last Name", value: "last" },
              { label: "Item", value: "itemName" },
            ]}
            onTextChange={handleSearch}
            onSelectorChange={handleSearchCategory}
          />
        </div>
      </div>
      <div style={{ marginBottom: 40, marginTop: 20 }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableHead>
              <TableRow className={classes.head}>
                <TableCell></TableCell>
                <TableCell>Confirmation #</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell align="center">Response</TableCell>
                <TableCell align="center">Photos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donations &&
                donations.data.map((row) => (
                  <DropdownRow row={row} key={row._id} />
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  colSpan={3}
                  count={donations && donations.count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                  onChangePage={setPage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  style={{ overflow: "visible" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DonationHistory;
