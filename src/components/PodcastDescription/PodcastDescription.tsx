import React from 'react';
import {
  StyledPodcastDescription, StyledImage, StyledTitle, StyledAuthor,
} from './PodcastDescription.styled';

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
    <StyledTitle>{title}</StyledTitle>
    <StyledAuthor>
      by
      {' '}
      {artist}
    </StyledAuthor>
  </StyledPodcastDescription>
);

export default PodcastDescription;
