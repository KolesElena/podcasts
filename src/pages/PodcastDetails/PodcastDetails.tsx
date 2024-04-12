import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router';

import PodcastDescription from '../../components/PodcastDescription/PodcastDescription';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable';
import { getPodcastDetails } from '../../api';
import { StyledPodcastDetails } from './PodcastDetails.styled';

const PodcastsDetails: React.FC = () => {
  const { podcastId } = useParams();
  const { isFetching, data }: UseQueryResult<any> = useQuery(
    'getPodcasts',
    () => getPodcastDetails(Number(podcastId)),
  );

  return (
    isFetching ? <p>Loading Episodes... </p> : (
      <StyledPodcastDetails>
        <PodcastDescription
          title={data?.results?.[0].trackName}
          artist={data?.results?.[0].artistName}
          image={data?.results?.[0].artworkUrl100}
        />
        <EpisodesTable episodes={data?.results} />
      </StyledPodcastDetails>
    )
  );
};

export default PodcastsDetails;
