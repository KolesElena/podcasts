import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import EpisodesTable from './EpisodesTable';

const episodes = {
  results: [{
    trackName: 'trackName1',
    trackId: 123,
    releaseDate: '2024-05-14T08:00:00Z',
    trackTimeMillis: 4957000,
    description: 'description1',
    episodeUrl: 'url1',
    artistName: 'artist1',
    artworkUrl100: 'testUrl1',
  },
  {
    trackName: 'trackName2',
    trackId: 124,
    releaseDate: '2024-07-14T08:00:00Z',
    trackTimeMillis: 4957000,
    description: 'description2',
    episodeUrl: 'url2',
    artistName: 'artist2',
    artworkUrl100: 'testUrl2',
  },
  ],
  resultCount: 2,
};

const renderEpisodesTable = () => render(
  <BrowserRouter>
    <EpisodesTable episodes={episodes} podcastId="123" />
  </BrowserRouter>,
);

test('renders Episodes table', () => {
  renderEpisodesTable();

  expect(screen.getByText('trackName2')).toBeInTheDocument();
});

test('formats the release date correctly', () => {
  const convertDate = () => moment('2024-07-14T08:00:00Z').format('DD/MM/YYYY');

  expect(convertDate()).toEqual('14/07/2024');
});
