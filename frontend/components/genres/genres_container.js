import {connect} from 'react-redux';
import Genres from './genres'
import {fetchGenres} from '../../actions/genre_actions'


 const mapStateToProps = state => ({
  genres: state.genres
})

const mapDispatchToProps = dispatch =>({
  getGenres: () => dispatch(fetchGenres())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Genres)
