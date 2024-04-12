import axios from 'axios';

const enableOrigin = (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

export const getPodcasts = async () => {
  const response = await axios.get<any>(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  );

  return response?.data?.feed?.entry ?? [];
};

export const getPodcastDetails = async (id: number) => {
  const response = await axios.get<any>(
    enableOrigin(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`),
  );

  return JSON.parse(response.data.contents);
};
