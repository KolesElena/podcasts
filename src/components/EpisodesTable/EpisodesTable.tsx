import React from 'react';
import { useNavigate } from 'react-router-dom';
import { convertDate, millisToMinutesAndSeconds } from '../../utils';
import { FlexBox } from '../../main.styled';
import {
  StyledEpisodesCounter, StyledTable, StyledHead, StyledRow, StyledCell, TextPadding,
} from './EpisodesTable.styled';
import { EpisodeData } from '../../types';

const EpisodesTable: React.FC<EpisodeData> = ({
  episodes, podcastId,
}) => {
  const navigate = useNavigate();

  const headList = [
    {
      id: 1,
      title: 'Title',
    },
    {
      id: 2,
      title: 'Date',
    },
    {
      id: 3,
      title: 'Duration',
    }];

  return (
    <FlexBox flexdirection="column">
      <StyledEpisodesCounter>
        <TextPadding>Episodes:</TextPadding>
        {' '}
        {Number(episodes?.resultCount) - 1}
      </StyledEpisodesCounter>
      <StyledTable>
        <thead>
          <StyledRow>
            {headList.map(({ id, title }) => (<StyledHead key={id}>{title}</StyledHead>))}
          </StyledRow>
        </thead>
        <tbody>
          {episodes?.results?.slice(1)?.map((row) => (
            <StyledRow
              key={row.trackId}
            >
              <StyledCell onClick={() => navigate(`/podcast/${podcastId}/episode/${row.trackId}`)}>
                {row.trackName}
              </StyledCell>
              <StyledCell>{convertDate(row.releaseDate)}</StyledCell>
              <StyledCell>{millisToMinutesAndSeconds(row.trackTimeMillis)}</StyledCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </FlexBox>
  );
};

export default EpisodesTable;
