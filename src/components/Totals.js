import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, newFeedbacks, totalProfit, newOrders, brandPopularity) {
  return { id, newFeedbacks, totalProfit, newOrders, brandPopularity };
}

const rows = [createData(0, "597"), createData(1, "16.6M$"), createData(2, "7.5K"), createData(3, "+48%")];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 style={{ color: "black" }}>
        Totals <span style={{ fontSize: "12px", color: "grey" }}>Last week</span>
      </h2>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ border: "none", borderRight: " 1px solid lightgrey", color: "black", fontSize: "30px", textAlign: "center" }}
            >
              597
            </TableCell>
            <TableCell
              style={{ border: "none", borderRight: " 1px solid lightgrey", color: "black", fontSize: "30px", textAlign: "center" }}
            >
              16.6M$
            </TableCell>
            <TableCell
              style={{ border: "none", borderRight: " 1px solid lightgrey", color: "black", fontSize: "30px", textAlign: "center" }}
            >
              7.5K
            </TableCell>
            <TableCell style={{ border: "none", color: "black", fontSize: "30px", textAlign: "center" }}>+48%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: "none", textAlign: "center" }}>New Feedbacks</TableCell>
            <TableCell style={{ border: "none", textAlign: "center" }}>Total Profit</TableCell>
            <TableCell style={{ border: "none", textAlign: "center" }}>New Orders</TableCell>
            <TableCell style={{ border: "none", textAlign: "center" }}>Brand Popularity</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </React.Fragment>
  );
}
