import React, { createContext, useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { getPodcasts } from '../api';
import { PodcastListData } from '../types';

interface ContextData {
  data: PodcastListData[] | null,
  isFetching: boolean
}

export const Context = createContext<ContextData>({ data: null, isFetching: false });

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isFetching, data = null }: UseQueryResult<PodcastListData[] | null> = useQuery(
    'getPodcasts',
    getPodcasts,
  );

  const value = useMemo(() => ({
    data,
    isFetching,
  }), [data]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
