import React from 'react';
import { Link, withRouter } from 'react-router';
import Genre from './genre';

const PAGE = 3;

class Genres extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
     this.props.fetchGenres();
   }



  render() {
    const favorites = (
      [<ul key={0} className="genre-carousel-row group">
        <li className="genre-title">My List</li>
        <li className="serie-index-item group">
          <Genre
            genre={ this.props.favorites }
            addSerieToMyList={ this.props.createMyListItem }
            removeSerieFromMyList={ this.props.removeMyListItem }
            favorites={ this.props.favorites }
            profile={this.props.profile}>
          </Genre>
        </li>
      </ul>]);
    const genreIndexItems = this.props.genres.map((genre, id) => {
      return (
        <ul key={genre.id} className="genre-carousel-row group">
          <li className="genre-title">{genre.title}</li>
          <li className="serie-index-item group">
            <Genre
              genre={genre}
              addSerieToMyList={this.props.createMyListItem}
              removeSerieFromMyList={ this.props.removeMyListItem }
              favorites={ this.props.favorites}
              profile={this.props.profile}
            />
          </li>
        </ul>
      );
    });
    return (
      <div className='genre-index group'>
        { favorites.concat(genreIndexItems) }
      </div>
    );
  }
}

export default withRouter(Genres);
