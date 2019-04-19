import React, {Component} from 'react';

class ScreenResolution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () =>
    this.setState({
      resolution: {width: window.innerWidth, height: window.innerHeight},
    });

  render() {
    const {resolution} = this.state;
    return (
      <div>
        {resolution.width} x {resolution.height}
      </div>
    );
  }
}

export default ScreenResolution;
