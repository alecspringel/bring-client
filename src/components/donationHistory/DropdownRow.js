import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TableBody from "@material-ui/core/TableBody";
import Collapse from "@material-ui/core/Collapse";
import ViewIcon from "@material-ui/icons/Visibility";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";
import ImageFocus from "../general/ImageFocus";

const DropdownRow = ({ row }) => {
  const [isOpen, toggleOpen] = useState(false);
  const [viewImages, toggleImages] = useState(false);
  return (
    <>
      {viewImages && (
        <ImageFocus images={row.imageUrls} close={() => toggleImages(false)} />
      )}
      <TableRow key={row.email}>
        <TableCell style={{ minWidth: 30, width: "5%" }}>
          <Tooltip title={isOpen ? "Less" : "More"}>
            <IconButton
              aria-label="More info"
              onClick={() => toggleOpen(!isOpen)}
            >
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell style={{ minWidth: 140, width: "15%" }}>{row._id}</TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{ width: "25%", minWidth: 200 }}
        >
          {row.first + " " + row.last}
        </TableCell>
        <TableCell style={{ width: "25%", minWidth: 200 }} align="left">
          {row.itemName}
        </TableCell>
        <TableCell style={{ width: 100 }} align="center">
          {row.responseType}
        </TableCell>
        <TableCell align="center" style={{ width: 50 }}>
          <Tooltip title="View">
            <IconButton aria-label="view" onClick={() => toggleImages(true)}>
              <ViewIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <p className="p-large text-bold">Description</p>
              <Typography variant="p" gutterBottom component="div">
                {row.description}
              </Typography>
              <p className="p-large text-bold">Response</p>
              <Typography variant="p" gutterBottom component="div">
                {row.responseMessage}
              </Typography>
              <Table size="small" aria-label="info">
                <TableRow>
                  <TableCell>Submitted Date</TableCell>
                  <TableCell>Staff Responder</TableCell>
                  <TableCell>Response Date</TableCell>
                </TableRow>
                <TableBody>
                  <TableRow key={row._id + "_dropdown"}>
                    <TableCell component="th" scope="row">
                      {new Date(row.createdDate).toDateString()}
                    </TableCell>
                    <TableCell>{row.staffResponder.name}</TableCell>
                    <TableCell>
                      {new Date(row.respondedDate).toDateString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DropdownRow;
