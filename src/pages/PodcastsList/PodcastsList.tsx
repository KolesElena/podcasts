import React, { useState, useContext } from 'react';
import Input from '../../components/Input/Input';
import Podcast from '../../components/Podcast/Podcast';
import { StyledPodcasts, StyledCounter } from './PodcastsList.styled';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { Context } from '../../context/Context';
import { PodcastListData } from '../../types';
import {
  FlexBox, Loader, Delimiter,
} from '../../main.styled';

const PodcastsList: React.FC = () => {
  const { data, isFetching } = useContext(Context);

  const [selectedValue, setSelectedValue] = useState('');

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
    <>
      <FlexBox justifycontent="space-between">
        <Breadcrumb />
        {isFetching && <Loader />}
      </FlexBox>
      <Delimiter margin="0 1em" />
      <FlexBox justifycontent="end">
        <StyledCounter>{counter}</StyledCounter>
        <Input onChange={(e) => setSelectedValue((e.target.value).toLowerCase())} />
      </FlexBox>
      {podcastsToShow}
    </>
  );
};

export default PodcastsList;
