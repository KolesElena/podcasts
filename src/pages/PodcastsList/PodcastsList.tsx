import React, { useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import Input from '../../components/Input/Input';
import Podcast from '../../components/Podcast/Podcast';
import { StyledPodcasts, StyledCounter } from './PodcastsList.styled';
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

  const [selectedValue, setSelectedValue] = useState<any>();

  const renderPodcast = (podcast: PodcastData) => (
    <Podcast
      key={podcast.id.attributes['im:id']}
      image={podcast['im:image'][2].label}
      title={podcast.title.label}
      artist={podcast['im:artist'].label}
      podcastId={podcast.id.attributes['im:id']}
    />
  );

  const filteredPodcasts = data
    ?.filter((podcast: PodcastData) => podcast.title.label.includes(selectedValue) || podcast['im:artist'].label.includes(selectedValue));

  const counter = !selectedValue ? data?.length : filteredPodcasts?.length;

  const podcastsToShow = !selectedValue ? (
    <StyledPodcasts>
      {data?.map((podcast) => renderPodcast(podcast))}
    </StyledPodcasts>
  ) : (
    <StyledPodcasts>
      {filteredPodcasts
        ?.map((podcast) => renderPodcast(podcast))}
    </StyledPodcasts>
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end', margin: '30px' }}>
        <StyledCounter>{counter}</StyledCounter>
        <Input onChange={(e) => setSelectedValue(e.target.value)} />
      </div>
      {isFetching ? <p>Loading podcasts...</p> : podcastsToShow}
    </>
  );
};

export default PodcastsList;
