import React, { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router';
import { Context } from '../../context/Context';

import PodcastDescription from '../../components/PodcastDescription/PodcastDescription';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { StyledEpisodeDetails } from './EpisodeDetails.styled';
import { getPodcastDetails } from '../../api';

const EpisodeDetails: React.FC = () => {
  const { podcastId } = useParams();
  const { data } = useContext(Context);
  const { isFetching: isFetchingDetails, data: detailsData }: UseQueryResult<any> = useQuery(
    'getPodcastsDetails',
    () => getPodcastDetails(podcastId),
  );

  const summary = data?.find((podcast) => podcast.id.attributes['im:id'] === podcastId)?.summary.label;

  return (
    isFetchingDetails ? <p style={{ textAlign: 'center' }}>Loading Episode... </p> : (
      <>
        <Breadcrumb />
        <StyledEpisodeDetails>
          <PodcastDescription
            title={detailsData?.results?.[0].trackName}
            artist={detailsData?.results?.[0].artistName}
            image={detailsData?.results?.[0].artworkUrl100}
            description={summary}
          />
        </StyledEpisodeDetails>
      </>
    )

  );
};

export default EpisodeDetails;
