import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { convertDate, millisToMinutesAndSeconds } from '../../utils';
import { StyledEpisodesCounter } from './EpisodesTable.styled';
import { EpisodeData } from '../../types';

const EpisodesTable: React.FC<EpisodeData> = ({
  episodes, podcastId,
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledEpisodesCounter style={{ width: '100%' }}>
        <span style={{ paddingLeft: '15px' }}>Episodes:</span>
        {' '}
        {Number(episodes?.resultCount) - 1}
      </StyledEpisodesCounter>
      <TableContainer component={Paper} style={{ display: 'block', width: '100%' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Title</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes?.results?.slice(1)?.map((row) => (
              <TableRow
                key={row.trackId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" style={{ color: '#1560BD', cursor: 'pointer' }} scope="row" onClick={() => navigate(`/podcast/${podcastId}/episode/${row.trackId}`)}>
                  {row.trackName}
                </TableCell>
                <TableCell>{convertDate(row.releaseDate)}</TableCell>
                <TableCell>{millisToMinutesAndSeconds(row.trackTimeMillis)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EpisodesTable;
