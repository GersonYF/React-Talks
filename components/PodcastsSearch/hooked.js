import React, {useState, useEffect, useRef} from 'react';
import ErrorText from '../ErrorText';
import Podcasts from '../Podcasts';
import EmptyPodcasts from '../EmptyPodcasts';
import Loading from '../Loading';
import getPodcasts from '../../utils/getPodcats';

const PodcastsSearch = () => {
  const query = '';
  const loading = false;
  const podcasts = [];
  const error = null;

  const handleOnChange = () => {};

  return (
    <div className="container">
      <input value={query} onChange={handleOnChange} />
      {error && <ErrorText error={error} />}
      {loading && <Loading />}
      {!loading && !error && podcasts.length > 0 && (
        <Podcasts podcasts={podcasts} />
      )}
      {!loading && !error && podcasts.length === 0 && <EmptyPodcasts />}
    </div>
  );
};

export default PodcastsSearch;
