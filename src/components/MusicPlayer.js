import React from 'react';

export default class MusicPLayer extends React.Component {
  render () {
    return (
      <ReactPlayer url={this.props.link} controls/>
    );
  }
}


