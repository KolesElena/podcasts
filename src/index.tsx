import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import PodcastsList from './pages/PodcastsList/PodcastsList';
import PodcastsDetails from './pages/PodcastDetails/PodcastDetails';
import EpisodeDetails from './pages/EpisodeDetails/EpisodeDetails';
import { ContextProvider } from './context/Context';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<PodcastsList />} />
          <Route path="/podcasts/:podcastId" element={<PodcastsDetails />} />
          <Route path="/podcasts/:podcastId/episodes/:episodeId" element={<EpisodeDetails />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);

reportWebVitals();
