'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistsMenu from './ArtistsMenu';
import artists from '../data/artists';

export default class ArtistPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const artist = artists.filter((artist) => artist.id === id)[0];
    if (!artist) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${artist.cover})` };
    return (
      <div className="artist-full">
        <div className="menuTop">
          <Link to="/">Home</Link>
        </div>
        <div className="artists-selector">
          <div className="home">
            <ArtistsMenu artists={artists} />
          </div>
        </div>
        <div className="artist">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${artist.image}`}/>
          </div>
          <section className="description">
            <h2 className="name">{artist.name}</h2>
            <p>{artist.description}</p>
          </section>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
