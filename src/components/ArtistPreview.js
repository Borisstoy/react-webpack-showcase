import React from 'react';
import { Link } from 'react-router';

export default class ArtistPreview extends React.Component {
  render() {
    return (
      <Link to={`/artist/${this.props.id}`}>
        <div className="artist-preview">
          <div className="artist-img">
            <img src={`img/${this.props.image}`}/>
          </div>
          <h4 className="name">{this.props.name}</h4>
        </div>
      </Link>
    );
  }
}
