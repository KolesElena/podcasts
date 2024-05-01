import axios from 'axios';
import dayjs from 'dayjs';
import { PodcastListData, Episodes } from '../types';

type PodcastListResponse = {
  feed: {
    entry: PodcastListData[];
  }
};

const getPersistedData = (dateItemName: string, dataItemName: string) => {
  const savedDate = localStorage.getItem(dateItemName);
  const savedData = localStorage.getItem(dataItemName);
  if (!savedDate || !savedData) {
    return null;
  }

  const date1 = dayjs(savedDate);
  const date2 = dayjs();

  const isTimeExpired = date2.diff(date1, 'hours') > 24;
  if (isTimeExpired) {
    localStorage.removeItem(dateItemName);
    localStorage.removeItem(dataItemName);
    return null;
  }
  return JSON.parse(savedData);
};

const enableOrigin = (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

const persistData = (dateItemName: string, dataItemName: string, data: object) => {
  localStorage.setItem(dataItemName, JSON.stringify(data));
  localStorage.setItem(dateItemName, new Date().toISOString());
};

export const getPodcasts = async () => {
  try {
    const persistedData = getPersistedData('date', 'podcasts');

    if (persistedData) {
      return persistedData?.feed?.entry ?? [];
    }
    const response = await axios.get<PodcastListResponse>(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );
    persistData('date', 'podcasts', response?.data);

    return response?.data?.feed?.entry ?? [];
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getPodcastDetails = async (id: string | undefined) => {
  try {
    const persistedData = getPersistedData(`podcast-date-${id}`, `podcast-${id}`);
    if (persistedData) {
      return JSON.parse(persistedData.contents);
    }
    const response = await axios.get<{ contents: string }>(
      enableOrigin(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`),
    );

    persistData(`podcast-date-${id}`, `podcast-${id}`, response.data);
    return JSON.parse(response.data.contents) as Episodes;
  } catch (error) {
    console.log(error);
  }
  return null;
};
