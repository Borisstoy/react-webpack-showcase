'use strict';

import React from 'react';
import artists from '../data/artists';
import { Link } from 'react-router';

export default class ArtistsMenu extends React.Component {
  render() {
    return (
      <nav className="artists-menu">
        {this.props.artists.map(artist => {
          return (
            <Link key={artist.id} to={`/artist/${artist.id}`} activeClassName="active">
              <div className="artist-preview" activeClassName="active">
                <div className="artist-img">
                  <img src={`/img/${artist.image}`}/>
                </div>
                <h4 className="name">{artist.name}</h4>
              </div>
            </Link>
          )
        })}
      </nav>
    );
  }
}
