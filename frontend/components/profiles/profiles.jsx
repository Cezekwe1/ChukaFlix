import React from 'react'
import { Link, withRouter } from 'react-router';

class Profiles extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderNewProfile = this.renderNewProfile.bind(this);
    this.handleNewProfile = this.handleNewProfile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(profile){
    return e  => {
    this.props.pickProfile(profile).then(() =>
    this.props.router.push("/browse"))
    }
  }

  handleDelete(profile){
    return e  => {
    this.props.deleteProfile(profile.id);
    }
  }

  handleNewProfile(){
    this.props.router.push("/new_profile")
  }

  renderNewProfile(){
    if(this.props.profiles.length < 5){
      return(
        <li onClick={this.handleNewProfile}><img className="profni"></img> <div className="profn">Add Profile</div>
        <span className="space-span">Space</span></li>
       )
      }
  }

  render(){
    return(
      <div>
        <header className ="ph">
          <div className = "top-page-logo"></div>
        </header>
        <h1 className = "ww">Who's Watching?</h1>
        <ul className= "prof">
        {this.props.profiles.map((profile, idx) => <li
        key={idx}><img onClick={this.handleClick(profile)} className="profp"></img>
        <div onClick={this.handleClick(profile)} className="profn">{profile.name}</div>
        <span onClick={this.handleDelete(profile)} className ="profile-delete-button">Delete</span></li>)}
        {this.renderNewProfile()}
      </ul>
     </div>
    )
  };
}
export default withRouter(Profiles)
