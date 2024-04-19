import React, { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router';
import { Context } from '../../context/Context';

import PodcastDescription from '../../components/PodcastDescription/PodcastDescription';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { StyledEpisodeDetails } from './EpisodeDetails.styled';
import { getPodcastDetails } from '../../api';
import EpisodeDescription from '../../components/EpisodeDescription/EpisodeDescription';
import { FlexBox, Loader } from '../../main.styled';

const EpisodeDetails: React.FC = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();
  const { data } = useContext(Context);
  const { isFetching: isFetchingDetails, data: episodesData }: UseQueryResult<any> = useQuery(
    'getEpisodeDetails',
    () => getPodcastDetails(podcastId),
  );

  const getEpisodeId = Number(episodeId);

  const summary = data?.find((podcast) => podcast.id.attributes['im:id'] === podcastId)?.summary.label;
  const episode = episodesData?.results
    ?.find((element: any) => element.trackId === getEpisodeId);

  return (
    <>
      <FlexBox justifycontent="space-between">
        <Breadcrumb />
        {isFetchingDetails && <Loader />}
      </FlexBox>
      <hr style={{ margin: ' 0px 30px' }} />
      {!isFetchingDetails && (
        <StyledEpisodeDetails>
          <PodcastDescription
            title={episodesData?.results?.[0].trackName}
            artist={episodesData?.results?.[0].artistName}
            image={episodesData?.results?.[0].artworkUrl100}
            description={summary}
          />
          <EpisodeDescription
            title={episode?.trackName}
            description={episode?.description}
            url={episode.episodeUrl}
          />
        </StyledEpisodeDetails>
      )}
    </>
  );
};

export default EpisodeDetails;
