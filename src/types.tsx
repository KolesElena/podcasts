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

type EpisodeList = {
  trackName: string;
  trackId: number;
  releaseDate: string;
  trackTimeMillis: number;
};

export interface EpisodeData {
  episodes: {
    results: EpisodeList[] | undefined,
    resultCount: number,
  } | undefined,
  podcastId: string | undefined;
}
