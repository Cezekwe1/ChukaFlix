import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {email: "", username: "", password: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.guestSignIn = this.guestSignIn.bind(this);
      this.update = this.update.bind(this);
      this.redirect = this.redirect.bind(this);
      this.redirectToMain = this.redirectToMain.bind(this);
  }


  componentDidUpdate(){
    this.redirect();
  }

  redirectToMain(){
    this.props.router.push("/")
  }

  redirect() {
		if (this.props.loggedIn) {
			this.props.router.push('/profiles');
		}
	}

  handleSubmit(e){
    e.preventDefault();
    const user =  this.state;
    this.props.processForm({user});
  }

  guestSignIn() {
    this.props.processForm({user:{ email: 'guest@guest.com', password: 'guestpass'}}).
    then(() => this.redirect());
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  selectForm() {
    let formType, bottomLink, usernameInput, guestSignIn ;
    if (this.props.formType === 'signin') {
      formType = 'Sign In';
      usernameInput = '';
      bottomLink =
        <p>
          New to ChukaFlix?
          <Link to='/signup' className='new-session-signup'> Sign up now.</Link>
        </p>;
      guestSignIn =
        <button className='new-session-guestSignIn'
          onClick={this.guestSignIn}>Sign in as guest</button>;
    } else {
      formType = 'Sign Up';
      usernameInput =
        <label htmlFor='form-username' className='form-label'>Username<input
          id='form-username'
          className='username'
          type='text'
          value={this.state.username}
          onChange={this.update("username")} />
        </label>;
      bottomLink =
        <p>
          Already have an account?
          <Link to='/signin' className='new-session-signin'> Sign In</Link>
        </p>;
    }
    return ({ formType, bottomLink, usernameInput, guestSignIn });
  }

  render() {
    const { formType, bottomLink, usernameInput, guestSignIn } = this.selectForm();
    return (
      <div className={'session-background'}>
        <header>
          <h1 className='main-logo' onClick={this.redirectToMain}/>
        </header>
        <div className='session-form group'>
          <h1 className='session-header'>{formType}</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='form-email' className='form-label'>Email
              <input
                id='form-email'
                className='email'
                type='text'
                value={this.state.email}
                onChange={this.update("email")} />
            </label>
            {usernameInput}
            <label htmlFor='form-password' className='form-label'>Password
              <input
                id='form-password'
                className='password'
                type='password'
                value={this.state.password}
                onChange={this.update("password")} />
            </label>
            <button className='session-button'>{formType}</button>
          </form>
          {bottomLink}
          {guestSignIn}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
