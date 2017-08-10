'use strict';

import React from 'react';
import ArtistPreview from './ArtistPreview';
import artists from '../data/artists';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {
  render() {
    const bg ={
      backgroundImage: "url('/img/tinao-bg.jpg')"
    }
    return (
      <div className="home" style={bg} >
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
