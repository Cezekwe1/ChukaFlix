import React from 'react';
import { Link, withRouter } from 'react-router';
import Serie from './serie_container';
import Slider from 'react-slick';

class Genre extends React.Component {

  render () {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true
      };

    let seriesContent;

    if( this.props.genre.series.length === 0 ){
      seriesContent = <div></div>;
    } else if (this.props.genre.series.length < 6) {
      seriesContent = <div>{ this.props.genre.series.map((serie, i) => (
        <div key={serie.id}>
          <Serie
            className="serie-index-item-under-six group"
            serie={ serie }
            addSerieToMyList={this.props.addSerieToMyList }
            genre={ this.props.genre }
            removeSerieFromMyList={ this.props.removeSerieFromMyList }
            favorites={ this.props.favorites }
            profile={this.props.profile}
          />
        </div>
      )) }
    </div>;
    } else {
      seriesContent = <Slider {...settings}>
        { this.props.genre.series.map((serie, i) => (
          <div key={serie.id}>
            <Serie
              className="serie-index-items group"
              serie={ serie }
              addSerieToMyList={ this.props.addSerieToMyList }
              removeSerieFromMyList={ this.props.removeSerieFromMyList }
              favorites={ this.props.favorites }
              profile={this.props.profile}
            />
          </div>
        )) }
      </Slider>;
    }

    return (
      <div className='videoCarousel'>
        <div className="carouselContainer">
          {seriesContent}
        </div>
      </div>
    );

  }
}
export default Genre;
