import React from 'react';
import ArtistPreview from './ArtistPreview';
import artists from '../data/artists';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="artists-menu">
          {artists.map(artistData => <ArtistPreview key={artistData.id} {...artistData} />)}
        </div>
        <div className="intro">
          <p className="logo">Tinao</p>
        </div>
      </div>
    );
  }
}
