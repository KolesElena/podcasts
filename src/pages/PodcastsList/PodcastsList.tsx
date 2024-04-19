import React, { useState, useContext } from 'react';
import Input from '../../components/Input/Input';
import Podcast from '../../components/Podcast/Podcast';
import { StyledPodcasts, StyledCounter } from './PodcastsList.styled';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { Context } from '../../context/Context';
import { PodcastListData } from '../../types';

const PodcastsList: React.FC = () => {
  const { data, isFetching } = useContext(Context);

  const [selectedValue, setSelectedValue] = useState<any>();

  const renderPodcast = (podcast: PodcastListData) => (
    <Podcast
      key={podcast.id.attributes['im:id']}
      image={podcast['im:image'][2].label}
      title={podcast.title.label}
      artist={podcast['im:artist'].label}
      podcastId={podcast.id.attributes['im:id']}
    />
  );

  const searchValue = (text: string) => text.toLowerCase().includes(selectedValue);

  const filteredPodcasts = data
    ?.filter((podcast: PodcastListData) => searchValue(podcast.title.label) || searchValue(podcast['im:artist'].label));

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
    isFetching ? <p style={{ textAlign: 'center' }}>Loading podcasts...</p>
      : (
        <>
          <Breadcrumb />
          <div style={{
            display: 'flex', justifyContent: 'end', margin: '30px', alignItems: 'center',
          }}
          >
            <StyledCounter>{counter}</StyledCounter>
            <Input onChange={(e) => setSelectedValue((e.target.value).toLowerCase())} />
          </div>
          {podcastsToShow}
        </>
      )
  );
};

export default PodcastsList;
