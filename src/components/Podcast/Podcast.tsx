import React from 'react';
import { StyledPodcast } from './Podcast.styled';

interface PodcastProps {
  title: string;
  artist: string;
}

const Podcast: React.FC<PodcastProps> = ({ title, artist }) => (
  <StyledPodcast>
    <div>{title}</div>
    <div>
      Artist:
      {' '}
      {artist}
    </div>
  </StyledPodcast>
);

export default Podcast;
