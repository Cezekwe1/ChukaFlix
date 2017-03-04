  import React from 'react';
  
  class Genres extends React.Component {

    constructor(props){
      super(props)
    }

      componentDidMount(){
        this.props.getGenres();
      }

      render(){

        return(
          <ul>
            <li>{this.props.genres.title}</li>
          </ul>
        )

      }


  };

  export default Genres
