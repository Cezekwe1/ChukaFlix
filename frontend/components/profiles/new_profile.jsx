import React from 'react';
import { Link, withRouter } from 'react-router';

class NewProfile extends React.Component{

  constructor(props){
    super(props)
    this.state = {name: ""}
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  update() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }

  handleSubmit(){
    this.props.makeProfile(this.state.name)
    this.props.router.push("/profiles")
  }


  handleCancel(){
    this.props.router.push("/profiles")
  }


  render(){

    return(
      <div className = "main-new-profile">
        <header className ="ph">
          <div className = "top-page-logo"></div>
        </header>
        <div className = "add-profile-container">
          <h1 className = "ad">Add Profile</h1>
          <h2 className = "addescription" >Add a profile for another person watching ChukaFlix.</h2>
          <div className = "profile-info">
            <img className = "new-profile-img"></img>
            <div className = "input-box">
             <input className = "profile-input"  placeholder="Name" 
             id= "form-password"
             onChange={this.update()}
             type="text" value={this.state.name}/>
            </div>
          </div>
            <button onClick={this.handleSubmit} className = "create-profile-confirm">Make Profile</button>
            <button onClick={this.handleCancel} className = "cancel-profile">Cancel</button>
        </div>
      </div>
    )

  }

}


export default withRouter(NewProfile);
