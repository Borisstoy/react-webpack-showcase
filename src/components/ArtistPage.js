import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistsMenu from './ArtistsMenu';
import Medal from './Medal';
import Flag from './Flag';
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
            <h2 className="name">{artist.name}</h2>
          </div>
          <section className="description">
            Olympic medalist from <strong><Flag code={artist.country} showName="true"/></strong>,
            born in {artist.birth} (Find out more on <a href={artist.link} target="_blank"></a>).
          </section>
          <section className="medals">
            <p>Winner of <strong>{artist.medals.length}</strong> medals:</p>
            <p>{artist.description}</p>
            <p>{artist.url}</p>
          </section>
          <div>
          {
            artist.urls.map((url, i) => <MusicPLayer key={i} {...url}/>)
          }
          </div>
        </div>
      </div>
    );
  }
}
