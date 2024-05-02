import React from 'react';
import {
  StyledImageBox, StyledImage,
} from './PodcastDescription.styled';
import {
  StyledBox, StyledText, StyledAuthor, StyledDescription, Delimiter,
} from '../../main.styled';

interface PodcastProps {
  title: string | undefined;
  artist: string | undefined;
  image: string | undefined;
  description: string | undefined;
}

const PodcastDescription: React.FC<PodcastProps> = ({
  title, artist, image, description,
}) => (
  <StyledBox width="300px">
    <StyledImageBox><StyledImage src={image} alt={image} /></StyledImageBox>
    <Delimiter />
    <StyledText>{title}</StyledText>
    <StyledAuthor>
      by
      {' '}
      {artist}
    </StyledAuthor>
    <Delimiter />
    <StyledText>Description: </StyledText>
    <StyledDescription>
      {description}
    </StyledDescription>
  </StyledBox>
);

export default PodcastDescription;
