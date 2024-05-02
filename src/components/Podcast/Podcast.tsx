import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledPodcast, StyledImageBox, StyledImage, StyledText, StyledAuthor, StyledTitle,
} from './Podcast.styled';

interface PodcastProps {
  title: string;
  artist: string;
  image: string;
  podcastId: string;
}

const Podcast: React.FC<PodcastProps> = ({
  title, artist, image, podcastId,
}) => {
  const navigate = useNavigate();

  return (
    <StyledPodcast data-testid="podcast" onClick={() => navigate(`/podcast/${podcastId}`)}>
      <StyledImageBox><StyledImage src={image} alt={image} /></StyledImageBox>
      <StyledText>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>
          Author:
          {' '}
          {artist}
        </StyledAuthor>
      </StyledText>
    </StyledPodcast>
  );
};

export default Podcast;
