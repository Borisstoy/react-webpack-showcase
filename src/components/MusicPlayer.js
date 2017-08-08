import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class MusicPLayer extends React.Component {
  render () {
    return (
      <ReactPlayer url={this.props.link} controls/>
    );
  }
}
