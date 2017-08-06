import React from 'react';
import { Link } from 'react-router';

export default class ArtistsMenu extends React.Component {
  render() {
    return (
      <nav className="artists-menu">
        <div className="navigateBack">
          <Link to="/">Home</Link>
        </div>
        {this.props.artists.map(menuArtist => {
          return <Link key={menuArtist.id} to={`/artist/${menuArtist.id}`} activeClassName="active">
            {menuArtist.name}
            <img src={`img/${menuArtist.image}`}/>
          </Link>;
        })}
      </nav>
    );
  }
}
