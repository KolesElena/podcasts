import React, { useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import Input from '../../components/Input/Input';
import Podcast from '../../components/Podcast/Podcast';
import { StyledPodcasts } from './PodcastsList.styled';
import { getPodcasts } from '../../api';

interface PodcastData {
  id: {
    attributes: {
      'im:id': number;
    };
  };
  title: {
    label: string;
  };
  'im:artist': {
    label: string;
  };
  'im:image': {
    label: string;
  }[];
}

const PodcastsList: React.FC = () => {
  const { isFetching, data }: UseQueryResult<PodcastData[], unknown> = useQuery(
    'getPodcasts',
    getPodcasts,
  );

  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  const renderPodcast = (podcast: PodcastData) => (
    <Podcast
      key={podcast.id.attributes['im:id']}
      image={podcast['im:image'][2].label}
      title={podcast.title.label}
      artist={podcast['im:artist'].label}
      podcastId={podcast.id.attributes['im:id']}
    />
  );

  const podcastsToShow = !selectedValue ? (
    <StyledPodcasts>
      {data?.map((podcast) => renderPodcast(podcast))}
    </StyledPodcasts>
  ) : (
    <StyledPodcasts>
      {data
        ?.filter((podcast) => podcast.title.label.includes(selectedValue) || podcast['im:artist'].label.includes(selectedValue))
        ?.map((podcast) => renderPodcast(podcast))}
    </StyledPodcasts>
  );

  return (
    <>
      <Input onChange={(e) => setSelectedValue(e.target.value)} />
      {isFetching ? <p>Loading podcasts...</p> : podcastsToShow}
    </>
  );
};

export default PodcastsList;
