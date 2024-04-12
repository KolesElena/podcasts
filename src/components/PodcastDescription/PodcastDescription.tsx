import React from 'react';
import { StyledPodcastDescription, StyledImage, StyledText } from './PodcastDescription.styled';

interface PodcastProps {
  title: string;
  artist: string;
  image: string;
}

const PodcastDescription: React.FC<PodcastProps> = ({
  title, artist, image,
}) => (
  <StyledPodcastDescription>
    <StyledImage><img src={image} style={{ borderRadius: '5%', display: 'block', margin: 'auto' }} alt={image} /></StyledImage>
    <StyledText>
      <div style={{ marginBottom: '10px' }}>{title}</div>
      <div>
        by
        {' '}
        {artist}
      </div>
    </StyledText>
  </StyledPodcastDescription>
);

export default PodcastDescription;
