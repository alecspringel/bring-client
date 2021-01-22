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
import IconButton from "@material-ui/core/IconButton";
import { TableHead, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import styled from "styled-components";
import InviteButton from "./InviteButton";
import TablePaginationActions from "../general/table/TablePaginationActions";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  head: {
    backgroundColor: "#f1f1f1",
  },
});

function createData(users) {
  var rows = [];
  users.forEach((user, index) => {
    rows.push({
      name: user.first ? user.first + " " + user.last : "Invited",
      email: user.email,
      role: user.isAdmin ? "Admin" : "User",
    });
  });
  return rows;
}

export default function UserTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/all";
    axios
      .get(url + endpoint)
      .then((users) => {
        setData(createData(users.data));
      })
      .catch((err) => {
        // Handle error
      });
  }, []);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteUser = (email, index) => {
    const url = process.env.REACT_APP_SERVER_URL;
    const endpoint = "/api/user/remove";
    axios
      .post(url + endpoint, { email })
      .then((users) => {
        spliceUser(index);
      })
      .catch((err) => {
        // Handle error
      });
  };

  const spliceUser = (index) => {
    var dataCopy = data;
    dataCopy.splice(index, 1);
    setData([...dataCopy]);
  };

  return (
    <Wrapper>
      <TableHeader className="flex-row">
        <h2>Users</h2>
        <InviteButton data={data} setData={setData} />
      </TableHeader>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="center">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row, index) => (
              <TableRow key={row.email}>
                <TableCell align="center" style={{ width: 50 }}>
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteUser(row.email, index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "33%", minWidth: 250 }}
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ width: "33%", minWidth: 250 }} align="left">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: 150 }} align="center">
                  {row.role}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={setPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const TableHeader = styled.div`
  padding: 16px;
`;
