import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { convertDate, millisToMinutesAndSeconds } from '../../utils';

interface PodcastProps {
  episodes: {
    trackName: string;
    trackId: number;
    releaseDate: string;
    trackTimeMillis: number;
  }[];
}

const EpisodesTable: React.FC<PodcastProps> = ({
  episodes,
}) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Duration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {episodes?.map((row) => (
          <TableRow
            key={row.trackId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.trackName}
            </TableCell>
            <TableCell>{convertDate(row.releaseDate)}</TableCell>
            <TableCell>{millisToMinutesAndSeconds(row.trackTimeMillis)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default EpisodesTable;
