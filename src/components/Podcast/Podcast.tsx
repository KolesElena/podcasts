import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPodcast, StyledImage, StyledText } from './Podcast.styled';

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
    <StyledPodcast data-testId="podcast" onClick={() => navigate(`/podcast/${podcastId}`)}>
      <StyledImage><img src={image} style={{ borderRadius: '50%', display: 'block', margin: 'auto' }} alt={image} /></StyledImage>
      <StyledText>
        <div style={{ marginBottom: '10px' }}>{title}</div>
        <div style={{ fontWeight: '500', color: '#808080' }}>
          Author:
          {' '}
          {artist}
        </div>
      </StyledText>
    </StyledPodcast>
  );
};

export default Podcast;
