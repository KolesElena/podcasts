import React, { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

import PodcastDescription from '../../components/PodcastDescription/PodcastDescription';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable';
import { getPodcastDetails } from '../../api';
import { StyledPodcastDetails } from './PodcastDetails.styled';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { FlexBox, Loader, Delimiter } from '../../main.styled';
import { Episodes } from '../../types';

const PodcastsDetails: React.FC = () => {
  const { podcastId } = useParams();
  const { data } = useContext(Context);
  const { isFetching: isFetchingDetails, data: detailsData }:
  UseQueryResult<Episodes> = useQuery(
    'getPodcastsDetails',
    () => getPodcastDetails(podcastId),
  );

  const podcastData = data?.find((podcast) => podcast.id.attributes['im:id'] === podcastId);

  return (
    <>
      <FlexBox justifycontent="space-between">
        <Breadcrumb />
        {isFetchingDetails && <Loader data-testid="loader" />}
      </FlexBox>
      <Delimiter margin="0 1em" />
      {!isFetchingDetails && (
        <StyledPodcastDetails>
          <PodcastDescription
            title={podcastData?.title.label}
            artist={podcastData?.['im:artist'].label}
            image={podcastData?.['im:image'][2].label}
            description={podcastData?.summary.label}
          />
          {detailsData && (
            <EpisodesTable
              episodes={detailsData}
              podcastId={podcastId}
            />
          )}
        </StyledPodcastDetails>
      )}
    </>
  );
};

export default PodcastsDetails;
