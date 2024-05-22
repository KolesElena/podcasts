import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PodcastsList from './PodcastsList';
import { Context } from '../../context/Context';

const mockContextData = {
  data: [
    {
      id: { attributes: { 'im:id': '1' } },
      'im:image': [{ label: 'image1' }, { label: 'image2' }, { label: 'image3' }],
      title: { label: 'Podcast 1' },
      'im:artist': { label: 'Artist 1' },
      summary: { label: 'Summary 1' },
    },
    {
      id: { attributes: { 'im:id': '2' } },
      'im:image': [{ label: 'image4' }, { label: 'image5' }, { label: 'image6' }],
      title: { label: 'Podcast 2' },
      'im:artist': { label: 'Artist 2' },
      summary: { label: 'Summary 2' },
    },
  ],
  isFetching: false,
};

const renderPodcastsList = (
  <BrowserRouter>
    <Context.Provider value={mockContextData}>
      <PodcastsList />
    </Context.Provider>
  </BrowserRouter>
);

test('renders podcasts list with correct count', async () => {
  render(
    renderPodcastsList,
  );

  // Wait for the component to finish loading
  await waitFor(() => expect(screen.getByText('Podcast 1')).toBeInTheDocument());

  // Check if all podcasts are rendered
  expect(screen.getAllByTestId('podcast')).toHaveLength(2);

  // Check if the counter shows the correct count
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('filters podcasts based on search input', async () => {
  render(
    renderPodcastsList,
  );

  // Wait for the component to finish loading
  await waitFor(() => expect(screen.getByText('Podcast 1')).toBeInTheDocument());

  // Enter search text
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Podcast 1' } });

  // Check if only filtered podcasts are rendered
  expect(screen.getByText('Podcast 1')).toBeInTheDocument();
  expect(screen.queryByText('Podcast 2')).not.toBeInTheDocument();

  // Check if counter shows correct count
  expect(screen.getByText('1')).toBeInTheDocument();
});
