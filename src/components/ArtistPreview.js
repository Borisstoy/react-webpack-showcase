import React from 'react';
import { Link } from 'react-router';

export default class ArtistPreview extends React.Component {
  render() {
    return (
      <Link to={`/artist/${this.props.id}`}>
        <div className="menuTop">
          <Link to="/">Home</Link>
        </div>
        <div className="artist-preview">
          <img src={`img/${this.props.image}`}/>
          <h4 className="name">{this.props.name}</h4>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}
