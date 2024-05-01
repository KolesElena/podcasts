export interface PodcastListData {
  id: {
    attributes: {
      'im:id': string;
    };
  };
  title: {
    label: string;
  };
  'im:artist': {
    label: string;
  };
  'im:image': {
    label: string;
  }[];
  summary: {
    label: string;
  }
}

type Episode = {
  trackName: string;
  trackId: number;
  releaseDate: string;
  trackTimeMillis: number;
  description: string;
  episodeUrl: string;
  artistName: string;
  artworkUrl100: string;
};

export type Episodes = {
  results: Episode[] | undefined,
  resultCount: number,
};

export interface EpisodeData {
  episodes: Episodes | undefined,
  podcastId: string | undefined;
}
