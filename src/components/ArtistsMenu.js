import React from 'react';
import artists from '../data/artists';
import { Link } from 'react-router';

export default class ArtistsMenu extends React.Component {
  render() {
    return (
      <nav className="artists-menu">
        <div className="menuTop">
          <Link to="/">Home</Link>
        </div>
        {this.props.artists.map(artist => {
          return (
            <Link key={artist.id} to={`/artist/${artist.id}`} activeClassName="active">
              <div className="artist-preview">
                <img src={`/img/${artist.image}`}/>
                <h4 className="name">{artist.name}</h4>
              </div>
            </Link>
          )
        })}
      </nav>
    );
  }
}
