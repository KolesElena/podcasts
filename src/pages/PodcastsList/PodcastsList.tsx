import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import Podcast from '../../components/Podcast/Podcast';
import { StyledPodcasts } from './PodcastsList.styled';
import { getPodcasts } from '../../api';

interface PodcastData {
  id: {
    attributes: {
      'im:id': string;
    }
  }
  title: {
    label: string;
  };
  'im:artist': {
    label: string;
  };
}

const PodcastsList: React.FC = () => {
  const { isFetching, data }: UseQueryResult<PodcastData[], unknown> = useQuery(
    'getPodcasts',
    getPodcasts,
  );

  return (
    <>
      {isFetching ? (
        <p>Loading podcasts...</p>
      ) : (
        <StyledPodcasts>
          {data?.map((podcast: PodcastData) => (
            <Podcast
              key={podcast.id.attributes['im:id']}
              title={podcast.title.label}
              artist={podcast['im:artist'].label}
            />
          ))}
        </StyledPodcasts>
      )}
    </>
  );
};

export default PodcastsList;
