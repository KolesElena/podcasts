import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { StyledAudio } from './EpisodeDescription.styled';
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
    <StyledAudio>
      <ReactAudioPlayer
        src={url}
        controls
      />
    </StyledAudio>
  </StyledBox>
);

export default EpisodeDescription;
