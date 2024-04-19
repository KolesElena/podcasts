import React, { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router';
import { Context } from '../../context/Context';

import PodcastDescription from '../../components/PodcastDescription/PodcastDescription';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable';
import { getPodcastDetails } from '../../api';
import { StyledPodcastDetails } from './PodcastDetails.styled';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { FlexBox, Loader } from '../../main.styled';

const PodcastsDetails: React.FC = () => {
  const { podcastId } = useParams();
  const { data } = useContext(Context);
  const { isFetching: isFetchingDetails, data: detailsData }: UseQueryResult<any> = useQuery(
    'getPodcastsDetails',
    () => getPodcastDetails(podcastId),
  );

  console.log(detailsData);

  const summary = data?.find((podcast) => podcast.id.attributes['im:id'] === podcastId)?.summary.label;

  return (
    <>
      <FlexBox justifyContent="space-between">
        <Breadcrumb />
        {isFetchingDetails && <Loader />}
      </FlexBox>
      <hr style={{ margin: ' 0px 30px' }} />
      {!isFetchingDetails && (
        <StyledPodcastDetails>
          <PodcastDescription
            title={detailsData?.results?.[0].trackName}
            artist={detailsData?.results?.[0].artistName}
            image={detailsData?.results?.[0].artworkUrl100}
            description={summary}
          />
          <EpisodesTable
            episodes={detailsData?.results}
            counter={Number(detailsData?.resultCount) - 1}
            podcastId={podcastId}
          />
        </StyledPodcastDetails>
      )}
    </>
  );
};

export default PodcastsDetails;
