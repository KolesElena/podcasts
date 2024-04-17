import React from 'react';
import {
  StyledPodcastDescription, StyledImage, StyledText, StyledAuthor, StyledDescription,
} from './PodcastDescription.styled';

interface PodcastProps {
  title: string;
  artist: string;
  image: string;
  description: string | undefined;
}

const PodcastDescription: React.FC<PodcastProps> = ({
  title, artist, image, description,
}) => (
  <StyledPodcastDescription>
    <StyledImage><img src={image} style={{ borderRadius: '5%', display: 'block', margin: 'auto' }} alt={image} /></StyledImage>
    <StyledText>{title}</StyledText>
    <StyledAuthor>
      by
      {' '}
      {artist}
    </StyledAuthor>
    <StyledText>Description: </StyledText>
    <StyledDescription>
      {description}
    </StyledDescription>
  </StyledPodcastDescription>
);

export default PodcastDescription;
