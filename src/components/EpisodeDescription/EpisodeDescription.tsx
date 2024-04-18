import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { StyledBox, StyledText, StyledDescription } from '../../main.styled';

interface PodcastProps {
  title: string;
  description: string | undefined;
  url: string;
}

const EpisodeDescription: React.FC<PodcastProps> = ({
  title, description, url,
}) => (
  <StyledBox width="500px">
    <StyledText>{title}</StyledText>
    <StyledDescription>
      {description}
    </StyledDescription>
    <ReactAudioPlayer
      style={{ width: '100%' }}
      src={url}
      controls
    />
  </StyledBox>
);

export default EpisodeDescription;
