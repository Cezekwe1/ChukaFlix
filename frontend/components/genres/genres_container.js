import {connect} from 'react-redux';
import Genres from './genres';
import {fetchGenres } from '../../actions/genre_actions';
import { createMyListItem, removeMyListItem } from '../../actions/favorite_actions';


 const mapStateToProps = ({genres, session}) => ({
  genres,
  favorites: session.active_profile.favorites ? session.active_profile.favorites : {series:[]},
  profile: session.active_profile 

})

const mapDispatchToProps = dispatch =>({
  fetchGenres: () => dispatch(fetchGenres()),
  createMyListItem: (serie, profile) => dispatch(createMyListItem(serie, profile)),
  removeMyListItem: (serie) => dispatch(removeMyListItem(serie))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Genres)
