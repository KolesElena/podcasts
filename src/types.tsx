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
