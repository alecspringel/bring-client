import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableHead, Tooltip } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";
import TablePaginationActions from "../general/table/TablePaginationActions";
import DropdownRow from "./DropdownRow";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const DonationHistory = () => {
  const classes = useStyles();
  const [donations, setDonations] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/donations/resolved";
    axios
      .get(url + endpoint)
      .then((res) => {
        console.log(res);
        setDonations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="content container margin-t20">
      <h2 className="margin-b20">Donation History</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Confirmation #</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell align="center">Response</TableCell>
              <TableCell align="center">Photos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.map((row, index) => (
              <DropdownRow row={row} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={donations.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DonationHistory;
