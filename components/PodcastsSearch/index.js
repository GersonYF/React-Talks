import React, {Component, createRef} from 'react';
import ErrorText from '../ErrorText';
import Podcasts from '../Podcasts';
import EmptyPodcasts from '../EmptyPodcasts';
import Loading from '../Loading';
import getPodcasts from '../../utils/getPodcats';

import './style.css';

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      query: '',
      podcasts: [],
      error: null,
    };

    this.inputRef = createRef();
  }

  componentDidMount() {
    this.getPodcasts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getPodcasts(this.state.query);
    }
  }

  getPodcasts = async (name = '') => {
    try {
      this.setState({loading: true});
      const podcasts = await getPodcasts(name);
      this.setState({podcasts, loading: false, error: null});
    } catch (error) {
      this.setState({error});
    }
  };

  updateQuery = () => this.setState({query: this.inputRef.current.value});

  render() {
    const {loading, query, podcasts, error} = this.state;
    return (
      <div className="container">
        <input value={query} onChange={this.updateQuery} ref={this.inputRef} />
        {error && <ErrorText error={error} />}
        {loading && <Loading />}
        {!loading && !error && podcasts.length > 0 && (
          <Podcasts podcasts={podcasts} />
        )}
        {!loading && !error && podcasts.length === 0 && <EmptyPodcasts />}
      </div>
    );
  }
}

export default PodcastSearch;
