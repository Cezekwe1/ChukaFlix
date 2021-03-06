import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Detail extends React.Component {
  render() {
    return (
      <div className="member-reviews">
        <StarRatingComponent
          name='member-rating'
          className='member-rating'
          starCount={5}
          editing={false}
          value={this.props.review.rating}
          starColor='Red'/>
        <p className="review-body">{this.props.review.body}</p>
      </div>
    );
  }
}

export default Detail;
