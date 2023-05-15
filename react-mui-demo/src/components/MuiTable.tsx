import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDate.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableDate = [
  {
    id: 1,
    first_name: "Nathanael",
    last_name: "Halversen",
    email: "nhalversen0@telegraph.co.uk",
    gender: "Male",
    ip_address: "75.205.151.128",
  },
  {
    id: 2,
    first_name: "Hamlin",
    last_name: "Spira",
    email: "hspira1@spiegel.de",
    gender: "Male",
    ip_address: "187.48.44.99",
  },
  {
    id: 3,
    first_name: "Georges",
    last_name: "Hodjetts",
    email: "ghodjetts2@hibu.com",
    gender: "Male",
    ip_address: "27.138.90.89",
  },
  {
    id: 4,
    first_name: "Madonna",
    last_name: "Hammell",
    email: "mhammell3@uiuc.edu",
    gender: "Polygender",
    ip_address: "163.120.22.127",
  },
  {
    id: 5,
    first_name: "Oliver",
    last_name: "Littrik",
    email: "olittrik4@sphinn.com",
    gender: "Male",
    ip_address: "184.158.67.106",
  },
  {
    id: 6,
    first_name: "Robb",
    last_name: "Caton",
    email: "rcaton5@reference.com",
    gender: "Male",
    ip_address: "48.93.44.247",
  },
  {
    id: 7,
    first_name: "Ros",
    last_name: "Aireton",
    email: "raireton6@marriott.com",
    gender: "Female",
    ip_address: "234.254.80.17",
  },
  {
    id: 8,
    first_name: "Ileane",
    last_name: "Boutflour",
    email: "iboutflour7@liveinternet.ru",
    gender: "Female",
    ip_address: "22.237.199.220",
  },
  {
    id: 9,
    first_name: "Karyn",
    last_name: "Rann",
    email: "krann8@sohu.com",
    gender: "Female",
    ip_address: "245.203.136.187",
  },
  {
    id: 10,
    first_name: "Felicdad",
    last_name: "Gawkes",
    email: "fgawkes9@bizjournals.com",
    gender: "Female",
    ip_address: "255.1.85.185",
  },
];
